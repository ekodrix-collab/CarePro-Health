"use client";

import type { Doctor } from "@/lib/clinic-data";
import { motion } from "framer-motion";
import { CalendarClock, Languages, Star, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type DoctorCardProps = {
  doctor: Doctor;
};

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-orange-100 bg-white p-4 shadow-sm"
    >
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={640}
          height={420}
          className="h-56 w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <div className="mb-2 inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
          {doctor.specialization}
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{doctor.name}</h3>
        <p className="mt-1 text-sm text-slate-600">{doctor.experience}+ years experience</p>

        <div className="mt-3 grid gap-2 text-xs text-slate-600">
          <p className="inline-flex items-center gap-1.5">
            <Star size={14} className="text-orange-500" />
            {doctor.rating} rating ({doctor.reviews} reviews)
          </p>
          <p className="inline-flex items-center gap-1.5">
            <CalendarClock size={14} className="text-orange-600" />
            Next available: {doctor.nextAvailable}
          </p>
          <p className="inline-flex items-center gap-1.5">
            <WalletCards size={14} className="text-orange-600" />
            Consultation fee: {doctor.consultationFee}
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Languages size={14} className="text-orange-600" />
            {doctor.languages.join(" | ")}
          </p>
        </div>

        <Link
          href={`/doctors/${doctor.id}`}
          className="mt-4 inline-flex rounded-xl border border-orange-200 px-4 py-2 text-sm font-medium text-orange-700 transition hover:bg-orange-50"
        >
          View Profile
        </Link>
      </div>
    </motion.article>
  );
}
