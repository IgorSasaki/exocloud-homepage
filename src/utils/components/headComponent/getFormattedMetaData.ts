import { IFormattedMetaData } from '@/components/commons/structure/HeadComponent/types'

export const getFormattedMetaData = ({
  type,
  title,
  image
}: IFormattedMetaData) => {
  return {
    title: type === 'home' ? `${title}` : `${title} | ExoCloud Solutions`,
    type: type === 'home' ? 'website' : `${type}`,
    image
  }
}
