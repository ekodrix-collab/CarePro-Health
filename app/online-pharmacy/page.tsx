import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  MessageCircle,
  Pill,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Online Pharmacy",
  description:
    "Manage refills, transfer prescriptions, and get pharmacist support with CarePro online pharmacy.",
};

const pharmacyBenefits = [
  {
    title: "Stay on top of every dose",
    description:
      "Refill reminders and medication tracking keep your routine simple for you and your family.",
    icon: Pill,
  },
  {
    title: "Pharmacists who know your name",
    description:
      "Call, text, or email our care team and get personalized medication guidance.",
    icon: MessageCircle,
  },
  {
    title: "Your prescriptions, delivered",
    description:
      "Fast, discreet shipping with real-time updates so you never need to wait in line.",
    icon: Truck,
  },
];

const minorConditions = [
  "Acne treatment",
  "Birth control",
  "UTI follow-up",
  "Cold sore treatment",
  "Allergy management",
  "General prescription renewals",
];

const transferSteps = [
  {
    step: "1",
    title: "Create your account",
    description:
      "Set up your profile in minutes and tell us what medications you need help with.",
  },
  {
    step: "2",
    title: "Share or transfer prescription",
    description:
      "Upload a prescription, ask your doctor to send it, or let us transfer from your current pharmacy.",
  },
  {
    step: "3",
    title: "Get meds delivered",
    description:
      "Your medication is reviewed by licensed pharmacists and delivered to your door.",
  },
];

const pharmacyFaqs = [
  {
    question: "Can I transfer my current prescription to CarePro?",
    answer:
      "Yes. After signup, you can upload your prescription details or ask us to coordinate directly with your current pharmacy.",
  },
  {
    question: "How do refills work?",
    answer:
      "You receive refill reminders in advance. Confirm the refill in your account and we process and ship it.",
  },
  {
    question: "Can I speak with a pharmacist directly?",
    answer:
      "Yes. Our pharmacy support team is available by phone, text, and email for medication questions and guidance.",
  },
  {
    question: "Do you support insurance claims?",
    answer:
      "We support most major plans and can help with claim guidance before order confirmation.",
  },
];

export default function OnlinePharmacyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-7 shadow-sm sm:p-9">
        <p className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
          Online Pharmacy
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
          No long lines, more private conversations.
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-600 sm:text-base">
          Fill prescriptions, transfer medications, and get support from licensed
          pharmacists with a simple digital workflow.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/portal"
            className="inline-flex items-center gap-1 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Transfer a prescription
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/appointment"
            className="inline-flex rounded-xl border border-orange-200 px-5 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
          >
            Fill a prescription
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {pharmacyBenefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm"
          >
            <div className="inline-flex rounded-2xl bg-orange-50 p-3 text-orange-700">
              <benefit.icon size={20} />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              {benefit.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-[2rem] border border-orange-100 bg-white p-7 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">
          Fast Relief
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
          Let our pharmacists handle it.
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          Our pharmacy team can guide treatment and prescription flow for common
          minor conditions.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {minorConditions.map((item) => (
            <span
              key={item}
              className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/appointment"
            className="inline-flex items-center gap-1 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white"
          >
            Get a prescription
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/services"
            className="inline-flex rounded-xl border border-orange-200 px-4 py-2.5 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
          >
            Browse all conditions
          </Link>
        </div>
      </section>

      <section className="mt-6 rounded-[2rem] border border-orange-100 bg-white p-7 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          How It Works
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
          Transferring a prescription
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {transferSteps.map((item) => (
            <article key={item.step} className="rounded-2xl bg-slate-100 p-4">
              <p className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-white">
                {item.step}
              </p>
              <h3 className="mt-3 text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-[2rem] border border-orange-100 bg-white p-7 shadow-sm sm:p-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          Complete care right from your phone.
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
          Keep track of medications, appointments, and delivery updates from one
          secure account.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/portal"
            className="inline-flex items-center gap-1 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white"
          >
            Open Patient Portal
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-xl border border-orange-200 px-4 py-2.5 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
          >
            Talk to Support
          </Link>
        </div>
      </section>

      <section className="mt-6 rounded-[2rem] border border-orange-100 bg-white p-7 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">
          Frequently Asked
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
          Your questions, answered.
        </h2>
        <div className="mt-5 space-y-3">
          {pharmacyFaqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-orange-100 bg-white p-4"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-[2rem] border border-orange-200 bg-orange-50 p-7 sm:p-8">
        <h2 className="inline-flex items-center gap-2 text-xl font-semibold text-slate-900">
          <ShieldCheck size={20} className="text-orange-700" />
          Pharmacy Support Team
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Email</p>
            <p className="mt-1">support@careproclinic.com</p>
          </article>
          <article className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Text</p>
            <p className="mt-1">+1 (415) 555-0181</p>
          </article>
          <article className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Fax</p>
            <p className="mt-1">+1 (415) 555-0192</p>
          </article>
        </div>
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 rounded-xl border border-orange-200 bg-white px-4 py-2.5 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
          >
            Get in touch
            <ClipboardCheck size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
