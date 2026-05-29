"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Mail, Compass, Award, Download, CheckCircle, Send, Landmark, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import siteData from "@/data/siteData.json";

type TabType = "register" | "chapters" | "inquiry" | "sponsorship";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState<TabType>("inquiry");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sync state with URL search params
  useEffect(() => {
    const formParam = searchParams.get("form") as TabType;
    if (formParam && ["register", "chapters", "inquiry", "sponsorship"].includes(formParam)) {
      setActiveTab(formParam);
    }
  }, [searchParams]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setIsSubmitted(false);
    // Update URL query param without full page reload
    router.replace(`/contact?form=${tab}`, { scroll: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

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
            Select a category below to submit a registration, request resources, or download sponsorship information.
          </p>
        </div>
      </section>

      {/* Forms Area */}
      <section className="py-20 bg-slate-50 border-b border-slate-100 font-sans">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Tab Selector Links */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-10 border-b border-slate-200 pb-8">
            <button
              onClick={() => handleTabChange("inquiry")}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none flex items-center gap-2 ${
                activeTab === "inquiry"
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-150"
              }`}
            >
              <Mail size={16} />
              General Inquiry
            </button>
            <button
              onClick={() => handleTabChange("register")}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none flex items-center gap-2 ${
                activeTab === "register"
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-150"
              }`}
            >
              <Award size={16} />
              Register for Event
            </button>
            <button
              onClick={() => handleTabChange("chapters")}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none flex items-center gap-2 ${
                activeTab === "chapters"
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-150"
              }`}
            >
              <Compass size={16} />
              Start a Chapter
            </button>
            <button
              onClick={() => handleTabChange("sponsorship")}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none flex items-center gap-2 ${
                activeTab === "sponsorship"
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-150"
              }`}
            >
              <Landmark size={16} />
              Sponsorship Packages
            </button>
          </div>

          {/* Form Container */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10 animate-scale-up">
                <CheckCircle size={56} className="text-emerald-500 mb-6" />
                <h3 className="text-2xl font-display font-bold text-primary mb-2">
                  Request Submitted Successfully
                </h3>
                <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-8">
                  Thank you for connecting with YMA! Our executive committee has received your details and will follow up with you via email within 48 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="font-sans font-semibold text-xs text-white bg-accent hover:bg-accent-dark px-6 py-3 rounded-xl transition-all shadow-md"
                >
                  Submit Another Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* 1. General Inquiries */}
                {activeTab === "inquiry" && (
                  <>
                    <div className="border-b border-slate-100 pb-4 mb-2">
                      <h2 className="text-xl font-display font-bold text-primary">General Inquiries</h2>
                      <p className="text-slate-500 text-xs mt-0.5">Have questions about YMA, our events, or advisor opportunities? Let us know.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">Full Name</label>
                        <input required type="text" placeholder="Sarah Jenkins" className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">Email Address</label>
                        <input required type="email" placeholder="sarah@example.com" className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-700">Subject</label>
                      <input required type="text" placeholder="Advisory board question / partnership inquiry" className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-700">Message</label>
                      <textarea required rows={5} placeholder="Write details about your question here..." className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all resize-none"></textarea>
                    </div>
                  </>
                )}

                {/* 2. Competition Registration */}
                {activeTab === "register" && (
                  <>
                    <div className="border-b border-slate-100 pb-4 mb-2">
                      <h2 className="text-xl font-display font-bold text-primary">Competition Registration</h2>
                      <p className="text-slate-500 text-xs mt-0.5">Submit registration requests for active events. A payment link will be sent to the team captain.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">Team Captain Name</label>
                        <input required type="text" placeholder="Sarah Jenkins" className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">Captain Email Address</label>
                        <input required type="email" placeholder="sarah@example.com" className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">Select Competition</label>
                        <select className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all cursor-pointer">
                          {siteData.competitions.schedule.map((event) => (
                            <option key={event.id} value={event.id}>
                              {event.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">School / Affiliation</label>
                        <input required type="text" placeholder="Stanford High School" className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">Number of Team Members</label>
                        <select className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all cursor-pointer">
                          <option value="1">1 (Individual competitor)</option>
                          <option value="2">2 Members</option>
                          <option value="3">3 Members</option>
                          <option value="4">4 Members (Maximum)</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">Competitor Grade Level</label>
                        <select className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all cursor-pointer">
                          <option value="highschool">High School Student</option>
                          <option value="undergrad">Undergraduate pre-med student</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* 3. Start a Chapter */}
                {activeTab === "chapters" && (
                  <>
                    <div className="border-b border-slate-100 pb-4 mb-2">
                      <h2 className="text-xl font-display font-bold text-primary">Start a YMA Chapter</h2>
                      <p className="text-slate-500 text-xs mt-0.5">Establish a registered extracurricular branch of YMA at your school and receive study guidelines.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">Applicant Name</label>
                        <input required type="text" placeholder="Sarah Jenkins" className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">Applicant Email Address</label>
                        <input required type="email" placeholder="sarah@example.com" className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">Proposed School Name</label>
                        <input required type="text" placeholder="Westlake High School" className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">Faculty Advisor Email (Optional)</label>
                        <input type="email" placeholder="advisor@school.edu" className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-700">Why would you like to start a YMA chapter?</label>
                      <textarea required rows={4} placeholder="Tell us briefly about your school's pre-med student interest..." className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all resize-none"></textarea>
                    </div>
                  </>
                )}

                {/* 4. Sponsorship Request */}
                {activeTab === "sponsorship" && (
                  <>
                    <div className="border-b border-slate-100 pb-4 mb-2">
                      <h2 className="text-xl font-display font-bold text-primary">Corporate Sponsorships</h2>
                      <p className="text-slate-500 text-xs mt-0.5">Submit your organization&rsquo;s details to request custom package proposals and download package PDFs.</p>
                    </div>

                    <div className="p-5 rounded-2xl bg-teal-950/5 border border-teal-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3 text-left">
                        <div className="p-2.5 rounded-lg bg-teal-50 text-accent flex-shrink-0">
                          <Landmark size={20} className="text-accent" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-primary block">Sponsorship Package PDF</span>
                          <span className="text-[10px] text-slate-400 font-medium">Includes pricing tiers, stats, and logo benefits (2.1 MB)</span>
                        </div>
                      </div>
                      <a
                        href={siteData.general.sponsorshipPackageUrl}
                        download
                        className="flex items-center gap-1 text-xs font-bold bg-accent hover:bg-accent-dark text-white px-4 py-2.5 rounded-xl transition-all shadow-sm focus:outline-none"
                      >
                        <Download size={14} />
                        Download PDF
                      </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">Contact Person Name</label>
                        <input required type="text" placeholder="Sarah Jenkins" className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">Contact Email Address</label>
                        <input required type="email" placeholder="partner@company.com" className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">Company / Foundation Name</label>
                        <input required type="text" placeholder="Apex Diagnostics Corp" className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-slate-700">Target Sponsor Level</label>
                        <select className="px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:border-accent focus:bg-white transition-all cursor-pointer">
                          <option value="gold">Gold Partner ($2,500)</option>
                          <option value="silver">Silver Partner ($1,200)</option>
                          <option value="bronze">Bronze Partner ($500)</option>
                          <option value="other">Custom Philanthropic Grant</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-4 font-sans font-semibold text-sm bg-accent hover:bg-accent-dark text-white py-3.5 rounded-xl transition-all shadow-md shadow-accent/15 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Request
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400 font-semibold uppercase">
            <ShieldCheck size={16} className="text-accent" />
            Secure SSL Submission & Privacy Guarantee
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse text-slate-500 font-sans">Loading contact details...</div>
      </div>
    }>
      <ContactPageContent />
    </Suspense>
  );
}
