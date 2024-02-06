// import Link from 'next/link'
import React, { useState } from 'react'

import { CloseIcon } from '@/assets/toolkit/CloseIcon'
import { MenuIcon } from '@/assets/toolkit/MenuIcon'

import { Logo } from '../Logo'

export const NavbarMobile: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <>
      <section className="fixed z-[999] flex w-full items-center justify-between bg-neutral-950 px-4 py-2 text-neutral-50 lg:hidden">
        <Logo />

        <button className=" flex h-full" onClick={() => setIsOpenMenu(true)}>
          <MenuIcon color="white" className="w-26" />
        </button>
      </section>

      <section
        style={{
          height: '100vh',
          width: '100vw',
          maxWidth: '100vw',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
        className={` ${
          isOpenMenu ? 'left-0' : 'left-full'
        } fixed top-0 z-[999] flex w-full flex-col bg-neutral-50 px-4 ring-1 ring-black ring-opacity-5 transition-all duration-200`}
      >
        <article className="flex w-full items-center justify-between py-6 opacity-100">
          <Logo />

          <button
            className="flex items-center justify-end text-white opacity-100"
            onClick={() => setIsOpenMenu(false)}
          >
            <CloseIcon />
          </button>
        </article>

        <article className="mt-5">
          <ul className="text-dtk-h4 flex list-none flex-col">
            {/* <li className="mr-8">
              <Link href="/">Home</Link>
            </li>
            <li className="mr-8">
              <Link href="/contato">Contato</Link>
            </li>
            <li className="mr-8">
              <Link href="/sobre">Sobre</Link>
            </li> */}
          </ul>
        </article>
      </section>
    </>
  )
}
