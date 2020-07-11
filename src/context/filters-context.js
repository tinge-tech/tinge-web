import React, { createContext, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import useDrawer from "../hooks/useDrawer"

export const FiltersContext = createContext()

export const FiltersContextProvider = ({ children }) => {
  const colorsData = useStaticQuery(graphql`
    query ColorFiltersContextQuery {
      allColorGroup {
        nodes {
          id
          name
          displayColor
          groupId
          colors {
            id
            name
            imageUrl
            hex
          }
        }
      }
    }
  `)
  const { isOpen, onOpen, onClose, onToggle } = useDrawer()
  const [filters, setFilterState] = useState({
    bodyType: null,
    categories: [],
    colors: [],
    verified: false,
    activeColorGroup: colorsData.allColorGroup.nodes[4],
  })

  const setFilter = (filterType, value) => {
    setFilterState({ ...filters, [filterType]: value })
  }

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilter,
        isOpen,
        onOpen,
        onClose,
        onToggle,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
