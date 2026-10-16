"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/constants/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-black/10 dark:border-slate-800 pb-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#EF4444] block mb-1">
              Engineering Track Record
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
              PROFESSIONAL EXPERIENCE
            </h2>
            <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
              High-throughput enterprise healthcare systems & freelance full-stack architectures
            </p>
          </div>

          <div className="mt-3 md:mt-0">
            <span className="neo-badge bg-[#10B981]/15 text-[#10B981] dark:text-[#34D399] border-[#10B981] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              ● Currently Engineering at Carelon Global Solutions
            </span>
          </div>
        </div>

        {/* Timeline List of Real Experiences */}
        <div className="flex flex-col gap-8">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="neo-box p-6 sm:p-8 border-2.5 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl bg-white dark:bg-[#151821] relative"
              >
                {/* Header: Title, Company, Period, Location */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 mb-4 border-b-2 border-black/10 dark:border-slate-800">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center text-[#2563EB] shrink-0 mt-0.5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
                        {exp.title}
                      </h3>
                      <div className="text-sm font-bold text-[#2563EB] dark:text-[#3B82F6] flex items-center gap-2 mt-0.5">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span className="text-muted-foreground font-normal">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <span className="neo-badge bg-[#FACC15] text-black text-xs font-mono font-bold px-3 py-1 rounded-full shrink-0 self-start">
                    {exp.period}
                  </span>
                </div>

                {/* Achievements List */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-foreground/85 font-medium leading-relaxed">
                      <span className="text-[#10B981] font-bold text-sm leading-none shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Real Tech Badges */}
                <div className="pt-4 border-t border-black/10 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono font-bold text-muted-foreground mr-2 uppercase">
                    Tech Stack:
                  </span>
                  {exp.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="neo-badge text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-secondary text-foreground/90 border border-black/30"
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
