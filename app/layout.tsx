import type { Metadata } from "next";
import { Figtree, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumibri ABA Services | In-Home ABA Therapy in Northern New Jersey",
  description:
    "Evidence-based Applied Behavior Analysis (ABA) therapy and Social Skill Groups for children with autism across Northern New Jersey.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} ${bricolage.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}