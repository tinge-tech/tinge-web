/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import { ColorList } from "./colors"

const ColorListFromIds = ({ colorIds = [], ...props }) => {
  const colorsData = useStaticQuery(graphql`
    query ColorFromIdsQuery {
      tinge {
        allColors {
          id
          hex
          name
          imageUrl
        }
      }
    }
  `)

  if (!colorsData) return

  const matchingColors = colorsData.tinge.allColors.filter(color =>
    colorIds.includes(color.id)
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