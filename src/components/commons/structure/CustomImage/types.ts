import { ImageProps } from 'next/image'

export interface CustomImageProps extends ImageProps {
  rootMargin?: string
  isDevelopMode?: boolean
  alt: string
  src: string
}
