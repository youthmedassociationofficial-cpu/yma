"use client";

import Link from "next/link";
import { Briefcase, ArrowRight, Heart, GraduationCap, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siteData from "@/data/siteData.json";

export default function Careers() {
  const roles = siteData.careers.roles;

  return (
    <>
      <Navbar />

      {/* Header Hero Section */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0d9488_0%,transparent_30%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-950/40 border border-teal-900/50 px-3.5 py-1.5 rounded-full">
            Join Our Mission
          </span>
          <h1 className="text-3.5xl sm:text-5xl font-display font-extrabold text-white mt-4 tracking-tight">
            Careers & Volunteer Openings
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
            {siteData.careers.introduction}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white font-sans border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
              Why Join Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mt-3">
              Volunteering at YMA
            </h2>
            <p className="text-slate-500 text-sm mt-1 max-w-sm mx-auto">
              Empower student communities while building valuable pre-med and leadership skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 sm:p-8 hover:bg-white hover:border-slate-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-accent mb-6">
                <Globe size={24} />
              </div>
              <h3 className="font-display font-bold text-primary text-lg mb-3">
                Global Network
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Connect with thousands of aspiring pre-med students, academic advisors, and clinical professionals worldwide.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 sm:p-8 hover:bg-white hover:border-slate-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-accent mb-6">
                <GraduationCap size={24} />
              </div>
              <h3 className="font-display font-bold text-primary text-lg mb-3">
                Skill Development
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Gain hands-on experience in leadership, event organization, medical science writing, and non-profit management.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 sm:p-8 hover:bg-white hover:border-slate-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-accent mb-6">
                <Heart size={24} />
              </div>
              <h3 className="font-display font-bold text-primary text-lg mb-3">
                Real Impact
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Support clinical care, medical supply distribution, and healthcare research through fundraising for global health initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-slate-50/50 font-sans border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
              Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mt-3">
              Open Positions
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Find a committee and role that aligns with your passions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role) => (
              <div
                key={role.title}
                className="bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl hover:border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-accent rounded-md border border-teal-100">
                      {role.department}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                      {role.type}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-primary text-lg mb-3">
                    {role.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {role.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">
                      Key Requirements
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {role.requirements}
                    </p>
                  </div>
                </div>

                <div>
                  <a
                    href={siteData.general.forms.careersApplicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans font-semibold text-xs text-white bg-accent hover:bg-accent-dark px-5 py-2.5 rounded-lg transition-colors shadow-sm cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Apply Now
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Founder CTA Section */}
      <section className="py-20 bg-white font-sans text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
            Start a Chapter
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mt-3 mb-4">
            Don't see a role for you?
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            You can bring YMA's mission to your school or local community by founding a YMA Chapter. We provide the curriculum, guidelines, and branding.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?form=chapters"
              className="w-full sm:w-auto font-sans font-bold text-xs uppercase tracking-widest bg-accent hover:bg-accent-dark text-white px-8 py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg text-center"
            >
              Start a Chapter
            </Link>
            <a
              href={siteData.general.startupKitUrl}
              download
              className="w-full sm:w-auto font-sans font-semibold text-xs text-slate-600 hover:text-primary bg-white border border-slate-200 hover:bg-slate-50 px-8 py-3.5 rounded-lg transition-colors text-center"
            >
              Download Startup Kit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
