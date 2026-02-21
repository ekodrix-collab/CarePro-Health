"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardPlus,
  Pill,
  ScanSearch,
  ShieldCheck,
  Star,
  Stethoscope,
  Truck,
} from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";

const copy = {
  actionsTitle: "What You Can Do",
  actionsSubtitle: "Care and pharmacy actions, all in one place",
  actionsCta: "Explore",
  actions: [
    {
      title: "Doctor-Led Treatment",
      description:
        "Consult licensed clinicians online and get treatment plans that fit your symptoms.",
      icon: Stethoscope,
      href: "/appointment",
    },
    {
      title: "Fill Your Prescription",
      description:
        "Submit and manage prescriptions digitally with fast pharmacy processing.",
      icon: Pill,
      href: "/online-pharmacy",
    },
    {
      title: "Transfer a Prescription",
      description:
        "Move medications from your current pharmacy in just a few guided steps.",
      icon: ClipboardPlus,
      href: "/portal",
    },
    {
      title: "Explore Medications",
      description:
        "Browse common medications and treatment options by category and need.",
      icon: ScanSearch,
      href: "/#medications",
    },
  ],
  popularTitle: "Popular Treatments",
  popularSubtitle: "Health goals people often start with",
  popularCta: "View Treatment",
  treatments: [
    "Acne Care",
    "Weight Loss",
    "Hair Loss",
    "Male Health",
    "Birth Control",
    "Erectile Dysfunction",
  ],
  stepsTitle: "How It Works",
  stepsSubtitle: "Get treatment in 3 simple steps",
  steps: [
    {
      step: "1",
      title: "Sign up and apply online",
      description: "Create your account and share your treatment needs in minutes.",
      icon: ClipboardPlus,
    },
    {
      step: "2",
      title: "Licensed review and prescription",
      description:
        "Our clinicians and pharmacists assess and prepare your care plan safely.",
      icon: ShieldCheck,
    },
    {
      step: "3",
      title: "Track delivery to your door",
      description:
        "Get order updates and medication delivery with refill reminders.",
      icon: Truck,
    },
  ],
  medsTitle: "Browse Medications",
  medsSubtitle: "Featured medications and categories",
  medsCta: "View Medication",
  medDetail: "Medication details available",
  meds: ["Ozempic", "Finasteride", "Minoxidil", "Lantus", "Escitalopram", "Metformin"],
  trustTitle: "Trust & Reviews",
  trustSubtitle: "Trusted by patients across everyday health needs",
  trustSignals: [
    "HIPAA Compliant Platform",
    "Licensed Pharmacy Team",
    "4.8+ Average Patient Rating",
    "Fast Delivery Tracking",
  ],
  trustRating: "4.8 average from 2,000+ patient reviews",
  testimonials: [
    {
      id: 1,
      name: "Olivia Harper",
      role: "Cardiology Patient",
      feedback:
        "The care was detailed and practical. I left with a clear treatment plan and follow-up schedule instead of generic advice.",
      rating: 5,
      date: "January 2026",
    },
    {
      id: 2,
      name: "James Foster",
      role: "Neurology Patient",
      feedback:
        "Booking was easy, wait time was short, and the consultation was thorough. The clinic team explained every step clearly.",
      rating: 5,
      date: "December 2025",
    },
    {
      id: 3,
      name: "Sophia Martinez",
      role: "Parent",
      feedback:
        "Excellent pediatric care. Appointments start on time and Dr. Nguyen is patient, clear, and very reassuring with children.",
      rating: 4.8,
      date: "February 2026",
    },
  ],
  faqTitle: "FAQs",
  faqSubtitle: "Common questions about online prescriptions",
  faqs: [
    {
      question: "Can I get a prescription online?",
      answer:
        "Yes. Licensed clinicians assess your symptoms online and can issue prescriptions when clinically appropriate.",
    },
    {
      question: "How does delivery work?",
      answer:
        "After your prescription is processed, medications are packed and shipped with tracking updates sent to your account.",
    },
    {
      question: "Do you support insurance and coverage checks?",
      answer:
        "Yes. We support major insurance providers and provide guidance on eligibility and expected coverage.",
    },
    {
      question: "Can I transfer from another pharmacy?",
      answer:
        "Yes. You can request a transfer directly from your portal and our team will coordinate the process.",
    },
  ],
  finalTitle: "Ready to start your care journey?",
  finalSubtitle:
    "Join in minutes, get assessed by licensed professionals, and manage your medication delivery from one account.",
  joinNow: "Join Now",
  supportCta: "Talk to Support",
} as const;

