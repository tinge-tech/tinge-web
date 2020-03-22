/** @jsx jsx */
import { jsx } from "@emotion/core"
import Layout from "./layout"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
