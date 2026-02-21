export type Doctor = {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  education: string[];
  bio: string;
  image: string;
  workingHours: string[];
  rating: number;
  reviews: number;
  patients: string;
  consultationFee: string;
  nextAvailable: string;
  languages: string[];
  focusAreas: string[];
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  department: string;
  icon:
    | "HeartPulse"
    | "Brain"
    | "Baby"
    | "Stethoscope"
    | "Syringe"
    | "BadgePlus";
  duration: string;
  price: string;
  waitTime: string;
  includes: string[];
  idealFor: string[];
};

export const doctors: Doctor[] = [
  {
    id: "dr-emily-carter",
    name: "Dr. Emily Carter",
    specialization: "Cardiology",
    experience: 14,
    education: [
      "MD, Harvard Medical School",
      "Residency, Johns Hopkins Hospital",
      "Board Certified in Cardiology",
    ],
    bio: "Dr. Carter leads preventive cardiology programs for adults with hypertension, lipid disorders, and early coronary risk markers. Her approach combines diagnostics, lifestyle coaching, and medication optimization.",
    image: "/doctors/doctor-1.jpg",
    workingHours: [
      "Monday - Thursday: 9:00 AM - 4:00 PM",
      "Friday: 10:00 AM - 2:00 PM",
    ],
    rating: 4.9,
    reviews: 286,
    patients: "3,100+",
    consultationFee: "$140",
    nextAvailable: "Tomorrow, 10:30 AM",
    languages: ["English", "Spanish"],
    focusAreas: [
      "Preventive cardiology",
      "Hypertension management",
      "Cholesterol optimization",
    ],
  },
  {
    id: "dr-daniel-kim",
    name: "Dr. Daniel Kim",
    specialization: "Neurology",
    experience: 11,
    education: [
      "MD, Stanford University",
      "Fellowship, Mayo Clinic",
      "Board Certified in Neurology",
    ],
    bio: "Dr. Kim treats headaches, peripheral neuropathy, and early neurocognitive symptoms using evidence-guided care plans and minimal-disruption treatment pathways.",
    image: "/doctors/doctor-2.jpg",
    workingHours: [
      "Monday - Wednesday: 8:30 AM - 3:30 PM",
      "Saturday: 9:00 AM - 1:00 PM",
    ],
    rating: 4.8,
    reviews: 214,
    patients: "2,400+",
    consultationFee: "$160",
    nextAvailable: "Today, 3:30 PM",
    languages: ["English", "Korean"],
    focusAreas: [
      "Migraine management",
      "Nerve disorders",
      "Non-invasive neurological care",
    ],
  },
  {
    id: "dr-sophia-nguyen",
    name: "Dr. Sophia Nguyen",
    specialization: "Pediatrics",
    experience: 9,
    education: [
      "MD, University of Pennsylvania",
      "Pediatric Residency, UCSF Medical Center",
      "Member, American Academy of Pediatrics",
    ],
    bio: "Dr. Nguyen supports families from newborn to adolescent stages with structured wellness checks, vaccine planning, and clear developmental guidance.",
    image: "/doctors/doctor-3.jpg",
    workingHours: [
      "Tuesday - Friday: 9:30 AM - 5:30 PM",
      "Saturday: 10:00 AM - 2:00 PM",
    ],
    rating: 4.9,
    reviews: 193,
    patients: "2,800+",
    consultationFee: "$120",
    nextAvailable: "Thursday, 11:00 AM",
    languages: ["English", "Vietnamese"],
    focusAreas: [
      "Well-child visits",
      "Growth and nutrition",
      "Vaccination planning",
    ],
  },
  {
    id: "dr-michael-owens",
    name: "Dr. Michael Owens",
    specialization: "General Medicine",
    experience: 16,
    education: [
      "MD, Columbia University",
      "Residency, Mount Sinai Hospital",
      "Certified in Preventive Medicine",
    ],
    bio: "Dr. Owens provides comprehensive primary care for adults, with emphasis on chronic condition control, annual screening, and continuity of care.",
    image: "/doctors/doctor-4.jpg",
    workingHours: [
      "Monday - Friday: 8:00 AM - 4:00 PM",
      "Sunday: 10:00 AM - 1:00 PM",
    ],
    rating: 4.7,
    reviews: 341,
    patients: "4,200+",
    consultationFee: "$110",
    nextAvailable: "Tomorrow, 9:00 AM",
    languages: ["English", "French"],
    focusAreas: [
      "Primary care follow-up",
      "Diabetes and thyroid care",
      "Preventive screening",
    ],
  },
  {
    id: "dr-lucas-rodriguez",
    name: "Dr. Lucas Rodriguez",
    specialization: "Orthopedics",
    experience: 10,
    education: [
      "MD, University of California San Diego",
      "Orthopedic Residency, Cedars-Sinai Medical Center",
      "Board Certified in Orthopedic Surgery",
    ],
    bio: "Dr. Rodriguez focuses on joint pain, sports injuries, and non-surgical recovery plans designed to restore daily mobility and reduce long-term discomfort.",
    image: "/doctors/doctor-5.jpg",
    workingHours: [
      "Monday - Thursday: 10:00 AM - 5:00 PM",
      "Saturday: 9:00 AM - 12:00 PM",
    ],
    rating: 4.8,
    reviews: 178,
    patients: "2,000+",
    consultationFee: "$135",
    nextAvailable: "Friday, 2:00 PM",
    languages: ["English", "Portuguese"],
    focusAreas: [
      "Sports injury recovery",
      "Knee and shoulder pain",
      "Posture and mobility plans",
    ],
  },
  {
    id: "dr-ahmed-farooq",
    name: "Dr. Ahmed Farooq",
    specialization: "Pulmonology",
    experience: 12,
    education: [
      "MBBS, Aga Khan University",
      "Pulmonary Fellowship, Cleveland Clinic",
      "Board Certified in Pulmonary Medicine",
    ],
    bio: "Dr. Farooq treats chronic cough, asthma, and respiratory infections with evidence-based diagnostics and structured long-term breathing care plans.",
    image: "/doctors/doctor-6.jpg",
    workingHours: [
      "Tuesday - Friday: 9:00 AM - 4:30 PM",
      "Sunday: 10:00 AM - 1:00 PM",
    ],
    rating: 4.9,
    reviews: 231,
    patients: "2,700+",
    consultationFee: "$150",
    nextAvailable: "Today, 5:00 PM",
    languages: ["English", "Urdu"],
    focusAreas: [
      "Asthma and allergy care",
      "Respiratory infection follow-up",
      "Breathing performance assessment",
    ],
  },
];

