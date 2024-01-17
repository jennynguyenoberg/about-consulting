import Image from "next/image";

export default function Hero() { 
  return (
    <div>
      <section>
        <Image
          src="/bkg.svg"
          alt="Background"
          width={1500}
          height={62}
          className="relative w-full z-0 border-b-2 border-salmon-500"
          />
        <div className='mx-48 absolute bottom-44 text-aubergine-500 flex flex-col justify-items-center'>
          <div className="flex gap-7">
            <h1>About</h1>
            <h1 className="text-salmon-500">Consulting</h1>
          </div>
        </div>
      </section>
    </div>
  )
}