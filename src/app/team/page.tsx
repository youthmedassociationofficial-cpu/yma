"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Users2, Compass, Award, Building, Landmark, ChevronRight, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siteData from "@/data/siteData.json";

export default function Team() {
  const coPresidents = siteData.team.coPresidents;
  const vicePresidents = siteData.team.vicePresidents;
  const departments = siteData.team.departments;

  const [activeDept, setActiveDept] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (imageSrc: string) => {
    setFailedImages((prev) => ({ ...prev, [imageSrc]: true }));
  };

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
                className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 sm:p-8 hover:bg-white hover:border-slate-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-slate-100 border-2 border-slate-200/50 mb-5 flex items-center justify-center text-slate-400 overflow-hidden relative">
                  {member.image && !failedImages[member.image] ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                      onError={() => handleImageError(member.image)}
                    />
                  ) : (
                    <AvatarPlaceholder name={member.name} />
                  )}
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
            <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto">
              We are currently expanding our executive board. Explore open VP roles and submit your application today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vicePresidents.map((vp, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-50 text-accent border border-teal-100 inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                      Now Hiring
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-primary text-base leading-snug mb-1">
                    {vp.role}
                  </h3>
                  <span className="text-slate-500 text-xs font-medium block">
                    {vp.department}
                  </span>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <Link
                    href="/careers"
                    className="inline-flex items-center justify-center gap-1.5 w-full text-xs font-semibold text-accent hover:text-accent-dark bg-teal-50/60 hover:bg-teal-50 border border-teal-100/80 py-2 rounded-xl transition-all cursor-pointer"
                  >
                    Apply for Position
                    <ChevronRight size={14} />
                  </Link>
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
            <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto">
              All committee branches are actively recruiting student coordinators, analysts, and project leads.
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10 border-b border-slate-100 pb-8 max-w-4xl mx-auto">
            {departments.map((dept, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDept(idx)}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none flex items-center gap-1.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                  activeDept === idx
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/15"
                    : "bg-slate-50 border border-slate-100 text-slate-650 hover:bg-slate-100 hover:border-slate-200 hover:shadow-sm"
                }`}
              >
                {dept.name}
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-md font-extrabold uppercase tracking-wider ${
                    activeDept === idx ? "bg-accent text-white" : "bg-teal-50 text-accent border border-teal-100"
                  }`}
                >
                  Now Hiring
                </span>
              </button>
            ))}
          </div>

          {/* Active Committee Recruitment Card */}
          <div className="max-w-4xl mx-auto bg-slate-50/60 border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-accent text-xs font-extrabold uppercase tracking-wider border border-teal-100 mb-4 animate-pulse">
              <Building size={14} />
              {departments[activeDept].name} — Now Hiring
            </div>

            <h3 className="font-display font-bold text-slate-900 text-2xl sm:text-3xl mb-3">
              Join the {departments[activeDept].name}
            </h3>

            <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed mb-8">
              {departments[activeDept].description}
            </p>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 max-w-2xl mx-auto mb-8 text-left">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Open Roles in this Division
              </h4>
              <div className="flex flex-wrap gap-2">
                {departments[activeDept].openRoles.map((role, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-slate-50 text-slate-700 font-semibold text-xs border border-slate-200/60 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/careers"
                className="w-full sm:w-auto font-sans font-bold text-xs uppercase tracking-widest bg-accent hover:bg-accent-dark text-white px-8 py-3.5 rounded-xl transition-all shadow-md shadow-accent/10 hover:shadow-lg hover:shadow-accent/20"
              >
                Apply for Committee Roles
              </Link>
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
