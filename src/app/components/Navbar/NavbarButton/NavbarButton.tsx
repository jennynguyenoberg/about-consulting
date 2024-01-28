import React from 'react'
import styles from './NavbarButton.module.scss'
import { motion } from 'framer-motion'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'

interface NavbarButtonProps {
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const NavbarButton: React.FC<NavbarButtonProps> = ({
  isActive,
  setIsActive,
}) => {
  return (
    <div onClick={() => setIsActive(!isActive)} className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? '-100%' : '0' }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.element}>
          {/* <p>Menu</p> */}
          <HiOutlineMenuAlt2 />
        </div>

        <div className={styles.element}>
          {/* <p>Close</p> */}
          <RxCross2 />
        </div>
      </motion.div>
    </div>
  )
}

export default NavbarButton
