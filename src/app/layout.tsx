import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
export const metadata: Metadata = { title: "Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy in Santa Monica, CA", description: "Therapy for adults in Santa Monica, CA navigating anxiety, panic, trauma, burnout, perfectionism, and high internal pressure. In-person and secure telehealth sessions with Dr. Maya Reynolds, PsyD." };
export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}><body className="min-h-full flex flex-col font-sans">{children}</body></html>; }
