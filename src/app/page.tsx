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

      {/* Hero Section — Full-bleed background image */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[85vh] flex items-center">
        {/* Background Image */}
        <Image
          src="/assets/yma_comp.png"
          alt="YMA Competition event"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Stunning Scrim Gradient Overlays */}
        {/* 1. Deep linear scrim fading horizontally on desktops, and vertically on mobile/portrait screens */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/85 to-slate-950/60 sm:bg-gradient-to-r sm:from-slate-950 sm:via-slate-950/85 sm:to-transparent"></div>
        {/* 2. Vertical vignette for atmospheric depth and smooth blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30"></div>
        {/* 3. Luminous teal brand radial glow behind the text layout */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_45%,rgba(13,148,136,0.25),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10 py-28 sm:py-36 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-teal-300 text-xs font-semibold tracking-wider uppercase mb-8 animate-fade-in">
              <ActivityIcon className="animate-pulse text-teal-300" />
              Student-Led Medical Non-Profit
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.75rem] tracking-tight text-white leading-[1.08] mb-6 animate-slide-up drop-shadow-lg">
              {siteData.home.heroTitle}
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-200/80 leading-relaxed mb-10 max-w-xl animate-slide-up">
              {siteData.home.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-slide-up w-full sm:w-auto">
              <Link
                href="/contact?form=register"
                className="w-full sm:w-auto font-sans font-bold text-sm uppercase tracking-widest bg-white text-slate-950 px-10 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Sign Up Today
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto font-sans font-semibold text-sm bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
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
                className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-slate-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
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
                    className="font-sans font-semibold text-xs text-white bg-accent hover:bg-accent-dark hover:scale-[1.03] active:scale-[0.97] px-4.5 py-2.5 rounded-lg transition-all shadow-sm"
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
