import React, { createContext, useState } from "react"
import useDrawer from "../hooks/useDrawer"

export const FiltersContext = createContext()

export const FiltersContextProvider = ({ children }) => {
  const { isOpen, onOpen, onClose, onToggle } = useDrawer()
  const [filters, setFilterState] = useState({
    bodyType: null,
    categories: ["1", "2"],
    colors: [],
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
