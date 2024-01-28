'use client'
import { useState, FormEvent, useEffect } from 'react'
import { format } from 'date-fns'
import { supabase } from '../../utils/supabase'
import Image from 'next/legacy/image'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState<string>('')
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [localTime, setLocalTime] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const { data, error } = await supabase
        .from('contact-footer')
        .insert([{ email }])

      if (error) {
        console.error('Error inserting data:', error)
      } else {
        console.log('Data inserted successfully:', data)
        setEmail('')
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Error connecting to Supabase:', error)
    }
  }

  useEffect(() => {
    // Function to update the local time
    const updateLocalTime = () => {
      const localTimeString = format(new Date(), 'HH:mm', {
        timeZone: 'Europe/Stockholm',
      } as any)
      setLocalTime(localTimeString)
    }
    // Update the local time initially
    updateLocalTime()

    // Update the local time every minute
    const intervalId = setInterval(updateLocalTime, 60000)

    // Clear the interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <footer className="bg-aubergine-500 text-salmon-500 p-14">
      <div className="pb-40">
        <Image src="/logomark.svg" alt="Logomark" width={62} height={62} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="flex flex-col justify-between gap-16">
          <div>
            <h3 className="mb-2">About consulting</h3>
            {/* <p>Taking FMCG to the next level</p> */}
          </div>
          <div>
            <ul>
              <li>Lokal tid Stockholm {localTime}</li>
              <li>© 2024 About Consulting. All Rights Reserved.</li>
            </ul>
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
              <Link
                href={'https://www.instagram.com/aboutconsulting.se/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </li>
            <li className="hover:underline">
              <Link
                href={'https://www.linkedin.com/company/about-consulting-ab/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2">Bli kontaktad</h3>
          <ul>
            <li className="mb-14">Ska vi kontakta dig?</li>
          </ul>
          <div>
            <form
              className="space-y-6 flex items-center"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="mt-6">
                  <input
                    className="pr-40 lg:pr-20 border-b-2 focus:outline-none placeholder:text-salmon-500 bg-aubergine-500"
                    type="email"
                    id="email"
                    value={email}
                    placeholder="din@adress.se"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  className="w-full py-0 px-0 border-b-2 bg-aubergine-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-salmon-500"
                  type="submit"
                  disabled={submitted}
                >
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
