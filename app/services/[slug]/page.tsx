import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock3, DollarSign, Stethoscope } from "lucide-react";
import { services } from "@/lib/clinic-data";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.longDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-14 pt-12 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
        <p className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
          {service.department}
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">
          {service.title}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          {service.longDescription}
        </p>

        <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
          <div className="rounded-2xl bg-slate-100 px-4 py-3">
            <p className="inline-flex items-center gap-2 font-medium text-slate-700">
              <Clock3 size={15} />
              Typical Duration
            </p>
            <p className="mt-1">{service.duration}</p>
          </div>
          <div className="rounded-2xl bg-slate-100 px-4 py-3">
            <p className="inline-flex items-center gap-2 font-medium text-slate-700">
              <DollarSign size={15} />
              Starting Price
            </p>
            <p className="mt-1">{service.price}</p>
          </div>
          <div className="rounded-2xl bg-slate-100 px-4 py-3">
            <p className="inline-flex items-center gap-2 font-medium text-slate-700">
              <Stethoscope size={15} />
              Typical Wait
            </p>
            <p className="mt-1">{service.waitTime}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl bg-slate-100 p-4">
            <h2 className="text-lg font-semibold text-slate-900">What&apos;s Included</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-slate-100 p-4">
            <h2 className="text-lg font-semibold text-slate-900">
              This Service is Ideal For
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {service.idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/appointment"
            className="rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/80"
          >
            Book Appointment
          </Link>
          <Link
            href="/services"
            className="rounded-2xl border border-orange-200 px-5 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
          >
            Back to Services
          </Link>
        </div>
      </section>
    </div>
  );
}
