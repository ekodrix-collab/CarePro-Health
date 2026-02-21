export type VisitType = "in-person" | "video";
export type BookingStatus = "pending" | "confirmed" | "cancelled" | "completed";
export type ContactStatus = "new" | "in_progress" | "resolved";

export type AppointmentRecord = {
  id: string;
  referenceId: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDoctor: string;
  date: string;
  timeSlot: string;
  message: string;
  visitType: VisitType;
  meetingLink?: string;
  insuranceProvider?: string;
  insurancePlan?: string;
  coverageGuidance?: string;
  status: BookingStatus;
  createdAt: string;
};

export type VisitHistoryRecord = {
  id: string;
  email: string;
  date: string;
  service: string;
  doctor: string;
  summary: string;
};

export type ContactRequestRecord = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: ContactStatus;
  createdAt: string;
};

export type PortalSession = {
  name: string;
  email: string;
};

export type PortalUser = {
  name: string;
  email: string;
  password: string;
};

const APPOINTMENTS_KEY = "carepro-appointments";
const VISIT_HISTORY_KEY = "carepro-visit-history";
const CONTACT_REQUESTS_KEY = "carepro-contact-requests";
const PORTAL_SESSION_KEY = "carepro-portal-session";
const PORTAL_USERS_KEY = "carepro-portal-users";

export const demoPortalUsers: PortalUser[] = [
  {
    name: "Alex Carter",
    email: "patient@carepro.com",
    password: "patient123",
  },
  {
    name: "Olivia Harper",
    email: "olivia@carepro.com",
    password: "patient123",
  },
];

const seedAppointments: AppointmentRecord[] = [
  {
    id: "seed-appointment-1",
    referenceId: "CP-12001",
    name: "Alex Carter",
    email: "patient@carepro.com",
    phone: "+1 415 555 0123",
    service: "Heart Care",
    preferredDoctor: "Dr. Emily Carter",
    date: "2026-02-24",
    timeSlot: "10:30 AM",
    message: "Follow-up for blood pressure plan.",
    visitType: "video",
    meetingLink: "https://meet.careproclinic.com/cp-12001",
    insuranceProvider: "Aetna",
    insurancePlan: "PPO Basic",
    coverageGuidance: "Estimated coverage: 70-80% after deductible.",
    status: "confirmed",
    createdAt: "2026-02-15T09:30:00.000Z",
  },
];

const seedVisitHistory: VisitHistoryRecord[] = [
  {
    id: "seed-history-1",
    email: "patient@carepro.com",
    date: "2026-01-18",
    service: "General Consultation",
    doctor: "Dr. Michael Owens",
    summary: "Routine wellness review and lipid screening recommendation.",
  },
  {
    id: "seed-history-2",
    email: "patient@carepro.com",
    date: "2025-12-03",
    service: "Preventive Screening",
    doctor: "Dr. Michael Owens",
    summary: "Screening panel completed. Follow-up in 6 months.",
  },
];

const seedContacts: ContactRequestRecord[] = [
  {
    id: "seed-contact-1",
    name: "James Foster",
    email: "james@example.com",
    subject: "Insurance confirmation",
    message: "Please confirm if my UnitedHealthcare plan is accepted.",
    status: "new",
    createdAt: "2026-02-16T11:00:00.000Z",
  },
];

function canUseStorage() {
  return typeof window !== "undefined";
}

