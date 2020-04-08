import React from "react"
import { FiltersContextProvider } from "../context/filters-context"
import { AuthContextProvider } from "../context/auth-context"

export const wrapRootElement = ({ element }) => (
  <AuthContextProvider>
    <FiltersContextProvider>{element}</FiltersContextProvider>
  </AuthContextProvider>
)
