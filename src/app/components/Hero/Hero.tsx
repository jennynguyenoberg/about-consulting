'use client';
import React, { useLayoutEffect, useRef } from 'react'
import styles from './Hero.module.scss';
import Image from "next/legacy/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RotatingWords from "./RotatingWords/RotatingWords";
import Link from 'next/link';

export default function Hero() { 
  const background = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
    }, [])
  
  return (
      <div className='min-h-screen flex flex-col justify-center items-center'>
        <div className={styles.backgroundImage} ref={background}>
          <Image 
            src={'/bkg.svg'}
            alt="background image"
            layout="fill"
            priority={true}
          />
      </div>
      
      <div className={styles.intro}>
          <h1 data-scroll data-scroll-speed="0.7"><RotatingWords /></h1>
      </div>
      <div className='flex flex-col gap-10 items-left w-9/12 pr-96 pl-4'>
        <p className='text-aubergine-500' data-scroll data-scroll-speed="0.7">
          Din nyckel till framgång inom retail och dagligvaruhandeln. <br/>Vi fokuserar på projekt, interimslösningar och kompetensutveckling <br />med djup erfarenhet från branschen.
        </p>
          <Link href="/tjanster">
            <button data-scroll data-scroll-speed="0.7" className="text-aubergine-500 px-12 py-1 border-aubergine-500 border-solid border-2 rounded-xl hover:bg-aubergine-500 hover:text-apricot-500">
              <h4>Upptäck</h4>
            </button>
          </Link>
      </div>
      </div>
  )
}