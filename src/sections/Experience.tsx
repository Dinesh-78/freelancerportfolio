"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experiences, experienceStats } from "@/constants/experience";
import { containerVariants, itemVariants } from "@/constants/animations";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950 relative overflow-hidden"
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
            <span className="text-blue-600 dark:text-blue-400">
              Professional
            </span>{" "}
            <span className="text-slate-900 dark:text-slate-100">
              Experience
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Building scalable applications with a focus on performance and
            innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-teal-400 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12 md:mb-16 md:flex md:items-start"
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-slate-900 z-10 shadow-lg" />

              <div
                className={`flex-1 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8 md:max-w-[48%]" : "md:ml-auto md:pl-8 md:max-w-[48%]"
                }`}
              >
                {/* Content Card */}
                <motion.div
                  className="flex-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-400 dark:hover:border-blue-600 transition-all group shadow-lg"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <exp.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-blue-200/50 dark:border-blue-800/50">
                    {exp.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-blue-50/50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 text-xs hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {experienceStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-blue-200/50 dark:border-blue-800/50 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <p className="text-sm md:text-base font-bold text-blue-600 dark:text-blue-400 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
