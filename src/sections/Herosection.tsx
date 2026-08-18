"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, MessageCircle, CheckCircle } from "lucide-react";
import { itemVariants } from "@/constants/animations";
import { heroData } from "@/constants/hero";
import { socialLinks } from "@/constants/navigation";

const Herosection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 text-center relative overflow-hidden pt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-400/10 dark:bg-teal-600/10 rounded-full blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Available for Freelance Badge */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="mb-5 flex items-center justify-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-950/40 px-4 py-2 text-sm font-semibold text-green-700 dark:text-green-400 backdrop-blur shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          Available for Freelance &amp; Open Roles
        </span>
      </motion.div>

      {/* Hero Label */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="mb-5"
      >
       
      </motion.div>

      {/* Headline */}
      <motion.h1
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-6"
      >
        I build{" "}
        <span className="text-blue-600 dark:text-blue-400">
          production-ready MVPs
        </span>{" "}
        for startups
        <br />
        in weeks, not months.
      </motion.h1>

      {/* Supporting Text */}
      <motion.p
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10"
      >
        Full-stack developer specializing in{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">MERN</span>
        ,{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">React Native</span>
        , and{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">Spring Boot</span>
        .<br className="hidden md:block" />
        I help founders turn ideas into working products with{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          scalable, production-grade architecture
        </span>{" "}
        — not throwaway prototypes.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
      >
        <motion.a
          href={heroData.cta.primary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <MessageCircle className="w-5 h-5" />
          Start Your Project
          <ArrowRight className="w-4 h-4" />
        </motion.a>
        <motion.a
          href={heroData.cta.secondary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold text-base hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Download className="w-5 h-5" />
          View Resume
        </motion.a>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10"
      >
        {[
          { value: "7+", label: "Projects Shipped" },
          { value: "2+", label: "Years Experience" },
          { value: "AWS", label: "Certified" },
          { value: "100%", label: "Client Satisfaction" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-2xl font-black text-blue-600 dark:text-blue-400">{stat.value}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Tech Stack Badges */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto"
      >
        {heroData.badges.map((badge, i) => (
          <motion.span
            key={i}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 border border-blue-200/60 dark:border-blue-700/60 text-xs font-medium text-slate-700 dark:text-slate-300 backdrop-blur shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.07 }}
          >
            <CheckCircle className="w-3 h-3 text-blue-500 dark:text-blue-400 flex-shrink-0" />
            {badge}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default Herosection;
