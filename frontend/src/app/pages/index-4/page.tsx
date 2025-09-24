import Background2 from '@/components/Background2'
import TopNavbar from '@/components/TopNavbar'
import Hero from './components/Hero'
import { navLinks } from './data'
import Tools from './components/Tools'
import Tools2 from './components/Tools2'
import Features from './components/Features'
import TrendingTopics from './components/TrendingTopics'
import Testimonials from './components/Testimonials'
import PricingPlans from './components/PricingPlans'
import ActionBox from './components/ActionBox'
import Footer4 from './components/Footer4'
import Faqs from './components/Faqs'

const Index4 = () => {
  return (
    <>
      <Background2 />
      <TopNavbar navLinks={navLinks} />
      <Hero />
      <Tools />
      <Tools2 />
      <Features />
      <TrendingTopics />
      <Testimonials />
      <PricingPlans />
      <Faqs />
      <ActionBox />
      <Footer4 />
    </>
  )
}

export default Index4
