import React from "react"
import { FiltersContextProvider } from "../context/filters-context"

export const wrapRootElement = ({ element }) => (
  <FiltersContextProvider>{element}</FiltersContextProvider>
)
