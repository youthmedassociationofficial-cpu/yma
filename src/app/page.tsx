"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, BookOpen, Users2, ShieldCheck, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetricCard from "@/components/MetricCard";
import siteData from "@/data/siteData.json";

export default function Home() {
  const upcomingEvents = siteData.competitions.schedule.slice(0, 2);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-24 sm:py-32 border-b border-slate-900">
        {/* Decorative Grid and Glow Backgrounds */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-semibold tracking-wider uppercase mb-6 animate-fade-in shadow-inner">
            <ActivityIcon className="animate-pulse text-accent" />
            Empowering Future Healthcare Leaders
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white max-w-4xl leading-[1.1] mb-6 animate-slide-up">
            {siteData.home.heroTitle}
          </h1>

          <p className="font-sans text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10 animate-slide-up">
            {siteData.home.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 animate-slide-up w-full sm:w-auto">
            <Link
              href="/contact?form=register"
              className="w-full sm:w-auto font-sans font-semibold text-sm bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              {siteData.home.ctaRegister}
            </Link>
            <Link
              href="/contact?form=chapters"
              className="w-full sm:w-auto font-sans font-semibold text-sm bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              {siteData.home.ctaChapters}
            </Link>
          </div>

        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative z-20 -mt-10 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            value={siteData.metrics.studentsImpacted.value}
            label={siteData.metrics.studentsImpacted.label}
            suffix={siteData.metrics.studentsImpacted.suffix}
          />
          <MetricCard
            value={siteData.metrics.competitions.value}
            label={siteData.metrics.competitions.label}
            suffix={siteData.metrics.competitions.suffix}
          />
          <MetricCard
            value={siteData.metrics.fundsRaised.value}
            label={siteData.metrics.fundsRaised.label}
            prefix={siteData.metrics.fundsRaised.prefix}
            suffix={siteData.metrics.fundsRaised.suffix}
          />
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 sm:py-28 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mt-3">
              Engage. Educate. Empower.
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto mt-2">
              Three pillars that guide our student-led mission to impact international healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Competitions */}
            <div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-slate-200/50 transition-all duration-300 flex flex-col items-start">
              <div className="p-3.5 rounded-xl bg-teal-50 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 mb-6 shadow-sm">
                <Trophy size={24} />
              </div>
              <h3 className="text-lg font-display font-bold text-primary mb-3">
                High-Caliber Competitions
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Challenge your clinical skills with case analysis, physiology trivia, and bio-innovation projects.
              </p>
              <Link href="/competitions" className="mt-auto text-xs font-bold text-accent hover:text-accent-dark flex items-center gap-1.5 transition-colors group/link">
                View Event Schedule 
                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>

            {/* Chapters */}
            <div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-slate-200/50 transition-all duration-300 flex flex-col items-start">
              <div className="p-3.5 rounded-xl bg-teal-50 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 mb-6 shadow-sm">
                <Users2 size={24} />
              </div>
              <h3 className="text-lg font-display font-bold text-primary mb-3">
                School Chapters Network
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Bring YMA to your high school or college. Access exclusive study guides, networking, and expert mentorship.
              </p>
              <Link href="/contact?form=chapters" className="mt-auto text-xs font-bold text-accent hover:text-accent-dark flex items-center gap-1.5 transition-colors group/link">
                Start a Chapter
                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>

            {/* Charity */}
            <div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-slate-200/50 transition-all duration-300 flex flex-col items-start">
              <div className="p-3.5 rounded-xl bg-teal-50 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 mb-6 shadow-sm">
                <Heart size={24} />
              </div>
              <h3 className="text-lg font-display font-bold text-primary mb-3">
                Direct Humanitarian Impact
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Every competition fee supports mobile healthcare clinics, oncology resources, and global vaccination programs.
              </p>
              <Link href="/impact" className="mt-auto text-xs font-bold text-accent hover:text-accent-dark flex items-center gap-1.5 transition-colors group/link">
                Track Our Impact
                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Competitions Teaser */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                Upcoming Events
              </span>
              <h2 className="text-3xl font-display font-bold text-primary mt-2">
                Active Competition Season
              </h2>
            </div>
            <Link
              href="/competitions"
              className="text-sm font-semibold text-slate-700 hover:text-primary flex items-center gap-1.5 group w-fit"
            >
              View Full Calendar
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-semibold text-accent bg-teal-50 rounded-full">
                      {event.tag}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-50 pt-5">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Status: <span className="text-accent-dark">{event.status}</span>
                  </span>
                  <Link
                    href={`/contact?form=register&event=${event.id}`}
                    className="font-sans font-semibold text-xs text-white bg-accent hover:bg-accent-dark px-4.5 py-2.5 rounded-lg transition-colors shadow-sm"
                  >
                    Register
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0d9488_0%,transparent_35%)] opacity-30"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <ShieldCheck size={48} className="text-accent mb-6" />
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Help Shape the Future of Medicine
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed mb-8">
            Whether you want to lead a school chapter, participate in medical diagnostics events, or sponsor student healthcare innovations, there is a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contact?form=chapters"
              className="w-full sm:w-auto font-sans font-semibold text-sm bg-accent hover:bg-accent-dark text-white px-8 py-3.5 rounded-xl transition-all shadow-md"
            >
              Apply for Startup Kit
            </Link>
            <Link
              href="/contact?form=inquiry"
              className="w-full sm:w-auto font-sans font-semibold text-sm border border-slate-800 hover:bg-slate-900 text-slate-300 hover:text-white px-8 py-3.5 rounded-xl transition-all"
            >
              Contact Advisory Board
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
