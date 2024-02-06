import Head from 'next/head'
import React from 'react'

import { getFormattedMetaData } from '@/utils/components/headComponent/getFormattedMetaData'
import { MetaTypes } from '@/utils/components/headComponent/metatypes'

import { HeadComponentProps } from './types'

export const HeadComponent: React.FC<HeadComponentProps> = ({
  type,
  description,
  image,
  children,
  title,
  url
}) => {
  const formattedMetaData = getFormattedMetaData({ type, title, image })

  return (
    <Head>
      <title>{formattedMetaData.title}</title>

      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon-precomposed" href="/favicon.png" />

      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <MetaTypes
        description={description}
        formattedMetaData={formattedMetaData}
        url={url}
      />

      <link
        rel="canonical"
        href={`https://www.exocloudsolutions.com.br${url}`}
      />
      <link
        rel="alternative"
        href={`https://www.exocloudsolutions.com.br${url}`}
      />

      {children}
    </Head>
  )
}
