import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-[color:rgba(2,6,23,0.06)] bg-[color:var(--background-alt)]">
      <div className="container py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">
            <span className="text-[--rcp-accent]">Royal</span> Consulting
          </div>
          <p className="subtle mt-2 text-sm max-w-md">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <div className="font-medium mb-3">Contact</div>
          <ul className="space-y-2 text-sm subtle">
            <li className="flex items-center gap-2"><Mail size={16} /> {siteConfig.contact.email}</li>
            <li className="flex items-center gap-2"><Phone size={16} /> {siteConfig.contact.phone}</li>
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5" />
              <span>
                {siteConfig.contact.addressLines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Follow</div>
          <div className="flex gap-4 subtle">
            <Link href={siteConfig.social.linkedin} aria-label="LinkedIn" className="hover:text-[color:var(--foreground)]"><Linkedin /></Link>
            <Link href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-[color:var(--foreground)]"><Facebook /></Link>
            <Link href={siteConfig.social.x} aria-label="X" className="hover:text-[color:var(--foreground)]"><Twitter /></Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[color:rgba(2,6,23,0.06)] py-4 text-center text-xs subtle">
        © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
      </div>
    </footer>
  );
}


