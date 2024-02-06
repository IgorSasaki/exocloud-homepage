import React from 'react'

import { IFormattedMetaData } from '@/components/commons/structure/HeadComponent/types'

interface MetaTypesProps {
  url: string
  description: string
  formattedMetaData: IFormattedMetaData
}

export const MetaTypes: React.FC<MetaTypesProps> = ({
  url,
  description,
  formattedMetaData
}) => {
  return (
    <>
      <meta property="og:type" content={formattedMetaData.type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={formattedMetaData.title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={formattedMetaData.image} />

      <meta property="twitter:type" content={formattedMetaData.type} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={formattedMetaData.title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={formattedMetaData.image} />
    </>
  )
}
