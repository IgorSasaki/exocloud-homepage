import { PropsWithChildren } from 'react'

export interface HeadComponentProps extends PropsWithChildren {
  title: string
  image: string
  type: string
  description: string
  url: string
}

interface IFormattedMetaData {
  title: string
  image: string
  type: string
}
