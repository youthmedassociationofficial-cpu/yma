"use client";

import Link from "next/link";
import { ShieldCheck, Heart, Activity, Globe, HeartHandshake, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorldMap from "@/components/WorldMap";
import siteData from "@/data/siteData.json";

export default function Impact() {
  const partners = siteData.impact.partners;

  // Render a custom icon based on charity name
  const getCharityIcon = (logoUrl: string) => {
    switch (logoUrl) {
      case "msf":
        return <Activity size={24} className="text-accent" />;
      case "childrens_hospital":
        return <Heart size={24} className="text-accent" />;
      case "unicef":
        return <Globe size={24} className="text-accent" />;
      default:
        return <HeartHandshake size={24} className="text-accent" />;
    }
  };

  return (
    <>
      <Navbar />

      {/* Impact Header */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0d9488_0%,transparent_30%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-950/40 border border-teal-900/50 px-3.5 py-1.5 rounded-full">
            Our Mission in Action
          </span>
          <h1 className="text-3.5xl sm:text-5xl font-display font-extrabold text-white mt-4 tracking-tight">
            Our Humanitarian Impact
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
            {siteData.impact.introduction}
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
              Interactive Map
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mt-3">
              Where Your Funding Goes
            </h2>
            <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto">
              Hover over regions on the map to see the projects and organizations funded by YMA events.
            </p>
          </div>

          <WorldMap />
        </div>
      </section>

      {/* Partner Spotlight Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
              Philanthropy
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mt-3">
              Partner Charities Spotlight
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Organizations on the frontlines of global health equity that YMA proudly supports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-teal-50 shadow-sm w-fit">
                      {getCharityIcon(partner.logoUrl)}
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                        Direct Grants
                      </span>
                      <span className="text-sm font-mono font-bold text-primary">
                        ${partner.fundsAllocated.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-primary text-base mb-3 leading-snug">
                    {partner.name}
                  </h3>
                  
                  <p className="text-slate-650 text-xs sm:text-sm leading-relaxed mb-6">
                    {partner.description}
                  </p>
                </div>

                <div className="border-t border-slate-50 pt-4 flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  <span>Validated 501(c)(3) Disbursement</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="p-6 rounded-2xl bg-teal-950/5 border border-teal-900/10 inline-flex items-center gap-3 text-left max-w-xl mx-auto">
              <TrendingUp size={24} className="text-accent flex-shrink-0" />
              <p className="text-xs text-slate-600 leading-normal">
                <strong>Our Funding Growth:</strong> With a 45% increase in competition entries this year, YMA aims to expand allocations to include local disaster relief packages by early 2027.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-white text-center font-sans">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
          <Heart size={40} className="text-accent mb-6 animate-pulse" />
          <h2 className="text-3xl font-display font-bold text-primary mb-4">
            Support Our Global Health Mission
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            Make a tax-deductible contribution to our global health fund. 100% of all public donations are distributed directly to partner charities, verified by our board.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contact?form=inquiry"
              className="w-full sm:w-auto font-sans font-semibold text-sm bg-accent hover:bg-accent-dark text-white px-8 py-3.5 rounded-xl transition-all shadow-md"
            >
              Corporate Sponsorships
            </Link>
            <Link
              href="/contact?form=register"
              className="w-full sm:w-auto font-sans font-semibold text-sm border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-3.5 rounded-xl transition-all"
            >
              Register a Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
