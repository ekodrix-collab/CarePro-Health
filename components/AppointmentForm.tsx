"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, Video } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { doctors, insurancePartners, services } from "@/lib/clinic-data";
import { createAppointment, type VisitType } from "@/lib/portal-store";

let bookingSerial = 13000;

function nextBookingReference() {
  const current = bookingSerial;
  bookingSerial += 1;
  return `CP-${current}`;
}

const symptomRules = [
  {
    symptom: "Chest pain or palpitations",
    service: "Heart Care",
    department: "Cardiology",
  },
  {
    symptom: "Headache or dizziness",
    service: "Neurology Consult",
    department: "Neurology",
  },
  {
    symptom: "Child fever or wellness concern",
    service: "Child Wellness",
    department: "Pediatrics",
  },
  {
    symptom: "Cough or breathing issue",
    service: "General Consultation",
    department: "Primary Care",
  },
  {
    symptom: "Joint or muscle pain",
    service: "General Consultation",
    department: "Primary Care",
  },
  {
    symptom: "Routine annual checkup",
    service: "Preventive Screening",
    department: "Wellness",
  },
];

const planByProvider: Record<string, string[]> = {
  Aetna: ["PPO Basic", "HMO Plus", "Premium Care"],
  "Blue Cross": ["Silver Plan", "Gold Plan", "Family Core"],
  Cigna: ["Open Access", "Local Plus", "Connect PPO"],
  UnitedHealthcare: ["Choice Plus", "Navigate", "All Savers"],
  Humana: ["Preferred PPO", "National POS", "Basic Care"],
  Kaiser: ["Signature HMO", "Classic", "Essential"],
};

const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .regex(/^[+]?[\d\s()-]{8,}$/, "Please enter a valid phone number."),
  visitType: z.enum(["in-person", "video"]),
  service: z.string().min(1, "Please select a service."),
  preferredDoctor: z.string().optional(),
  insuranceProvider: z.string().optional(),
  insurancePlan: z.string().optional(),
  date: z.string().min(1, "Please choose a date."),
  timeSlot: z.string().min(1, "Please choose a time slot."),
  message: z.string().max(350, "Message must be 350 characters or fewer."),
  consent: z
    .boolean()
    .refine((value) => value, "Please confirm consent to continue."),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
];

const inputBaseClasses =
  "w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100";

function getCoverageGuidance(provider: string, plan: string) {
  if (!provider) {
    return "Select provider and plan to get estimated coverage guidance.";
  }
  if (!plan) {
    return `Provider selected (${provider}). Choose a plan for detailed estimate.`;
  }
  if (plan.toLowerCase().includes("basic") || plan.toLowerCase().includes("silver")) {
    return "Estimated coverage: 60-75% for outpatient consultations after deductible.";
  }
  if (plan.toLowerCase().includes("premium") || plan.toLowerCase().includes("gold")) {
    return "Estimated coverage: 80-90% for specialist consultations with low copay.";
  }
  return "Estimated coverage: 70-85% depending on referral and in-network eligibility.";
}

type AiSuggestion = {
  service: string;
  department: string;
  confidence: string;
};

