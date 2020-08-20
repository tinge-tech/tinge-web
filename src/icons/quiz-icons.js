/** @jsx jsx */
import { jsx } from "@emotion/core"

import SvgBase from "./svg-base"

export const Check = ({ color, ...props }) => {
  return (
    <SvgBase {...props} color={color}>
      <path
        d="M30 14.72V16.008C29.9983 19.027 29.0207 21.9646 27.2131 24.3826C25.4054 26.8006 22.8646 28.5695 19.9695 29.4255C17.0744 30.2815 13.9802 30.1787 11.1483 29.1324C8.31635 28.0862 5.89852 26.1525 4.25534 23.6199C2.61217 21.0873 1.83171 18.0913 2.03035 15.0789C2.22899 12.0664 3.39609 9.19887 5.35759 6.90391C7.31909 4.60896 9.9699 3.00955 12.9147 2.34422C15.8594 1.67889 18.9404 1.98329 21.698 3.21201"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.0003 4.80811L16.0003 18.8221L11.8003 14.6221"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgBase>
  )
}

export const X = ({ color, ...props }) => {
  return (
    <SvgBase {...props}>
      <path
        d="M30.4 16C30.4 23.9529 23.9529 30.4 16 30.4C8.0471 30.4 1.6 23.9529 1.6 16C1.6 8.0471 8.0471 1.6 16 1.6C23.9529 1.6 30.4 8.0471 30.4 16Z"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8002 11.2L11.2002 20.8"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2002 11.2L20.8002 20.8"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgBase>
  )
}
