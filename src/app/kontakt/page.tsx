// import CTAContactSection from "../components/CTAContact/CTAContact"
import ContactSection from '../components/ContactSection/ContactSection'
import HeroContact from '../components/HeroContact/HeroContact'

export const metadata = {
  title: 'Kontakt',
  // description: "",
}

export default function Kontakt() {
  return (
    <main>
      <HeroContact />
      {/* <CTAContactSection /> */}
      <ContactSection />
    </main>
  )
}
