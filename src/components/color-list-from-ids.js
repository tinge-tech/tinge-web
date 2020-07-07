/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import { ColorList } from "./colors"

const ColorListFromIds = ({ colorIds = [], ...props }) => {
  const colorsData = useStaticQuery(graphql`
    query ColorFromIdsQuery {
      allColor {
        nodes {
          id
          hex
          name
          imageUrl
          colorId
        }
      }
    }
  `)

  if (!colorsData) return

  const matchingColors = colorsData.allColor.nodes.filter(color =>
    colorIds.includes(color.colorId)
  )

  return (
    <ColorList
      colors={matchingColors}
      spacing="2"
      diameter={24}
      css={{ "& div": { maxWidth: 24, maxHeight: 24 } }}
      {...props}
    />
  )
}

export default ColorListFromIds
