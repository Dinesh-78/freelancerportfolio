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
    filterId: "Mobile App",
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
    filterId: "Full Stack Project",
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
    filterId: "Client Project",
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
    filterId: "All",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-black/10 dark:border-slate-800 pb-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#EF4444] block mb-1">
              Core Engineering Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
              WHAT I BUILD.
            </h2>
          </div>
          <div className="mt-3 md:mt-0">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
              PRODUCTION ARCHITECTURES • CLICK ANY TO INQUIRE
            </span>
          </div>
        </div>

        {/* 4 Cards Grid - Clickable & Interactive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href="#contact"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                style={{ backgroundColor: item.bgColor }}
                className={`p-6 flex flex-col justify-between border-2.5 border-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] rounded-2xl ${item.textColor} relative group cursor-pointer transition-all`}
              >
                <div>
                  {/* Icon Box */}
                  <div
                    className={`w-12 h-12 rounded-xl ${item.iconBg} border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center mb-6 group-hover:rotate-3 transition-transform`}
                  >
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black tracking-tight uppercase leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] leading-relaxed opacity-90 font-medium mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-black/20 flex items-center justify-between text-[11px] font-mono font-bold uppercase">
                  <span>{item.tag}</span>
                  <span className="inline-flex items-center gap-1 font-sans text-xs font-black underline underline-offset-2">
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
