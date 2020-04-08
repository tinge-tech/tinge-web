import React, { createContext, useState } from "react"

const defaultContext = {
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
}
export const AuthContext = createContext(defaultContext)

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState()

  const login = async () => {
    console.log(`trying to login`)
    setUser(null)
    setIsAuthenticated(true)
  }

  const logout = async () => {
    console.log(`trying to login`)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
