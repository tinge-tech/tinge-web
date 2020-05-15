import React, { createContext, useState } from "react"
import useDrawer from "../hooks/useDrawer"

export const FiltersContext = createContext()

export const FiltersContextProvider = ({ children }) => {
  const { isOpen, onOpen, onClose, onToggle } = useDrawer()
  const [filters, setFilterState] = useState({
    bodyType: null,
    categories: [],
    colors: [],
    verified: true,
  })

  const setFilter = (filterType, value) => {
    setFilterState({ ...filters, [filterType]: value })
  }
  console.log(filters)

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
