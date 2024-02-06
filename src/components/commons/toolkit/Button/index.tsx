import { Spin } from '../Spin'
import { buttonVariants } from './classes'
import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  container,
  className,
  children,
  isLoading,
  icon,
  ...props
}) => {
  return (
    <button
      data-cid="button"
      disabled={isLoading}
      className={buttonVariants({
        className,
        variant,
        size,
        container
      })}
      {...props}
    >
      {icon ?? null}
      {children}
      {isLoading ? <Spin /> : null}
    </button>
  )
}
