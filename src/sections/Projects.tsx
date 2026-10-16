"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/constants/projects";

const filterCategories = ["All", "Mobile App", "Full Stack Project", "Client Project"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b-2 border-black/10 dark:border-slate-800 pb-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#2563EB] block mb-1">
              Case Studies & Shipped Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground">
              SELECTED SYSTEMS & WORK
            </h2>
            <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
              Real-world production applications deployed to Google Play Store & Vercel
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <a
              href="https://github.com/Dinesh-78"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] hover:underline flex items-center gap-1.5"
            >
              <span>EXPLORE GITHUB (@Dinesh-78)</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`neo-btn px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#FACC15] text-black shadow-[3px_3px_0px_0px_#000]"
                    : "bg-white dark:bg-[#151821] text-foreground hover:bg-secondary shadow-[2px_2px_0px_0px_#000]"
                }`}
              >
                {cat} {cat === "All" ? `(${projects.length})` : ""}
              </button>
            );
          })}
        </div>

        {/* 2-Column Neo-Brutal Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="neo-box p-6 sm:p-8 flex flex-col justify-between border-2.5 border-black shadow-[6px_6px_0px_0px_#000] rounded-2xl bg-white dark:bg-[#151821] hover:shadow-[3px_3px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
                >
                  <div>
                    {/* Top Category Badge & Type */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="neo-badge text-[10px] sm:text-[11px] font-black uppercase px-3 py-1 rounded-full bg-[#FACC15] text-black">
                        {project.type}
                      </span>
                      <span className="text-xs font-mono font-bold text-muted-foreground flex items-center gap-1">
                        ⏱️ {project.deliveryTime}
                      </span>
                    </div>

                    {/* Project Title with Icon */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center text-foreground shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-foreground leading-snug">
                          {project.title}
                        </h3>
                        <span className="text-[11px] font-mono font-bold text-[#2563EB] uppercase">
                          Client: {project.client}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium mb-6">
                      {project.desc}
                    </p>

                    {/* Real Metrics Box if present */}
                    {project.metrics && Object.keys(project.metrics).length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-secondary/50 border border-black/20 mb-6">
                        {project.metrics.users && (
                          <div className="text-center">
                            <div className="text-base font-black text-foreground">
                              {project.metrics.users}
                            </div>
                            <p className="text-[9px] font-bold text-muted-foreground uppercase">
                              Active Traction
                            </p>
                          </div>
                        )}
                        {project.metrics.performance && (
                          <div className="text-center">
                            <div className="text-base font-black text-[#10B981]">
                              {project.metrics.performance}
                            </div>
                            <p className="text-[9px] font-bold text-muted-foreground uppercase">
                              Speed Impact
                            </p>
                          </div>
                        )}
                        {project.metrics.transactions && (
                          <div className="text-center">
                            <div className="text-base font-black text-[#2563EB]">
                              {project.metrics.transactions}
                            </div>
                            <p className="text-[9px] font-bold text-muted-foreground uppercase">
                              Volume
                            </p>
                          </div>
                        )}
                        {project.metrics.uptime && (
                          <div className="text-center">
                            <div className="text-base font-black text-foreground">
                              {project.metrics.uptime}
                            </div>
                            <p className="text-[9px] font-bold text-muted-foreground uppercase">
                              Uptime
                            </p>
                          </div>
                        )}
                        {project.metrics.orders && (
                          <div className="text-center">
                            <div className="text-base font-black text-foreground">
                              {project.metrics.orders}
                            </div>
                            <p className="text-[9px] font-bold text-muted-foreground uppercase">
                              Orders Done
                            </p>
                          </div>
                        )}
                        {project.metrics.rating && (
                          <div className="text-center">
                            <div className="text-base font-black text-[#EF4444]">
                              {project.metrics.rating}
                            </div>
                            <p className="text-[9px] font-bold text-muted-foreground uppercase">
                              Rating
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Testimonial Quote */}
                    {project.testimonial && (
                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs italic text-foreground/80 mb-6 font-medium">
                        {project.testimonial}
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Pills & Live Action Button */}
                  <div>
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="neo-badge text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-secondary text-foreground/90 border border-black/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Bar */}
                    <div className="pt-3 border-t-2 border-black/10 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase">
                        {project.isWebsite ? "Web Application" : "Mobile / Full-Stack"}
                      </span>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="neo-btn bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider gap-1.5 hover:bg-[#2563EB] dark:hover:bg-[#2563EB] dark:hover:text-white transition-colors"
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
