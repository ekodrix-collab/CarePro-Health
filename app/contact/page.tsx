import type { Metadata } from "next";
import {
  Clock3,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  type LucideIcon,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Contact CarePro support for appointments, billing, prescription follow-up, and general care inquiries.",
};

const supportChannels: Array<{
  title: string;
  value: string;
  detail: string;
  href: string;
  icon: LucideIcon;
}> = [
  {
    title: "Call Support",
    value: "+1 (415) 555-0123",
    detail: "Mon - Sat, 8:00 AM - 6:00 PM",
    href: "tel:+14155550123",
    icon: Phone,
  },
  {
    title: "Text Support",
    value: "+1 (415) 555-0181",
    detail: "Typical reply under 30 min",
    href: "tel:+14155550181",
    icon: MessageSquare,
  },
  {
    title: "Email Support",
    value: "support@careproclinic.com",
    detail: "For non-urgent requests",
    href: "mailto:support@careproclinic.com",
    icon: Mail,
  },
  {
    title: "Billing Fax",
    value: "+1 (415) 555-0192",
    detail: "Insurance forms and claims",
    href: "tel:+14155550192",
    icon: FileText,
  },
];

const supportLocations = [
  {
    title: "CarePro Main Clinic",
    address: "245 Elm Street, San Francisco, CA 94107",
    detail: "Walk-in support and in-person care coordination.",
  },
  {
    title: "Virtual Care Desk",
    address: "Remote support hub",
    detail: "Telehealth troubleshooting and visit link support.",
  },
  {
    title: "Insurance and Billing",
    address: "Dedicated back-office support",
    detail: "Coverage guidance, claims, and payment help.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-orange-100 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">
          Support
        </p>
        <h1 className="mt-2 max-w-2xl text-3xl font-semibold text-slate-900 sm:text-4xl">
          Need a hand? You&apos;ll get a whole team.
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          Reach our support team for appointments, prescriptions, refills, and
          billing. Choose the channel that works best for you.
        </p>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {supportChannels.map((channel) => {
          const Icon = channel.icon;

          return (
            <article
              key={channel.title}
              className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm"
            >
              <div className="inline-flex rounded-2xl bg-orange-50 p-2.5 text-orange-700">
                <Icon size={17} />
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-900">{channel.title}</p>
              <a
                href={channel.href}
                className="mt-1 block text-sm font-medium text-orange-700 hover:text-orange-800"
              >
                {channel.value}
              </a>
              <p className="mt-1 text-xs text-slate-500">{channel.detail}</p>
            </article>
          );
        })}
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <section className="space-y-4">
          <article className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Where Support Happens
            </h2>
            <div className="mt-4 space-y-3">
              {supportLocations.map((location) => (
                <article key={location.title} className="rounded-2xl bg-slate-100 p-4">
                  <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900">
                    <MapPin size={14} className="text-orange-700" />
                    {location.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-600">{location.address}</p>
                  <p className="mt-1 text-xs text-slate-500">{location.detail}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
            <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
              <Clock3 size={18} className="text-orange-700" />
              Support Hours
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Monday - Saturday: 8:00 AM - 6:00 PM
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Sunday: 10:00 AM - 1:00 PM
            </p>
          </article>

          <article className="overflow-hidden rounded-3xl border border-orange-100 bg-white p-2 shadow-sm">
            <iframe
              title="CarePro Clinic Location"
              src="https://maps.google.com/maps?q=San%20Francisco%20Medical%20Center&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-72 w-full rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </article>
        </section>

        <ContactForm />
      </div>
    </div>
  );
}
