'use client'
import { useEffect, useState } from 'react'
import CTA from './components/CTA/CTA'
import Hero from './components/Hero/Hero'
import ImageCarousel from './components/ImageCarousel/ImageCarousel'
import MissionText from './components/MissionText/MissionText'
import USPs from './components/USPs/USPs'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from './components/SplashScreen/SplashScreen'
import LocomotiveScroll from 'locomotive-scroll';

export default function Home(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const scroll = new LocomotiveScroll({
        el: document.querySelector<HTMLElement>('[data-scroll-container]')!,
        smooth: true,
        tablet: {
          breakpoint: 0,
          smooth: true,
        },
        smartphone: {
          smooth: true,
        },
     });

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 0);
    })();
  }, []);

  return (
    <main className="pt-28">
      <div>
        <AnimatePresence>
          {isLoading && <SplashScreen />}
        </AnimatePresence>
        <Hero />
        <USPs />
        <ImageCarousel />
        <MissionText />
        <CTA />
      </div>
    </main>
  );
}