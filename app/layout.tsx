import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const inter = Manrope({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Plus_Jakarta_Sans({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carepro-demo.vercel.app"),
  title: {
    default: "CarePro Clinic | Modern Medical Care",
    template: "%s | CarePro Clinic",
  },
  description:
    "Modern, trusted medical clinic website featuring expert doctors, healthcare services, and easy appointment booking.",
  keywords: [
    "medical clinic",
    "doctor appointment",
    "healthcare",
    "clinic website",
    "next.js medical site",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <div className="relative isolate min-h-screen overflow-x-hidden text-foreground">
          <div className="bg-layer-glow pointer-events-none fixed inset-0 -z-10" />
          <div className="bg-layer-grid pointer-events-none fixed inset-0 -z-10" />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  );
}
