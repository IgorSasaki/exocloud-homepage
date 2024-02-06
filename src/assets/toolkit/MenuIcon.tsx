import React from 'react'

export const MenuIcon: React.FC<IconProps> = ({
  className,
  color = 'black'
}) => (
  <svg
    width="24px"
    height="24px"
    strokeWidth="2"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    className={className}
  >
    <path
      d="M3 5h18M3 12h18M3 19h18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
)
