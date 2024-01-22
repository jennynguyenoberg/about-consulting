import Link from "next/link";

export default function CTA() { 
  return (
    <section className="mt-28 py-40 px-96 text-aubergine-500 text-center bg-[url('/logo_gradient.svg')]">
      <em className="text-7xl">Nyfiken på vad About kan göra för ditt bolag?</em>
      <p className="mt-10 mx-36">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  enim ad minim <span className="underline">
        <Link href="/about">Om oss.</Link>
        </span>
      </p>
    </section>
  )
}
