import React from 'react'

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="32px"
    height="32px"
    strokeWidth="2"
    viewBox="0 0 24 24"
    fill="none"
    color="#000000"
    className={className}
  >
    <path
      d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
)
