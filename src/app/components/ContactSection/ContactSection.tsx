import Image from 'next/legacy/image'
import ContactForm from '../ContactForm/ContactForm'

export default function ContactSection() {
  return (
    <section className="grid grid-cols-1 py-12 px-10 lg:my-36 lg:mx-14 gap-32 lg:grid-cols-2 items-center justify-center">
      <div className="">
        <div
          className=""
          style={{ paddingBottom: '100%', position: 'relative' }}
        >
          <Image
            src="/photo2.jpg"
            alt="Image of dairy aisle"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
            priority={true}
          />
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </section>
  )
}
