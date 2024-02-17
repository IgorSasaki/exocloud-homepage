import { NextPage } from 'next'

import { Footer } from '@/components/commons/structure/Footer'
import { HeadComponent } from '@/components/commons/structure/HeadComponent'
import { Navbar } from '@/components/commons/structure/Navbar'
import { AboutProject } from '@/components/pages/Home/AboutProject'
import { Header } from '@/components/pages/Home/Header'
import { WeHere } from '@/components/pages/Home/WeHere'
// import { Mission } from '@/components/pages/Home/Mission'

const HomePage: NextPage = () => {
  return (
    <>
      <HeadComponent
        title="ExoCloud Solutions"
        type="home"
        image="/"
        description=" Lorem ipsum dolor sit, amet consectetur  elit. Pariatur blanditiis esse asperiores, reiciendis explicabo adipisci odio obcaecati vitae, commodi consequuntur nesciunt! Quibusdam officiis sit harum distinctio doloribus itaque, ullam velit!"
        url="/"
      />

      <Navbar />

      <main className="flex w-full flex-col">
        <Header />

        <AboutProject />

        {/* <Mission /> */}

        <WeHere />
      </main>

      <Footer />
    </>
  )
}

export default HomePage
