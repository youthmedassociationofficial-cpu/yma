"use client";

import { useState } from "react";
import { Users2, Compass, Award, Building, Landmark, ChevronRight, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siteData from "@/data/siteData.json";

export default function Team() {
  const coPresidents = siteData.team.coPresidents;
  const vicePresidents = siteData.team.vicePresidents;
  const departments = siteData.team.departments;

  const [activeDept, setActiveDept] = useState(0);

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0d9488_0%,transparent_30%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-950/40 border border-teal-900/50 px-3.5 py-1.5 rounded-full">
            Our Network
          </span>
          <h1 className="text-3.5xl sm:text-5xl font-display font-extrabold text-white mt-4 tracking-tight">
            YMA Student Leadership
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
            Meet the global team of 90 student leaders, pre-med researchers, and public health advocates driving YMA.
          </p>
        </div>
      </section>

      {/* Co-Presidents Tier */}
      <section className="py-20 bg-white font-sans border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
              Executive Board
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mt-3">
              Co-Presidents
            </h2>
            <p className="text-slate-500 text-sm mt-1 max-w-sm mx-auto">
              Joint executive leadership overseeing YMA's global chapters, competitions, and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coPresidents.map((member) => (
              <div
                key={member.name}
                className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 sm:p-8 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200/50 mb-5 flex items-center justify-center text-slate-400">
                  <AvatarPlaceholder name={member.name} />
                </div>
                <h3 className="font-display font-bold text-primary text-lg">
                  {member.name}
                </h3>
                <span className="text-accent text-xs font-semibold mt-1">
                  {member.role}
                </span>
                
                <div className="flex items-center gap-1 text-slate-400 text-[10px] uppercase font-bold tracking-wider mt-1">
                  <GraduationCap size={14} className="text-slate-400" />
                  {member.school}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-5 pt-5 border-t border-slate-200/60">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vice Presidents Tier */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
              Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mt-3">
              Vice Presidents
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Directors managing respective YMA administrative branches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vicePresidents.map((vp) => (
              <div
                key={vp.name}
                className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200/50 flex-shrink-0 flex items-center justify-center text-slate-400">
                  <AvatarPlaceholder name={vp.name} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary text-sm leading-snug">
                    {vp.name}
                  </h3>
                  <span className="text-accent text-[11px] font-semibold block mt-0.5">
                    {vp.role}
                  </span>
                  <span className="text-slate-400 text-[9px] uppercase font-bold tracking-wider block mt-1">
                    {vp.school}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Committee Departments Directory */}
      <section className="py-20 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
              Committees
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mt-3">
              Department Committees
            </h2>
            <p className="text-slate-500 text-sm mt-1 max-w-sm mx-auto">
              YMA general members and coordinators working in specific divisions.
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10 border-b border-slate-100 pb-8 max-w-4xl mx-auto">
            {departments.map((dept, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDept(idx)}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none flex items-center gap-1.5 cursor-pointer ${
                  activeDept === idx
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                    : "bg-slate-50 border border-slate-100 text-slate-650 hover:bg-slate-100"
                }`}
              >
                {dept.name}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  activeDept === idx ? "bg-accent text-white" : "bg-slate-200 text-slate-650"
                }`}>
                  {dept.members.length}
                </span>
              </button>
            ))}
          </div>

          {/* Committee Member Grid */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-lg font-display font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Building size={18} className="text-accent" />
              {departments[activeDept].name}
              <ChevronRight size={16} className="text-slate-300" />
              <span className="text-xs text-slate-400 font-semibold">{departments[activeDept].members.length} Active Members</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-scale-up">
              {departments[activeDept].members.map((member, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-all flex flex-col justify-center h-28"
                >
                  <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                    {member.name}
                  </h4>
                  <span className="text-accent text-[11px] font-semibold mt-0.5">
                    {member.role}
                  </span>
                  <span className="text-slate-450 text-[9px] uppercase font-bold tracking-wider mt-1 truncate">
                    {member.school}
                  </span>
                </div>
              ))}
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
      <circle cx="50" cy="50" r="50" fill="#f1f5f9" />
      <text
        x="50"
        y="56"
        fill="#64748b"
        fontSize="30"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontWeight="bold"
        textAnchor="middle"
      >
        {initials}
      </text>
    </svg>
  );
}
