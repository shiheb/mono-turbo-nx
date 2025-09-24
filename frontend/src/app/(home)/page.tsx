import TopNavbar from '@/components/TopNavbar'
import { navLinks } from './data'
import Hero from './components/Hero'
import DemoPages from './components/DemoPages'
import AccountPages from './components/AccountPages'
import Features from './components/Features'
import Footer from './components/Footer'
import Background2 from '@/components/Background2'

const Home = () => {
  return (
    <>
      <Background2 />
      <TopNavbar navLinks={navLinks} />
      <Hero />
      <DemoPages />
      <AccountPages />
      <Features />
      <Footer />
    </>
  )
}

export default Home
