import React, { useMemo } from 'react'

import { MissionIcon } from '../Icons/MissionIcon'
import { ValuesIcon } from '../Icons/ValuesIcon'
import { VisionIcon } from '../Icons/VisionIcon'

export const Mission: React.FC = () => {
  const gridItems = useMemo(
    () => [
      {
        icon: <MissionIcon />,
        title: 'Missão',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis rerum aperiam esse reprehenderit, dolorum iusto enim non laudantium. Labore rem corrupti corporis provident magni. Dolores nam sint voluptas maxime.'
      },
      {
        icon: <VisionIcon />,
        title: 'Visão',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis rerum aperiam esse reprehenderit, dolorum iusto enim non laudantium. Labore rem corrupti corporis provident magni. Dolores nam sint voluptas maxime.'
      },
      {
        icon: <ValuesIcon />,
        title: 'Valores',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis rerum aperiam esse reprehenderit, dolorum iusto enim non laudantium. Labore rem corrupti corporis provident magni. Dolores nam sint voluptas maxime.'
      }
    ],
    []
  )

  return (
    <div className="flex w-full items-center justify-center bg-neutral-100 px-4 py-12 lg:py-20">
      <div className="flex w-full max-w-2xl flex-col items-center justify-center lg:max-w-6xl">
        <section className="mb-8 text-center">
          <h1 className="mb-4 text-xl font-bold lg:text-3xl">Sobre nós</h1>
        </section>

        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-4 overflow-hidden rounded-lg lg:grid-cols-3">
          {gridItems.map((item, index) => (
            <div
              key={`missionItem_${index}`}
              className="min-h-80 grid h-full w-full max-w-lg grid-cols-1 justify-center justify-items-center rounded-lg bg-white p-4 text-center text-neutral-900"
            >
              {item.icon}

              <h2 className="my-4 text-lg font-bold lg:text-2xl">
                {item.title}
              </h2>

              <p className="lg:text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
