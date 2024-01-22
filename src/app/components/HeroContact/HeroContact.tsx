'use client'
import Image from "next/image"
import { useEffect } from "react";

export default function HeroContact() {
  const email = "marika.hjorth@aboutconsulting.se";

  useEffect(() => {
    const handleContactButtonClick = () => {
      window.location.href = `mailto:${email}`;
    };

    const button = document.getElementById("contactButton");
    if (button) {
      button.addEventListener("click", handleContactButtonClick);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handleContactButtonClick);
      }
    };
  }, []);

  return (
    <main className='text-aubergine-500 border-b-2 border-salmon-500'>
      <div>
        <h2 className="pt-60 px-14 text-5xl mb-20">Kontakt</h2>
      </div>
      <div className="py-20 bg-salmon-500 flex justify-center items-center">
        <div className="w-1/2 flex justify-center items-center">
          <Image src="/marika_profile.jpg" alt="Profile image of Marika Hjorth" width={350} height={350} className="rounded-full flex items-center" />
        </div>
        <div className="w-1/2 flex flex-col items-start pr-36">
          <h2>Marika Hjorth</h2>
          <em className='text-xl mb-5'>Medgrundare & VD</em>
          <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <button id="contactButton" className="underline">
            Kontakta mig
          </button>
        </div>
      </div>
    </main>
  )
}