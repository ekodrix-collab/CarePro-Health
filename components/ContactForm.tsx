"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createContactRequest } from "@/lib/portal-store";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  subject: z.string().min(3, "Please enter a subject."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClasses =
  "w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 900));
    createContactRequest(values);
    setSubmitted(true);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[2rem] border border-orange-100 bg-white p-5 shadow-sm sm:p-7"
    >
      <h2 className="text-2xl font-semibold text-slate-900">Send a Support Request</h2>
      <p className="mt-1 text-sm text-slate-600">
        For non-urgent support requests, our team replies within one business day.
      </p>

      <div className="mt-4 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input type="text" className={inputClasses} {...register("name")} />
          {errors.name ? (
            <p className="mt-1 text-xs text-rose-600">{errors.name.message}</p>
          ) : null}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input type="email" className={inputClasses} {...register("email")} />
          {errors.email ? (
            <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>
          ) : null}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Subject
          </label>
          <input type="text" className={inputClasses} {...register("subject")} />
          {errors.subject ? (
            <p className="mt-1 text-xs text-rose-600">{errors.subject.message}</p>
          ) : null}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            rows={5}
            className={`${inputClasses} resize-none`}
            {...register("message")}
          />
          {errors.message ? (
            <p className="mt-1 text-xs text-rose-600">{errors.message.message}</p>
          ) : null}
        </div>
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="mt-5 inline-flex rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/80 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </motion.button>

      {submitted ? (
        <p className="mt-3 text-sm font-medium text-emerald-700">
          Message sent successfully.
        </p>
      ) : null}
    </form>
  );
}
