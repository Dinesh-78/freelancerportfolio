"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Server,
  Cloud,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { containerVariants, itemVariants } from "@/constants/animations";
import { socialLinks } from "@/constants/navigation";

const services = [
  {
    icon: Globe,
    title: "Web App Development",
    subtitle: "Modern, fast, production-ready",
    description:
      "Full-stack web apps built with Next.js, React, and Node.js. Pixel-perfect UI, optimized for performance, and ready to scale from day one.",
    highlights: [
      "Next.js / React.js",
      "TypeScript",
      "REST & GraphQL APIs",
      "Database design",
    ],
    gradient: "from-blue-500 to-blue-700",
    bgGlow: "bg-blue-500/10 dark:bg-blue-600/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "iOS & Android from one codebase",
    description:
      "Cross-platform mobile apps using React Native CLI. Bluetooth BLE, real-time features, Play Store deployment — delivered and live.",
    highlights: [
      "React Native CLI",
      "Bluetooth BLE",
      "Push Notifications",
      "Play Store / App Store",
    ],
    gradient: "from-purple-500 to-purple-700",
    bgGlow: "bg-purple-500/10 dark:bg-purple-600/10",
  },
  {
    icon: Server,
    title: "Backend & API Engineering",
    subtitle: "Scalable, secure, optimized",
    description:
      "Robust backend systems with Spring Boot, Node.js, and Express.js. REST APIs, microservices, Redis caching, and Kafka messaging.",
    highlights: [
      "Spring Boot / Node.js",
      "Redis Caching",
      "Kafka Messaging",
      "PostgreSQL / MongoDB",
    ],
    gradient: "from-teal-500 to-teal-700",
    bgGlow: "bg-teal-500/10 dark:bg-teal-600/10",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    subtitle: "AWS Certified · CI/CD Pipelines",
    description:
      "Cloud infrastructure on AWS & GCP with Docker, Kubernetes, and GitHub Actions. Automated deployments, monitoring, and zero-downtime releases.",
    highlights: [
      "AWS / GCP",
      "Docker & Kubernetes",
      "GitHub Actions CI/CD",
      "CloudWatch Monitoring",
    ],
    gradient: "from-orange-500 to-orange-700",
    bgGlow: "bg-orange-500/10 dark:bg-orange-600/10",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-slate-900 dark:via-blue-950 dark:to-teal-950 relative overflow-hidden"
    >
      {/* Background blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal-400/10 dark:bg-teal-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-black mb-4">
            What I{" "}
            <span className="text-blue-600 dark:text-blue-400">Build</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            End-to-end digital products — from idea to production, web to
            mobile, frontend to cloud.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50 shadow-lg hover:border-blue-400 dark:hover:border-blue-600 transition-all group overflow-hidden"
              whileHover={{ scale: 1.03, y: -6 }}
            >
              {/* Glow Background */}
              <div
                className={`absolute inset-0 ${service.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Icon */}
              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {service.subtitle}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {service.highlights.map((item, hi) => (
                    <li
                      key={hi}
                      className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
            Have a project in mind? Let&apos;s talk about it.
          </p>
          <motion.a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