export const services: Service[] = [
  {
    slug: "heart-care",
    title: "Heart Care",
    description: "Advanced cardiac screening, diagnosis, and prevention plans.",
    longDescription:
      "Our cardiology service supports early detection and ongoing heart health with ECG-based assessment, lifestyle planning, and medication review.",
    department: "Cardiology",
    icon: "HeartPulse",
    duration: "45 min",
    price: "$120+",
    waitTime: "Same week",
    includes: [
      "Cardiac risk profile",
      "Blood pressure and ECG review",
      "Lifestyle prevention roadmap",
    ],
    idealFor: [
      "Chest discomfort follow-up",
      "High blood pressure",
      "Family history of heart disease",
    ],
  },
  {
    slug: "neuro-consult",
    title: "Neurology Consult",
    description: "Expert evaluation for headaches, seizures, and nerve disorders.",
    longDescription:
      "Structured neurological consultations for patients with persistent headaches, numbness, dizziness, or seizure history, with personalized management pathways.",
    department: "Neurology",
    icon: "Brain",
    duration: "50 min",
    price: "$140+",
    waitTime: "2-4 days",
    includes: [
      "Neurological exam",
      "Symptom pattern analysis",
      "Care and monitoring plan",
    ],
    idealFor: [
      "Migraine and recurring headaches",
      "Nerve pain or tingling",
      "Sleep-related neurological concerns",
    ],
  },
  {
    slug: "child-wellness",
    title: "Child Wellness",
    description: "Routine checkups, vaccinations, and developmental assessments.",
    longDescription:
      "Comprehensive pediatric wellness visits including milestone tracking, nutrition guidance, age-based screening, and family-centered consultation.",
    department: "Pediatrics",
    icon: "Baby",
    duration: "35 min",
    price: "$90+",
    waitTime: "1-3 days",
    includes: [
      "Growth and development checks",
      "Vaccination review",
      "Parental guidance and Q&A",
    ],
    idealFor: [
      "Routine pediatric visits",
      "School health clearances",
      "Feeding and growth concerns",
    ],
  },
  {
    slug: "general-consultation",
    title: "General Consultation",
    description: "Primary care for ongoing health concerns and preventive planning.",
    longDescription:
      "General medicine consultation for diagnosis, follow-up care, chronic condition review, and integrated preventive health planning.",
    department: "Primary Care",
    icon: "Stethoscope",
    duration: "30 min",
    price: "$75+",
    waitTime: "Within 24 hrs",
    includes: [
      "General health evaluation",
      "Prescription and follow-up plan",
      "Preventive screening recommendations",
    ],
    idealFor: [
      "Fatigue, fever, or persistent symptoms",
      "Chronic disease follow-up",
      "Annual wellness planning",
    ],
  },
  {
    slug: "immunization",
    title: "Immunization",
    description: "Safe, up-to-date vaccine services for adults and children.",
    longDescription:
      "Clinic-based immunization service aligned with current CDC guidance for adult, pediatric, and travel-related vaccine schedules.",
    department: "Preventive Care",
    icon: "Syringe",
    duration: "20 min",
    price: "$50+",
    waitTime: "Walk-in eligible",
    includes: [
      "Eligibility and history review",
      "Vaccine administration",
      "Post-care instructions",
    ],
    idealFor: [
      "School and workplace requirements",
      "Travel vaccination planning",
      "Routine annual vaccines",
    ],
  },
  {
    slug: "preventive-screening",
    title: "Preventive Screening",
    description: "Early detection checks for high-impact health conditions.",
    longDescription:
      "Preventive diagnostics focused on early detection for blood pressure, glucose, cholesterol, and general wellness markers.",
    department: "Wellness",
    icon: "BadgePlus",
    duration: "40 min",
    price: "$85+",
    waitTime: "2-3 days",
    includes: [
      "Vitals and risk assessment",
      "Lab referral guidance",
      "Personalized preventive summary",
    ],
    idealFor: [
      "Annual health reviews",
      "Family history risk monitoring",
      "Proactive long-term wellness planning",
    ],
  },
];

