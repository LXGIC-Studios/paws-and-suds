import type { Metadata } from "next";
import { Quicksand, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paws & Suds Pet Spa | Dog Grooming & Pet Care",
  description:
    "Professional dog grooming in a stress-free environment. Bath & brush, full groom, nail trim, and more. Book your pup's spa day today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${quicksand.variable} ${dmSans.variable}`}>
      <body className="font-body text-[#2D2D2D] bg-white antialiased">
        <Navbar />
        <main className="pt-[76px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
