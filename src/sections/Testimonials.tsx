"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { containerVariants, itemVariants } from "@/constants/animations";

const testimonials = [
  {
    quote:
      "Seamless Bluetooth integration and real-time exercise tracking makes workout management effortless. Exactly what we needed for our fitness platform.",
    author: "Myotrek Team",
    role: "Fitness App Client",
    project: "Myotrek Fitness App",
    stars: 5,
  },
  {
    quote:
      "Delivered ahead of schedule with excellent API performance. The system handles thousands of daily operations without a glitch.",
    author: "Logistics Company",
    role: "Fleet Management Client",
    project: "Truck Management System",
    stars: 5,
  },
  {
    quote:
      "Seamless reward tracking across platforms with great performance and user experience. Our users love the app.",
    author: "Vittup Team",
    role: "Rewards App Client",
    project: "Vittup Rewards App",
    stars: 5,
  },
  {
    quote:
      "Professional delivery and excellent post-launch support. Dinesh understood our vision and brought it to life with precision.",
    author: "AndroAI",
    role: "Webinar Platform Client",
    project: "AndroAI Webinar Platform",
    stars: 5,
  },
  
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 dark:from-blue-950 dark:via-slate-900 dark:to-purple-950 relative overflow-hidden"
    >
      {/* Background blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />
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
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Star className="h-4 w-4 text-white fill-white" />
            <span className="text-sm font-medium text-white">
              Client Reviews
            </span>
          </motion.div>

          <h2 className="text-4xl font-black mb-4">
            What{" "}
            <span className="text-blue-600 dark:text-blue-400">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Real feedback from founders, startups, and businesses I&apos;ve
            worked with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50 shadow-lg hover:border-blue-400 dark:hover:border-blue-600 transition-all group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-blue-600" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 relative">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-blue-200/50 dark:border-blue-800/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold text-sm">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                    {t.author}
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: "100%", label: "Client Satisfaction" },
            { value: "5.0", label: "Average Rating" },
            { value: "7+", label: "Happy Clients" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-black text-blue-600 dark:text-blue-400">
                {stat.value}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
