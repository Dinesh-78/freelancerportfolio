"use client";

import React from "react";
import { Award, MoveRight, GraduationCap, Star } from "lucide-react";
import { motion } from "framer-motion";
import { certifications, education, skillCategories } from "@/constants/about";
import { socialLinks } from "@/constants/navigation";
import { hoverScale, tapScale } from "@/constants/animations";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-teal-50 to-blue-50 dark:from-slate-900 dark:via-teal-950 dark:to-blue-950 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-black mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A passionate Full Stack Developer with expertise in MERN stack,
            cloud infrastructure, and mobile app development
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Education
          </h3>
          <motion.div
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-200/50 dark:border-blue-800/50 shadow-lg"
            whileHover={{ scale: 1.01, y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {education.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {education.field}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    {education.university}
                  </p>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-end gap-4 sm:gap-2 pl-16 sm:pl-0">
                <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {education.period}
                </span>
                <div className="flex items-center gap-1.5 bg-blue-50 dark:bg-blue-950/50 px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-800">
                  <Star className="w-4 h-4 text-blue-600 dark:text-blue-400 fill-current" />
                  <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">
                    CGPA {education.cgpa} / 10
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

       

        {/* Certifications */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
            <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-400 dark:hover:border-blue-600 transition-all shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <cert.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
            whileHover={hoverScale}
            whileTap={tapScale}
          >
            Let&apos;s Collaborate
            <MoveRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
