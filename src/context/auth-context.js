import React, { createContext, useState, useEffect } from "react"
import { navigate } from "gatsby"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
    }
  }
`

const VERIFY_LOGIN = gql`
  mutation($token: String!) {
    verifyToken(token: $token) {
      payload
    }
  }
`

const REFRESH_LOGIN = gql`
  mutation($token: String!) {
    refreshToken(token: $token) {
      payload
      token
      refreshExpiresIn
    }
  }
`

const defaultContext = {
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
}
export const AuthContext = createContext(defaultContext)

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined)
  const [timeoutId, setTimeoutId] = useState()
  const [tokenAuth] = useMutation(LOGIN_USER)
  const [verifyToken] = useMutation(VERIFY_LOGIN)
  const [refreshToken] = useMutation(REFRESH_LOGIN)

  useEffect(() => {
    // define functions for use in initial page load
    const verify = token => {
      return verifyToken({
        variables: { token },
      })
    }
    const refresh = async token => {
      const { data } = await refreshToken({
        variables: { token },
      })
      // save the new token to localStorage
      const newToken = data?.refreshToken?.token
      localStorage.setItem(`tok`, newToken)
      // keep track of the next time (5 min) when token should be refreshed
      clearTimeout(timeoutId)
      // don't bother setTimeout if the user is not authenticated
      if (newToken) {
        const id = setTimeout(refresh, 1000 * 5 * 60, newToken)
        setTimeoutId(id)
      }
      return newToken
    }

    // on page load, check local storage for a token and verify if the user is logged in with JS loading
    const token = localStorage.getItem(`tok`)
    const getTokenExp = async token => {
      try {
        // trigger refresh loop
        const newToken = await refresh(token)
        // pull payload from verification step
        const { data } = await verify(newToken)
        const expiration = getExpiration(data?.verifyToken?.payload)
        // check that the token hasn't expired its 5 min window
        if (expiration > Date.now()) {
          setIsAuthenticated(true)
        } else {
          setIsAuthenticated(false)
        }
      } catch (error) {
        setIsAuthenticated(false)
      }
    }
    getTokenExp(token)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getExpiration = payload => payload?.exp * 1000

  const login = async (email, password) => {
    try {
      const { data } = await tokenAuth({
        variables: {
          email,
          password,
        },
      })
      // make sure the token was actually in the response
      if (data?.tokenAuth?.token) {
        localStorage.setItem(`tok`, data?.tokenAuth?.token)
        setIsAuthenticated(true)
        navigate(`/shop`)
        return true
      } else {
        return false
      }
    } catch (error) {
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem(`tok`)
    setIsAuthenticated(false)
    navigate(`/signin`)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
