import { Droplets, Landmark, ClipboardCheck, Workflow } from "lucide-react";

const items = [
  {
    icon: Droplets,
    title: "Water Infrastructure & Pipe Reticulation",
    desc: "Potable water systems engineered for reliability and compliance.",
  },
  {
    icon: Landmark,
    title: "Concrete Works & Urban Development",
    desc: "Formwork, foundations, and support for urban growth projects.",
  },
  {
    icon: Workflow,
    title: "Project Management & Coordination",
    desc: "Efficient planning and stakeholder coordination for on-time delivery.",
  },
  {
    icon: ClipboardCheck,
    title: "Certification & Compliance",
    desc: "Certification-ready documentation and QA/QC processes.",
  },
];

export default function Expertise() {
  return (
    <section className="container py-16 md:py-24">
      <h2 className="section-title text-2xl md:text-3xl">Our Expertise</h2>
      <p className="subtle mt-2 max-w-2xl">Deep technical expertise across core civil engineering disciplines.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="card p-5 card-hover">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[--rcp-primary]"><Icon size={18} /></span>
            <div className="font-medium mt-2 text-[color:var(--foreground)]">{title}</div>
            <p className="text-sm subtle mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


