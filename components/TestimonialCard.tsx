"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  feedback: string;
  rating: number;
  date: string;
};

export default function TestimonialCard({
  name,
  role,
  feedback,
  rating,
  date,
}: TestimonialCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm"
    >
      <p className="inline-flex items-center gap-1 text-xs font-medium text-orange-700">
        <Star size={14} className="fill-orange-500 text-orange-500" />
        {rating} / 5
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        &ldquo;{feedback}&rdquo;
      </p>
      <div className="mt-4 border-t border-slate-200 pt-3">
        <p className="text-sm font-semibold text-slate-900">{name}</p>
        <p className="text-xs text-slate-500">{role}</p>
        <p className="mt-1 text-xs text-slate-400">{date}</p>
      </div>
    </motion.article>
  );
}
