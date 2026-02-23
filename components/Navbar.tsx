"use client";

import { LogIn, Menu, PhoneCall, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const copy = {
  supportLine: "Online prescriptions, telehealth, and pharmacy delivery",
  supportLabel: "Support",
  brandTitle: "CarePro Health",
  brandSubtitle: "Online Healthcare Platform",
  nav: {
    home: "Home",
    services: "Services",
    doctors: "Doctors",
    appointment: "Appointment",
    support: "Support",
  },
  login: "Login",
  menuToggle: "Toggle navigation menu",
} as const;

const navLinks = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/doctors", key: "doctors" },
  { href: "/appointment", key: "appointment" },
  { href: "/contact", key: "support" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const t = copy;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="border-b border-orange-100 bg-orange-50/70">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2 text-xs text-slate-600 sm:px-6 lg:px-8">
          <p className="hidden sm:block">{t.supportLine}</p>
          <a
            href="tel:+918045670123"
            className="inline-flex items-center gap-1.5 font-semibold text-orange-700 transition hover:text-orange-800"
          >
            <PhoneCall size={13} />
            {t.supportLabel}: +91 80 4567 0123
          </a>
        </div>
      </div>

      <nav className="mx-auto flex h-19 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 via-blue-500 to-cyan-500 text-sm font-semibold text-white shadow-lg shadow-blue-200/70">
            CP
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900 sm:text-base">
              {t.brandTitle}
            </p>
            <p className="text-xs text-slate-500">{t.brandSubtitle}</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {t.nav[link.key]}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/portal"
            className="inline-flex items-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
          >
            <LogIn size={15} />
            {t.login}
          </Link>
        </div>

        <motion.button
          type="button"
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
          aria-label={t.menuToggle}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </motion.button>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm ${
                    isActive
                      ? "bg-blue-100 font-medium text-blue-700"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {t.nav[link.key]}
                </Link>
              );
            })}
            <div className="mt-1">
              <Link
                href="/portal"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-1 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
              >
                <LogIn size={14} />
                {t.login}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
