"use client";

import { useState, useEffect, useRef } from "react";

interface MetricCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export default function MetricCard({ value, label, prefix = "", suffix = "" }: MetricCardProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  const animateCount = () => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 1500; // 1.5 seconds animation duration
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // Easing out quadratic
      const progress = frame / totalFrames;
      const easedProgress = progress * (2 - progress);
      
      const currentVal = Math.round(easedProgress * end);
      
      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(currentVal);
      }
    }, frameRate);
  };

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 w-full"
    >
      <span className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight mb-2">
        <span className="text-accent">{prefix}</span>
        {count.toLocaleString()}
        <span className="text-accent">{suffix}</span>
      </span>
      <span className="font-sans font-medium text-xs sm:text-sm text-slate-500 uppercase tracking-widest text-center">
        {label}
      </span>
    </div>
  );
}
