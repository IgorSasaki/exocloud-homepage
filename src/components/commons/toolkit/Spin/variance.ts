import { cva } from 'class-variance-authority'

export const spinVariants = cva(['flex', 'items-center', 'justify-center'], {
  variants: {
    size: {
      small: ['h-4', 'w-4'],
      medium: ['h-5', 'w-5'],
      large: ['h-6', 'w-6']
    }
  },
  defaultVariants: {
    size: 'small'
  }
})
