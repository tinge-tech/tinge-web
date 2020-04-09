import React, { createContext, useState, useEffect } from "react"
import { navigate } from "gatsby"
import { useMutation, useLazyQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      token
    }
  }
`

const USER_INFO = gql`
  query UserInfo {
    me {
      id
      email
      username
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

const defaultContext = {
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
}
export const AuthContext = createContext(defaultContext)

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined)
  const [user, setUser] = useState()
  const [tokenAuth] = useMutation(LOGIN_USER)
  const [verifyToken] = useMutation(VERIFY_LOGIN)
  const [getUser] = useLazyQuery(USER_INFO)

  useEffect(() => {
    // check local storage for a token and verify if the user is logged in with JS loading
    const token = localStorage.getItem(`tok`)
    const getTokenExp = async token => {
      try {
        const { data } = await verifyToken({
          variables: { token },
        })
        const exp = data?.verifyToken?.payload?.exp * 1000
        console.log(exp)
        if (exp * 1000 < Date.now()) {
          setIsAuthenticated(true)
          fetchAndSetUser()
        } else {
          setIsAuthenticated(false)
        }
      } catch (error) {
        setIsAuthenticated(false)
      }
    }
    getTokenExp(token)
  }, [verifyToken])

  const fetchAndSetUser = async () => {
    const userData = await getUser()
    console.log({ userData })
    setUser(userData)
  }

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

  const logout = async () => {
    console.log(`trying to logout`)
    localStorage.removeItem(`tok`)
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        fetchAndSetUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
