export default function USPs() { 
  return (
    <section className="grid grid-cols-1 gap-4 border-t-2 border-b-2 border-salmon-500 lg:grid-cols-3">
      <div className="pl-10 py-20 border-b-2 border-salmon-500 border-r-salmon-500 h-full lg:border-b-0 lg:border-r-2">
        <h4 className="text-salmon-500 pb-5">01.</h4>
        <h2 className="text-aubergine-500">Sortiment &<br />Inköp</h2>
      </div>
      <div className="pl-10 py-20 border-b-2 border-salmon-500 border-r-salmon-500 h-full lg:border-b-0 lg:border-r-2">
        <h4 className="text-salmon-500 pb-5">02.</h4>
        <h2 className="text-aubergine-500">Kvalitet &<br />hållbarhet</h2>
      </div>
      <div className="pl-10 py-20">
        <h4 className="text-salmon-500 pb-5">03.</h4>
        <h2 className="text-aubergine-500">Försäljning &<br />marknad</h2>
      </div>  
    </section>
  )
}
