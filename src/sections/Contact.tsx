"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ── BIG YELLOW CTA & BOOK A CALL SECTION ── */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-[#FACC15] text-black border-2.5 border-black rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[8px_8px_0px_0px_#000] relative overflow-hidden"
          >
            {/* Top Available Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-black/15">
              <span className="neo-sticker bg-white text-black text-[10px] sm:text-xs font-black px-3.5 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_#000]">
                ⚡ TAKING 1-2 SELECT CLIENT PROJECTS • CONTRACT & CLOUD
              </span>
              <span className="text-xs font-mono font-bold text-black/75">
                Bengaluru, India 
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Heading, Subtext, and Action Buttons */}
              <div className="lg:col-span-8 flex flex-col items-start text-left">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-5">
                  READY TO BUILD SYSTEMS <br />
                  <span className="text-[#2563EB]">THAT SCALE?</span>
                </h2>

                <p className="text-sm sm:text-base font-medium text-black/85 max-w-2xl leading-relaxed mb-8">
                  Let&apos;s build something robust together. Whether you need a full-stack web application, an offline-first mobile system, or an enterprise cloud architecture, grab 30 minutes on my calendar and let&apos;s talk through your goals.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
                  <a
                    href="https://calendly.com/dineshreddy0906/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn bg-black text-white px-7 sm:px-9 py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider gap-2 shadow-[4px_4px_0px_0px_#000] hover:bg-[#1a1a1a] transition-all"
                  >
                    <Calendar className="w-4 h-4 text-[#FACC15]" />
                    <span>BOOK A 30-MIN CALL</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </a>

                  <a
                    href="mailto:dineshveerapareddy@gmail.com"
                    className="neo-btn bg-white text-black px-6 sm:px-8 py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider gap-2 shadow-[3px_3px_0px_0px_#000]"
                  >
                    <Mail className="w-4 h-4 text-[#2563EB]" />
                    <span>EMAIL DIRECTLY</span>
                  </a>
                </div>

                {/* Direct Verification Channels */}
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/1q1BJc9afcA2kZVJJsRGza3bbbLQTvWGY/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-badge bg-white text-black px-3.5 py-1.5 rounded-full text-xs font-bold gap-1.5 hover:bg-black hover:text-white transition-colors"
                  >
                    📄 View Resume
                  </a>
                  <a
                    href="https://github.com/Dinesh-78"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-badge bg-white text-black px-3.5 py-1.5 rounded-full text-xs font-bold gap-1.5 hover:bg-black hover:text-white transition-colors"
                  >
                    🐙 GitHub (@Dinesh-78)
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dinesh-veerapareddy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-badge bg-white text-black px-3.5 py-1.5 rounded-full text-xs font-bold gap-1.5 hover:bg-black hover:text-white transition-colors"
                  >
                    💼 LinkedIn
                  </a>
                  <a
                    href="https://wa.me/918374330906?text=Hi%20Dinesh%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-badge bg-white text-black px-3.5 py-1.5 rounded-full text-xs font-bold gap-1.5 hover:bg-black hover:text-white transition-colors"
                  >
                    💬 WhatsApp Chat
                  </a>
                </div>
              </div>

              {/* Right Column: Direct Connect Card Mockup */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-full max-w-xs bg-white text-black border-2 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_#000] relative transform rotate-1 hover:rotate-0 transition-transform">
                  <div className="w-12 h-2.5 rounded-full bg-[#EF4444] border border-black mb-4 mx-auto" />

                  <div className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#EF4444]/10 border-2 border-black text-[#EF4444] mx-auto flex items-center justify-center mb-3">
                      <Calendar className="w-7 h-7 text-[#2563EB]" />
                    </div>

                    <h4 className="text-xs font-black uppercase tracking-wider text-black">
                      DIRECT CALENDAR
                    </h4>
                    <p className="text-[11px] font-mono text-muted-foreground mt-1 truncate">
                      calendly.com/dineshreddy0906
                    </p>

                    <a
                      href="https://calendly.com/dineshreddy0906/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn bg-[#FACC15] text-black w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider mt-4 shadow-[2px_2px_0px_0px_#000]"
                    >
                      OPEN CALENDLY APP ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ROYAL BLUE NEO-FOOTER ── */}
      <footer className="w-full bg-[#1D4ED8] text-white border-t-2 border-black pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/20">
            {/* Left Column: Brand & Grounded Bio */}
            <div className="md:col-span-6 flex flex-col items-start">
              <span className="text-2xl font-black tracking-tight uppercase flex items-center gap-2 mb-3">
                DINESH VEERAPAREDDY
                <span className="w-5 h-5 rounded-full bg-[#FACC15] text-black text-xs flex items-center justify-center font-bold">
                  ⚡
                </span>
              </span>

              <p className="text-xs sm:text-sm text-white/80 max-w-md font-medium leading-relaxed mb-6">
                AWS Certified Developer & Full-Stack Systems Engineer. Engineering high-throughput healthcare systems at Carelon Global Solutions, and building production-grade mobile & cloud software for select clients.
              </p>

              <span className="text-xs font-mono text-white/60">
                © {currentYear} Dinesh Veerapareddy. All rights reserved.
              </span>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h5 className="text-xs font-black uppercase tracking-wider text-[#FACC15] mb-3">
                NAVIGATION
              </h5>
              <ul className="flex flex-col gap-2 text-xs font-bold text-white/90">
                <li>
                  <a href="#about" className="hover:text-[#FACC15] transition-colors">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#FACC15] transition-colors">
                    SERVICES
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#FACC15] transition-colors">
                    SELECTED WORK
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-[#FACC15] transition-colors">
                    EXPERIENCE
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-[#FACC15] transition-colors">
                    OUTCOMES
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#FACC15] transition-colors">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Connect */}
            <div className="md:col-span-3">
              <h5 className="text-xs font-black uppercase tracking-wider text-[#FACC15] mb-3">
                LET&apos;S CONNECT
              </h5>
              <ul className="flex flex-col gap-2.5 text-xs font-medium text-white/90">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#FACC15]" />
                  <a
                    href="mailto:dineshveerapareddy@gmail.com"
                    className="hover:underline truncate"
                  >
                    dineshveerapareddy@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#FACC15]" />
                  <a href="tel:+918374330906" className="hover:underline">
                    +91 8374330906
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>Bengaluru, India </span>
                </li>
              </ul>

              {/* Tilted Sticker in Footer */}
              <div className="mt-6">
                <span className="neo-sticker bg-white text-black text-[11px] font-black px-3 py-1.5 rounded-lg shadow-[3px_3px_0px_0px_#000] inline-flex items-center gap-1.5 transform -rotate-2">
                  <span>Engineered for reliability & performance.</span>
                  <span className="text-[#EF4444]">⚡</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
