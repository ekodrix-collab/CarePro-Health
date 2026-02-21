"use client";

import DoctorCard from "@/components/DoctorCard";
import type { Doctor } from "@/lib/clinic-data";
import { motion } from "framer-motion";
import { CalendarClock, Star, Users } from "lucide-react";
import { useMemo, useState } from "react";

type DoctorsDirectoryProps = {
  doctors: Doctor[];
};

export default function DoctorsDirectory({ doctors }: DoctorsDirectoryProps) {
  const [filter, setFilter] = useState("All");

  const specializations = useMemo(() => {
    const values = new Set(doctors.map((doctor) => doctor.specialization));
    return ["All", ...Array.from(values)];
  }, [doctors]);

  const filteredDoctors = useMemo(() => {
    if (filter === "All") {
      return doctors;
    }

    return doctors.filter((doctor) => doctor.specialization === filter);
  }, [doctors, filter]);

  const averageRating = useMemo(() => {
    const total = doctors.reduce((sum, doctor) => sum + doctor.rating, 0);
    return (total / doctors.length).toFixed(1);
  }, [doctors]);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-7 rounded-3xl border border-orange-100 bg-white p-5 shadow-sm"
      >
        <h1 className="text-3xl font-semibold text-slate-900">Our Doctors</h1>
        <p className="mt-1 text-sm text-slate-600">
          Meet experienced specialists with transparent availability and focused
          treatment pathways.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
            <p className="inline-flex items-center gap-1.5 font-medium text-slate-900">
              <Users size={15} className="text-orange-600" />
              Specialist Team
            </p>
            <p className="mt-1 text-xs text-slate-600">{doctors.length} lead doctors</p>
          </article>
          <article className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
            <p className="inline-flex items-center gap-1.5 font-medium text-slate-900">
              <Star size={15} className="text-orange-500" />
              Avg Rating
            </p>
            <p className="mt-1 text-xs text-slate-600">{averageRating} / 5</p>
          </article>
          <article className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
            <p className="inline-flex items-center gap-1.5 font-medium text-slate-900">
              <CalendarClock size={15} className="text-orange-600" />
              Availability
            </p>
            <p className="mt-1 text-xs text-slate-600">Same-day and next-day slots</p>
          </article>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {specializations.map((specialization) => {
            const isActive = filter === specialization;

            return (
              <button
                key={specialization}
                type="button"
                onClick={() => setFilter(specialization)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-orange-500 text-white"
                    : "border border-orange-200 bg-white text-slate-600 hover:bg-orange-50 hover:text-orange-700"
                }`}
              >
                {specialization}
              </button>
            );
          })}
        </div>
      </motion.div>

      {filteredDoctors.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white/60 p-10 text-center">
          <h2 className="text-xl font-semibold text-slate-900">
            No doctors found
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Try another specialization to see available doctors.
          </p>
          <button
            type="button"
            onClick={() => setFilter("All")}
            className="mt-4 rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium text-white"
          >
            Show All
          </button>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  );
}
