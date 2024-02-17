import React from 'react'

import { CustomImage } from '@/components/commons/structure/CustomImage'

export const Header: React.FC = () => {
  return (
    <div className="lg:pt-25 flex w-full items-center justify-center bg-neutral-800 px-4 pt-20">
      <div className="flex w-full max-w-2xl grid-cols-12 flex-col-reverse text-white lg:grid lg:max-w-7xl lg:gap-x-8">
        <section className="col-span-7 flex items-end justify-center">
          <CustomImage
            src="/website/pages/home/ExoCloud.png"
            width={400}
            height={400}
            priority={true}
            alt="ExoCloud Solutions Banner"
          />
        </section>

        <section className="col-span-5 flex flex-col items-center justify-center pb-12 pt-10 lg:items-start lg:pt-12">
          <h1 className="mb-8 text-2xl font-bold lg:text-5xl">
            Vamos falar um pouco sobre a ExoCloud Solutions?
          </h1>

          <p>
            O nosso projeto começou como uma Startup voltado para tecnologias
            cloud, mas para a sorte do nosso destino, o nosso fundador teve uma
            ideia de projeto um pouco diferente. Assim nasceu o projeto Conecta
            Minha Saúde, que após muita ideia e estruturar bem o que queria, ele
            foi atrás de convidar pessoas que topassem seguir essa ideia, um
            ideal e um propósito único. Mudar o nosso padrão de gestão de saúde
            pessoal. <br />
            <br />
            Deste modo, o Fundador e CEO Bruno A. S. Guimarães começou a
            ExoCloud Solutions.
          </p>
        </section>
      </div>
    </div>
  )
}