export default function AppointmentForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [aiSuggestion, setAiSuggestion] = useState<AiSuggestion | null>(null);
  const [symptom, setSymptom] = useState("");
  const [severity, setSeverity] = useState("moderate");
  const [duration, setDuration] = useState("1-3 days");
  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      visitType: "in-person",
      service: "",
      preferredDoctor: "",
      insuranceProvider: "",
      insurancePlan: "",
      date: "",
      timeSlot: "",
      message: "",
      consent: false,
    },
  });

  const visitType = useWatch({ control, name: "visitType" });
  const selectedProvider = useWatch({ control, name: "insuranceProvider" });
  const selectedPlan = useWatch({ control, name: "insurancePlan" });
  const coverageGuidance = useMemo(
    () => getCoverageGuidance(selectedProvider ?? "", selectedPlan ?? ""),
    [selectedProvider, selectedPlan]
  );
  const plans = planByProvider[selectedProvider ?? ""] ?? [];

  function runAiPrescreen() {
    if (!symptom) {
      setAiSuggestion(null);
      return;
    }

    const matched =
      symptomRules.find((item) => item.symptom === symptom) ?? symptomRules[5];
    const confidence =
      severity === "severe"
        ? "High"
        : duration === "More than 1 week"
          ? "Medium-High"
          : "Medium";

    const suggestion = {
      service: matched.service,
      department: matched.department,
      confidence,
    };

    setAiSuggestion(suggestion);
    setValue("service", suggestion.service, { shouldValidate: true });
  }

  async function onSubmit(values: AppointmentFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    const nextRef = nextBookingReference();
    const videoLink =
      values.visitType === "video"
        ? `https://meet.careproclinic.com/${nextRef.toLowerCase()}`
        : "";

    createAppointment({
      referenceId: nextRef,
      name: values.name,
      email: values.email,
      phone: values.phone,
      service: values.service,
      preferredDoctor: values.preferredDoctor || "No preference",
      date: values.date,
      timeSlot: values.timeSlot,
      message: values.message,
      visitType: values.visitType as VisitType,
      meetingLink: videoLink || undefined,
      insuranceProvider: values.insuranceProvider || undefined,
      insurancePlan: values.insurancePlan || undefined,
      coverageGuidance:
        values.insuranceProvider || values.insurancePlan
          ? getCoverageGuidance(
              values.insuranceProvider || "",
              values.insurancePlan || ""
            )
          : undefined,
    });

    setReferenceId(nextRef);
    setMeetingLink(videoLink);
    setShowSuccess(true);
    setAiSuggestion(null);
    setSymptom("");
    setSeverity("moderate");
    setDuration("1-3 days");
    reset();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-[2rem] border border-orange-100 bg-white p-5 shadow-sm sm:p-8"
      >
        <section className="mb-5 rounded-2xl border border-orange-200 bg-orange-50/60 p-4">
          <h3 className="inline-flex items-center gap-2 text-sm font-semibold text-orange-800">
            <Brain size={16} />
            AI Symptom Pre-Screen
          </h3>
          <p className="mt-1 text-xs text-orange-700">
            Quick triage assistant to suggest the most relevant department and
            service.
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <select
              value={symptom}
              onChange={(event) => setSymptom(event.target.value)}
              className={inputBaseClasses}
            >
              <option value="">Select symptom group</option>
              {symptomRules.map((item) => (
                <option key={item.symptom} value={item.symptom}>
                  {item.symptom}
                </option>
              ))}
            </select>
            <select
              value={severity}
              onChange={(event) => setSeverity(event.target.value)}
              className={inputBaseClasses}
            >
              <option value="mild">Mild</option>
              <option value="moderate">Moderate</option>
              <option value="severe">Severe</option>
            </select>
            <select
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
              className={inputBaseClasses}
            >
              <option value="Under 24 hours">Under 24 hours</option>
              <option value="1-3 days">1-3 days</option>
              <option value="4-7 days">4-7 days</option>
              <option value="More than 1 week">More than 1 week</option>
            </select>
          </div>
          <button
            type="button"
            onClick={runAiPrescreen}
            className="mt-3 rounded-xl bg-orange-500 px-4 py-2 text-xs font-semibold text-white"
          >
            Get Recommendation
          </button>
          {aiSuggestion ? (
            <div className="mt-3 rounded-xl border border-orange-200 bg-white px-3 py-2 text-xs text-slate-700">
              Recommended: <span className="font-semibold">{aiSuggestion.service}</span>{" "}
              ({aiSuggestion.department}) | Confidence: {aiSuggestion.confidence}
            </div>
          ) : null}
        </section>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className={inputBaseClasses}
              {...register("name")}
            />
            {errors.name ? (
              <p className="mt-1 text-xs text-rose-600">{errors.name.message}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className={inputBaseClasses}
              {...register("email")}
            />
            {errors.email ? (
              <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Phone
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className={inputBaseClasses}
              {...register("phone")}
            />
            {errors.phone ? (
              <p className="mt-1 text-xs text-rose-600">{errors.phone.message}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Visit Type
            </label>
            <div className="grid grid-cols-2 gap-2 rounded-2xl border border-slate-300 bg-white p-1">
              <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-2 py-2 text-sm text-slate-700">
                <input
                  type="radio"
                  value="in-person"
                  {...register("visitType")}
                  className="accent-orange-600"
                />
                In-Person
              </label>
              <label className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-2 py-2 text-sm text-slate-700">
                <input
                  type="radio"
                  value="video"
                  {...register("visitType")}
                  className="accent-orange-600"
                />
                <Video size={14} />
                Video Visit
              </label>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {visitType === "video"
                ? "A secure teleconsultation meeting link will be generated."
                : "In-person visit at CarePro Clinic."}
            </p>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Service
            </label>
            <select className={inputBaseClasses} {...register("service")}>
              <option value="">Select service</option>
              {services.map((service) => (
                <option key={service.slug} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            {errors.service ? (
              <p className="mt-1 text-xs text-rose-600">
                {errors.service.message}
              </p>
            ) : null}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Preferred Doctor (Optional)
            </label>
            <select className={inputBaseClasses} {...register("preferredDoctor")}>
              <option value="">No preference</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.name}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Insurance Provider
            </label>
            <select className={inputBaseClasses} {...register("insuranceProvider")}>
              <option value="">Select provider</option>
              {insurancePartners.map((provider) => (
                <option key={provider} value={provider}>
                  {provider}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Insurance Plan
            </label>
            <select
              className={inputBaseClasses}
              {...register("insurancePlan")}
              disabled={!selectedProvider}
            >
              <option value="">
                {selectedProvider ? "Select plan" : "Choose provider first"}
              </option>
              {plans.map((plan) => (
                <option key={plan} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2 rounded-2xl border border-orange-200 bg-orange-50/60 px-4 py-3 text-xs text-orange-800">
            Insurance Guidance: {coverageGuidance}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Date
            </label>
            <input
              type="date"
              min={minDate}
              className={inputBaseClasses}
              {...register("date")}
            />
            {errors.date ? (
              <p className="mt-1 text-xs text-rose-600">{errors.date.message}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Time Slot
            </label>
            <select className={inputBaseClasses} {...register("timeSlot")}>
              <option value="">Select time slot</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            {errors.timeSlot ? (
              <p className="mt-1 text-xs text-rose-600">
                {errors.timeSlot.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Share your symptoms, concerns, or preferred visit details."
            className={`${inputBaseClasses} resize-none`}
            {...register("message")}
          />
          {errors.message ? (
            <p className="mt-1 text-xs text-rose-600">{errors.message.message}</p>
          ) : null}
        </div>

        <label className="mt-4 flex items-start gap-2 text-xs text-slate-600">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-orange-600"
            {...register("consent")}
          />
          I consent to being contacted by CarePro Clinic for appointment
          confirmation and follow-up communication.
        </label>
        {errors.consent ? (
          <p className="mt-1 text-xs text-rose-600">{errors.consent.message}</p>
        ) : null}

        <motion.button
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="mt-5 inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/80 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" />
              Booking...
            </span>
          ) : visitType === "video" ? (
            "Book Video Visit"
          ) : (
            "Book Appointment"
          )}
        </motion.button>

        <p className="mt-3 text-xs text-slate-500">
          For urgent symptoms, call emergency services immediately.
        </p>
      </form>

      <AnimatePresence>
        {showSuccess ? (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-slate-900/35 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.22 }}
              className="w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-slate-900">
                Appointment Request Submitted
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Our scheduling team will contact you shortly to confirm the
                visit details.
              </p>
              <p className="mt-3 text-xs font-medium text-slate-500">
                Reference ID: {referenceId}
              </p>
              {meetingLink ? (
                <a
                  href={meetingLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex rounded-xl border border-orange-300 px-3 py-2 text-xs font-semibold text-orange-700"
                >
                  Open Teleconsultation Link
                </a>
              ) : null}
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="mt-5 rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium text-white"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
