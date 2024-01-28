export default function USPAbout() { 
  return (
    <section className="text-aubergine-500 grid grid-cols-1 gap-4 border-b-2 border-salmon-500 lg:grid-cols-3">
      <div className="pl-10 pr-16 py-20 border-b-2 border-salmon-500 border-r-salmon-500 h-full lg:border-b-0 lg:border-r-2">
        <h4 className="text-salmon-500 pb-5">01.</h4>
        <h2 className="mb-20">Sortiment &<br />Inköp</h2>
        <p>
          Sortiment- & inköpsstrategi, prisstrategi, marknadsanalys, Category Management, produktutveckling, private Label 360-lansering, <br/>inköp och förhandling, organisation.
        </p>
      </div>
      <div className="pl-10 pr-16 py-20 border-b-2 border-salmon-500 border-r-salmon-500 h-full lg:border-b-0 lg:border-r-2">
        <h4 className="text-salmon-500 pb-5">02.</h4>
        <h2 className="mb-20">Kvalitet &<br />hållbarhet</h2>
        <p>
          Kvalitet & livsmedelshygien, revision & revisionsteknik, hållbarhetsstrategi, lagstiftning, kris- och mediahantering.
        </p>
      </div>
      <div className="pl-10 pr-16 py-20">
        <h4 className="text-salmon-500 pb-5">03.</h4>
        <h2 className="mb-20">Försäljning &<br />marknad</h2>
        <p>
          Visual merchandising, shopper marketing, konceptutveckling  och innovation.
        </p>
      </div>  
    </section>
  )
}
