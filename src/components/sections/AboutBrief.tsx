import { siteConfig } from "@/lib/siteConfig";
import { Shield, Award, Leaf, Lightbulb, Users } from "lucide-react";

export default function AboutBrief() {
  return (
    <section className="container py-16 md:py-24">
      <h2 className="heading text-2xl md:text-3xl font-semibold">About Us</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <p className="subtle leading-relaxed">
          {siteConfig.description}
        </p>
        <div>
          <h3 className="font-medium">Core Values</h3>
          <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
            <div className="card p-3 flex items-center gap-2"><Shield className="text-[--rcp-primary]" size={18}/> Professional Integrity</div>
            <div className="card p-3 flex items-center gap-2"><Award className="text-[--rcp-primary]" size={18}/> Commitment to Excellence</div>
            <div className="card p-3 flex items-center gap-2"><Leaf className="text-[--rcp-primary]" size={18}/> Safety & Sustainability</div>
            <div className="card p-3 flex items-center gap-2"><Lightbulb className="text-[--rcp-primary]" size={18}/> Innovation</div>
            <div className="card p-3 flex items-center gap-2"><Users className="text-[--rcp-primary]" size={18}/> Empowerment & Skills Development</div>
          </div>
        </div>
      </div>
    </section>
  );
}


