import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarClock,
  GraduationCap,
  Languages,
  Star,
  Stethoscope,
  WalletCards,
} from "lucide-react";
import { doctors } from "@/lib/clinic-data";

type DoctorProfilePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: DoctorProfilePageProps): Promise<Metadata> {
  const { id } = await params;
  const doctor = doctors.find((item) => item.id === id);

  if (!doctor) {
    return {
      title: "Doctor Not Found",
    };
  }

  return {
    title: doctor.name,
    description: `${doctor.name} - ${doctor.specialization} specialist at CarePro Clinic.`,
  };
}

export default async function DoctorProfilePage({
  params,
}: DoctorProfilePageProps) {
  const { id } = await params;
  const doctor = doctors.find((item) => item.id === id);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8">
      <div className="grid gap-7 lg:grid-cols-[1.1fr_1fr]">
        <section className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-4 shadow-sm">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={860}
            height={660}
            className="h-auto w-full rounded-[1.45rem] object-cover"
            priority
          />
        </section>

        <section className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
          <p className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
            {doctor.specialization}
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900">
            {doctor.name}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {doctor.bio}
          </p>

          <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-100 px-3 py-2">
              <p className="inline-flex items-center gap-2 font-medium text-slate-700">
                <Stethoscope size={15} />
                Experience
              </p>
              <p className="mt-1">{doctor.experience}+ years</p>
            </div>
            <div className="rounded-2xl bg-slate-100 px-3 py-2">
              <p className="inline-flex items-center gap-2 font-medium text-slate-700">
                <CalendarClock size={15} />
                Next Available
              </p>
              <p className="mt-1">{doctor.nextAvailable}</p>
            </div>
            <div className="rounded-2xl bg-slate-100 px-3 py-2">
              <p className="inline-flex items-center gap-2 font-medium text-slate-700">
                <Star size={15} />
                Rating
              </p>
              <p className="mt-1">
                {doctor.rating} ({doctor.reviews} reviews)
              </p>
            </div>
            <div className="rounded-2xl bg-slate-100 px-3 py-2">
              <p className="inline-flex items-center gap-2 font-medium text-slate-700">
                <WalletCards size={15} />
                Consultation Fee
              </p>
              <p className="mt-1">{doctor.consultationFee}</p>
            </div>
          </div>
          <p className="mt-2 text-xs font-medium text-slate-500">
            Patients treated: {doctor.patients}
          </p>

          <div className="mt-6">
            <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
              <Languages size={18} />
              Languages
            </h2>
            <p className="mt-2 text-sm text-slate-600">{doctor.languages.join(" | ")}</p>
          </div>

          <div className="mt-6">
            <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
              <GraduationCap size={18} />
              Education
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {doctor.education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-slate-900">Focus Areas</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {doctor.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-slate-900">Working Hours</h2>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              {doctor.workingHours.map((time) => (
                <li key={time}>{time}</li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/appointment"
              className="rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/80"
            >
              Book Appointment
            </Link>
            <Link
              href="/doctors"
              className="rounded-2xl border border-orange-200 px-5 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
            >
              Back to Doctors
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

