"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { skills, contactMethods } from "@/constants/contact";
import { hoverScale, tapScale } from "@/constants/animations";

export default function Contact() {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <>
      <section
        className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-purple-950 dark:to-blue-950"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div className="relative max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              id="contact-heading"
              className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400"
            >
              Let&apos;s Create Something Amazing
            </h2>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Whether you are a{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                startup
              </span>
              ,
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {" "}
                business owner
              </span>
              , or
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {" "}
                recruiter
              </span>{" "}
              — I would love to hear from you.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                My Skills & Expertise
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Technologies I use to bring ideas to life
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={hoverScale}
                >
                  <motion.div
                    className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 transition-colors duration-300 shadow-lg border border-blue-200/50 dark:border-blue-800/50"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    {skill.iconUrl ? (
                      <Image
                        src={skill.iconUrl}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                        unoptimized
                      />
                    ) : skill.icon ? (
                      <skill.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                        {skill.name.charAt(0)}
                      </span>
                    )}
                  </motion.div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-xs sm:text-sm mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    {skill.level}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Connect with Me Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-black mb-4 text-center text-blue-600 dark:text-blue-400">
              Connect with Me:
            </h3>
            <div className="mb-4 text-center text-slate-600 dark:text-slate-400">
              <p>Email:{" "}<a href="mailto:veerapareddydinesh@gmail.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-all">veerapareddydinesh@gmail.com</a></p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.id}
                  href={method.href}
                  target="_blank"
                  rel={
                    method.id !== "resume" ? "noopener noreferrer" : undefined
                  }
                  className="flex flex-col items-center gap-2 group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`${method.title} - ${method.subtitle}`}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:rotate-6 transition-transform">
                    <method.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{method.title}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer with Copyright */}
          <motion.footer
            className="text-center pt-12 border-t border-blue-200/50 dark:border-blue-800/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3">
              <p className="font-bold text-slate-900 dark:text-slate-100 text-lg">
                Dinesh Veerapareddy
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-400 dark:text-slate-500 font-medium">
                <span>React Native Developer</span>
                <span>•</span>
                <span>Next.js Developer</span>
                <span>•</span>
                <span>Full Stack Engineer</span>
                <span>•</span>
                <span>AWS Certified</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                © {getCurrentYear()} Dinesh Veerapareddy. All rights reserved.
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                Built with Next.js · TypeScript · Framer Motion
              </p>
            </div>
          </motion.footer>
        </div>
      </section>
    </>
  );
}
