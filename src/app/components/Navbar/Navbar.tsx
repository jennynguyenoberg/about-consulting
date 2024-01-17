import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='fixed w-full bg-apricot-500 z-50'>
      <div className="px-11 py-5 flex justify-between border-b-2 border-salmon-500 gap-16">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={62} height={62} />
          </Link>
        </div>

        <div className="flex items-center gap-16">
          <div>
            <Link href="/about">
              <h4 className="text-aubergine-500 hover:underline">About</h4>
            </Link>
          </div>

          {/* <div>
            <Link href="/cases">
              <h4 className="text-aubergine-500 hover:underline">Cases</h4>
            </Link>
          </div> */}

          {/* <div>
            <Link href="/faq">
              <h4 className="text-aubergine-500 hover:underline">FAQ</h4>
            </Link>
          </div> */}

          <div>
            <Link href="/kontakt">
              <button className="text-aubergine-500 px-12 py-3 border-aubergine-500 border-solid border-2 rounded-2xl hover:bg-aubergine-500 hover:text-apricot-500">
                <h4>Kontakt</h4>
              </button>
            </Link>
          </div>

          <div>
            <Image src="/hamburger.svg" alt="Menu" width={18} height={18} />
          </div>
        </div>
      </div>
    </nav>
  )
}
