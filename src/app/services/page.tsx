import Services from "@/components/sections/Services";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: `Services — ${siteConfig.companyName}`,
  description: "Comprehensive civil engineering and construction services across Gauteng and Mpumalanga.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="container pt-16 md:pt-24">
        <h1 className="text-3xl md:text-4xl font-semibold">Our Services</h1>
        <p className="text-white/80 mt-3 max-w-3xl">
          From project management to engineering designs and labour supply, we partner with clients to deliver reliable infrastructure.
        </p>
      </section>
      <Services />
    </main>
  );
}


