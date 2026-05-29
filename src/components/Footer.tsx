"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowRight, ShieldCheck } from "lucide-react";
import siteData from "@/data/siteData.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to the YMA newsletter!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-900">
        
        {/* Column 1: Logo & About Text */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-3 w-fit">
            <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-slate-800 p-1 flex items-center justify-center">
              <Image
                src="/assets/logo.png"
                alt="YMA Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base text-white leading-tight tracking-tight">
                Youth Medical Association
              </span>
              <span className="font-display font-semibold text-[10px] leading-none tracking-widest text-slate-500 uppercase">
                Empowering Future Leaders
              </span>
            </div>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            {siteData.home.heroSubtitle}
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href={siteData.general.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent hover:bg-slate-900/50 transition-all focus:outline-none"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a
              href={siteData.general.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent hover:bg-slate-900/50 transition-all focus:outline-none"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href={siteData.general.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent hover:bg-slate-900/50 transition-all focus:outline-none"
              aria-label="Twitter/X"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Navigation (Sitemap) */}
        <div className="col-span-6 md:col-span-2 flex flex-col gap-4">
          <h3 className="font-display font-semibold text-sm text-white tracking-wider uppercase">
            Navigation
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-white transition-colors">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/competitions" className="hover:text-white transition-colors">
                Competitions
              </Link>
            </li>
            <li>
              <Link href="/impact" className="hover:text-white transition-colors">
                Our Impact
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact & Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className="col-span-6 md:col-span-2 flex flex-col gap-4">
          <h3 className="font-display font-semibold text-sm text-white tracking-wider uppercase">
            Resources
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link href="/contact?form=chapters" className="hover:text-white transition-colors">
                Start a Chapter
              </Link>
            </li>
            <li>
              <Link href="/competitions#guides" className="hover:text-white transition-colors">
                Rulebooks
              </Link>
            </li>
            <li>
              <Link href="/competitions#archive" className="hover:text-white transition-colors">
                Case Study Archive
              </Link>
            </li>
            <li>
              <a href={siteData.general.sponsorshipPackageUrl} className="hover:text-white transition-colors">
                Sponsor Kit
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          <h3 className="font-display font-semibold text-sm text-white tracking-wider uppercase">
            Stay Connected
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Subscribe to our newsletter for competition updates, study guides, and biology news.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2 w-full mt-1">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-2.5 rounded-lg text-sm bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-dark text-white flex items-center justify-center transition-colors focus:outline-none shadow-md shadow-accent/10"
              aria-label="Subscribe"
            >
              <ArrowRight size={18} />
            </button>
          </form>
          
          <div className="flex items-center gap-2 mt-2 py-2 px-3 rounded-lg bg-slate-900/60 border border-slate-900 w-fit">
            <ShieldCheck size={16} className="text-accent" />
            <span className="text-xs text-slate-400 font-sans">
              85% of funds go to direct charity
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Footer Details */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          &copy; {currentYear} {siteData.general.siteName}. All rights reserved.
        </div>
        <div className="flex gap-6">
          <span>Student-Led 501(c)(3) Non-Profit</span>
          <Link href="/about#transparency" className="hover:text-slate-400 transition-colors">
            Financial Transparency Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
