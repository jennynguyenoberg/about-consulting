import { Links, FooterLinks } from './data'
import styles from './NavItems.module.scss'
import { motion, Variants } from 'framer-motion'

interface Link {
  href: string
  title: string
}

const perspective: Variants = {
  initial: {
    opacity: 0,
  },
  enter: (i: number) => ({
    opacity: 1,
    transition: { delay: 0.5 + i * 0.1 },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
}

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.75 + i * 0.1 },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
}

const NavItems: React.FC = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {Links.map((link: Link, i: number) => {
          return (
            <motion.div
              key={i}
              custom={i}
              variants={perspective}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              <a href={link.href}>{link.title}</a>
            </motion.div>
          )
        })}
      </div>

      <div className={styles.footer}>
        {FooterLinks.map((link: Link, i: number) => {
          return (
            <motion.a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={slideIn}
              custom={i}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              {link.title}
            </motion.a>
          )
        })}
      </div>
    </div>
  )
}

export default NavItems
