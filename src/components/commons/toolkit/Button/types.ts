import { VariantProps } from 'class-variance-authority'

import { buttonVariants } from './classes'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  icon?: JSX.Element
}
