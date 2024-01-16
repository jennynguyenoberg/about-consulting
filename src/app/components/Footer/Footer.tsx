import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-aubergine-500 text-salmon-500 px-11 py-14">
      <div className="pb-40">
        <Image src="/logomark.svg" alt="Logo" width={62} height={62} />
      </div>

      <div className="flex justify-between">
        <div>
          <h3 className="mb-3">About consulting</h3>
          <p>Taking FMCG to the next level</p>
          <p>Local time 15:07</p>
          <p>© 2024 About Consulting. All Rights Reserved.</p>
        </div>
        
        <div>
          <h3 className="mb-3">Tjänster</h3>
          <ul>
            <li>Projekt</li>
            <li>Interimlösningar</li>
            <li>Utbildningar</li>
            <li>Workshop</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3">Social</h3>
          <ul>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3">Nyhetsbrev</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>

        </div>
      </div>
    </footer>
  )
}