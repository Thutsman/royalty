import { siteConfig } from "@/lib/siteConfig";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: `Contact — ${siteConfig.companyName}`,
  description: "Get a quote or speak to our engineering team.",
};

export default function ContactPage() {
  return (
    <main className="container py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-semibold">Contact Us</h1>
      <p className="text-white/80 mt-3 max-w-3xl">
        We typically respond within one business day.
      </p>
      <ContactForm />

      <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm text-white/80">
        <div className="border border-white/10 rounded-lg p-5 bg-white/5">
          <div className="font-medium">Email</div>
          <div className="mt-1"><a className="underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div>
        </div>
        <div className="border border-white/10 rounded-lg p-5 bg-white/5">
          <div className="font-medium">Phone</div>
          <div className="mt-1"><a className="underline" href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, '')}`}>{siteConfig.contact.phone}</a></div>
        </div>
        <div className="border border-white/10 rounded-lg p-5 bg-white/5">
          <div className="font-medium">Region</div>
          <div className="mt-1">Gauteng & Mpumalanga, South Africa</div>
        </div>
      </div>
    </main>
  );
}


