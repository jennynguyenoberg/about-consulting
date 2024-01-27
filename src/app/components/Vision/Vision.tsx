import Image from "next/image";

export default function Vision() {
  return (
    <section>
      <div className="flex text-aubergine-500 justify-center items-center border-b-2 border-salmon-500">
        <div className="py-36 px-28 w-1/2 bg-salmon-500 text-center flex items-center flex-col">
          <Image src="/marika_profile.jpg" alt="Profile image of Marika Hjorth" width={135} height={135} className="rounded-full" />
          <p className="text-5xl mt-5">
            "Vi älskar<em> att driva affärer inom ett område som vi personligen brinner för och About är med dig från idé till lönsamhet..</em>"
          </p>
          <h4 className="pt-10">— Marika Hjorth, Medgrundare & VD</h4>
        </div>
        <div className="px-24 w-1/2 flex gap-8 flex-col">
          <h4>Vårt team</h4>
          <p className="text-3xl mb-16">Mer än ett konsultbolag. Ett team, vars erbjudande är unikt i sin klass. Vi har gedigen erfarenhet av FMCG och retail, allt från tuffa förhandlingar till hur du syns bäst i butikshyllan. Dessutom garanterat vi 100% härlig energi.</p>
          <h4>Vårt mål</h4>
          <p className="text-3xl">About ska vara den självklara partnern för varumärken inom FMCG och retail som vill driva innovation och lönsamma affärer.</p>
        </div>
      </div>
    </section>
  )
}