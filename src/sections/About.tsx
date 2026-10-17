"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, CheckCircle2, ArrowUpRight, Zap, Check } from "lucide-react";
import { skillCategories } from "@/constants/about";

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 border-b-2 border-black/10 dark:border-slate-800 pb-5 sm:pb-6 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="neo-sticker bg-[#2563EB] text-white text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded shadow-[1.5px_1.5px_0px_0px_#000]">
                CREDENTIALS & EXPERTISE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground uppercase">
              AWS CERTIFIED & FULL STACK
            </h2>
            <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
              Industry-certified cloud engineering & enterprise full-stack technology arsenal
            </p>
          </div>

          <div className="self-start sm:self-auto">
            <span className="neo-badge bg-[#FACC15] text-black text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-[1.5px_1.5px_0px_0px_#000]">
              ⚡ AWS Certified Developer
            </span>
          </div>
        </div>

        {/* ── TOP SECTION: AWS Developer Certified Dedicated Neo-Box ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border-2 sm:border-2.5 border-black dark:border-slate-700 shadow-[5px_5px_0px_0px_#FACC15] sm:shadow-[8px_8px_0px_0px_#FACC15] rounded-3xl bg-card p-6 sm:p-8 lg:p-10 mb-10 sm:mb-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: AWS Certification Badge & Info */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                <span className="neo-sticker bg-[#FACC15] text-black text-[10px] sm:text-[11px] font-black px-2.5 py-0.5 rounded shadow-[1.5px_1.5px_0px_0px_#000]">
                  OFFICIAL RECOGNITION
                </span>
                <span className="text-xs font-mono font-bold text-[#2563EB] dark:text-[#60A5FA]">
                  Amazon Web Services (AWS)
                </span>
              </div>

              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FF9900]/15 border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center text-[#FF9900] shrink-0">
                  <Cloud className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-foreground leading-tight">
                    AWS Developer Certified
                  </h3>
                  <p className="text-[11px] sm:text-xs font-bold text-muted-foreground font-mono mt-0.5">
                    Certified by Amazon Web Services
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium mb-6 max-w-xl">
                Formally certified in architecting, developing, and deploying cloud-native applications on AWS. Specializing in high-throughput serverless microservices, containerized deployments, secure IAM governance, and resilient distributed databases.
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/dinesh-veerapareddy/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-badge bg-[#10B981]/15 text-[#059669] dark:text-[#34D399] border-[#10B981] px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1.5 hover:bg-[#10B981] hover:text-white transition-colors shadow-[1.5px_1.5px_0px_0px_#000] whitespace-nowrap"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verify Credential on LinkedIn ↗</span>
                </a>
                <span className="neo-badge bg-card px-3 py-1 rounded-full text-xs font-mono font-bold text-foreground border border-black shadow-[1.5px_1.5px_0px_0px_#000]">
                  Amazon Web Services
                </span>
              </div>
            </div>

            {/* Right: Core AWS Architectural Pillars Grid */}
            <div className="lg:col-span-5 bg-card border-2 border-black dark:border-slate-700 rounded-2xl p-5 sm:p-6 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000]">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA] mb-4 flex items-center gap-2 border-b border-black/10 dark:border-slate-800 pb-2">
                <Zap className="w-3.5 h-3.5 text-[#FACC15]" />
                <span>Validated Cloud Competencies</span>
              </h4>

              <div className="flex flex-col gap-2.5 text-xs font-medium text-foreground/90">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] stroke-[3] shrink-0 mt-0.5" />
                  <span>Serverless Workflows: AWS Lambda, API Gateway & EventBridge</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] stroke-[3] shrink-0 mt-0.5" />
                  <span>Containerized Deployments: Docker, AWS ECS, Fargate & ECR</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] stroke-[3] shrink-0 mt-0.5" />
                  <span>Cloud Storage & Databases: Amazon RDS, DynamoDB & S3</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] stroke-[3] shrink-0 mt-0.5" />
                  <span>Observability & DevOps: AWS CloudWatch, CI/CD Pipelines & IAM</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── BOTTOM ROW: Real Technical Arsenal (Categorized Grid) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border-2 sm:border-2.5 border-black dark:border-slate-700 shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] rounded-3xl bg-card p-6 sm:p-8 lg:p-10"
        >
          <div className="border-b-2 border-black/10 dark:border-slate-800 pb-4 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-foreground uppercase">
                COMPLETE TECHNICAL STACK
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-0.5">
                Every framework, database, language, and cloud tool Dinesh builds with
              </p>
            </div>
            <span className="neo-badge bg-[#FACC15] text-black text-xs font-mono font-bold px-3 py-1 rounded-full self-start sm:self-auto border border-black shadow-[1.5px_1.5px_0px_0px_#000]">
              15+ Production Technologies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {skillCategories.map((cat, cIdx) => (
              <div
                key={cIdx}
                className="p-4 sm:p-5 rounded-2xl bg-card border-2 border-black/20 hover:border-black transition-colors shadow-[2px_2px_0px_0px_#000]"
              >
                <h4 className="text-xs font-black uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA] mb-3 flex items-center justify-between">
                  <span>{cat.category}</span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    ({cat.items.length})
                  </span>
                </h4>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="neo-badge text-xs font-bold px-2.5 py-1 rounded-lg bg-card text-foreground border border-black shadow-[1.5px_1.5px_0px_0px_#000] hover:bg-[#FACC15] hover:text-black transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Technology Level Pills */}
          <div className="mt-8 pt-6 border-t-2 border-black/10 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs font-mono font-bold text-muted-foreground uppercase">
              Core Specialties: Node.js • Django • Next.js • React Native • Spring Boot • AWS • Docker
            </span>
            <a
              href="https://github.com/Dinesh-78"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn bg-[#2563EB] text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] w-full sm:w-auto"
            >
              <span>INSPECT ON GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
