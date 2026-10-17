"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { experiences } from "@/constants/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 border-b-2 border-black/10 dark:border-slate-800 pb-5 sm:pb-6 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="neo-sticker bg-[#EF4444] text-white text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded shadow-[1.5px_1.5px_0px_0px_#000]">
                TRACK RECORD
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground uppercase">
              PROFESSIONAL EXPERIENCE
            </h2>
            <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
              High-throughput enterprise healthcare systems & freelance full-stack architectures
            </p>
          </div>

          <div className="self-start sm:self-auto">
            <span className="neo-badge bg-[#10B981]/15 text-[#059669] dark:text-[#34D399] border-[#10B981] text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-[1.5px_1.5px_0px_0px_#000]">
              ● Currently Engineering at Carelon Global Solutions
            </span>
          </div>
        </div>

        {/* Timeline List */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 sm:p-7 border-2 sm:border-2.5 border-black dark:border-slate-700 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] rounded-2xl bg-card relative"
              >
                {/* Header: Title, Company, Period, Location */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 mb-4 border-b-2 border-black/10 dark:border-slate-800">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-card border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center text-[#2563EB] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black tracking-tight text-foreground leading-snug">
                        {exp.title}
                      </h3>
                      <div className="text-xs sm:text-sm font-bold text-[#2563EB] dark:text-[#60A5FA] flex flex-wrap items-center gap-1.5 mt-0.5">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span className="text-muted-foreground font-normal">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <span className="neo-badge bg-[#FACC15] text-black text-[11px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full shrink-0 self-start border border-black shadow-[1.5px_1.5px_0px_0px_#000]">
                    {exp.period}
                  </span>
                </div>

                {/* Achievements List */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 mb-5">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-foreground/85 font-medium leading-relaxed">
                      <Check className="w-4 h-4 text-[#10B981] stroke-[3] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Real Tech Badges */}
                <div className="pt-3.5 border-t border-black/10 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-muted-foreground mr-1 uppercase">
                    Tech Stack:
                  </span>
                  {exp.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="neo-badge text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-card text-foreground/90 border border-black shadow-[1.5px_1.5px_0px_0px_#000]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
