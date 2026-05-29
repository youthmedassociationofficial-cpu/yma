"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, Trophy, Users, Mail, Compass } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About Us", icon: Users },
    { href: "/competitions", label: "Competitions", icon: Trophy },
    { href: "/impact", label: "Our Impact", icon: Heart },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "glass-panel shadow-sm border-b border-slate-200/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-1 transition-transform group-hover:scale-105">
            <Image
              src="/assets/logo.png"
              alt="YMA Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-tight tracking-tight text-primary group-hover:text-accent transition-colors">
              Youth Medical
            </span>
            <span className="font-display font-semibold text-xs leading-none tracking-widest text-slate-500 uppercase">
              Association
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans font-medium text-sm flex items-center gap-1.5 transition-colors duration-200 focus:outline-none ${
                  active
                    ? "text-accent border-b-2 border-accent pb-1"
                    : "text-slate-600 hover:text-primary hover:border-b-2 hover:border-slate-300 pb-1"
                }`}
              >
                <Icon size={14} className={active ? "text-accent" : "text-slate-400"} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact?form=register"
            className="font-sans font-semibold text-xs uppercase tracking-wider bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-full transition-all shadow-md shadow-accent/10 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-primary hover:bg-slate-100 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] z-40 w-full h-[calc(100vh-65px)] bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="w-full bg-white border-b border-slate-100 px-6 py-8 flex flex-col gap-6 shadow-xl animate-slide-up">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-sans font-semibold text-base flex items-center gap-3 py-2 border-b border-slate-50 transition-colors ${
                      active ? "text-accent" : "text-slate-700 hover:text-accent"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${active ? "bg-teal-50" : "bg-slate-50"}`}>
                      <Icon size={18} className={active ? "text-accent" : "text-slate-500"} />
                    </div>
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
              <Link
                href="/contact?form=register"
                onClick={() => setIsOpen(false)}
                className="w-full text-center font-sans font-semibold text-sm bg-accent hover:bg-accent-dark text-white py-3.5 rounded-xl transition-all shadow-md"
              >
                Register for Next Event
              </Link>
              <Link
                href="/contact?form=chapters"
                onClick={() => setIsOpen(false)}
                className="w-full text-center font-sans font-semibold text-sm border border-slate-200 hover:bg-slate-50 text-slate-700 py-3.5 rounded-xl transition-all"
              >
                Start a Chapter
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
