"use client";

import type { Service } from "@/lib/clinic-data";
import { motion } from "framer-motion";
import {
  BadgePlus,
  Baby,
  Brain,
  Clock3,
  HeartPulse,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<Service["icon"], LucideIcon> = {
  HeartPulse,
  Brain,
  Baby,
  Stethoscope,
  Syringe,
  BadgePlus,
};

type ServiceCardProps = {
  service: Service;
  compact?: boolean;
};

export default function ServiceCard({
  service,
  compact = false,
}: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="inline-flex rounded-2xl bg-orange-50 p-3 text-orange-700">
          <Icon size={22} />
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {service.department}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {compact ? service.description : service.longDescription}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
        <span className="rounded-lg bg-slate-100 px-2 py-1">{service.duration}</span>
        <span className="rounded-lg bg-orange-50 px-2 py-1 text-orange-700">{service.price}</span>
        <span className="inline-flex items-center gap-1 rounded-lg bg-orange-50 px-2 py-1 text-orange-700">
          <Clock3 size={12} />
          {service.waitTime}
        </span>
      </div>

      <ul className="mt-4 space-y-1 text-xs text-slate-600">
        {service.includes.slice(0, compact ? 1 : 2).map((item) => (
          <li key={item} className="inline-flex items-start gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-orange-500" />
            {item}
          </li>
        ))}
      </ul>

      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex rounded-xl border border-orange-200 px-4 py-2 text-sm font-medium text-orange-700 transition hover:bg-orange-50"
      >
        Learn More
      </Link>
    </motion.article>
  );
}
