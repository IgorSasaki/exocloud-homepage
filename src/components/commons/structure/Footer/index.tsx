import React from 'react'

import { EmailIcon } from '@/assets/toolkit/EmailIcon'

import { Logo } from '../Logo'
import { FooterMobile } from './mobile'

export const Footer: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-neutral-950 py-8">
      <FooterMobile />

      <div className="hidden w-full max-w-7xl flex-col items-center justify-center px-4 lg:flex">
        <div className="flex w-full items-center justify-between text-neutral-50">
          <Logo />

          <div className="flex flex-col text-end">
            <a href="#" className="text-neutral-200 hover:underline">
              Ir para o topo ↑
            </a>

            <section className="flex items-center">
              <EmailIcon className="mr-4" />
              <a
                href="mailto:contato@exocloudsolutions.com.br"
                className="transition-colors hover:brightness-125"
              >
                contato@exocloudsolutions.com.br
              </a>
            </section>
          </div>
        </div>

        <div className="my-4 flex h-[0.5px] w-full min-w-[20rem] bg-slate-600" />

        <section className="flex w-full items-center justify-between text-neutral-50">
          <p>© ExoCloud Solutions</p>

          <p>Todos os direitos reservados.</p>
        </section>
      </div>
    </div>
  )
}
