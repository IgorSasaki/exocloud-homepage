import React from 'react'

import { EmailIcon } from '@/assets/toolkit/EmailIcon'

import { Logo } from '../Logo'

export const FooterMobile: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center px-4 text-neutral-50 lg:hidden">
      <a href="#" className="text-cyan-200">
        Go to top ↑
      </a>

      <div className="my-4 flex h-[0.5px] w-full min-w-[20rem] bg-slate-600" />

      <div className="flex flex-col text-center">
        <section className="flex items-center">
          <EmailIcon className="mr-4" />

          <a href="mailto:contato@exocloudsolutions.com.br">
            contato@exocloudsolutions.com.br
          </a>
        </section>
      </div>

      <div className="my-4 flex h-[0.5px] w-full min-w-[20rem] bg-slate-600" />

      <Logo />

      <section className="mt-4 flex w-full items-center justify-center gap-x-8 text-neutral-50">
        <p>© ExoCloud Solutions</p>

        <p>Todos os direitos reservados.</p>
      </section>
    </div>
  )
}
