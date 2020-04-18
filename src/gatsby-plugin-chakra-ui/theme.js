import { theme as chakraTheme } from "@chakra-ui/core"
import merge from "deepmerge"

const theme = merge(chakraTheme, {
  colors: {
    blue: {
      "50": "#f7fafd",
      "100": "#d5e2f4",
      "200": "#acc6ea",
      "300": "#78a2dc",
      "400": "#386bc7",
      "500": "#1c65c7",
      "600": "#004EBD",
      "700": "#003b8c",
      "800": "#023273",
      "900": "#001c42",
    },
  },
})

export default theme
