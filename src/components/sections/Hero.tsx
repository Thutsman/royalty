"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  // Subtle scroll animations with a stagger
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, duration: 0.5, ease: "easeOut" },
    },
  };
  const item: Variants = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Decorative soft blobs for depth */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />

      <motion.div
        className="container py-20 px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.span className="badge" variants={item}>
          Trusted Civil Engineering Partner
        </motion.span>
        <motion.h1
          variants={item}
          className="heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] tracking-tight max-w-4xl"
        >
          {siteConfig.companyName}
        </motion.h1>
        <motion.p variants={item} className="text-lg sm:text-xl md:text-2xl subtle mt-4 max-w-3xl">
          Engineering Excellence. Building Tomorrow.
        </motion.p>
        <motion.p variants={item} className="mt-4 max-w-3xl subtle text-sm sm:text-base">
          South Africa&apos;s trusted civil engineering partner delivering innovative
          infrastructure solutions across Gauteng and Mpumalanga.
        </motion.p>
        <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <Link
            href="/contact"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 mr-0 sm:mr-4 mb-3 sm:mb-0 inline-block"
          >
            Get a Quote
          </Link>
          <Link
            href="/services"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
          >
            Our Services
          </Link>
        </motion.div>
        {/* Callout panel for additional contrast */}
        <motion.div variants={item} className="mt-5 inline-flex items-center gap-3 rounded-xl bg-white/90 px-4 py-3 shadow-md ring-1 ring-black/5">
          <span className="text-sm text-gray-700">Free consultation • Response within 1 business day</span>
          <span className="hidden sm:inline-block h-6 w-px bg-gray-200" />
          <a href="tel:+27696169207" className="text-sm font-semibold text-blue-700 hover:underline">Call +27 696169207</a>
        </motion.div>
        <motion.div variants={item} className="mt-6 inline-block rounded-full bg-white/90 shadow-lg ring-1 ring-black/5" aria-label="company statistics">
          <ul className="flex items-center divide-x divide-gray-200 text-sm text-gray-800 whitespace-nowrap">
            <li className="px-5 py-2">
              <span className="font-semibold text-[--rcp-primary]">120+</span> Projects
            </li>
            <li className="px-5 py-2">
              <span className="font-semibold text-[--rcp-primary]">10+</span> Years
            </li>
            <li className="px-5 py-2">
              <span className="font-semibold text-[--rcp-success]">Certified</span> Engineers
            </li>
          </ul>
        </motion.div>
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 h-24 gradient-primary opacity-10" />
    </section>
  );
}


