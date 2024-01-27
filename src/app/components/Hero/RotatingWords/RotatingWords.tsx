import styles from './RotatingWords.module.css'

export default function RotatingWords() { 
  return (
    <div className={styles.wrapper}>
      <h1 className='text-aubergine-500'>About</h1>
      <div className={styles.words}>
        <div className='text-salmon-500'>
          <h1>Apples</h1>
          <h1>Sausages</h1>
          <h1>Consulting</h1>
          <h1>Schampoo</h1>
          <h1>Milk</h1>
          <h1>Eggs</h1>
        </div>
      </div>
    </div>
  )
}
