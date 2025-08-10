"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-[color:rgba(2,6,23,0.06)] shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold tracking-tight text-[color:var(--foreground)]">
          <span className="text-[--rcp-accent]">Royal</span> Consulting
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
            >
              {item.name}
            </Link>
          ))}
          <div className="hidden lg:flex items-center gap-2 text-[color:var(--foreground)]">
            <Phone size={16} className="text-[--rcp-primary]" />
            <a href="tel:+27696169207" className="text-sm">+27 696169207</a>
          </div>
          <Button asChild size="sm" variant="accent">
            <Link href="/contact">Get Quote</Link>
          </Button>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 text-[color:var(--foreground)] transition-transform"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${open ? 'max-h-96' : 'max-h-0'}`}
        role="region"
        aria-label="Mobile Navigation"
      >
        <div className="border-t border-[color:rgba(2,6,23,0.06)] bg-white">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[color:var(--foreground)]"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="mt-2" variant="accent">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}


