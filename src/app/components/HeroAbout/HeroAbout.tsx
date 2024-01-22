import Image from "next/image"

export default function HeroAbout() {
  return (
    <main className='pt-60 px-14 text-aubergine-500 border-b-2 border-salmon-500'>
      <h2 className="text-5xl mb-20">Våra tjänster</h2>
      <div className="flex gap-20 justify-center items-center">
        <div className="w-1/2">
          <Image src="/photo.jpg" alt="Logo" width={700} height={162} className="rounded-3xl" />
        </div>
        <div className="w-1/2 pr-10 flex gap-5 flex-col">
          <p>Vi specialicerar på projekt, interimslöningar samt utbildningar & workshops för dagligvaruhandeln och retailsektorn. </p>
          <p>Med xx års erfarenhet från dagligvarukedjor, leverantörssidan och restaurang har vi en djup och full förståelse för branschen och de utmaningar olika spelare kan ha. </p>
          <p>Tillsammans med våra kunder skapar vi värde, lönsamhet och driver innovation i en snabbrörlig värld!</p>
        </div>
      </div>
      <h2 className="mt-20 mb-5 text-center">Våra expertisområden:</h2>
    </main>
  )
}