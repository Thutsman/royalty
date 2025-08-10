import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";
import {
  HardHat,
  FileText,
  Building2,
  Users,
  Workflow,
  Scale,
  Droplets,
  Layers,
  Ruler,
  Road,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

export default function Services() {
  return (
    <section className="container py-20">
      <h2 className="section-title text-2xl md:text-3xl">Services</h2>
      <p className="subtle mt-2 max-w-2xl">
        Comprehensive engineering and construction solutions across Gauteng and Mpumalanga.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10">
        {siteConfig.services.map((svc) => {
          const ICONS: Record<string, LucideIcon> = {
            Construction: HardHat,
            Blueprint: FileText,
            Building2: Building2,
            Users: Users,
            FileText: FileText,
            Workflow: Workflow,
            Scale: Scale,
            Droplets: Droplets,
            Layers: Layers,
            Ruler: Ruler,
            Road: Road,
          };
          const Icon = ICONS[svc.icon] ?? HardHat;
          return (
            <div key={svc.title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <Icon className="w-12 h-12 text-blue-600 mb-4" />
              <div className="text-xl font-bold text-gray-800 mb-3">{svc.title}</div>
              <p className="text-gray-600 leading-relaxed">{svc.description}</p>
              <Link href="/services" className="mt-4 inline-block text-blue-600 hover:underline font-medium">Learn More →</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}


