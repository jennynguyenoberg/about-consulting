'use client'
import { useEffect } from 'react'

export default function CTAContactSection() {
  const email = 'info@aboutconsulting.se'

  useEffect(() => {
    const handleContactButtonClick = () => {
      window.location.href = `mailto:${email}`
    }

    const buttons = document.querySelectorAll('.contactButton')
    buttons.forEach((button) => {
      button.addEventListener('click', handleContactButtonClick)
    })

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', handleContactButtonClick)
      })
    }
  }, [])

  return (
    <section className="text-aubergine-500 grid grid-cols-3 gap-4 border-b-2 border-salmon-500">
      <div className="pl-10 pr-16 pt-24 pb-36 border-2 border-apricot-500 border-r-salmon-500 h-full">
        <h2 className="mb-20">
          Behöver du mer information kring våra tjänster?
        </h2>
        <p>
          Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Praesent
          semper feugiat nibh sed pulvinar proin gravida. Venenatis a
          condimentum vitae sapien.
        </p>
        <button
          id="contactButton1"
          className="contactButton relative top-14 text-aubergine-500 px-12 py-1 border-aubergine-500 border-solid border-2 rounded-xl hover:bg-aubergine-500 hover:text-apricot-500"
        >
          Fråga oss
        </button>
      </div>
      <div className="pl-10 pr-16 pt-24 pb-36 border-2 border-apricot-500 border-r-salmon-500 h-full">
        <h2 className="mb-20">Är du butiksägare eller distributör?</h2>
        <p>
          {' '}
          Massa ultricies mi quis hendrerit dolor magna eget est lorem. Massa
          vitae tortor condimentum lacinia. Velit sed ullamcorper morbi
          tincidunt ornare massa.
        </p>
        <button
          id="contactButton2"
          className="contactButton relative top-20 text-aubergine-500 px-12 py-1 border-aubergine-500 border-solid border-2 rounded-xl hover:bg-aubergine-500 hover:text-apricot-500"
        >
          Kontakta oss
        </button>
      </div>
      <div className="pl-10 pr-16 pt-24 pb-36">
        <h2 className="mb-20">Behöver du XXXXX eller XXXXXX?</h2>
        <p>
          Diam ut venenatis tellus in metus vulputate eu. Scelerisque varius
          morbi enim nunc faucibus. Dictum sit amet justo donec enim diam
          vulputate ut.
        </p>
        <button
          id="contactButton3"
          className="contactButton relative top-20 text-aubergine-500 px-12 py-1 border-aubergine-500 border-solid border-2 rounded-xl hover:bg-aubergine-500 hover:text-apricot-500"
        >
          Få hjälp
        </button>
      </div>
    </section>
  )
}
