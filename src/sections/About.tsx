"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, CheckCircle2, ArrowUpRight, Zap } from "lucide-react";
import { skillCategories } from "@/constants/about";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-black/10 dark:border-slate-800 pb-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#2563EB] block mb-1">
              Credentials & Technical Mastery
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
              AWS DEVELOPER CERTIFIED & STACK
            </h2>
            <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
              Industry-certified cloud engineering & enterprise full-stack technology arsenal
            </p>
          </div>

          <div className="mt-3 md:mt-0">
            <span className="neo-badge bg-[#FACC15] text-black text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              ⚡ AWS Certified Developer
            </span>
          </div>
        </div>

        {/* ── TOP SECTION: AWS Developer Certified Dedicated Neo-Box ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="neo-box p-6 sm:p-10 border-2.5 border-black shadow-[8px_8px_0px_0px_#FACC15] rounded-3xl bg-white dark:bg-[#151821] mb-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: AWS Certification Badge & Info */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-4">
                <span className="neo-sticker bg-[#FACC15] text-black text-[11px] font-black px-3 py-1 rounded-md">
                  OFFICIAL RECOGNITION
                </span>
                <span className="text-xs font-mono font-bold text-[#2563EB]">
                  Amazon Web Services (AWS)
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FF9900]/15 border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center text-[#FF9900] shrink-0">
                  <Cloud className="w-8 h-8 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground leading-tight">
                    AWS Developer Certified
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-muted-foreground font-mono mt-0.5">
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
                  className="neo-badge bg-[#10B981]/15 text-[#10B981] dark:text-[#34D399] border-[#10B981] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 hover:bg-[#10B981] hover:text-white transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verify Credential on LinkedIn ↗</span>
                </a>
                <span className="neo-badge bg-secondary px-3 py-1 rounded-full text-xs font-mono font-bold text-foreground">
                  Amazon Web Services
                </span>
              </div>
            </div>

            {/* Right: Core AWS Architectural Pillars Grid */}
            <div className="lg:col-span-5 bg-secondary/50 dark:bg-[#0D0F14] border-2 border-black rounded-2xl p-5 sm:p-6 shadow-[4px_4px_0px_0px_#000]">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#2563EB] dark:text-[#3B82F6] mb-4 flex items-center gap-2 border-b border-black/10 pb-2">
                <Zap className="w-3.5 h-3.5 text-[#FACC15]" />
                Validated Cloud Competencies
              </h4>

              <div className="flex flex-col gap-2.5 text-xs font-medium text-foreground/90">
                <div className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold text-sm leading-none mt-0.5">✓</span>
                  <span>Serverless Workflows: AWS Lambda, API Gateway & EventBridge</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold text-sm leading-none mt-0.5">✓</span>
                  <span>Containerized Deployments: Docker, AWS ECS, Fargate & ECR</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold text-sm leading-none mt-0.5">✓</span>
                  <span>Cloud Storage & Databases: Amazon RDS (Postgres/MySQL), DynamoDB & S3</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold text-sm leading-none mt-0.5">✓</span>
                  <span>Observability & DevOps: AWS CloudWatch, CI/CD Pipelines & IAM Security</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── BOTTOM ROW: Real Technical Arsenal (Categorized Grid) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="neo-box p-6 sm:p-10 border-2.5 border-black shadow-[8px_8px_0px_0px_#000] rounded-3xl bg-white dark:bg-[#151821]"
        >
          <div className="border-b-2 border-black/10 dark:border-slate-800 pb-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground uppercase">
                COMPLETE TECHNICAL STACK
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-0.5">
                Every framework, database, language, and cloud tool Dinesh builds with
              </p>
            </div>
            <span className="neo-badge bg-[#FACC15] text-black text-xs font-mono font-bold px-3 py-1 rounded-full self-start sm:self-auto">
              15+ Production Technologies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, cIdx) => (
              <div
                key={cIdx}
                className="p-5 rounded-2xl bg-secondary/50 dark:bg-secondary/20 border-2 border-black/20 hover:border-black transition-colors"
              >
                <h4 className="text-xs font-black uppercase tracking-wider text-[#2563EB] dark:text-[#3B82F6] mb-3 flex items-center justify-between">
                  <span>{cat.category}</span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    ({cat.items.length})
                  </span>
                </h4>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="neo-badge text-xs font-bold px-3 py-1 rounded-lg bg-white dark:bg-[#151821] text-foreground border border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#FACC15] hover:text-black transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Technology Level Pills */}
          <div className="mt-8 pt-6 border-t-2 border-black/10 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono font-bold text-muted-foreground uppercase">
              Core Specialties: Node.js • Django • Next.js • React Native • Spring Boot • AWS • Docker
            </span>
            <a
              href="https://github.com/Dinesh-78"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn bg-[#2563EB] text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider gap-1.5 shadow-[3px_3px_0px_0px_#000]"
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
