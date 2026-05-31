import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youth Medical Association (YMA) | Empowering Aspiring Medical Leaders",
  description: "YMA is a student-led non-profit dedicated to engaging students through medical case study competitions, bio-innovation summits, and fundraising for global health charities.",
  keywords: "student medical competitions, high school medical clubs, youth medical association, bio-innovation, pre-med events, healthcare charities",
  verification: {
    google: "qpUva6M78nLYCRNbsWlFNlLhfKELDXPkLzxlj6DDjQI",
  },
  icons: {
    icon: [
      { url: "/assets/team/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/assets/team/logo.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
