import Image from 'next/image'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import AboutSection from './Components/AboutSection'
import Projects from './Components/Projects'
import EmailSection from './Components/EmailSection'
import Footer from './Components/Footer'
import Achievement from './Components/Achievement'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-[#121212]">
      {/* <div className="container px-12 py-4 mx-auto"> */}
          <Navbar />
          <div className="container mt-24 mx-auto px-12 py-4">
            <HeroSection />
            <Achievement />
            <AboutSection />
            <Projects />
            <EmailSection />
          </div>
          <Footer />
      {/* </div> */}
      
    </main>
  )
}
