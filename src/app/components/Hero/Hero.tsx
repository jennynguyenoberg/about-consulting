import Image from "next/image";

export default function Hero() { 
  return (
    <div>
      <section className="h-screen flex justify-center items-center bg-[url('/bkg.svg')] border-b-2 border-salmon-500">
        <div>
          <div className="flex gap-7">
            <h1 className='text-aubergine-500'>About</h1>
            <h1 className="text-salmon-500">Consulting</h1>
          </div>
        </div>
      </section>
    </div>
  )
}