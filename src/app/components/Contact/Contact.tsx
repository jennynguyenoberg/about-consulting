'use client'
import { useState, FormEvent } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or API key not provided.');
}

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from('contacts').insert([
        { name, email, message },
      ]);

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', data);
        // Clear the form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error connecting to Supabase:', error);
    }
  };

  return (
    <div className='text-aubergine-500'>
      <h2>Kontakta oss</h2>
      <p className=''>{`
        Vill du veta mer om våra tjänster eller har övriga frågor? Skicka iväg ett meddelande så svarar vi så snart vi kan!
      `}
      </p>
      <form onSubmit={handleSubmit}>
        <div className=''>
          <label htmlFor="name">Namn</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder='Anna Andersson'
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className=''>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder='din@adress.se'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className=''>
          <label htmlFor="message">Meddelande</label>
          <textarea
            id="message"
            value={message}
            placeholder='Skriv ditt meddelande'
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className=''>
          <button
            className=""
            type="submit"
            disabled={submitted}>
            {submitted ? 'Skickat' : 'Skicka'}
          </button>
          {/* <div>
            {submitted && <p className=''>✔ Tack för ditt meddelande. Vi svarar så snart vi kan!</p>}
          </div> */}
        </div>
      </form>
    </div>
  );
}
