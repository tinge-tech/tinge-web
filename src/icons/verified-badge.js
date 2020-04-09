/** @jsx jsx */
import { jsx } from "@emotion/core"

const Verified = ({ small = true, ...props }) => {
  return small ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1751 1.33126C11.2625 0.538057 12.7377 0.538057 13.8251 1.33126L14.743 2.00081C15.0088 2.1947 15.3294 2.29889 15.6584 2.29826L16.7946 2.2961C18.1405 2.29353 19.334 3.16065 19.7475 4.44152L20.0965 5.52271C20.1976 5.83581 20.3957 6.10857 20.6623 6.30144L21.5827 6.9675C22.6731 7.75655 23.129 9.15958 22.7106 10.4389L22.3575 11.5187C22.2552 11.8314 22.2552 12.1686 22.3575 12.4813L22.7106 13.5611C23.129 14.8404 22.6731 16.2434 21.5827 17.0325L20.6623 17.6986C20.3957 17.8914 20.1976 18.1642 20.0965 18.4773L19.7475 19.5585C19.334 20.8393 18.1405 21.7065 16.7945 21.7039L15.6584 21.7017C15.3294 21.7011 15.0088 21.8053 14.743 21.9992L13.8251 22.6687C12.7377 23.4619 11.2625 23.4619 10.1751 22.6687L9.2572 21.9992C8.9914 21.8053 8.67075 21.7011 8.34175 21.7017L7.20561 21.7039C5.85966 21.7065 4.66618 20.8393 4.25269 19.5585L3.90366 18.4773C3.80259 18.1642 3.60442 17.8914 3.33789 17.6986L2.41746 17.0325C1.32706 16.2434 0.87119 14.8404 1.28955 13.5611L1.64269 12.4813C1.74495 12.1686 1.74495 11.8314 1.64269 11.5187L1.28955 10.4389C0.871189 9.15958 1.32706 7.75655 2.41746 6.96749L3.33789 6.30144C3.60442 6.10857 3.80259 5.83581 3.90366 5.52271L4.25269 4.44152C4.66618 3.16065 5.85966 2.29353 7.20561 2.2961L8.34175 2.29826C8.67075 2.29889 8.9914 2.1947 9.2572 2.00081L10.1751 1.33126Z"
        fill="#5A8BFA"
      />
      <path
        d="M13.5446 1.54267L14.6942 2.34022C15.0192 2.56568 15.4054 2.68616 15.8009 2.68544L17.1937 2.68292C18.3564 2.68081 19.3908 3.42067 19.7645 4.52165L20.1449 5.64247C20.279 6.03733 20.5369 6.37835 20.8804 6.61476L21.8428 7.27711C22.845 7.96682 23.2647 9.23989 22.8691 10.3903L22.532 11.3706C22.3917 11.7785 22.3917 12.2215 22.532 12.6294L22.8691 13.6097C23.2647 14.7601 22.845 16.0332 21.8428 16.7229L20.8804 17.3852C20.5369 17.6216 20.279 17.9627 20.1449 18.3575L19.7645 19.4783C19.3908 20.5793 18.3564 21.3192 17.1937 21.3171L15.8009 21.3146C15.4054 21.3138 15.0192 21.4343 14.6942 21.6598L13.5445 22.4573C12.6157 23.1017 11.3843 23.1017 10.4555 22.4573L9.30582 21.6598C8.98085 21.4343 8.5946 21.3138 8.19907 21.3146L6.8063 21.3171C5.64363 21.3192 4.60921 20.5793 4.2355 19.4783L3.85506 18.3575C3.72103 17.9627 3.46307 17.6216 3.11957 17.3852L2.15716 16.7229C1.155 16.0332 0.73535 14.7601 1.13094 13.6097L1.46802 12.6294C1.60826 12.2215 1.60826 11.7785 1.46802 11.3706L1.13094 10.3903C0.73535 9.23989 1.155 7.96682 2.15716 7.27711L3.11957 6.61476C3.46307 6.37835 3.72103 6.03734 3.85506 5.64247L4.2355 4.52165C4.60921 3.42067 5.64363 2.68081 6.8063 2.68292L8.19907 2.68544C8.5946 2.68616 8.98085 2.56568 9.30582 2.34022L10.4555 1.54267C11.3843 0.898254 12.6157 0.898254 13.5446 1.54267Z"
        stroke="#E7EEFF"
        strokeWidth="0.774194"
      />
      <rect
        x="17.7812"
        y="9.38426"
        width="10.0645"
        height="2.32258"
        rx="0.683112"
        transform="rotate(135 17.7812 9.38426)"
        fill="white"
      />
      <rect
        x="12.2153"
        y="14.7314"
        width="2.32258"
        height="6.19355"
        rx="0.683112"
        transform="rotate(135 12.2153 14.7314)"
        fill="white"
      />
    </svg>
  ) : (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1429 1.71954C14.5474 0.694991 16.4529 0.694991 17.8575 1.71954L19.0431 2.58438C19.3864 2.83482 19.8006 2.96939 20.2255 2.96859L21.693 2.96579C23.4315 2.96248 24.9731 4.08251 25.5072 5.73696L25.958 7.13351C26.0886 7.53792 26.3446 7.89023 26.6888 8.13936L27.8777 8.99968C29.2861 10.0189 29.875 11.8311 29.3346 13.4835L28.8785 14.8783C28.7464 15.2823 28.7464 15.7177 28.8785 16.1217L29.3346 17.5165C29.875 19.1689 29.2861 20.9811 27.8777 22.0003L26.6888 22.8606C26.3446 23.1098 26.0886 23.4621 25.958 23.8665L25.5072 25.263C24.9731 26.9175 23.4315 28.0375 21.693 28.0342L20.2255 28.0314C19.8006 28.0306 19.3864 28.1652 19.0431 28.4156L17.8575 29.2805C16.4529 30.305 14.5474 30.305 13.1429 29.2805L11.9573 28.4156C11.6139 28.1652 11.1998 28.0306 10.7748 28.0314L9.30731 28.0342C7.56879 28.0375 6.02721 26.9175 5.49312 25.263L5.04229 23.8665C4.91174 23.4621 4.65577 23.1098 4.3115 22.8606L3.12262 22.0003C1.71418 20.9811 1.12535 19.1689 1.66573 17.5165L2.12187 16.1217C2.25396 15.7177 2.25396 15.2823 2.12187 14.8783L1.66573 13.4835C1.12535 11.8311 1.71418 10.0189 3.12262 8.99968L4.3115 8.13936C4.65577 7.89023 4.91174 7.53792 5.04229 7.13351L5.49312 5.73696C6.02721 4.08251 7.56879 2.96248 9.30731 2.96579L10.7748 2.96859C11.1998 2.96939 11.6139 2.83482 11.9573 2.58438L13.1429 1.71954Z"
        fill="#5A8BFA"
      />
      <path
        d="M17.495 1.99261L18.98 3.02279C19.3997 3.314 19.8986 3.46962 20.4095 3.46869L22.2085 3.46544C23.7103 3.46272 25.0464 4.41837 25.5291 5.84047L26.0205 7.28819C26.1937 7.79822 26.5269 8.23871 26.9706 8.54406L28.2137 9.3996C29.5081 10.2905 30.0502 11.9349 29.5392 13.4209L29.1038 14.6871C28.9227 15.2139 28.9227 15.7861 29.1038 16.3129L29.5392 17.5791C30.0502 19.0651 29.5081 20.7095 28.2137 21.6004L26.9706 22.4559C26.5269 22.7613 26.1937 23.2018 26.0205 23.7118L25.5291 25.1595C25.0464 26.5816 23.7103 27.5373 22.2085 27.5346L20.4095 27.5313C19.8986 27.5304 19.3997 27.686 18.98 27.9772L17.495 29.0074C16.2952 29.8398 14.7048 29.8398 13.505 29.0074L12.02 27.9772C11.6003 27.686 11.1014 27.5304 10.5905 27.5313L8.79147 27.5346C7.28969 27.5373 5.95356 26.5816 5.47086 25.1595L4.97946 23.7118C4.80634 23.2018 4.47313 22.7613 4.02944 22.4559L2.78633 21.6004C1.49187 20.7095 0.949827 19.0651 1.4608 17.5791L1.89619 16.3129C2.07734 15.7861 2.07734 15.2139 1.89619 14.6871L1.4608 13.4209C0.949827 11.9349 1.49187 10.2905 2.78633 9.3996L4.02944 8.54406C4.47313 8.23871 4.80634 7.79822 4.97946 7.2882L5.47086 5.84047C5.95356 4.41837 7.28969 3.46272 8.79147 3.46544L10.5905 3.46869C11.1014 3.46962 11.6003 3.314 12.02 3.02279L13.505 1.99261C14.7048 1.16024 16.2952 1.16024 17.495 1.99261Z"
        stroke="#E7EEFF"
      />
      <rect
        x="22.9673"
        y="12.1213"
        width="13"
        height="3"
        rx="0.882353"
        transform="rotate(135 22.9673 12.1213)"
        fill="white"
      />
      <rect
        x="15.7783"
        y="19.0281"
        width="3"
        height="8"
        rx="0.882353"
        transform="rotate(135 15.7783 19.0281)"
        fill="white"
      />
    </svg>
  )
}

export default Verified
