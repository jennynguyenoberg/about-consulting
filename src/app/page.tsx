import Hero from './components/Hero/Hero'
import ImageCarousel from './components/ImageCarousel/ImageCarousel'
import USPs from './components/USPs/USPs'

export default function Home() {
  return (
    <main className='pt-28'>
      <div>
        <Hero />
        <USPs />
        <ImageCarousel />
      </div>
    </main>
  )
}
