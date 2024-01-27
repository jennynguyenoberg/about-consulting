import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import Head from 'next/head'
import '../globals.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const syne = Syne({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'About Consulting',
  description: `
    Din nyckel till framgång inom retail och dagligvaruhandeln. Vi fokuserar på projekt, interimslösningar och kompetensutveckling med djup erfarenhet från branschen.
  `,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={syne.className}>
        <div className="bg-apricot-500 selection:bg-salmon-300">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
