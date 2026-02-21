import type { Metadata } from "next";
import { Clock3, FileCheck2, Shield, Stethoscope } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "Appointment",
  description:
    "Book an appointment with CarePro Clinic using our modern and validated online form.",
};

const visitGuidance = [
  {
    icon: Clock3,
    title: "Arrive 10 Minutes Early",
    description: "Complete check-in and insurance verification before your slot.",
  },
  {
    icon: FileCheck2,
    title: "Bring Medical History",
    description: "Carry current medications and past reports if available.",
  },
  {
    icon: Stethoscope,
    title: "Consultation + Plan",
    description: "Receive diagnosis, treatment options, and follow-up guidance.",
  },
  {
    icon: Shield,
    title: "Privacy Protected",
    description: "Your submitted information is handled securely by our team.",
  },
];

export default function AppointmentPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8">
      <div className="mb-7 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">
          Book Appointment
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          Schedule Your Visit
        </h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          Submit the appointment request form and our team will confirm your
          slot by call or email.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
        <AppointmentForm />
        <aside className="space-y-4">
          <section className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Before You Visit</h2>
            <div className="mt-4 space-y-3">
              {visitGuidance.map((item) => (
                <article key={item.title} className="rounded-2xl bg-slate-100 p-3">
                  <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                    <item.icon size={15} className="text-orange-600" />
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Need Immediate Help?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              For urgent symptoms, call emergency services immediately or contact
              our emergency line.
            </p>
            <a
              href="tel:+14155550123"
              className="mt-4 inline-flex rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white"
            >
              Call +1 (415) 555-0123
            </a>
          </section>
        </aside>
      </div>
    </div>
  );
}
