import React, { createContext } from "react"
import useDrawer from "../hooks/useDrawer"

export const FiltersContext = createContext()

export const FiltersContextProvider = ({ children }) => {
  const { isOpen, onOpen, onClose, onToggle } = useDrawer()
  return (
    <FiltersContext.Provider
      value={{
        filters: { a: 1 },
        setFilter: () => console.log("setFilter"),
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
