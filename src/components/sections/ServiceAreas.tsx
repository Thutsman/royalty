import Image from "next/image";

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title text-2xl md:text-3xl">Service Areas</h2>
        <p className="subtle mt-2 max-w-2xl">We operate across Gauteng and Mpumalanga, with capacity to scale across Southern Africa.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6 items-center">
          <div className="card p-4">
            <iframe
              title="Google Map of Gauteng and Mpumalanga"
              aria-label="Google Map showing Royalty Consulting service locations in Gauteng and Mpumalanga"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[360px] rounded-md border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5746175.892590702!2d25.17578125!3d-26.2707607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a50f8e4b8f1f%3A0x9a7d5fba0a8c9b6!2sGauteng!5e0!3m2!1sen!2sza!4v1700000000000"></iframe>
          </div>
          <ul className="grid gap-3 text-sm">
            <li className="card p-3">Gauteng: Johannesburg, Pretoria, Ekurhuleni</li>
            <li className="card p-3">Mpumalanga: eMalahleni, Mbombela, Secunda</li>
            <li className="card p-3">Adjacent regions serviced on request</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


