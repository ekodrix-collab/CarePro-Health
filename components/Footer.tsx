"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const copy = {
  title: "CarePro Health",
  description:
    "Online healthcare and pharmacy support for prescriptions, refills, and medication delivery.",
  platform: "Platform",
  contact: "Contact",
  legal: "Legal & Support",
  links: {
    treatments: "Treatments",
    pharmacy: "Online Pharmacy",
    medications: "Medications",
    faqs: "FAQs",
    support: "Support",
    terms: "Terms",
    privacy: "Privacy",
    accessibility: "Accessibility",
  },
  email: "Email",
  phone: "Phone",
  fax: "Fax",
  copyright: "All rights reserved.",
} as const;

export default function Footer() {
  const t = copy;

  const productLinks = [
    { href: "/#treatments", label: t.links.treatments },
    { href: "/online-pharmacy", label: t.links.pharmacy },
    { href: "/#medications", label: t.links.medications },
    { href: "/#faq", label: t.links.faqs },
  ];

  const legalLinks = [
    { href: "/contact", label: t.links.support },
    { href: "/contact", label: t.links.terms },
    { href: "/contact", label: t.links.privacy },
    { href: "/contact", label: t.links.accessibility },
  ];

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-slate-900">{t.title}</p>
          <p className="mt-2 text-sm text-slate-600">{t.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-700">
            {t.platform}
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {productLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-slate-600 transition hover:text-blue-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-700">
            {t.contact}
          </p>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>{t.email}: support@careproclinic.com</p>
            <p>{t.phone}: +91 80 4567 0123</p>
            <p>{t.fax}: +91 80 4567 0192</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-300 hover:text-blue-700"
            >
              <Instagram size={14} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-300 hover:text-blue-700"
            >
              <Facebook size={14} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-300 hover:text-blue-700"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-700">
            {t.legal}
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-slate-600 transition hover:text-blue-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-xs sm:px-6 lg:px-8">
          <p className="text-slate-500">
            Copyright {new Date().getFullYear()} {t.title}. {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
