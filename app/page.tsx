import type { Metadata } from "next";
import HomePageContent from "@/components/HomePageContent";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Online healthcare and pharmacy platform for digital prescriptions, treatment plans, and medication delivery.",
};

export default function Home() {
  return <HomePageContent />;
}
