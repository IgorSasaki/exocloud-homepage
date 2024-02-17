import Link from 'next/link'
import React from 'react'

import { LogoExoCloud } from '@/assets/toolkit/LogoExoCloud'

export const Logo: React.FC = () => (
  <picture className="flex cursor-pointer items-center justify-start lg:w-auto">
    <Link href="/">
      <LogoExoCloud className="max-h-full max-w-[175px]" />
    </Link>
  </picture>
)
