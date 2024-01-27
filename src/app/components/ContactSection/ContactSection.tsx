import Image from "next/legacy/image";
import ContactForm from "../ContactForm/ContactForm";

export default function ContactSection() {
  return (
    <section className="flex my-36 mx-14 gap-32">
      <div className="w-1/2 relative">
        <div className="w-full h-0" style={{ paddingBottom: "100%", position: "relative" }}>
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden rounded-3xl">
            <Image src="/photo2.jpg" alt="Image of dairy aisle" layout="fill" objectFit="cover" className="rounded-3xl" priority={true}/>
          </div>
        </div>
      </div>
      <div className="w-1/2 mr-20">
        <ContactForm />
      </div>
    </section>
  );
}
