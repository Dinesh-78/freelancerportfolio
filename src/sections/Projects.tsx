"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ExternalLink,
  Calendar,
  Users,
  Zap,
  Award,
  MessageCircle,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/constants/projects";
import { socialLinks } from "@/constants/navigation";
import {
  containerVariants,
  itemVariants,
  hoverScale,
  tapScale,
} from "@/constants/animations";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-purple-50 to-teal-50 dark:from-slate-900 dark:via-purple-950 dark:to-teal-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
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
            <Award className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">
              {projects.length} Successful Projects Completed
            </span>
          </motion.div>

          <h2 className="text-4xl  font-black mb-6">
            <span className="text-blue-600 dark:text-blue-400">Featured</span>{" "}
            <span className="text-slate-900 dark:text-slate-100">Projects</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            Full-stack web applications and mobile solutions built with modern
            technologies. Each project delivered on time with 100% client
            satisfaction.
          </p>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { icon: Zap, text: "100% On-Time Delivery" },
              { icon: Users, text: "100% Quality Assurance" },
              { icon: Award, text: "100% Client Satisfaction" },
            ].map((indicator, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <indicator.icon className="h-5 w-5" />
                <span className="font-semibold text-sm sm:text-base">
                  {indicator.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-6 sm:gap-8 lg:grid-cols-3 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="group h-full hover:shadow-2xl transform transition-all duration-500 border border-blue-200/50 dark:border-blue-800/50 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="pb-4 relative z-10">
                  {project.isWebsite && (
                    <div className="mx-6 mb-4 rounded-lg overflow-hidden border border-blue-200/50 dark:border-blue-800/50 relative aspect-video bg-slate-100 dark:bg-slate-900">
                      <iframe
                        src={project.demoUrl}
                        title={`${project.title} live preview`}
                        loading="lazy"
                        className="w-full h-full pointer-events-none scale-100 origin-top-left"
                        sandbox="allow-scripts allow-same-origin"
                      />
                      {/* transparent overlay so the iframe isn't interactive inside the card,
        clicking anywhere still just opens the Live Demo link below */}
                      <div className="absolute inset-0 bg-transparent" />
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <project.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      <Badge
                        variant="secondary"
                        className="bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                      >
                        {project.type}
                      </Badge>
                    </div>
                  </div>

                  <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>

                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Calendar className="h-4 w-4" />
                    <span>Delivered in {project.deliveryTime}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-sm">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-blue-50/50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 text-xs hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-blue-200/50 dark:border-blue-800/50">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-sm shadow-lg"
                      whileHover={hoverScale}
                      whileTap={tapScale}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </motion.a>
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        className="flex-1 flex items-center justify-center gap-2 border border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/50 px-4 py-2.5 rounded-lg font-medium transition-colors text-sm text-blue-700 dark:text-blue-300"
                        whileHover={hoverScale}
                        whileTap={tapScale}
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-black mb-4 text-blue-600 dark:text-blue-400">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Join satisfied clients who have transformed their ideas into
              successful digital products.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.a
                href={socialLinks.whatsapp}
                target="_blank"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
                whileHover={hoverScale}
                whileTap={tapScale}
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Me Now
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
