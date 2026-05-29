"use client";

import Link from "next/link";
import { Trophy, Calendar, FileText, Download, ArrowRight, ExternalLink, Archive } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siteData from "@/data/siteData.json";

export default function Competitions() {
  const schedule = siteData.competitions.schedule;
  const winners = siteData.competitions.winners;

  const rulebooks = [
    {
      title: "Medical Case Competition Guidelines",
      category: "Clinical Reasoning",
      fileSize: "1.8 MB",
      url: siteData.general.startupKitUrl, // Using startupKit as demo link
    },
    {
      title: "Anatomy & Physiology Bowl Syllabus",
      category: "Diagnostics Trivia",
      fileSize: "920 KB",
      url: siteData.general.startupKitUrl,
    },
    {
      title: "Bio-Innovation Prototype Framework",
      category: "Engineering & Public Health",
      fileSize: "2.4 MB",
      url: siteData.general.startupKitUrl,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Competitions Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0d9488_0%,transparent_30%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-950/40 border border-teal-900/50 px-3.5 py-1.5 rounded-full">
            Active Season
          </span>
          <h1 className="text-3.5xl sm:text-5xl font-display font-extrabold text-white mt-4 tracking-tight">
            YMA Competitive Events
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
            {siteData.competitions.introduction}
          </p>
        </div>
      </section>

      {/* Schedule Timeline Section */}
      <section className="py-20 bg-white font-sans">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary">
              2026 - 2027 Competition Timeline
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Important dates, tracks, and registration availability.
            </p>
          </div>

          <div className="flex flex-col gap-8 relative before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-100">
            {schedule.map((event, index) => {
              const isOpen = event.status === "Registration Open";
              const isPlanning = event.status === "Planning Phase";
              
              return (
                <div
                  key={event.id}
                  className={`flex flex-col md:flex-row gap-6 md:gap-12 relative items-start ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Circle Timeline Marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1.5 md:-translate-x-2 w-4 h-4 rounded-full border-4 border-white bg-accent shadow-sm z-10"></div>

                  {/* Empty space for alternate sides on desktop */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Card Content */}
                  <div className="w-full md:w-1/2 pl-8 md:pl-0">
                    <div className="bg-slate-50/50 border border-slate-100 p-6 rounded-2xl hover:bg-white hover:border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-accent rounded-md border border-teal-100">
                          {event.tag}
                        </span>
                        
                        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isOpen 
                            ? "bg-emerald-50 text-emerald-600 border border-emerald-100" 
                            : isPlanning
                            ? "bg-slate-100 text-slate-500 border border-slate-200"
                            : "bg-teal-50 text-teal-700 border border-teal-100"
                        }`}>
                          {event.status}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-primary text-lg mb-2">
                        {event.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold mb-4">
                        <Calendar size={14} className="text-slate-400" />
                        {event.date}
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                        {event.description}
                      </p>

                      <div className="flex items-center gap-3">
                        <Link
                          href={event.registrationUrl}
                          className="font-sans font-semibold text-xs text-white bg-accent hover:bg-accent-dark px-4 py-2 rounded-lg transition-colors shadow-sm"
                        >
                          Register
                        </Link>
                        <a
                          href={siteData.general.startupKitUrl}
                          download
                          className="font-sans font-semibold text-xs text-slate-600 hover:text-primary bg-white border border-slate-200 hover:bg-slate-50 px-4 py-2 rounded-lg transition-colors"
                        >
                          Rulebook
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rulebooks & Resources Section */}
      <section id="guides" className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
              Resources
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mt-3">
              Event Rulebooks & Guidelines
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Download the comprehensive rulebooks to prepare your team for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rulebooks.map((book) => (
              <div
                key={book.title}
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:border-slate-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex gap-4 items-start mb-6">
                  <div className="p-3 rounded-xl bg-teal-50 text-accent flex-shrink-0">
                    <FileText size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                      {book.category}
                    </span>
                    <h3 className="font-display font-bold text-primary text-sm mt-1 leading-snug">
                      {book.title}
                    </h3>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-t border-slate-50 pt-4 text-xs font-semibold text-slate-500">
                  <span>PDF ({book.fileSize})</span>
                  <a
                    href={book.url}
                    download
                    className="text-accent hover:text-accent-dark flex items-center gap-1 hover:underline"
                  >
                    <Download size={14} />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Past Winners & Archive Section */}
      <section id="archive" className="py-20 sm:py-28 bg-white font-sans">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <div className="inline-flex p-3 rounded-full bg-teal-50 text-accent mb-4">
              <Archive size={26} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary">
              Past Winners & Case Study Archive
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Explore outstanding case studies from prior seasons that achieved first-place honors.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {winners.map((win) => (
              <div
                key={win.project}
                className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 sm:p-8 hover:bg-white hover:border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-slate-100/60 pb-4">
                    <div>
                      <span className="text-xs text-accent font-semibold tracking-wide">
                        {win.event}
                      </span>
                      <h3 className="text-lg font-display font-bold text-primary mt-0.5">
                        {win.team}
                      </h3>
                      <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                        {win.school}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 border border-slate-205 px-3 py-1 rounded-full h-fit w-fit self-start sm:self-center">
                      1st Place Award
                    </span>
                  </div>
                  
                  <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base mb-2">
                    Project Title: &ldquo;{win.project}&rdquo;
                  </h4>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {win.description}
                  </p>
                </div>

                <div className="flex justify-end border-t border-slate-50 pt-5">
                  <a
                    href={siteData.general.startupKitUrl} // demo link
                    download
                    className="text-xs font-bold text-accent hover:text-accent-dark flex items-center gap-1 transition-colors"
                  >
                    View Winning Submission (PDF)
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
