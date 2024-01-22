import Image from "next/image";
import CTA from "../CTA/CTA";

export default function Vision() {
  return (
    <section>
      <div className="flex text-aubergine-500 justify-center items-center border-b-2 border-salmon-500">
        <div className="py-36 px-36 w-1/2 bg-salmon-500 text-center flex items-center flex-col">
          <Image src="/marika_profile.jpg" alt="Profile image of Marika Hjorth" width={135} height={135} className="rounded-full" />
          <p className="text-5xl mt-5">
            "Lorum ipsum<em> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</em>"
          </p>
          <h4 className="pt-10">— Marika Hjorth, Medgrundare & VD</h4>
        </div>
        <div className="px-24 w-1/2 flex gap-15 flex-col">
          <h4>Hur vi jobbar</h4>
          <p className="text-3xl mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          <h4>Vår approach</h4>
          <p className="text-3xl">Diam donec adipiscing tristique risus nec fe ugiat inquam vulputate dignissim.</p>
        </div>
      </div>
      <CTA />
    </section>
  )
}