function readStorage<T>(key: string, fallback: T): T {
  if (!canUseStorage()) {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) {
      return fallback;
    }
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeStorage<T>(key: string, value: T) {
  if (!canUseStorage()) {
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(value));
}

function ensureSeedData() {
  if (!canUseStorage()) {
    return;
  }

  if (!window.localStorage.getItem(APPOINTMENTS_KEY)) {
    writeStorage(APPOINTMENTS_KEY, seedAppointments);
  }
  if (!window.localStorage.getItem(VISIT_HISTORY_KEY)) {
    writeStorage(VISIT_HISTORY_KEY, seedVisitHistory);
  }
  if (!window.localStorage.getItem(CONTACT_REQUESTS_KEY)) {
    writeStorage(CONTACT_REQUESTS_KEY, seedContacts);
  }
  if (!window.localStorage.getItem(PORTAL_USERS_KEY)) {
    writeStorage(PORTAL_USERS_KEY, demoPortalUsers);
  }
}

function nextId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.floor(
    (Date.now() % 1000) + 100
  )}`;
}

export function getAppointments() {
  ensureSeedData();
  return readStorage<AppointmentRecord[]>(APPOINTMENTS_KEY, []);
}

export function createAppointment(
  appointment: Omit<AppointmentRecord, "id" | "createdAt" | "status">
) {
  const existing = getAppointments();
  const created: AppointmentRecord = {
    ...appointment,
    id: nextId("apt"),
    createdAt: new Date().toISOString(),
    status: "pending",
  };
  writeStorage(APPOINTMENTS_KEY, [created, ...existing]);
  return created;
}

export function updateAppointmentStatus(id: string, status: BookingStatus) {
  const updated = getAppointments().map((item) =>
    item.id === id ? { ...item, status } : item
  );
  writeStorage(APPOINTMENTS_KEY, updated);
}

export function rescheduleAppointment(id: string, date: string, timeSlot: string) {
  const updated = getAppointments().map((item) =>
    item.id === id ? { ...item, date, timeSlot, status: "pending" as const } : item
  );
  writeStorage(APPOINTMENTS_KEY, updated);
}

export function getVisitHistoryByEmail(email: string) {
  ensureSeedData();
  const all = readStorage<VisitHistoryRecord[]>(VISIT_HISTORY_KEY, []);
  return all.filter((item) => item.email.toLowerCase() === email.toLowerCase());
}

export function getContactRequests() {
  ensureSeedData();
  return readStorage<ContactRequestRecord[]>(CONTACT_REQUESTS_KEY, []);
}

export function createContactRequest(
  payload: Omit<ContactRequestRecord, "id" | "status" | "createdAt">
) {
  const existing = getContactRequests();
  const created: ContactRequestRecord = {
    ...payload,
    id: nextId("contact"),
    status: "new",
    createdAt: new Date().toISOString(),
  };
  writeStorage(CONTACT_REQUESTS_KEY, [created, ...existing]);
  return created;
}

export function updateContactRequestStatus(id: string, status: ContactStatus) {
  const updated = getContactRequests().map((item) =>
    item.id === id ? { ...item, status } : item
  );
  writeStorage(CONTACT_REQUESTS_KEY, updated);
}

export function getPortalSession() {
  return readStorage<PortalSession | null>(PORTAL_SESSION_KEY, null);
}

export function setPortalSession(session: PortalSession) {
  writeStorage(PORTAL_SESSION_KEY, session);
}

export function clearPortalSession() {
  if (!canUseStorage()) {
    return;
  }
  window.localStorage.removeItem(PORTAL_SESSION_KEY);
}

export function getPortalUsers() {
  ensureSeedData();
  return readStorage<PortalUser[]>(PORTAL_USERS_KEY, demoPortalUsers);
}

export function authenticatePortalUser(email: string, password: string) {
  const users = getPortalUsers();
  return (
    users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase().trim() &&
        user.password === password
    ) ?? null
  );
}

export function registerPortalUser(payload: PortalUser) {
  const users = getPortalUsers();
  const normalizedEmail = payload.email.toLowerCase().trim();
  const exists = users.some(
    (user) => user.email.toLowerCase().trim() === normalizedEmail
  );

  if (exists) {
    return {
      ok: false as const,
      error: "An account with this email already exists.",
    };
  }

  const created: PortalUser = {
    name: payload.name.trim(),
    email: normalizedEmail,
    password: payload.password,
  };
  writeStorage(PORTAL_USERS_KEY, [created, ...users]);
  return { ok: true as const, user: created };
}
