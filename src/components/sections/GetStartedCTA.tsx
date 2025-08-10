import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function GetStartedCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[color:var(--background-soft)] to-white border-t border-[color:rgba(2,6,23,0.06)]">
      <div className="container text-center">
        <h2 className="heading text-2xl md:text-3xl font-semibold">Ready to start your next infrastructure project?</h2>
        <p className="subtle mt-2 max-w-2xl mx-auto">Speak with our certified engineers for a tailored consultation and quote.</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button asChild size="lg" variant="accent">
            <Link href="/contact">Request Consultation</Link>
          </Button>
          <a href="tel:+27696169207" className="text-[--rcp-primary] hover:underline">Or call +27 696169207</a>
        </div>
      </div>
    </section>
  );
}


