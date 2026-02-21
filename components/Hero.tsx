"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const copy = {
  badge: "Online Healthcare & Pharmacy",
  title: "Complete care is right in your pocket",
  subtitle:
    "Get telehealth support, online prescriptions, and pharmacy delivery from one simple platform built for everyday care.",
  highlights: [
    "Licensed clinicians and pharmacists",
    "Online prescriptions and telehealth care",
    "Fast medication delivery and refill reminders",
  ],
  ctas: {
    prescription: "Get a Prescription",
    fill: "Fill a Prescription",
    transfer: "Transfer Prescription",
  },
  stats: {
    ratingTitle: "4.8+ average rating",
    ratingSubtitle: "Verified patient reviews",
    deliveryTitle: "Free delivery eligible",
    deliverySubtitle: "On select medication orders",
  },
  imageAlt: "Online healthcare and pharmacy app preview",
} as const;

export default function Hero() {
  const t = copy;

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-4 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700"
        >
          {t.badge}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.4 }}
          className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
        >
          {t.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.4 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          {t.subtitle}
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.4 }}
          className="mt-5 space-y-2"
        >
          {t.highlights.map((item) => (
            <li key={item} className="inline-flex items-center gap-2 text-sm text-slate-700">
              <ShieldCheck size={16} className="text-orange-600" />
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26, duration: 0.4 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            href="/appointment"
            className="inline-flex rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/80 transition hover:bg-orange-600"
          >
            {t.ctas.prescription}
          </Link>
          <Link
            href="/online-pharmacy"
            className="inline-flex rounded-2xl border border-orange-200 bg-white px-6 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
          >
            {t.ctas.fill}
          </Link>
          <Link
            href="/portal"
            className="inline-flex rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-700"
          >
            {t.ctas.transfer}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.4 }}
          className="mt-7 flex flex-wrap gap-3"
        >
          <div className="rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
            <p className="inline-flex items-center gap-1.5 font-semibold text-slate-900">
              <Star size={15} className="text-orange-500" />
              {t.stats.ratingTitle}
            </p>
            <p className="mt-0.5 text-xs text-slate-500">{t.stats.ratingSubtitle}</p>
          </div>
          <div className="rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
            <p className="inline-flex items-center gap-1.5 font-semibold text-slate-900">
              <Truck size={15} className="text-orange-600" />
              {t.stats.deliveryTitle}
            </p>
            <p className="mt-0.5 text-xs text-slate-500">{t.stats.deliverySubtitle}</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-4"
      >
        <div className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-3 shadow-lg shadow-orange-100/80">
          <div className="relative mx-auto flex h-[22rem] w-full max-w-[21rem] items-center justify-center overflow-hidden rounded-[1.45rem] bg-gradient-to-br from-orange-100 via-white to-amber-50 p-2 sm:h-[26rem] sm:max-w-[23rem] lg:h-[29rem] lg:max-w-[25rem]">
            <Image
              src="/doctors/s.png"
              alt={t.imageAlt}
              width={1587}
              height={2245}
              className="h-full w-auto max-w-full rounded-[1.2rem] object-contain"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
