"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Cloud, Monitor, Smartphone, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "mobile-offline",
    title: "MOBILE & OFFLINE ENGINES",
    bgColor: "#FACC15",
    textColor: "text-black",
    iconBg: "bg-white text-black",
    icon: Smartphone,
    description:
      "React Native mobile applications with local SQLite databases, offline-first sync engines, Bluetooth BLE hardware connectivity, and Google Play Store deployments.",
    tag: "REACT NATIVE • SQLITE • BLE",
  },
  {
    id: "aws-cloud",
    title: "AWS CLOUD ARCHITECTURE",
    bgColor: "#EF4444",
    textColor: "text-white",
    iconBg: "bg-white text-black",
    icon: Cloud,
    description:
      "AWS ECS/Fargate container deployments, event-driven API pipelines, Docker microservices, serverless Lambda functions, and CloudWatch performance monitoring.",
    tag: "AWS • DOCKER • ECS • LAMBDA",
  },
  {
    id: "fullstack-saas",
    title: "FULL-STACK SAAS & WEB",
    bgColor: "#2563EB",
    textColor: "text-white",
    iconBg: "bg-white text-black",
    icon: Monitor,
    description:
      "Next.js web platforms backed by robust Spring Boot & Node.js APIs, hardened PostgreSQL databases, secure authentication, and responsive enterprise UX.",
    tag: "NEXT.JS • SPRING BOOT • NODE",
  },
  {
    id: "ai-agents",
    title: "AI AUTOMATION & PIPELINES",
    bgColor: "#F59E0B",
    textColor: "text-black",
    iconBg: "bg-white text-black",
    icon: Bot,
    description:
      "Autonomous tool-calling agents, document parsing pipelines, structured LLM extraction, and workflow automation that remove hours of repetitive manual data entry.",
    tag: "LLM PIPELINES • AUTOMATION",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 border-b-2 border-black/10 dark:border-slate-800 pb-5 sm:pb-6 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="neo-sticker bg-[#EF4444] text-white text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded shadow-[1.5px_1.5px_0px_0px_#000]">
                CORE CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground uppercase">
              WHAT I BUILD.
            </h2>
            <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
              Production architectures engineered for high reliability, performance, and scale
            </p>
          </div>
          <div className="hidden sm:block">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
              PRODUCTION ARCHITECTURES • CLICK ANY TO INQUIRE
            </span>
          </div>
        </div>

        {/* 4 Cards Grid - Clickable & Interactive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                style={{ backgroundColor: item.bgColor }}
                className={`p-5 sm:p-6 flex flex-col justify-between border-2 sm:border-2.5 border-black shadow-[4px_4px_0px_0px_#000] sm:shadow-[5px_5px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] rounded-2xl ${item.textColor} relative group cursor-pointer transition-all h-full`}
              >
                <div>
                  {/* Icon Box */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${item.iconBg} border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center mb-4 sm:mb-5 group-hover:rotate-3 transition-transform`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-black tracking-tight uppercase leading-snug mb-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] leading-relaxed opacity-90 font-medium mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-3.5 border-t border-black/20 flex items-center justify-between text-[10px] sm:text-[11px] font-mono font-bold uppercase">
                  <span className="truncate mr-2">{item.tag}</span>
                  <span className="inline-flex items-center gap-1 font-sans text-xs font-black underline underline-offset-2 shrink-0">
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
