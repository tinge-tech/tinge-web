/** @jsx jsx */
import { jsx } from "@emotion/core"

const SvgBase = ({ color, children, size = 32, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    {...props}
  >
    {children}
  </svg>
)

export default SvgBase
