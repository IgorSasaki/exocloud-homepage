import React from 'react'

import { CustomImage } from '@/components/commons/structure/CustomImage'

export const Header: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center bg-neutral-800 px-4 pt-20 lg:pt-32">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            hic illo atque voluptatum aut, modi vitae reiciendis repudiandae
            necessitatibus vero minus iste, ipsa adipisci maiores quis, fugit
            corrupti. Doloribus, deleniti.
          </p>
        </section>
      </div>
    </div>
  )
}
