import { NextPage } from 'next'

import { Footer } from '@/components/commons/structure/Footer'
import { HeadComponent } from '@/components/commons/structure/HeadComponent'
import { Navbar } from '@/components/commons/structure/Navbar'
import { Header } from '@/components/pages/Home/Header'
import { Mission } from '@/components/pages/Home/Mission'
import { WeHere } from '@/components/pages/Home/WeHere'

const HomePage: NextPage = () => {
  return (
    <>
      <HeadComponent
        title="ExoCloud Solutions"
        type="home"
        image="/"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur blanditiis esse asperiores, reiciendis explicabo adipisci odio obcaecati vitae, commodi consequuntur nesciunt! Quibusdam officiis sit harum distinctio doloribus itaque, ullam velit!"
        url="/"
      />

      <Navbar />

      <main className="flex w-full flex-col">
        <Header />

        <Mission />

        <WeHere />
      </main>

      <Footer />
    </>
  )
}

export default HomePage
