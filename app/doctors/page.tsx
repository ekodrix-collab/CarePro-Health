import type { Metadata } from "next";
import DoctorsDirectory from "@/components/DoctorsDirectory";
import { doctors } from "@/lib/clinic-data";

export const metadata: Metadata = {
  title: "Doctors",
  description:
    "Browse specialist doctors at CarePro Clinic and view detailed doctor profiles.",
};

export default function DoctorsPage() {
  return <DoctorsDirectory doctors={doctors} />;
}
