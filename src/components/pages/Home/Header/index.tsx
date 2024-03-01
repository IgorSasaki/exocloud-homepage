import React from 'react'

import { CustomImage } from '@/components/commons/structure/CustomImage'

export const Header: React.FC = () => {
  return (
    <div className="lg:pt-25 flex w-full items-center justify-center bg-neutral-800 px-4 pt-20">
      <div className="flex w-full max-w-2xl grid-cols-12 flex-col text-neutral-50 lg:grid lg:max-w-7xl lg:gap-x-8">
        <picture className="col-span-7 flex items-center justify-center">
          <CustomImage
            src="/website/pages/home/ExoCloud.png"
            width={400}
            height={400}
            priority={true}
            alt="ExoCloud Solutions Banner"
            className="object-contain"
          />
        </picture>

        <section className="col-span-5 flex flex-col items-center justify-center pb-12 pt-10 text-center lg:items-start lg:pt-12 lg:text-left">
          <h1 className="mb-8 text-xl font-bold lg:text-4xl">
            Seja bem-vindo a <br /> ExoCloud Solutions
          </h1>

          <p>
            Nascida do sonho de criar uma empresa que fosse uma revolução no
            mercado de soluções de sistema,a ExoCloud Solutions tem como
            principal fundamento ajudar nossos colaboradores e clientes a
            transformarem a realidade ao seu redor, facilitar o dia-a-dia e
            democratizar o acesso à tecnologia <br />
            <br />
            Com esse valor em mente, direcionamos a atuação para a área da
            saúde, que ainda pode se beneficiar muito com os avanços e as
            facilidades tecnológicas. <br />
            <br />
            Nosso principal projeto, o Conecta Minha Saúde, cujo o principal
            objetivo é mudar o padrão da gestão da saúde pessoal com a criação
            de uma estrutura completa e robusta para prestadores de serviço da
            área da saúde e para a população. <br />
            <br />
            Conheça mais sobre ele!
            <br />
          </p>
        </section>
      </div>
    </div>
  )
}
