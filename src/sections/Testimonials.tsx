"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Smartphone, Activity, Building2 } from "lucide-react";

const outcomes = [
  {
    title: "Vittup Rewards Platform",
    category: "LIVE ON GOOGLE PLAY",
    icon: Smartphone,
    iconBg: "bg-[#FACC15] text-black",
    summary:
      "A cross-platform mobile rewards aggregator engineered with React Native and Node.js. Captures cashback metrics and reward balances across multiple payment partners into a single real-time wallet.",
    metricBadge: "100+ Active Installs",
    techStack: ["React Native", "Node.js", "Express", "Android SDK"],
    verificationLink: "https://play.google.com/store/apps/details?id=com.vittup",
    linkText: "Google Play Store ↗",
  },
  // {
  //   title: "Enterprise Healthcare Claims",
  //   category: "CARELON GLOBAL SOLUTIONS",
  //   icon: Building2,
  //   iconBg: "bg-[#2563EB] text-white",
  //   summary:
  //     "Engineered robust Java / Spring Boot microservices and automated claims processing pipelines with AWS CloudWatch observability. Maintained platform reliability for millions of health plan members.",
  //   metricBadge: "Enterprise SLA Grade",
  //   techStack: ["Spring Boot", "AWS CloudWatch", "PostgreSQL", "Docker"],
  //   verificationLink: "#experience",
  //   linkText: "View Track Record ↗",
  // },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Container Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#EF4444] text-white border-2 sm:border-2.5 border-black dark:border-slate-700 rounded-3xl p-6 sm:p-10 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] relative"
        >
          {/* Header Bar inside Red Box */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-white/20 pb-5 sm:pb-6 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="neo-sticker bg-[#FACC15] text-black text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded uppercase shadow-[1.5px_1.5px_0px_0px_#000]">
                  VERIFIABLE TRACK RECORD
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase">
                PROVEN DELIVERABLES & OUTCOMES
              </h2>
              <p className="text-xs sm:text-sm text-white/90 font-medium mt-1">
                Real apps in the hands of real users — verifiable production software
              </p>
            </div>

            <a
              href="https://github.com/Dinesh-78"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn bg-white text-black px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-1.5 self-start sm:self-auto shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] shrink-0 whitespace-nowrap"
            >
              <span>INSPECT CODE ON GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 3 Outcome Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {outcomes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="bg-card text-card-foreground border-2 border-black rounded-2xl p-5 sm:p-6 shadow-[3px_3px_0px_0px_#000] sm:shadow-[5px_5px_0px_0px_#000] flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Top Category Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground truncate">
                        {item.category}
                      </span>
                      <span className="neo-badge bg-[#10B981]/15 text-[#059669] dark:text-[#34D399] border-[#10B981] px-2 py-0.5 rounded text-[10px] font-bold inline-flex items-center gap-1 shrink-0">
                        <CheckCircle2 className="w-3 h-3" />
                        {item.metricBadge}
                      </span>
                    </div>

                    {/* Title with Icon */}
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${item.iconBg} border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center shrink-0 mt-0.5`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-black tracking-tight uppercase leading-snug">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-[13px] font-medium leading-relaxed mb-4 text-foreground/85">
                      {item.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {item.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="neo-badge text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-card text-foreground/80 border border-black/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verification Link */}
                  <div className="pt-3.5 border-t border-black/10 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold text-muted-foreground uppercase">
                      Proof of Delivery:
                    </span>
                    <a
                      href={item.verificationLink}
                      target={item.verificationLink.startsWith("http") ? "_blank" : undefined}
                      rel={item.verificationLink.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-xs font-black uppercase text-[#2563EB] dark:text-[#60A5FA] hover:underline inline-flex items-center gap-1 whitespace-nowrap"
                    >
                      <span>{item.linkText}</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