export const testimonials = [
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
];

export const whyChooseUs = [
  {
    title: "Board-Certified Specialists",
    description:
      "Experienced doctors across cardiology, neurology, pediatrics, and primary care.",
  },
  {
    title: "Shorter Wait Times",
    description:
      "Online scheduling and efficient in-clinic flow reduce delays for most visits.",
  },
  {
    title: "Integrated Care Plans",
    description:
      "Each visit includes diagnosis, follow-up recommendations, and care continuity.",
  },
  {
    title: "Modern Patient Experience",
    description:
      "Digital forms, transparent communication, and clean, calming clinic spaces.",
  },
];

export const clinicStats = [
  { label: "Doctors", value: "12+" },
  { label: "Patients Served", value: "18k+" },
  { label: "Avg. Wait Time", value: "14 min" },
  { label: "Patient Satisfaction", value: "98%" },
];

export const insurancePartners = [
  "Aetna",
  "Blue Cross",
  "Cigna",
  "UnitedHealthcare",
  "Humana",
  "Kaiser",
];

export const faqs = [
  {
    question: "Do I need a referral before booking?",
    answer:
      "For most primary and pediatric appointments, no referral is required. Some specialist visits may require one depending on your insurance policy.",
  },
  {
    question: "Can I reschedule or cancel appointments online?",
    answer:
      "Yes. You can modify your appointment up to 12 hours before the slot through the appointment page or by calling the front desk.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Please bring a valid ID, insurance card, current medication list, and prior reports if available. Arrive 10 minutes early for check-in.",
  },
];
