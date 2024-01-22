import Contact from "../components/Contact/Contact"
import HeroAbout from "../components/HeroAbout/HeroAbout"
import USPAbout from "../components/USPAbout/USPAbout"
import Vision from "../components/Vision/Vision"

export const metadata = {
  title: 'About',
  // description: "",
}

export default function About() { 
  return (
    <main>
      <HeroAbout />
      <USPAbout />
      <Vision />
      <Contact />
    </main>
  )
}