const treatmentImages = [
  "/doctors/doctor-1.jpg",
  "/doctors/doctor-2.jpg",
  "/doctors/doctor-3.jpg",
  "/doctors/doctor-4.jpg",
  "/doctors/doctor-5.jpg",
  "/doctors/doctor-6.jpg",
];

const medicationImages = [
  "/doctors/doctor-1.jpg",
  "/doctors/doctor-2.jpg",
  "/doctors/doctor-3.jpg",
  "/doctors/doctor-4.jpg",
  "/doctors/doctor-5.jpg",
  "/doctors/doctor-6.jpg",
];

export default function HomePageContent() {
  const t = copy;

  return (
    <div className="pb-8">
      <Hero />

      <FadeInSection id="treatments" className="py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">
            {t.actionsTitle}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">{t.actionsSubtitle}</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.actions.map((action) => (
              <article
                key={action.title}
                className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="inline-flex rounded-2xl bg-orange-50 p-3 text-orange-700">
                  <action.icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{action.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{action.description}</p>
                <Link
                  href={action.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-700 hover:text-orange-800"
                >
                  {t.actionsCta}
                  <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">
            {t.popularTitle}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">{t.popularSubtitle}</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.treatments.map((title, index) => (
              <article
                key={title}
                className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-32 w-full">
                  <Image src={treatmentImages[index]} alt={title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <Link
                    href="/appointment"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-orange-700 hover:text-orange-800"
                  >
                    {t.popularCta}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <section className="rounded-[2rem] border border-orange-100 bg-white p-7 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">
              {t.stepsTitle}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">{t.stepsSubtitle}</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {t.steps.map((item) => (
                <article key={item.step} className="rounded-2xl bg-slate-100 p-4">
                  <p className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-white">
                    {item.step}
                  </p>
                  <h3 className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-slate-900">
                    <item.icon size={16} className="text-orange-600" />
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </FadeInSection>

      <FadeInSection id="medications" className="py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">
            {t.medsTitle}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">{t.medsSubtitle}</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.meds.map((med, index) => (
              <article
                key={med}
                className="rounded-3xl border border-orange-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl">
                    <Image src={medicationImages[index]} alt={med} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900">{med}</p>
                    <p className="text-xs text-slate-500">{t.medDetail}</p>
                  </div>
                </div>
                <Link
                  href="/online-pharmacy"
                  className="mt-4 inline-flex rounded-xl border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
                >
                  {t.medsCta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection id="about" className="py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <section className="rounded-[2rem] border border-orange-300/40 bg-gradient-to-r from-orange-500 to-amber-500 p-8 text-white shadow-xl shadow-orange-200/60 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-100">
              {t.trustTitle}
            </p>
            <h2 className="mt-2 text-3xl font-semibold">{t.trustSubtitle}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {t.trustSignals.map((signal) => (
                <article
                  key={signal}
                  className="rounded-2xl border border-white/35 bg-white/15 p-4 text-sm"
                >
                  <p className="inline-flex items-center gap-1.5 font-semibold">
                    <BadgeCheck size={15} />
                    {signal}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-orange-50">
              <Star size={16} className="fill-orange-100 text-orange-100" />
              <span>{t.trustRating}</span>
            </div>
          </section>

          <div className="mt-7 flex snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {t.testimonials.map((item) => (
              <div key={item.id} className="min-w-[18rem] snap-start md:min-w-0">
                <TestimonialCard
                  name={item.name}
                  role={item.role}
                  feedback={item.feedback}
                  rating={item.rating}
                  date={item.date}
                />
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection id="faq" className="py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-700">
            {t.faqTitle}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">{t.faqSubtitle}</h2>
          <div className="mt-6 space-y-3">
            {t.faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <section className="rounded-[2rem] border border-orange-100 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-3xl font-semibold text-slate-900">{t.finalTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              {t.finalSubtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/portal"
                className="inline-flex items-center gap-1 rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                {t.joinNow}
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border border-orange-200 px-5 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
              >
                {t.supportCta}
              </Link>
            </div>
          </section>
        </div>
      </FadeInSection>
    </div>
  );
}
