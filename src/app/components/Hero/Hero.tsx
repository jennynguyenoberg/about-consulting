import Image from "next/image";
import RotatingWords from "../RotatingWords/RotatingWords";

export default function Hero() { 
  return (
    <div>
      <section className="h-screen flex justify-center items-center bg-[url('/bkg.svg')] border-b-2 border-salmon-500">
        <RotatingWords />
      </section>
    </div>
  )
}