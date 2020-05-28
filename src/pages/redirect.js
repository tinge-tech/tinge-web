/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useEffect } from "react"
import { Link } from "gatsby"
import qs from "query-string"

import Container from "../components/container"

const Redirect = ({ location }) => {
  const params = qs.parse(location.search)
  useEffect(() => {
    if (params.to) {
      window.location.replace(params.to)
    }
  })

  return (
    <Container>
      You will automatically be redirected, or{" "}
      <Link css={{ textDecoration: `underline` }} to="/">
        return home
      </Link>{" "}
      if something didn't work.
    </Container>
  )
}

export default Redirect
