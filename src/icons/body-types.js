/** @jsx jsx */
import { jsx } from "@emotion/core"

const SvgBase = ({ color, children, ...props }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    {...props}
  >
    {children}
  </svg>
)

export const Apple = ({ color, ...props }) => {
  return (
    <SvgBase {...props} color={color}>
      <rect width="32" height="32" />
      <circle cx="16" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="22" r="7" stroke="currentColor" strokeWidth="2" />
    </SvgBase>
  )
}

export const Inverted = ({ color, ...props }) => {
  return (
    <SvgBase {...props}>
      <rect width="32" height="32" />
      <circle cx="16" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M17.8749 28.4242L14.1251 28.4242L8.54726 19.0203C7.7565 17.6871 8.71736 16 10.2674 16L21.7326 16C23.2826 16 24.2435 17.6871 23.4527 19.0203L17.8749 28.4242Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </SvgBase>
  )
}

export const Pencil = ({ color, ...props }) => {
  return (
    <SvgBase {...props}>
      <rect width="32" height="32" />
      <circle cx="16" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <rect
        x="12.5"
        y="15"
        width="7.5"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </SvgBase>
  )
}

export const Rectangle = ({ color, ...props }) => {
  return (
    <SvgBase {...props}>
      <rect width="32" height="32" />
      <circle cx="16" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <rect
        x="11"
        y="15"
        width="10"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </SvgBase>
  )
}

export const Pear = ({ color, ...props }) => {
  return (
    <SvgBase {...props}>
      <rect width="32" height="32" />
      <circle cx="16" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12.6247 18.2809L12.7459 18.1839L12.8321 18.0547C13.004 17.7968 13.1807 17.5081 13.346 17.238C13.429 17.1024 13.5092 16.9715 13.5844 16.8515C13.8265 16.4654 14.0555 16.1282 14.3026 15.8448C14.7722 15.3065 15.2676 15 16 15C16.7891 15 17.3058 15.3102 17.8406 15.866C18.1259 16.1625 18.3956 16.5082 18.7143 16.9177L18.7189 16.9237C19.0254 17.3175 19.373 17.7642 19.7739 18.1876L19.8214 18.2377L19.8753 18.2809C21.0293 19.2041 21.6648 20.0503 22.0238 20.8575C22.3839 21.6671 22.5 22.5135 22.5 23.5C22.5 25.4558 21.8306 26.7757 20.777 27.6302C19.6911 28.5108 18.0688 29 16 29C13.9312 29 12.3089 28.5108 11.223 27.6302C10.1694 26.7757 9.5 25.4558 9.5 23.5C9.5 21.6916 10.2671 20.1669 12.6247 18.2809Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </SvgBase>
  )
}

export const Hourglass = ({ color, ...props }) => {
  return (
    <SvgBase {...props}>
      <rect width="32" height="32" />
      <circle cx="16" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M11.9202 16H19.7581C21.4351 16 22.3675 17.9399 21.3199 19.2494L20.4533 20.3326C19.4548 21.5807 19.2952 23.3034 20.0473 24.7138L20.7647 26.0588C21.4752 27.391 20.5098 29 19 29H12.7106C11.2474 29 10.2794 27.4802 10.8982 26.1542L11.6548 24.5329C12.2726 23.2091 12.1196 21.6539 11.2557 20.4759L10.3074 19.1827C9.33863 17.8617 10.282 16 11.9202 16Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </SvgBase>
  )
}
