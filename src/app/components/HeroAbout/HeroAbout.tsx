import Image from 'next/legacy/image'

export default function HeroAbout() {
  return (
    <main className="box-content pt-60 px-10 lg:px-14 text-aubergine-500 border-b-2 border-salmon-500">
      <h2 className="text-5xl mb-20">Våra tjänster</h2>
      <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2  items-center">
        <div className="">
          <Image
            src="/photo.jpg"
            alt="Image of grocery store check-out"
            width={2940}
            height={1960}
            className="rounded-3xl"
          />
        </div>
        <div className=" lg:px-16 flex gap-5 flex-col">
          <p>
            About specialiserar sig på projekt, interimslösningar samt
            kompetensutveckling inom retail och dagligvaruhandeln.
          </p>
          <p>
            Med mångårig erfarenhet från dagligvarukedjor, leverantörer och
            restauranger har vi en omfattande och djupgående förståelse för de
            unika utmaningar, men också möjligheter, som branschen varje dag
            ställs inför.
          </p>
          <p>
            Tillsammans med våra kunder skapar vi värde och driver innovation i
            en snabbrörlig och konsumentnära värld.
          </p>
        </div>
      </div>
      <h2 className="lg:mt-20 lg:mb-5 text-center">Våra expertisområden:</h2>
    </main>
  )
}
