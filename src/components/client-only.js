import React, { useState, useEffect } from "react"

const ClientOnly = ({
  children,
  loading,
  isAuthenticated = null,
  placeholder,
  ...props
}) => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  // if the client hasn't rehydrated OR checking if the user hasn't logged in is finished or loading data
  if (!hasMounted || isAuthenticated === undefined || loading) {
    return placeholder || null
  }
  return <div {...props}>{children}</div>
}

export default ClientOnly
