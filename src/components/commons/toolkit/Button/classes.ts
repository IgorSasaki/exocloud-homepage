import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'rounded',
    'duration-default',
    'transition-colors',
    'justify-center',
    'items-center',
    'gap-2',
    'disabled:cursor-not-allowed'
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-neutral-800',
          'text-neutral-50',
          'hover:bg-neutral-700',
          'flex',
          'font-normal',
          'py-2',
          'px-6',
          'w-full'
        ],
        secondary: [
          'bg-neutral-50',
          'text-neutral-800',
          'hover:bg-neutral-100',
          'border',
          'boder-neutral-800',
          'flex',
          'font-normal',
          'py-2',
          'px-6',
          'w-full'
        ]
      },
      size: {
        small: ['text-sm'],
        medium: ['text-base'],
        large: ['text-lg']
      },
      container: {
        fluid: ['md:w-full'],
        fixed: ['md:w-fit']
      }
    },
    compoundVariants: [
      {
        variant: 'primary',
        size: 'medium',
        className: []
      }
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      container: 'fixed'
    }
  }
)
