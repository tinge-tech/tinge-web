/** @jsx jsx */
import { jsx } from "@emotion/core"

const Logo = ({ ...props }) => (
  <svg
    width="111"
    height="28"
    viewBox="0 0 111 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <rect width="111" height="28" fill="transparent" />
      <path
        d="M2 1.77944C2 1.46385 2.25584 1.20801 2.57143 1.20801H25.4286C25.7442 1.20801 26 1.46385 26 1.77944V1.77944C26 3.67298 24.465 5.20801 22.5714 5.20801H5.42857C3.53502 5.20801 2 3.67298 2 1.77944V1.77944Z"
        fill="#004EBD"
      />
      <path
        d="M15 4.20801C15.5523 4.20801 16 4.65572 16 5.20801L16 26.6366C16 26.9522 15.7442 27.208 15.4286 27.208V27.208C13.535 27.208 12 25.673 12 23.7794L12 5.20801C12 4.65572 12.4477 4.20801 13 4.20801L15 4.20801Z"
        fill="#004EBD"
      />
      <path
        d="M34.308 26.208C34.308 26.7603 33.8603 27.208 33.308 27.208H31.078C30.5257 27.208 30.078 26.7603 30.078 26.208V2.288C30.078 1.73572 30.5257 1.288 31.078 1.288H33.308C33.8603 1.288 34.308 1.73572 34.308 2.288V26.208Z"
        fill="#004EBD"
      />
      <path
        d="M60.9051 1.288C61.4574 1.288 61.9051 1.73572 61.9051 2.288V26.208C61.9051 26.7603 61.4574 27.208 60.9051 27.208H59.7631C59.4391 27.208 59.1631 27.154 58.9351 27.046C58.7071 26.926 58.4911 26.734 58.2871 26.47L44.0491 8.182C44.0851 8.53 44.1091 8.878 44.1211 9.226C44.1451 9.562 44.1571 9.874 44.1571 10.162V26.208C44.1571 26.7603 43.7094 27.208 43.1571 27.208H41.4491C40.8968 27.208 40.4491 26.7603 40.4491 26.208V2.288C40.4491 1.73572 40.8968 1.288 41.4491 1.288H42.6451C42.8251 1.288 42.9751 1.3 43.0951 1.324C43.2271 1.336 43.3471 1.366 43.4551 1.414C43.5631 1.462 43.6651 1.534 43.7611 1.63C43.8571 1.726 43.9591 1.846 44.0671 1.99L58.3231 20.296C58.2871 19.924 58.2571 19.558 58.2331 19.198C58.2211 18.838 58.2151 18.502 58.2151 18.19V2.288C58.2151 1.73572 58.6628 1.288 59.2151 1.288H60.9051Z"
        fill="#004EBD"
      />
      <path
        d="M88.3039 14.446C88.8562 14.446 89.3039 14.8937 89.3039 15.446V24.1942C89.3039 24.5156 89.1506 24.8193 88.8836 24.9983C86.3997 26.6634 83.5398 27.496 80.3039 27.496C78.2039 27.496 76.3019 27.172 74.5979 26.524C72.9059 25.864 71.4599 24.952 70.2599 23.788C69.0599 22.612 68.1359 21.214 67.4879 19.594C66.8399 17.974 66.5159 16.192 66.5159 14.248C66.5159 12.292 66.8279 10.504 67.4519 8.884C68.0759 7.252 68.9699 5.854 70.1339 4.69C71.2979 3.514 72.7019 2.608 74.3459 1.972C75.9899 1.324 77.8379 1 79.8899 1C80.9339 1 81.8999 1.084 82.7879 1.252C83.6879 1.408 84.5219 1.63 85.2899 1.918C86.0579 2.206 86.7659 2.554 87.4139 2.962C87.8218 3.21879 88.2082 3.49459 88.5733 3.78941C88.9458 4.0903 89.0124 4.62313 88.7582 5.02902L87.9899 6.256C87.7979 6.556 87.5519 6.742 87.2519 6.814C86.9519 6.886 86.6279 6.814 86.2799 6.598C85.9319 6.394 85.5599 6.178 85.1639 5.95C84.7799 5.722 84.3359 5.512 83.8319 5.32C83.3279 5.116 82.7459 4.954 82.0859 4.834C81.4259 4.702 80.6459 4.636 79.7459 4.636C78.3779 4.636 77.1419 4.864 76.0379 5.32C74.9459 5.764 74.0099 6.406 73.2299 7.246C72.4499 8.074 71.8499 9.082 71.4299 10.27C71.0099 11.458 70.7999 12.784 70.7999 14.248C70.7999 15.796 71.0219 17.182 71.4659 18.406C71.9099 19.618 72.5399 20.65 73.3559 21.502C74.1719 22.342 75.1559 22.984 76.3079 23.428C77.4719 23.872 78.7679 24.094 80.1959 24.094C81.2639 24.094 82.2119 23.98 83.0399 23.752C83.6881 23.5761 84.3256 23.3465 84.9524 23.0634C85.2956 22.9084 85.5059 22.5607 85.5059 22.1841V18.65C85.5059 18.0977 85.0582 17.65 84.5059 17.65H81.8879C81.6119 17.65 81.3959 17.578 81.2399 17.434C81.0839 17.278 81.0059 17.08 81.0059 16.84V15.446C81.0059 14.8937 81.4536 14.446 82.0059 14.446H88.3039Z"
        fill="#004EBD"
      />
      <path
        d="M109.45 23.806C110.004 23.806 110.453 24.2569 110.45 24.8113L110.443 26.2133C110.44 26.7635 109.993 27.208 109.443 27.208H95.2733C94.721 27.208 94.2733 26.7603 94.2733 26.208V2.288C94.2733 1.73572 94.721 1.288 95.2733 1.288H109.437C109.99 1.288 110.437 1.73572 110.437 2.288V3.69C110.437 4.24229 109.99 4.69 109.437 4.69H98.5033V12.502H107.043C107.596 12.502 108.043 12.9497 108.043 13.502V14.796C108.043 15.3483 107.596 15.796 107.043 15.796H98.5033V23.806H109.45Z"
        fill="#004EBD"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="111"
          height="28"
          fill="transparent
        "
        />
      </clipPath>
    </defs>
  </svg>
)

export default Logo
