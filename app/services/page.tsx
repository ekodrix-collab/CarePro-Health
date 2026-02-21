import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore CarePro Clinic services including cardiology, neurology, pediatrics, and preventive care.",
};

const careFlow = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "Doctor-led assessment of symptoms, risk factors, and history.",
  },
  {
    step: "02",
    title: "Diagnostics and Plan",
    description:
      "Clear diagnosis pathway with transparent options and timeline.",
  },
  {
    step: "03",
    title: "Follow-Up Care",
    description:
      "Structured follow-up and prevention roadmap based on your outcomes.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">
          Medical Services
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          Comprehensive Healthcare Solutions
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          From primary care to specialist consultation, each service includes a
          practical care path and follow-up recommendations.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <section className="mt-10 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">
          Care Process
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">
          How We Structure Every Visit
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {careFlow.map((item) => (
            <article key={item.step} className="rounded-2xl bg-slate-100 p-4">
              <p className="text-xs font-semibold tracking-wider text-orange-700">
                STEP {item.step}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
