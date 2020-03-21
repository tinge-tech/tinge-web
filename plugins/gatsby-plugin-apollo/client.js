/* eslint-disable import/no-extraneous-dependencies */
import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  request: operation => {
    operation.setContext({
      uri: process.env.GATSBY_APOLLO_URL,
      headers: {
        "content-type": "application/json",
      },
      fetch,
    })
  },
})
