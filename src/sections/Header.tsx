"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, ArrowUpRight, Github, Linkedin, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "ABOUT", id: "about" },
  { name: "SERVICES", id: "services" },
  { name: "SELECTED WORK", id: "projects" },
  { name: "EXPERIENCE", id: "experience" },
  { name: "OUTCOMES", id: "testimonials" },
  { name: "CONTACT", id: "contact" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setDarkMode(true);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/95 dark:bg-[#0D0F14]/95 backdrop-blur-md border-b-2 border-black dark:border-slate-800 shadow-[0px_4px_0px_0px_rgba(0,0,0,0.06)]"
          : "bg-[#FAF8F5]/80 dark:bg-[#0D0F14]/80 backdrop-blur-xs border-b border-black/10"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Logo: DINESH.DEV */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-lg sm:text-xl font-black tracking-tight text-foreground uppercase">
            DINESH.DEV
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className="text-xs font-black tracking-wider text-foreground/80 hover:text-foreground hover:underline underline-offset-4 decoration-2 decoration-[#FACC15] transition-colors uppercase"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Quick Credibility Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1.5 mr-1">
            <a
              href="https://github.com/Dinesh-78"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-card border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000] flex items-center justify-center text-foreground hover:bg-[#FACC15] hover:text-black transition-all"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/dinesh-veerapareddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-card border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000] flex items-center justify-center text-foreground hover:bg-[#2563EB] hover:text-white transition-all"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://drive.google.com/file/d/1q1BJc9afcA2kZVJJsRGza3bbbLQTvWGY/view"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1 px-2.5 py-1 rounded-full bg-card border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000] text-[11px] font-black uppercase text-foreground hover:bg-[#10B981] hover:text-white transition-all"
              title="View Resume"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-card border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center text-foreground hover:bg-secondary transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-[#FACC15]" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Neo-brutalist "BOOK A CALL ↗" button */}
          <a
            href="https://calendly.com/dineshreddy0906/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn bg-[#FACC15] text-black px-3.5 sm:px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider gap-1.5 shadow-[2px_2px_0px_0px_#000]"
          >
            <span>BOOK A CALL</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-card border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center text-foreground cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b-2 border-black bg-card px-6 py-5 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-3.5">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, item.id)}
                  className="text-sm font-black tracking-wider text-foreground hover:text-[#2563EB] uppercase py-1 border-b border-border/40"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <a
                  href="https://github.com/Dinesh-78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-secondary border border-black text-center text-xs font-bold text-foreground flex items-center justify-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/dinesh-veerapareddy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-secondary border border-black text-center text-xs font-bold text-foreground flex items-center justify-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/1q1BJc9afcA2kZVJJsRGza3bbbLQTvWGY/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-secondary border border-black text-center text-xs font-bold text-foreground flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              </div>

              <a
                href="https://calendly.com/dineshreddy0906/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn bg-[#FACC15] text-black w-full py-3 rounded-full text-xs font-black uppercase tracking-wider text-center mt-2 shadow-[2px_2px_0px_0px_#000]"
              >
                BOOK A 30-MIN CALL ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
