import Link from "next/link";

export default function CTAAbout() { 
  return (
    <section className="py-40 px-96 text-dove-500 text-center bg-kale-500">
      <em className="text-7xl">Nyfiken på vad About kan göra för ditt bolag?</em>
      <p className="mt-10 mx-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  enim ad minim <span className="underline">
        <Link href="/kontakt">Kontakta oss.</Link>
        </span>
      </p>
    </section>
  )
}