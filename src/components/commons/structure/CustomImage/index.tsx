import Image from 'next/image'
import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'

import { CustomImageProps } from './types'

export const CustomImage: React.FC<CustomImageProps> = ({
  rootMargin = '600px 0px 600px 0px',
  ...props
}) => {
  const keyProp = props.key?.toString()

  const [isInView, setIsInView] = useState(false)

  return (
    <InView
      rootMargin={rootMargin}
      onChange={inView => !isInView && setIsInView(inView)}
    >
      <Image priority={isInView} {...props} key={keyProp} />
    </InView>
  )
}
