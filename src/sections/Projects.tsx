"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, Clock, Star, TrendingUp, Users } from "lucide-react";
import { projects } from "@/constants/projects";

const filterCategories = ["All", "Mobile App", "Full Stack Project", "Client Project"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="projects" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 border-b-2 border-black/10 dark:border-slate-800 pb-5 sm:pb-6 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="neo-sticker bg-[#2563EB] text-white text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded shadow-[1.5px_1.5px_0px_0px_#000]">
                PROVEN DELIVERABLES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground uppercase">
              SELECTED SYSTEMS & WORK
            </h2>
            <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
              Production applications deployed to Google Play Store, AWS, and Vercel
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Dinesh-78"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA] hover:underline inline-flex items-center gap-1.5"
            >
              <span>EXPLORE GITHUB (@Dinesh-78)</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>

        {/* Filter Pills - Silky horizontal swipe on mobile, clean wrap on desktop */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-0 scrollbar-none sm:flex-wrap mb-8 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`neo-btn px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-[#FACC15] text-black shadow-[3px_3px_0px_0px_#000]"
                    : "bg-card text-foreground hover:bg-secondary shadow-[2px_2px_0px_0px_#000]"
                }`}
              >
                {cat} {cat === "All" ? `(${projects.length})` : ""}
              </button>
            );
          })}
        </div>

        {/* 2-Column Neo-Brutal Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="p-5 sm:p-7 flex flex-col justify-between border-2 sm:border-2.5 border-black dark:border-slate-700 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] rounded-2xl bg-card hover:translate-x-[1px] hover:translate-y-[1px] transition-all group h-full"
                >
                  <div>
                    {/* Top Category Badge & Timeline */}
                    <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                      <span className="neo-badge text-[10px] sm:text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#FACC15] text-black border border-black shadow-[1.5px_1.5px_0px_0px_#000]">
                        {project.type}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{project.deliveryTime}</span>
                      </span>
                    </div>

                    {/* Project Title with Icon */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-card border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center text-foreground shrink-0 mt-0.5 group-hover:rotate-3 transition-transform">
                        <Icon className="w-5 h-5 text-[#2563EB]" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-black tracking-tight uppercase text-foreground leading-snug">
                          {project.title}
                        </h3>
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase">
                          Client: {project.client}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium mb-5">
                      {project.desc}
                    </p>

                    {/* Clean High-Contrast Metrics Box */}
                    {project.metrics && Object.keys(project.metrics).length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-card border border-black shadow-[2px_2px_0px_0px_#000] mb-5">
                        {project.metrics.users && (
                          <div className="text-center p-1">
                            <div className="text-sm sm:text-base font-black text-foreground">
                              {project.metrics.users}
                            </div>
                            <p className="text-[9px] font-bold text-muted-foreground uppercase flex items-center justify-center gap-0.5">
                              <Users className="w-2.5 h-2.5 text-[#2563EB]" />
                              <span>Active Traction</span>
                            </p>
                          </div>
                        )}
                        {project.metrics.performance && (
                          <div className="text-center p-1">
                            <div className="text-sm sm:text-base font-black text-[#10B981]">
                              {project.metrics.performance}
                            </div>
                            <p className="text-[9px] font-bold text-muted-foreground uppercase flex items-center justify-center gap-0.5">
                              <TrendingUp className="w-2.5 h-2.5 text-[#10B981]" />
                              <span>Speed Impact</span>
                            </p>
                          </div>
                        )}
                        {project.metrics.transactions && (
                          <div className="text-center p-1">
                            <div className="text-sm sm:text-base font-black text-[#2563EB]">
                              {project.metrics.transactions}
                            </div>
                            <p className="text-[9px] font-bold text-muted-foreground uppercase">
                              Volume
                            </p>
                          </div>
                        )}
                        {project.metrics.uptime && (
                          <div className="text-center p-1">
                            <div className="text-sm sm:text-base font-black text-foreground">
                              {project.metrics.uptime}
                            </div>
                            <p className="text-[9px] font-bold text-muted-foreground uppercase">
                              Uptime
                            </p>
                          </div>
                        )}
                        {project.metrics.orders && (
                          <div className="text-center p-1">
                            <div className="text-sm sm:text-base font-black text-foreground">
                              {project.metrics.orders}
                            </div>
                            <p className="text-[9px] font-bold text-muted-foreground uppercase">
                              Orders Done
                            </p>
                          </div>
                        )}
                        {project.metrics.rating && (
                          <div className="text-center p-1">
                            <div className="text-sm sm:text-base font-black text-[#EF4444]">
                              {project.metrics.rating}
                            </div>
                            <p className="text-[9px] font-bold text-muted-foreground uppercase flex items-center justify-center gap-0.5">
                              <Star className="w-2.5 h-2.5 text-[#EF4444] fill-current" />
                              <span>Rating</span>
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Testimonial Quote */}
                    {project.testimonial && (
                      <div className="p-3 rounded-xl bg-card border-l-4 border-l-[#FACC15] border border-black/20 text-xs italic text-foreground/80 mb-5 font-medium shadow-[1.5px_1.5px_0px_0px_#000]">
                        {project.testimonial}
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Pills & Live Action Button */}
                  <div>
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="neo-badge text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-card text-foreground/90 border border-black shadow-[1.5px_1.5px_0px_0px_#000]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Responsive Action Bar */}
                    <div className="pt-3.5 border-t-2 border-black/10 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold text-muted-foreground uppercase">
                        {project.isWebsite ? "Web Application" : "Mobile / Full-Stack"}
                      </span>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="neo-btn bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-1.5 hover:bg-[#2563EB] dark:hover:bg-[#2563EB] dark:hover:text-white transition-colors shadow-[2px_2px_0px_0px_#000] w-full sm:w-auto"
                        >
                          <span>{project.demoUrl.includes("play.google") ? "Play Store Live" : "Live Demo"}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
