'use client';
import React, { useLayoutEffect, useRef } from 'react'
import styles from './Hero.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RotatingWords from "./RotatingWords/RotatingWords";

export default function Hero() { 
  const background = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
    }, [])
  
  return (
      <div className={styles.homeHeader}>
          <div className={styles.backgroundImage} ref={background}>
              <Image 
                  src={'/bkg.svg'}
                  fill={true}
                  alt="background image"
                  priority={true}
              />
          </div>
      <div className={styles.intro}>
        <h1 data-scroll data-scroll-speed="0.7"><RotatingWords /></h1>
           </div>
      </div>
  )
}