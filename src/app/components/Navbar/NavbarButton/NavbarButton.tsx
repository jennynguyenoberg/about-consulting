import styles from './NavbarButton.module.scss'
import { motion } from 'framer-motion'

export default function NavbarButton(isActive, setIsActive) { 
  return (
    <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
      
      <motion.div
          className={styles.slider}
        >
        
        <div className={styles.element}>
          <p>Menu</p>
        </div>

        <div className={styles.element}>
          <p>Close</p>
        </div>

      </motion.div>

    </div>
  )
}