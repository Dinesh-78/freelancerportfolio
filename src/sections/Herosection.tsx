"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Github,
  Linkedin,
  FileText,
  Calendar,
  Check,
} from "lucide-react";

const Herosection: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 dot-grid-bg opacity-70 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* ── TOP HERO: Left Content + Right Profile Card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* ── LEFT COLUMN: Headline & CTAs ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Giant Punchy Headline from Reference */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] text-foreground mb-6"
            >
              SYSTEMS <br />
              <span className="text-[#2563EB] dark:text-[#3B82F6]">THAT STICK.</span>
            </motion.h1>

            {/* Subheadline with Yellow Highlight */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-foreground/80 font-medium leading-relaxed max-w-2xl mb-8"
            >
              Enterprise Full-Stack Engineer & AWS Certified Developer. Currently engineering healthcare data systems at{" "}
              <span className="highlight-yellow font-bold text-foreground">Carelon Global Solutions</span> and building production-ready mobile apps and cloud architectures for select clients.
            </motion.p>

            {/* CTA Buttons & Proof Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-4"
            >
              {/* Primary Coral Red Neo Button -> Direct Call */}
              <a
                href="https://calendly.com/dineshreddy0906/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn bg-[#EF4444] text-white px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider gap-2 shadow-[4px_4px_0px_0px_#000]"
              >
                <span>BOOK A 30-MIN CALL</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </a>

              {/* Secondary White Neo Button */}
              <a
                href="#projects"
                className="neo-btn bg-white dark:bg-[#151821] text-foreground px-6 sm:px-7 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-secondary gap-2"
              >
                VIEW SHIPPED WORK
              </a>

              {/* Direct email link */}
              <a
                href="mailto:dineshveerapareddy@gmail.com"
                className="text-xs font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] hover:underline flex items-center gap-1 ml-1"
              >
                <span>or email directly</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Direct Verification Links in Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <a
                href="https://github.com/Dinesh-78"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-badge bg-secondary px-3 py-1 rounded-full text-xs font-bold text-foreground hover:bg-[#FACC15] hover:text-black transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub (@Dinesh-78)</span>
              </a>
              <a
                href="https://www.linkedin.com/in/dinesh-veerapareddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-badge bg-secondary px-3 py-1 rounded-full text-xs font-bold text-foreground hover:bg-[#2563EB] hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1q1BJc9afcA2kZVJJsRGza3bbbLQTvWGY/view"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-badge bg-secondary px-3 py-1 rounded-full text-xs font-bold text-foreground hover:bg-[#10B981] hover:text-white transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Trust Badges beneath CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4"
            >
              <span className="neo-badge bg-white dark:bg-[#151821] px-3 py-1 rounded-full text-[11px] font-bold text-foreground/90">
                ✓ 4+ Years Enterprise Engineering
              </span>
              <span className="neo-badge bg-white dark:bg-[#151821] px-3 py-1 rounded-full text-[11px] font-bold text-foreground/90">
                ✓ AWS Certified Developer
              </span>
              <span className="neo-badge bg-white dark:bg-[#151821] px-3 py-1 rounded-full text-[11px] font-bold text-foreground/90">
                ✓ Google Play Store Verified Shipments
              </span>
            </motion.div>

            {/* Dinesh's Real Core Tech Stack Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center gap-1.5"
            >
              <span className="text-[10px] font-mono font-bold text-muted-foreground mr-1 uppercase">
                Core Stack:
              </span>
              {["Next.js & React", "React Native CLI", "Node.js", "Django", "Spring Boot", "TypeScript", "AWS Certified", "Docker & K8s"].map((tech, i) => (
                <span
                  key={i}
                  className="neo-badge text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-secondary text-foreground/90 border border-black/30 hover:bg-[#FACC15] hover:text-black transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Profile & Trust Card Frame from Reference ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Tilted Yellow Top Sticker: "AWS CERTIFIED DEVELOPER" */}
            <div className="absolute -top-5 left-6 sm:left-12 z-20 transform -rotate-6">
              <span className="neo-sticker bg-[#FACC15] text-black px-4 py-1.5 rounded-lg text-xs font-black shadow-[3px_3px_0px_0px_#000] flex items-center gap-1.5">
                ⚡ AWS CERTIFIED DEVELOPER
              </span>
            </div>

            {/* Top Right Sticker: "PRODUCTION PROVEN" */}
            <div className="absolute -top-4 -right-2 sm:right-4 z-20 transform rotate-12">
              <div className="w-12 h-12 rounded-full bg-[#10B981] border-2 border-black shadow-[3px_3px_0px_0px_#000] flex flex-col items-center justify-center text-white text-[9px] font-black uppercase text-center leading-none">
                <span>PROD</span>
                <span>READY</span>
                <span className="text-[8px]">⚡</span>
              </div>
            </div>

            {/* Main Outer Neo Card */}
            <div className="w-full max-w-sm sm:max-w-md bg-white dark:bg-[#151821] border-3 border-black dark:border-slate-700 rounded-3xl p-5 sm:p-6 shadow-[8px_8px_0px_0px_#2563EB] dark:shadow-[8px_8px_0px_0px_#000] relative">
              {/* Profile Photo Container */}
              <div className="w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-tr from-[#2563EB] via-slate-800 to-slate-900 border-2 border-black overflow-hidden relative flex items-center justify-center">
                {/* Fallback illustration avatar with suit & code aura */}
                <div className="text-center p-6 text-white flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#FACC15] border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center text-3xl font-black text-black mb-3">
                    DV
                  </div>
                  <h3 className="text-lg font-black tracking-tight">Dinesh Veerapareddy</h3>
                  <p className="text-xs text-white/80 font-mono mt-1">Full-Stack & Cloud Systems Engineer</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold bg-white text-black px-2.5 py-0.5 rounded-full border border-black">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" /> AWS Certified Developer
                  </span>
                </div>
              </div>

              {/* Status Pill below photo */}
              <div className="mt-4 flex items-center justify-center">
                <span className="neo-badge bg-[#10B981]/15 text-[#10B981] dark:text-[#34D399] border-[#10B981] px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  Available • Taking 1-2 Client Projects
                </span>
              </div>

              {/* 2 Defensible Stat Blocks at bottom */}
              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t-2 border-black/10 dark:border-slate-800">
                <div className="text-center p-2 rounded-xl bg-secondary/60 border border-black/10">
                  <div className="text-xl sm:text-2xl font-black text-foreground">4+ Yrs</div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    Enterprise Experience
                  </p>
                </div>
                <div className="text-center p-2 rounded-xl bg-secondary/60 border border-black/10">
                  <div className="text-xl sm:text-2xl font-black text-foreground">Sub-100ms</div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    API Latency Target
                  </p>
                </div>
              </div>

              {/* Bottom Right Overlapping Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 z-20 transform -rotate-3">
                <span className="neo-sticker bg-white dark:bg-[#1E2330] text-foreground text-[10px] sm:text-[11px] px-3 py-1.5 rounded-lg shadow-[3px_3px_0px_0px_#000] border-2 border-black">
                  Offline-First & Cloud Services ⚡
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── SIGNATURE ROYAL BLUE BANNER: "HI, I'M DINESH!" ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-[#2563EB] text-white border-3 border-black dark:border-slate-700 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_0px_#000] relative overflow-hidden mb-16"
        >
          {/* Subtle top tag badge */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Bio Info */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="neo-sticker bg-[#FACC15] text-black text-xs font-black px-3 py-1 rounded-md">
                  FULL-STACK & CLOUD SYSTEMS ENGINEER
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
                HI, I&apos;M DINESH!
              </h2>

              <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed mb-4">
                I&apos;m an <strong className="text-[#FACC15]">AWS Certified Developer & Full-Stack Engineer</strong> currently building mission-critical healthcare systems at Carelon Global Solutions, alongside crafting production mobile apps and client SaaS platforms.
              </p>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-8">
                From offline-first SQLite architectures deployed to the Google Play Store to scalable Spring Boot and Node.js microservices on AWS, I engineer software built for reliability, clear documentation, and zero technical bloat.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://calendly.com/dineshreddy0906/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn bg-[#FACC15] text-black px-6 py-3.5 rounded-full text-xs font-black uppercase tracking-wider gap-2 shadow-[3px_3px_0px_0px_#000]"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>BOOK A 30-MIN CALL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#contact"
                  className="neo-btn bg-white text-black px-5 py-3.5 rounded-full text-xs font-black uppercase tracking-wider gap-1.5 shadow-[3px_3px_0px_0px_#000]"
                >
                  <span>DIRECT CONTACT ➔</span>
                </a>
              </div>
            </div>

            {/* Right Checklist Card: "WHAT I'M BEST AT (SUMMARY):" */}
            <div className="lg:col-span-5">
              <div className="bg-white text-black border-2 border-black rounded-2xl p-5 sm:p-6 shadow-[5px_5px_0px_0px_#000] relative">
                <div className="border-b-2 border-black/10 pb-3 mb-4 flex items-center justify-between">
                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-black">
                    WHAT I&apos;M BEST AT (SUMMARY):
                  </h4>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                </div>

                <ul className="flex flex-col gap-3 text-xs font-semibold text-black/85">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#10B981] stroke-[3] shrink-0 mt-0.5" />
                    <span>Architecting high-throughput cloud APIs on AWS ECS & Serverless</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#10B981] stroke-[3] shrink-0 mt-0.5" />
                    <span>Building offline-first React Native mobile apps with local SQLite</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#10B981] stroke-[3] shrink-0 mt-0.5" />
                    <span>Hardening enterprise PostgreSQL & microservice backends</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#10B981] stroke-[3] shrink-0 mt-0.5" />
                    <span>Sub-100ms database indexing & query optimization</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#10B981] stroke-[3] shrink-0 mt-0.5" />
                    <span>Automating repetitive business workflows with custom tooling</span>
                  </li>
                </ul>

                <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Carelon + Independent Client Work
                  </span>
                  <span className="text-xs font-bold text-[#2563EB]">
                    Crafted for production
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
