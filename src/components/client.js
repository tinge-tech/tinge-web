/* eslint-disable import/no-extraneous-dependencies */
import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  request: operation => {
    let token
    if (typeof window !== `undefined`) {
      token = localStorage.getItem(`tok`)
    }
    operation.setContext({
      uri: process.env.GATSBY_APOLLO_URL,
      headers: {
        "content-type": "application/json",
        Authorization: token ? `jWT ${token}` : undefined,
      },
      fetch,
    })
  },
})
