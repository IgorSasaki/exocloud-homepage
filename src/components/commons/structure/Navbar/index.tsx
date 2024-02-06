// import Link from 'next/link'
import React from 'react'

import { Logo } from '../Logo'
import { NavbarMobile } from './navbarMobile'

export const Navbar: React.FC = () => {
  return (
    <>
      <NavbarMobile />

      <div className="fixed z-[999] hidden w-full items-center justify-center bg-neutral-950 px-8 py-4 text-neutral-50 transition-all md:px-12 lg:flex">
        <section className=" flex w-full  max-w-7xl items-center justify-between ">
          <Logo />

          <article className="hidden lg:flex">
            <ul className="text-dtk-h4 flex list-none">
              {/* <li className="mr-8 transition-all hover:underline">
                <Link href="/">Home</Link>
              </li>
              <li className="mr-8 transition-all hover:underline">
                <Link href="/contato">Contato</Link>
              </li>
              <li className="mr-8 transition-all hover:underline">
                <Link href="/sobre">Sobre</Link>
              </li> */}
            </ul>
          </article>
        </section>
      </div>
    </>
  )
}
