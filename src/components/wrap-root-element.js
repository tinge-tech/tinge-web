import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { client } from "./client"

import { FiltersContextProvider } from "../context/filters-context"
import { AuthContextProvider } from "../context/auth-context"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <AuthContextProvider>
      <FiltersContextProvider>{element}</FiltersContextProvider>
    </AuthContextProvider>
  </ApolloProvider>
)
