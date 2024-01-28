'use client'
import Image from 'next/legacy/image'
import Link from 'next/link'
import NavbarButton from './NavbarButton/NavbarButton'
import styles from './Navbar.module.scss'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import NavItems from './NavItems/NavItems'

const variants = {
  open: {
    width: 330,
    height: 650,
    top: '-25px',
    right: '-25px',
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 40,
    height: 40,
    top: '0px',
    right: '0px',
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
}

export default function Navbar() {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav className="fixed w-full bg-apricot-500 z-50">
      <div className="px-5 py-5 flex lg:justify-between border-b-2 border-salmon-500 gap-16">
        <div className="flex items-left">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={82} height={82} />
          </Link>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-16">
          <div>
            <Link href="/">
              <h4 className="text-aubergine-500 hover:underline">Hem</h4>
            </Link>
          </div>
          <div>
            <Link href="/tjanster">
              <h4 className="text-aubergine-500 hover:underline">
                Våra tjänster
              </h4>
            </Link>
          </div>

          {/* <div>
            <Link href="/cases">
              <h4 className="text-aubergine-500 hover:underline">Cases</h4>
            </Link>
          </div> */}

          {/* <div>
            <Link href="/faq">
              <h4 className="text-aubergine-500 hover:underline">FAQ</h4>
            </Link>
          </div> */}

          <div>
            <Link href="/kontakt">
              <button className="text-aubergine-500 px-12 py-1 border-aubergine-500 border-solid border-2 rounded-xl hover:bg-aubergine-500 hover:text-apricot-500">
                <h4>Kontakt</h4>
              </button>
            </Link>
          </div>
          <div className="pr-10" />
        </div>
        <div className={styles.header}>
          <motion.div
            className={styles.menu}
            variants={variants}
            animate={isActive ? 'open' : 'closed'}
            initial="closed"
          >
            <AnimatePresence>{isActive && <NavItems />}</AnimatePresence>
          </motion.div>
          <NavbarButton isActive={isActive} setIsActive={setIsActive} />
        </div>
      </div>
    </nav>
  )
}
