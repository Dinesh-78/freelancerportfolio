"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  itemVariants,
} from "@/constants/animations";

const Herosection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 text-center relative overflow-hidden pt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

     {/* Hero Label */}
<motion.div variants={itemVariants} className="mb-5">
  <span className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-700 bg-white/70 dark:bg-slate-800/70 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 backdrop-blur">
    Building MVPs for Startups
  </span>
</motion.div>

{/* Headline */}
<motion.h1
  variants={itemVariants}
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
  className="max-w-4xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10"
>
  Full-stack developer specializing in{" "}
  <span className="font-semibold text-blue-600 dark:text-blue-400">
    MERN
  </span>
  ,{" "}
  <span className="font-semibold text-blue-600 dark:text-blue-400">
    React Native
  </span>
  , and{" "}
  <span className="font-semibold text-blue-600 dark:text-blue-400">
    Spring Boot
  </span>
  .
  <br className="hidden md:block" />
  I help founders turn ideas into working products with
  <span className="font-semibold text-blue-600 dark:text-blue-400">
    {" "}
    scalable, production-grade architecture
  </span>{" "}
  — not throwaway prototypes.
</motion.p>
    </section>
  );
};

export default Herosection;
