import React from 'react'

import { CustomImage } from '@/components/commons/structure/CustomImage'
import { Button } from '@/components/commons/toolkit/Button'

export const WeHere: React.FC = () => {
  const handleOpenEmailApp = () => {
    window.open('mailto:contato@exocloudsolutions.com.br')
  }

  return (
    <>
      <div className="hidden w-full items-center justify-center bg-neutral-50 py-12 lg:flex lg:px-4 lg:py-40"></div>

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
                <h2 className="w-fit text-5xl font-bold">Contate-nos</h2>
              </article>
            </section>
          </section>

          <section className="grid w-full grid-cols-1 items-center justify-items-center gap-4 bg-slate-50 px-4 py-8 lg:grid-cols-2 lg:p-8">
            <article>
              <p className="mb-4 lg:max-w-md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                architecto mollitia tempora quas alias aperiam animi id dolor
                incidunt molestiae quod quibusdam, tenetur inventore delectus,
                facilis explicabo, pariatur aut consequatur!
              </p>

              <p className="text-mbl-h5 lg:text-dtk-text-mbl-h5 ml-8">
                © ExoCloud Solutions
              </p>
            </article>

            <Button onClick={handleOpenEmailApp}>
              contato@exocloudsolutions.com.br
            </Button>
          </section>
        </section>
      </div>
    </>
  )
}
