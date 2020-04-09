import React, { useState, useEffect } from "react"

const ClientOnly = ({ children, isAuthenticated, placeholder, ...props }) => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  // if the client hasn't rehydrated OR checking if the user hasn't logged in is finished
  if (!hasMounted || isAuthenticated === undefined) {
    return placeholder || null
  }
  return <div {...props}>{children}</div>
}

export default ClientOnly
