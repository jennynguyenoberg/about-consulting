'use client'
import { useEffect, useState } from 'react'
import CTA from './components/CTA/CTA'
import Hero from './components/Hero/Hero'
import ImageCarousel from './components/ImageCarousel/ImageCarousel'
import MissionText from './components/MissionText/MissionText'
import USPs from './components/USPs/USPs'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from './components/SplashScreen/SplashScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
      
      setTimeout(() => {
        setIsLoading(false)
        document.body.style.cursor = 'default'
        window.scrollTo(0, 0)
      }, 2000)
    })()
  }, [])

  return (
    <main className="pt-28">
      <div>
        <AnimatePresence mode="wait">
          {isLoading && <SplashScreen />}
        </AnimatePresence>
        <Hero />
        <USPs />
        <ImageCarousel />
        <MissionText />
        <CTA />
      </div>
    </main>
  )
}
