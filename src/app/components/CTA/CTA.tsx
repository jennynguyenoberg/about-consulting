import Link from "next/link";

export default function CTA() { 
  return (
    <section className="p-20 lg:mt-28 lg:py-40 lg:px-96 text-aubergine-500 text-center bg-[url('/logo_gradient.svg')]">
      <em className="text-5xl lg:text-7xl">Nyfiken på vad About kan göra för ditt bolag?</em>
      <p className="mt-10 lg:mt-10 lg:mx-36">Läs mer om våra tjänster <Link className="underline" href="/tjanster">här.</Link></p>
    </section>
  )
}
