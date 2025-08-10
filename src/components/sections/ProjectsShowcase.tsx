import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

export default function ProjectsShowcase() {
  return (
    <section className="container py-20">
      <h2 className="section-title text-2xl md:text-3xl">Recent Projects</h2>
      <p className="subtle mt-2 max-w-2xl">
        A snapshot of our impact across communities and developments.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {siteConfig.projects.map((p) => (
          <article key={p.title} className="card overflow-hidden group">
            <div className="aspect-video relative">
              <Image
                src={p.image}
                alt={`${p.title} project illustration`}
                fill
                className="object-cover transition-transform group-hover:scale-[1.02]"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
            <div className="p-4">
              <div className="font-medium text-[color:var(--foreground)]">{p.title}</div>
              <p className="text-sm subtle mt-1">{p.summary}</p>
              <Link href="/projects" className="inline-block mt-3 text-[--rcp-primary] hover:underline">View Details →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


