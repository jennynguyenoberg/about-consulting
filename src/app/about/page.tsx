import HeroAbout from "../components/HeroAbout/HeroAbout"
import USPAbout from "../components/USPAbout/USPAbout"

export const metadata = {
  title: 'About',
  // description: "",
}

export default function About() { 
  return (
    <main>
      <HeroAbout />
      <USPAbout />
    </main>
  )
}