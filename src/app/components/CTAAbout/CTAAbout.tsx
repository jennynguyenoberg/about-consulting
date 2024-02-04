import Link from 'next/link'

export default function CTAAbout() {
  return (
    <section className="flex flex-col gap-5 py-20 px-10 lg:mt-28 lg:py-40 lg:px-96 text-dove-500 text-center bg-kale-500">
      <em className="text-4xl lg:text-7xl">
        Upptäck hur About kan förändra ditt företag
      </em>
      <div className="my-8">
        <p>Är du nyfiken på hur About kan ta ditt företag till nya höjder?</p>
        <p>Kom i kontakt med oss och utforska möjligheterna tillsammans.</p>
      </div>
      <Link href="/kontakt">
        <button className="text-dove-500 px-12 py-1 border-dove-500 border-solid border-2 rounded-xl hover:bg-dove-500 hover:text-kale-500">
          <h4>Kontakt</h4>
        </button>
      </Link>
    </section>
  )
}
