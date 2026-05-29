"use client";

import Link from "next/link";
import { Users2, Target, Eye, BarChart3, ShieldCheck, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siteData from "@/data/siteData.json";

export default function About() {
  const board = siteData.team.coPresidents;
  const advisors = siteData.about.advisors;
  const financials = siteData.about.financials;

  return (
    <>
      <Navbar />

      {/* About Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0d9488_0%,transparent_30%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-950/40 border border-teal-900/50 px-3.5 py-1.5 rounded-full">
            Our Organization
          </span>
          <h1 className="text-3.5xl sm:text-5xl font-display font-extrabold text-white mt-4 tracking-tight">
            About Youth Medical Association
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
            A global student-led non-profit dedicated to bridging the gap between young passion and real-world medical impact.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            
            {/* Mission */}
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50/30 flex gap-5 items-start">
              <div className="p-3.5 rounded-xl bg-teal-50 text-accent shadow-sm">
                <Target size={24} />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-3">
                  Our Mission
                </h2>
                <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
                  {siteData.about.mission}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50/30 flex gap-5 items-start">
              <div className="p-3.5 rounded-xl bg-teal-50 text-accent shadow-sm">
                <Eye size={24} />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold text-primary mb-3">
                  Our Vision
                </h2>
                <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
                  {siteData.about.vision}
                </p>
              </div>
            </div>

          </div>

          {/* Values Section */}
          <div className="border-t border-slate-100 pt-16">
            <h2 className="text-2xl font-display font-bold text-primary text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteData.about.values.map((value, i) => (
                <div key={i} className="text-center p-6 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-accent font-display font-bold text-sm mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="font-display font-bold text-primary text-base mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
              Leadership
            </span>
            <h2 className="text-3xl font-display font-bold text-primary mt-3">
              Executive Board
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              The student leaders directing YMA operations, events, and charity campaigns.
            </p>
          </div>

          {/* Board Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {board.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
              >
                {/* SVG Avatar Placeholder */}
                <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200/50 mb-4 overflow-hidden flex items-center justify-center text-slate-400">
                  <AvatarPlaceholder name={member.name} />
                </div>
                <h3 className="font-display font-bold text-primary text-base leading-tight">
                  {member.name}
                </h3>
                <span className="text-accent text-xs font-semibold mt-1">
                  {member.role}
                </span>
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mt-0.5">
                  {member.school}
                </span>
                <p className="text-slate-550 text-xs leading-relaxed mt-4 pt-4 border-t border-slate-50">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          {/* Advisory Panel */}
          <div className="border-t border-slate-200/60 pt-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-display font-bold text-primary">
                Advisory Panel
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Medical professionals and science mentors guiding competition integrity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {advisors.map((advisor) => (
                <div
                  key={advisor.name}
                  className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200/50 flex-shrink-0 flex items-center justify-center text-slate-400">
                    <AvatarPlaceholder name={advisor.name} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary text-base">
                      {advisor.name}
                    </h3>
                    <span className="text-accent text-xs font-semibold block mt-0.5">
                      {advisor.role}
                    </span>
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mt-0.5">
                      {advisor.affiliation}
                    </span>
                    <p className="text-slate-550 text-xs leading-relaxed mt-3">
                      {advisor.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Financial Transparency Section */}
      <section id="transparency" className="py-20 sm:py-28 bg-white font-sans">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex p-3 rounded-full bg-teal-50 text-accent mb-4">
              <BarChart3 size={28} />
            </div>
            <h2 className="text-3xl font-display font-bold text-primary">
              Financial Transparency
            </h2>
            <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto">
              We hold ourselves to strict accountability. 100% of executive staff are student volunteers receiving $0 compensation.
            </p>
          </div>

          <div className="p-6 sm:p-10 rounded-3xl border border-slate-100 bg-slate-50/50 shadow-sm">
            <div className="flex items-start gap-4 mb-8">
              <ShieldCheck size={24} className="text-accent flex-shrink-0 mt-1" />
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {siteData.about.financialStatement}
              </p>
            </div>

            {/* Visual breakdown bars */}
            <div className="flex flex-col gap-6">
              {financials.map((item) => (
                <div key={item.category} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-primary">{item.category}</span>
                    <span className="text-accent">{item.percentage}%</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: item.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 mt-10 pt-6 gap-4">
              <span className="text-xs text-slate-400 font-semibold uppercase">
                Audited annually by advisory board
              </span>
              <a
                href={siteData.general.sponsorshipPackageUrl}
                download
                className="text-xs font-bold text-accent hover:text-accent-dark flex items-center gap-1.5 transition-colors focus:outline-none"
              >
                <Download size={14} />
                Download Accountability Statement (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

interface AvatarProps {
  name: string;
}

function AvatarPlaceholder({ name }: AvatarProps) {
  const initials = name
    .split(" ")
    .filter((n) => !n.includes("Dr."))
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#e2e8f0" />
      <text
        x="50"
        y="56"
        fill="#64748b"
        fontSize="32"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontWeight="bold"
        textAnchor="middle"
      >
        {initials}
      </text>
    </svg>
  );
}
