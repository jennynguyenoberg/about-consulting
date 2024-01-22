
import styles from './RotatingWords.module.css'

export default function RotatingWords() { 
  return (
    <div className={styles.wrapper}>
      <h1 className='text-aubergine-500'>About</h1>
      <div className={styles.words}>
        <div className='text-salmon-500'>
          <span>Apples</span>
          <span>Consulting</span>
          <span>Sausages</span>
          <span>Schampoo</span>
          <span>Milk</span>
          <span>Eggs</span>
        </div>
      </div>
    </div>
  )
}