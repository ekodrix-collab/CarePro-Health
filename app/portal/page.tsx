import type { Metadata } from "next";
import PatientPortal from "@/components/PatientPortal";

export const metadata: Metadata = {
  title: "Patient Portal",
  description:
    "Secure patient portal to review appointments, reschedule visits, cancel bookings, and view visit history.",
};

export default function PortalPage() {
  return <PatientPortal />;
}
