'use client'
import Image from "next/legacy/image"
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
      <div className="grid grid-cols-1 lg:grid-cols-2 py-20 px-10 lg:py-20 gap-16 bg-salmon-500 justify-center items-center">
        <div className="flex justify-center items-center">
          <Image src="/marika_profile.jpg" alt="Profile image of Marika Hjorth" width={350} height={350} className="rounded-full flex items-center" priority={true}/>
        </div>
        <div className="flex flex-col items-start lg:pr-36">
          <h2>Marika Hjorth</h2>
          <em className='text-xl mb-5'>Medgrundare & VD</em>
          <p className="text-xl mb-8">Strateg och grundare med en omfattande meritlista inom FMCG, ledarskap och strategisk tillväxt. Tidigare erfarenhet som sortiment- och inköpschef på den snabbväxande startupen Kavall samt mångårig erfarenhet av inköp, Category Management, produktutveckling och teamledning på bolag som Lidl och ICA.</p>
          <p className="text-xl mb-8">Marika är också "about" sin familj och cocker spanieln Madde, att sjunga och upptäcka världens alla hörn!</p>
          <button id="contactButton" className="underline">
            Kontakta mig
          </button>
        </div>
      </div>
    </main>
  )
}
