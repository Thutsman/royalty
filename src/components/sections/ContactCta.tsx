import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ContactCta() {
  return (
    <section className="py-20 border-t border-[color:rgba(2,6,23,0.06)] bg-gradient-to-b from-[color:var(--background-soft)] to-white">
      <div className="container text-center">
        <h2 className="heading text-2xl md:text-3xl font-semibold">Ready to build?</h2>
        <p className="subtle mt-2 max-w-2xl mx-auto">
          Speak to our civil engineering team for a tailored solution and a quick, professional quote.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" variant="accent">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}


