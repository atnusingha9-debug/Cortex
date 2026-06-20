"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Zap, FileText } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const floatingIcons = [
    { Icon: Sparkles, x: "15%", y: "20%", delay: 0, duration: 6 },
    { Icon: Zap, x: "80%", y: "30%", delay: 1, duration: 7 },
    { Icon: FileText, x: "70%", y: "65%", delay: 2, duration: 5 },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cortex-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y: yPos, delay, duration }, idx) => (
        <motion.div
          key={`float-icon-${idx}`}
          className="absolute hidden md:block text-white/5"
          style={{ left: x, top: yPos }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="w-12 h-12" />
        </motion.div>
      ))}

      <motion.div style={{ opacity, y }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cortex-500/10 border border-cortex-500/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cortex-400 animate-pulse-subtle" />
            <span className="text-sm text-cortex-300 font-medium">
              The #1 AI Tools Directory
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Discover the{" "}
            <span className="text-gradient">Best AI Tools</span>
            <br />
            for Every Task
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg sm:text-xl text-surface-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Curated reviews, expert comparisons, and a powerful video transcript tool — 
            everything you need to harness AI, all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/tools"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-cortex-500 to-accent-500 rounded-2xl hover:from-cortex-400 hover:to-accent-400 transition-all duration-300 shadow-xl shadow-cortex-500/25"
            >
              Explore Tools
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/video-to-text"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium text-surface-300 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <FileText className="w-4 h-4" />
              Try Transcript Tool
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 flex items-center justify-center gap-8 text-sm text-surface-500"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              2,847+ tools cataloged
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cortex-500" />
              12,000+ weekly readers
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
              Free transcript tool
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-3 rounded-full bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
