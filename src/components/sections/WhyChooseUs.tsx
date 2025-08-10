import { CheckCircle2, Shield, Clock, Handshake } from "lucide-react";

const items = [
  { icon: CheckCircle2, title: "Quality Assured", desc: "Certification-ready processes and rigorous QA/QC." },
  { icon: Shield, title: "Safety First", desc: "Compliance with industry safety standards." },
  { icon: Clock, title: "On-Time Delivery", desc: "Efficient coordination and project management." },
  { icon: Handshake, title: "Trusted Partner", desc: "Reliable relationships with clients and subcontractors." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <h2 className="section-title text-2xl md:text-3xl">Why Choose Us</h2>
        <p className="subtle mt-2 max-w-2xl">Key differentiators that set us apart in civil engineering delivery.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center p-6">
              <Icon className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <div className="text-lg font-bold text-gray-800 mb-2">{title}</div>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


