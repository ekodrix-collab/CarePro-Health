"use client";

import { useState } from "react";
import {
  Apple,
  ArrowRight,
  CalendarClock,
  Chrome,
  History,
  LogOut,
  RefreshCw,
  Video,
  XCircle,
} from "lucide-react";
import {
  authenticatePortalUser,
  clearPortalSession,
  getAppointments,
  getPortalSession,
  getVisitHistoryByEmail,
  registerPortalUser,
  rescheduleAppointment,
  setPortalSession,
  updateAppointmentStatus,
} from "@/lib/portal-store";

const statusClasses: Record<string, string> = {
  pending: "bg-amber-100 text-amber-700",
  confirmed: "bg-emerald-100 text-emerald-700",
  cancelled: "bg-rose-100 text-rose-700",
  completed: "bg-slate-200 text-slate-700",
};

const rescheduleSlots = ["09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "03:30 PM"];

export default function PatientPortal() {
  const [session, setSession] = useState(() => getPortalSession());
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("patient@carepro.com");
  const [password, setPassword] = useState("patient123");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [, setRefreshCounter] = useState(0);
  const [editingId, setEditingId] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("10:30 AM");

  const appointments = session
    ? getAppointments().filter(
        (item) => item.email.toLowerCase() === session.email.toLowerCase()
      )
    : [];

  const visitHistory = session ? getVisitHistoryByEmail(session.email) : [];

  function refresh() {
    setRefreshCounter((prev) => prev + 1);
  }

  function login() {
    const user = authenticatePortalUser(email, password);

    if (!user) {
      setError("Invalid credentials. Check your email and password.");
      return;
    }

    const nextSession = { name: user.name, email: user.email };
    setPortalSession(nextSession);
    setSession(nextSession);
    setError("");
  }

  function createAccount() {
    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const result = registerPortalUser({
      name,
      email,
      password,
    });
    if (!result.ok) {
      setError(result.error);
      return;
    }

    const nextSession = { name: result.user.name, email: result.user.email };
    setPortalSession(nextSession);
    setSession(nextSession);
    setError("");
  }

  function logout() {
    clearPortalSession();
    setSession(null);
  }

  if (!session) {
    return (
      <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8">
        <section className="grid overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 p-7 text-white sm:p-9">
            <p className="inline-flex rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              CarePro Account
            </p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Complete care, right in your pocket.
            </h1>
            <p className="mt-3 max-w-md text-sm text-orange-50">
              Access prescriptions, appointments, visit history, and follow-up
              support from one secure patient portal.
            </p>
            <div className="mt-6 space-y-2 text-sm text-orange-50">
              <p>Free medication reminders and refill tracking</p>
              <p>Secure teleconsultation links and visit notes</p>
              <p>Easy rescheduling and cancellation flow</p>
            </div>
          </div>

          <div className="p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Welcome to CarePro
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              {authMode === "login" ? "Log in to your account" : "Create your account"}
            </h2>

            <div className="mt-5 space-y-3">
              {authMode === "signup" ? (
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    placeholder="Your full name"
                  />
                </div>
              ) : null}
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Phone or Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  placeholder="Enter password"
                />
              </div>
              {authMode === "signup" ? (
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    placeholder="Re-enter password"
                  />
                </div>
              ) : null}
            </div>

            {authMode === "login" ? (
              <button
                type="button"
                className="mt-2 text-xs font-medium text-orange-700 hover:text-orange-800"
              >
                Forgot Password?
              </button>
            ) : null}

            {error ? <p className="mt-3 text-xs text-rose-600">{error}</p> : null}

            <button
              type="button"
              onClick={authMode === "login" ? login : createAccount}
              className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white"
            >
              {authMode === "login" ? "Go to your account" : "Create account"}
              <ArrowRight size={14} />
            </button>

            {authMode === "login" ? (
              <button
                type="button"
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700"
              >
                Log in with code
              </button>
            ) : null}

            <div className="mt-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-500">or</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700"
              >
                <Chrome size={16} />
                Log in with Google
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700"
              >
                <Apple size={16} />
                Log in with Apple
              </button>
            </div>

            <p className="mt-4 text-xs text-slate-600">
              {authMode === "login" ? "New to CarePro?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => {
                  setAuthMode(authMode === "login" ? "signup" : "login");
                  setError("");
                }}
                className="font-semibold text-orange-700 hover:text-orange-800"
              >
                {authMode === "login" ? "Create account" : "Log in"}
              </button>
            </p>
            <p className="mt-3 text-[11px] leading-relaxed text-slate-500">
              By proceeding, you agree to our terms and privacy policy. Message
              and data rates may apply.
            </p>
            {authMode === "login" ? (
              <p className="mt-3 rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-600">
                Demo login: `patient@carepro.com` / `patient123`
              </p>
            ) : null}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Patient Portal</h1>
          <p className="mt-1 text-sm text-slate-600">
            Welcome back, {session.name}. Manage your bookings and review visit
            history.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={refresh}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700"
          >
            <RefreshCw size={14} />
            Refresh
          </button>
          <button
            type="button"
            onClick={logout}
            className="inline-flex items-center gap-1 rounded-xl bg-slate-800 px-3 py-2 text-xs font-medium text-white"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
            <CalendarClock size={18} />
            My Appointments
          </h2>
          <div className="mt-4 space-y-3">
            {appointments.length === 0 ? (
              <p className="rounded-2xl bg-slate-100 px-3 py-3 text-sm text-slate-600">
                No appointments found for this account.
              </p>
            ) : (
              appointments.map((appointment) => (
                <article key={appointment.id} className="rounded-2xl bg-slate-100 p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {appointment.service}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-600">
                        {appointment.date} at {appointment.timeSlot} | {appointment.visitType}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Ref: {appointment.referenceId}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${
                        statusClasses[appointment.status] ?? statusClasses.pending
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </div>

                  {appointment.visitType === "video" && appointment.meetingLink ? (
                    <a
                      href={appointment.meetingLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1 rounded-lg border border-orange-300 bg-white px-3 py-1.5 text-xs font-semibold text-orange-700"
                    >
                      <Video size={13} />
                      Join Teleconsultation
                    </a>
                  ) : null}

                  {editingId === appointment.id ? (
                    <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                      <input
                        type="date"
                        value={newDate}
                        onChange={(event) => setNewDate(event.target.value)}
                        className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs"
                      />
                      <select
                        value={newTime}
                        onChange={(event) => setNewTime(event.target.value)}
                        className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs"
                      >
                        {rescheduleSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={() => {
                          if (!newDate) {
                            return;
                          }
                          rescheduleAppointment(appointment.id, newDate, newTime);
                          setEditingId("");
                          refresh();
                        }}
                        className="rounded-xl bg-orange-500 px-3 py-2 text-xs font-semibold text-white"
                      >
                        Save
                      </button>
                    </div>
                  ) : null}

                  {appointment.status !== "cancelled" &&
                  appointment.status !== "completed" ? (
                    <div className="mt-3 flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingId(appointment.id);
                          setNewDate(appointment.date);
                          setNewTime(appointment.timeSlot);
                        }}
                        className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        <RefreshCw size={12} />
                        Reschedule
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          updateAppointmentStatus(appointment.id, "cancelled");
                          refresh();
                        }}
                        className="inline-flex items-center gap-1 rounded-lg border border-rose-300 bg-white px-3 py-1.5 text-xs font-semibold text-rose-700"
                      >
                        <XCircle size={12} />
                        Cancel
                      </button>
                    </div>
                  ) : null}
                </article>
              ))
            )}
          </div>
        </section>

        <section className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
          <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900">
            <History size={18} />
            Visit History
          </h2>
          <div className="mt-4 space-y-3">
            {visitHistory.length === 0 ? (
              <p className="rounded-2xl bg-slate-100 px-3 py-3 text-sm text-slate-600">
                No historical visits found yet.
              </p>
            ) : (
              visitHistory.map((item) => (
                <article key={item.id} className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.service}</p>
                  <p className="mt-0.5 text-xs text-slate-600">
                    {item.date} with {item.doctor}
                  </p>
                  <p className="mt-2 text-xs text-slate-600">{item.summary}</p>
                </article>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
