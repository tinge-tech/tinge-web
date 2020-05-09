/** @jsx jsx */
import { jsx } from "@emotion/core"

import SvgBase from "./svg-base"

export const Dress = ({ color, ...props }) => {
  return (
    <SvgBase {...props} color={color} size={24}>
      <defs />
      <path
        stroke={color || "currentColor"}
        className="cls-1"
        d="M20.066,20.447l-2.8-8.395a7.5,7.5,0,0,1-.041-4.617l1.353-4.311a.751.751,0,0,0-.261-.838L16.654,1.039a.75.75,0,0,0-1.178.418L15,3.75H9.75l-1.1-2.585A.75.75,0,0,0,7.531.9L5.682,2.286a.751.751,0,0,0-.261.838L6.774,7.435a7.507,7.507,0,0,1-.041,4.617l-2.8,8.4a.741.741,0,0,0,.325.88A15.417,15.417,0,0,0,12,23.25a15.417,15.417,0,0,0,7.741-1.923A.741.741,0,0,0,20.066,20.447Z"
      />
      <path
        stroke={color || "currentColor"}
        className="cls-1"
        d="M6.971,11.172A16.593,16.593,0,0,0,12,12a16.593,16.593,0,0,0,5.029-.828"
      />
      <path
        stroke={color || "currentColor"}
        className="cls-1"
        d="M9.75 17.25L8.736 22.938"
      />
      <path
        stroke={color || "currentColor"}
        className="cls-1"
        d="M14.25 17.25L15.264 22.938"
      />
    </SvgBase>
  )
}

export const Skirt = ({ color, ...props }) => {
  return (
    <SvgBase {...props} color={color} size={24}>
      <defs />
      <path
        stroke={color || "currentColor"}
        className="cls-1"
        d="M6.25 3h11.5a1 1 0 011 1V6a0 0 0 010 0H5.25a0 0 0 010 0V4A1 1 0 016.25 3zM18.75 6H5.25A20.059 20.059 0 011.383 18.038a.751.751 0 00.289 1.16A26.489 26.489 0 0012 21a26.478 26.478 0 0010.327-1.8.75.75 0 00.29-1.16A20.052 20.052 0 0118.75 6z"
      />
      <path
        stroke={color || "currentColor"}
        className="cls-1"
        d="M8.999 15L8.277 20.803"
      />
      <path
        stroke={color || "currentColor"}
        className="cls-1"
        d="M14.999 15L15.721 20.803"
      />
    </SvgBase>
  )
}

export const Jeans = ({ color, ...props }) => {
  return (
    <SvgBase {...props} color={color} size={24}>
      <defs />
      <path
        stroke={color || "currentColor"}
        className="cls-1"
        d="M4.25.75h15.5a.5.5 0 01.5.5v2.5a0 0 0 010 0H3.75a0 0 0 010 0V1.25A.5.5 0 014.25.75zM20.25 3.75H3.75L2.312 22.442a.75.75 0 00.748.808H8.333a.751.751 0 00.745-.662l1.247-10.6a1.686 1.686 0 013.35 0l1.247 10.6a.751.751 0 00.745.662H20.94a.75.75 0 00.748-.808z"
      />
      <path
        stroke={color || "currentColor"}
        className="cls-1"
        d="M3.348 8.97a2.68 2.68 0 00.4.03C5.821 9 7.5 6.649 7.5 3.75H3.75zM20.652 8.97a2.68 2.68 0 01-.4.03C18.179 9 16.5 6.649 16.5 3.75h3.75zM11.25 3.75v3A.75.75 0 0012 7.5h.75"
      />
    </SvgBase>
  )
}

export const Shorts = ({ color, ...props }) => {
  return (
    <SvgBase {...props} color={color} size={24}>
      <defs />
      <path
        stroke={color || "currentColor"}
        className="cls-1"
        d="M2.5 3.75h19a1 1 0 011 1v2a0 0 0 010 0H1.5a0 0 0 010 0v-2A1 1 0 012.5 3.75zM22.5 11.25A4.5 4.5 0 0118 6.75M1.5 11.25A4.5 4.5 0 006 6.75"
      />
      <path
        stroke={color || "currentColor"}
        className="cls-1"
        d="M10.314,14.238a1.7,1.7,0,0,1,3.372,0l.736,4.742A1.5,1.5,0,0,0,15.9,20.25H21a1.5,1.5,0,0,0,1.5-1.5v-12H1.5v12A1.5,1.5,0,0,0,3,20.25H8.1a1.5,1.5,0,0,0,1.483-1.27Z"
      />
    </SvgBase>
  )
}
