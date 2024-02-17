import React from 'react'

import { CustomImage } from '@/components/commons/structure/CustomImage'

export const AboutProject: React.FC = () => {
  return (
    <div className="lg:pt-30 flex w-full items-center justify-center bg-neutral-50 px-4 pt-1">
      <div className="flex w-full max-w-2xl grid-cols-12 flex-col-reverse text-slate-700 lg:grid lg:max-w-7xl lg:gap-x-8">
        <section className="col-span-7 flex items-end justify-center">
          <CustomImage
            src="/website/pages/home/ConectaMinhaSaude.png"
            width={400}
            height={400}
            priority={true}
            alt="Conecta Minha Saúde Banner"
          />
        </section>
        <section className="col-span-5 flex flex-col items-center justify-center pb-12 pt-10 text-center lg:items-start lg:pt-12 lg:text-left">
          <h3 className="mb-8 text-xl font-bold lg:text-4xl">
            O que é o Projeto Conecta Minha Saúde?
          </h3>

          <p className="text-base font-normal">
            O projeto do Conecta Minha Saúde é uma ideia de um sistema robusto e
            eficaz para prestadores de serviço da área da saúde e para a
            população, um app expecífico que vai trabalhar em conjunto com o
            sistema. Exato, o nosso projeto consiste em 2 tipos de softwares, um
            sistema web para os prestadores de serviço e um app para a
            população.
            {/* <br />
            <br />
            Quer saber mais? Da uma olhada na sessão a seguir! */}
          </p>
        </section>
      </div>
    </div>
  )
}
