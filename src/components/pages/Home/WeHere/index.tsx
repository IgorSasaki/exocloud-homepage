import React from 'react'

import { CustomImage } from '@/components/commons/structure/CustomImage'
import { Button } from '@/components/commons/toolkit/Button'

export const WeHere: React.FC = () => {
  const handleOpenEmailApp = () => {
    window.open('mailto:exocloudsolutions@exocloudsolutions.com.br')
  }

  return (
    <>
      <div className="hidden w-full items-center justify-center bg-neutral-50 py-12 lg:flex lg:px-4 lg:py-40" />

      <div className="flex w-full items-center justify-center py-12 lg:bg-neutral-800 lg:px-4 lg:py-40">
        <section className="flex w-full max-w-2xl flex-col items-center justify-center lg:-mt-[410px] lg:max-w-6xl">
          <section className="relative">
            <CustomImage
              src="/website/pages/home/weHereThumb.png"
              alt="We Here Thumb"
              width={1152}
              height={250}
              className="relative max-h-[250px] object-cover"
            />

            <section className="absolute bottom-0 left-0 right-0 top-0">
              <article className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-r from-neutral-800 to-transparent text-neutral-50 lg:items-start lg:pl-20">
                <h2 className="ml-4 w-fit text-5xl font-bold lg:ml-0">
                  Procuramos Investidores
                </h2>
              </article>
            </section>
          </section>

          <section className="grid w-full grid-cols-1 items-center justify-items-center gap-4 bg-slate-50 px-4 py-8 lg:grid-cols-2 lg:p-8">
            <article>
              <p className="mb-4 lg:max-w-md">
                Estamos procurando investidores para nos ajudar com as despesas
                iniciais do desenvolvimento. Tem interesse e quer saber mais,
                nos mande um email, ficaremos felizes em marcar uma apresentação
                e conversar com você.
              </p>

              <p className="text-mbl-h5 lg:text-dtk-text-mbl-h5 ">
                © ExoCloud Solutions
              </p>
            </article>

            <Button onClick={handleOpenEmailApp}>
              exocloudsolutions@exocloudsolutions.com.br
            </Button>
          </section>
        </section>
      </div>
    </>
  )
}
