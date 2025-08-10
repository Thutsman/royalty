import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: `Projects — ${siteConfig.companyName}`,
  description: "Portfolio of civil engineering projects across South Africa.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="container pt-16 md:pt-24">
        <h1 className="text-3xl md:text-4xl font-semibold">Projects</h1>
        <p className="text-white/80 mt-3 max-w-3xl">
          Selected projects showcasing our engineering capabilities and community impact.
        </p>
      </section>
      <ProjectsShowcase />
    </main>
  );
}


