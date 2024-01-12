import Image from "next/image";
import Link from "next/link";

export default function Navbar() { 
  return (
    <nav>
      <div>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={62} height={62} />
        </Link>
      </div>
      <div>
        <Link href="/about">
          <h3 className="text-aubergine-500">About</h3>
        </Link>
      </div>
      <div>
        <Link href="/cases">
          <h3 className="text-aubergine-500">Cases</h3>
        </Link>
      </div>
      <div>
        <Link href="/faq">
          <h3 className="text-aubergine-500">FAQ</h3>
        </Link>
      </div>
      <div>
        <Link href="/kontakt">
          <button className="text-aubergine-500 px-12 py-3 border-aubergine-500 border-solid border-2 rounded-2xl hover:bg-aubergine-500 hover:text-apricot-500">
            <h3>Kontakt</h3>
          </button>
        </Link>
      </div>
    </nav>
  )
}
