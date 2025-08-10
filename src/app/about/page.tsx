import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: `About — ${siteConfig.companyName}`,
  description: siteConfig.description,
};

export default function AboutPage() {
  return (
    <main className="container py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-semibold">About Us</h1>
      <p className="text-white/80 mt-4 max-w-3xl">
        {siteConfig.companyName} is a proudly South African civil engineering company founded to elevate infrastructure development through innovation, reliability, and integrity. We serve private, public, and industrial sectors with comprehensive engineering solutions.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="border border-white/10 rounded-lg p-5 bg-white/5">
          <h3 className="font-medium">Vision</h3>
          <p className="text-sm text-white/80 mt-2">
            To be a trusted engineering partner driving transformative development across Southern Africa.
          </p>
        </div>
        <div className="border border-white/10 rounded-lg p-5 bg-white/5">
          <h3 className="font-medium">Mission</h3>
          <p className="text-sm text-white/80 mt-2">
            To deliver high-quality, cost-effective infrastructure solutions that exceed client expectations.
          </p>
        </div>
        <div className="border border-white/10 rounded-lg p-5 bg-white/5">
          <h3 className="font-medium">Core Values</h3>
          <ul className="text-sm text-white/80 mt-2 space-y-1">
            {siteConfig.values.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Our Expertise</h2>
        <ul className="list-disc pl-6 text-white/80 mt-3 space-y-1">
          <li>Water infrastructure: Potable pipe reticulation</li>
          <li>Concrete works and filling</li>
          <li>Urban development support</li>
          <li>Certification-ready processes</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Social Impact</h2>
        <p className="text-white/80 mt-2 max-w-3xl">
          We empower local workers through skills development and promote safety and trust in construction practices across our projects.
        </p>
      </section>
    </main>
  );
}


