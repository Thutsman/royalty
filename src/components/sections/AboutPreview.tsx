import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-[linear-gradient(180deg,var(--background-alt),#fff)]">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="section-title text-2xl md:text-3xl">About Us</h2>
          <p className="subtle mt-3 max-w-2xl">
            Founded to elevate South African infrastructure development, Royal Consulting and Projects delivers high-quality, cost-effective civil engineering solutions with a focus on safety, reliability, and innovation.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-6 text-sm">
            <div className="card p-4"><span className="font-semibold text-[--rcp-primary]">Mission</span><p className="subtle mt-1">Exceed client expectations through excellence and value.</p></div>
            <div className="card p-4"><span className="font-semibold text-[--rcp-primary]">Vision</span><p className="subtle mt-1">Drive transformative development across Southern Africa.</p></div>
          </div>
          <Button asChild className="mt-6" variant="primary">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
        <div className="card p-6">
          <div className="text-lg font-semibold text-[color:var(--foreground)]">Value Proposition</div>
          <ul className="list-disc pl-5 subtle mt-2 space-y-1">
            <li>Certified engineers and rigorous QA/QC processes</li>
            <li>Proven delivery in Gauteng and Mpumalanga</li>
            <li>End-to-end project management and coordination</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


