"use client";

import { Mail, Compass, Award, ExternalLink, Download, Landmark, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siteData from "@/data/siteData.json";

export default function Contact() {
  const forms = siteData.general.forms;

  const contactSections = [
    {
      title: "General Inquiry",
      description: "Have general questions about our student-led non-profit, guest speaker schedules, or advisory panel opportunities?",
      requirements: [
        "Inquiries are reviewed by the Co-Presidents",
        "Typical response time is 24-48 hours",
        "Available for educators, students, and parents"
      ],
      buttonText: "Open Inquiry Form",
      buttonUrl: forms.generalInquiryUrl,
      icon: <Mail className="text-accent" size={24} />,
      bg: "bg-teal-50/50 border-teal-100/50"
    },
    {
      title: "Register for Competition",
      description: "Ready to test your diagnostics or clinical reasoning skills? Sign up your high school or undergraduate team for our active season.",
      requirements: [
        "Teams of 1 to 4 members permitted",
        "Requires student grade level verification",
        "Guidelines and rules are sent upon signup"
      ],
      buttonText: "Open Registration Form",
      buttonUrl: forms.eventRegistrationUrl,
      icon: <Award className="text-accent" size={24} />,
      bg: "bg-indigo-50/50 border-indigo-100/50"
    },
    {
      title: "Start a School Chapter",
      description: "Establish a registered extracurricular branch of the Youth Medical Association at your high school or university campus.",
      requirements: [
        "Access to pre-med study guides & guest lectures",
        "Requires a faculty advisor email (optional)",
        "Chapter Startup Kit PDF available below"
      ],
      buttonText: "Open Chapter Application",
      buttonUrl: forms.chapterStartupUrl,
      icon: <Compass className="text-accent" size={24} />,
      bg: "bg-emerald-50/50 border-emerald-100/50",
      pdfUrl: siteData.general.startupKitUrl,
      pdfText: "Chapter Startup Kit (PDF)"
    },
    {
      title: "Sponsorship & Partnerships",
      description: "Partner with YMA to foster bioscience innovation and showcase your brand to thousands of future healthcare professionals.",
      requirements: [
        "Multiple tax-deductible contribution tiers",
        "Judging roles and logo branding benefits",
        "Sponsorship deck PDF available below"
      ],
      buttonText: "Submit Sponsor Request",
      buttonUrl: forms.sponsorshipRequestUrl,
      icon: <Landmark className="text-accent" size={24} />,
      bg: "bg-slate-50 border-slate-200/50",
      pdfUrl: siteData.general.sponsorshipPackageUrl,
      pdfText: "Sponsorship Deck (PDF)"
    }
  ];

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#0d9488_0%,transparent_30%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-950/40 border border-teal-900/50 px-3.5 py-1.5 rounded-full">
            Get in Touch
          </span>
          <h1 className="text-3.5xl sm:text-5xl font-display font-extrabold text-white mt-4 tracking-tight">
            Connect With YMA
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
            Select one of the departments below. Clicking a button will redirect you to our official Google Forms systems to submit your data.
          </p>
        </div>
      </section>

      {/* 4 Cards Grid Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100 font-sans">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactSections.map((section, idx) => (
              <div
                key={idx}
                className={`bg-white border rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${section.bg}`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3.5 rounded-2xl bg-white shadow-sm border border-slate-100">
                      {section.icon}
                    </div>
                    <h2 className="text-lg sm:text-xl font-display font-bold text-primary">
                      {section.title}
                    </h2>
                  </div>

                  <p className="text-slate-650 text-xs sm:text-sm leading-relaxed mb-6">
                    {section.description}
                  </p>

                  <div className="mb-8">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-3">
                      Requirements & Details
                    </span>
                    <ul className="flex flex-col gap-2">
                      {section.requirements.map((req, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-slate-100/60 pt-6">
                  <a
                    href={section.buttonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full font-sans font-semibold text-xs text-white bg-accent hover:bg-accent-dark py-3.5 rounded-xl transition-all shadow-md shadow-accent/15 flex items-center justify-center gap-2"
                  >
                    {section.buttonText}
                    <ExternalLink size={14} />
                  </a>

                  {section.pdfUrl && (
                    <a
                      href={section.pdfUrl}
                      download
                      className="text-xs font-bold text-slate-500 hover:text-primary flex items-center justify-center gap-1.5 transition-colors focus:outline-none"
                    >
                      <Download size={14} />
                      {section.pdfText}
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-xs text-slate-400 font-semibold uppercase">
            <ShieldCheck size={16} className="text-accent" />
            Verified Google Forms Security & Encryption
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
