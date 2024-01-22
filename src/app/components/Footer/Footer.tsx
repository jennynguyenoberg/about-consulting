'use client'
import { useState, FormEvent } from 'react';
import Image from "next/image";
import Link from "next/link";
import { supabase } from "../../utils/supabase"; // Adjust the path accordingly

export default function Footer() {
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from('contact-footer').insert([
        { email },
      ]);

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', data);
        setEmail('');
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error connecting to Supabase:', error);
    }
  };

  return (
    <footer className="bg-aubergine-500 text-salmon-500 px-14 py-14">
      <div className="pb-40">
        <Image src="/logomark.svg" alt="Logomark" width={62} height={62} />
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col justify-between gap-16">
          <div>
            <h3 className="mb-2">About consulting</h3>
            <p>Taking FMCG to the next level</p>
          </div>
          <div>
            <p>Lokal tid Stockholm 15:07</p>
            <p>© 2024 About Consulting. All Rights Reserved.</p>
          </div>
        </div>
        
        <div>
          <h3 className="mb-2">Tjänster</h3>
          <ul>
            <li>Projekt</li>
            <li>Interimlösningar</li>
            <li>Utbildningar</li>
            <li>Workshop</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2">Socials</h3>
          <ul>
            <li className="hover:underline">
              <Link href={'https://www.instagram.com/aboutconsulting.se/'} target="_blank" rel="noopener noreferrer">
                Instagram
              </Link>
            </li>
            <li className="hover:underline">
              <Link href={'https://www.linkedin.com/company/about-consulting-ab/'} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2">Bli kontaktad</h3>
          <p className="mb-14">Ska vi kontakta dig?</p>
          <div>
            <form className="space-y-6 flex items-center" onSubmit={handleSubmit}>
              <div>
                <div className="mt-6">
                  <input
                    className="pr-28 border-b-2 focus:outline-none placeholder:text-salmon-500 bg-aubergine-500"
                    type="email"
                    id="email"
                    value={email}
                    placeholder='din@adress.se'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
              <button
                className="w-full py-0 px-0 border-b-2 bg-aubergine-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-salmon-500"
                type="submit"
                disabled={submitted}>
                {submitted ? 'Skickat ✔' : 'Skicka'}
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
