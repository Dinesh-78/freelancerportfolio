"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "card">("default");
  const [cursorText, setCursorText] = useState<string>("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [entranceRippleKey, setEntranceRippleKey] = useState<number>(0);
  const [clickRipples, setClickRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  // Raw mouse coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for follower ring
  const springConfig = { damping: 24, stiffness: 360, mass: 0.35 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has touch capability or is mobile/tablet (<1024px)
    const checkTouch = () => {
      if (typeof window !== "undefined") {
        const isCoarse = window.matchMedia("(pointer: coarse)").matches;
        const isSmallScreen = window.innerWidth < 1024;
        setIsTouchDevice(isCoarse || isSmallScreen);
      }
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);

    let hasEnteredOnce = false;

    const triggerEntrance = () => {
      setIsVisible(true);
      if (typeof document !== "undefined") {
        document.documentElement.classList.add("custom-cursor-active");
      }
      setEntranceRippleKey((prev) => prev + 1);
    };

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!hasEnteredOnce) {
        hasEnteredOnce = true;
        triggerEntrance();
      } else if (!isVisible) {
        setIsVisible(true);
        if (typeof document !== "undefined") {
          document.documentElement.classList.add("custom-cursor-active");
        }
      }

      // Detect hover target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const textInputEl = target.closest("input, textarea");
      const interactiveEl = target.closest(
        "a, button, [role='button'], .neo-btn, select, .cursor-pointer"
      );
      const cardEl = target.closest(".neo-box, [data-cursor='card']");

      if (target.getAttribute("data-cursor-text")) {
        setCursorType("pointer");
        setCursorText(target.getAttribute("data-cursor-text") || "");
      } else if (textInputEl) {
        setCursorType("pointer");
        setCursorText("TYPE ✍");
      } else if (interactiveEl) {
        setCursorType("pointer");
        if (interactiveEl.tagName.toLowerCase() === "a") {
          const href = interactiveEl.getAttribute("href");
          if (href?.startsWith("http") || href?.includes("cal.com") || href?.includes("calendly.com")) {
            setCursorText("VISIT ↗");
          } else {
            setCursorText("CLICK ⚡");
          }
        } else {
          setCursorText("TAP");
        }
      } else if (cardEl && !interactiveEl) {
        setCursorType("card");
        setCursorText("");
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClickRipples((prev) => [...prev.slice(-4), newRipple]);
    };

    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => triggerEntrance();
    const handleMouseLeave = () => {
      setIsVisible(false);
      if (typeof document !== "undefined") {
        document.documentElement.classList.remove("custom-cursor-active");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.classList.remove("custom-cursor-active");
      }
      window.removeEventListener("resize", checkTouch);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* ── ENTRANCE RADAR PULSE (When Entering the Website) ── */}
      {entranceRippleKey > 0 && (
        <motion.div
          key={entranceRippleKey}
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0.2, opacity: 1, borderWidth: 4 }}
          animate={{ scale: 3.2, opacity: 0, borderWidth: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="fixed top-0 left-0 w-16 h-16 rounded-full border-2 border-[#FACC15] bg-[#FACC15]/20 shadow-[0_0_15px_rgba(250,204,21,0.5)]"
        />
      )}

      {/* ── CLICK BURST RIPPLES ── */}
      {clickRipples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ scale: 0.4, opacity: 0.9 }}
          animate={{ scale: 2.4, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
          className="fixed w-10 h-10 rounded-full border-2 border-black bg-[#EF4444]/30 pointer-events-none"
        />
      ))}

      {/* ── SMOOTH SPRING FOLLOWER (Neo-Brutalist Outer Ring / Capsule) ── */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.78 : cursorType === "pointer" ? 1.3 : cursorType === "card" ? 1.15 : 1,
          rotate: cursorType === "pointer" ? -6 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 22,
        }}
        className={`fixed top-0 left-0 rounded-full border-2.5 border-black flex items-center justify-center transition-colors duration-150 ${
          cursorType === "pointer"
            ? "w-16 h-16 bg-[#FACC15] shadow-[3.5px_3.5px_0px_0px_#000]"
            : cursorType === "card"
            ? "w-12 h-12 bg-white/90 dark:bg-[#151821]/90 backdrop-blur-sm shadow-[2.5px_2.5px_0px_0px_#000]"
            : "w-9 h-9 bg-[#2563EB]/15 dark:bg-[#2563EB]/35 backdrop-blur-[2px] shadow-[2px_2px_0px_0px_#000]"
        }`}
      >
        {/* Dynamic Micro-Label when hovering links or actions */}
        {cursorType === "pointer" && cursorText && (
          <span className="text-[9px] font-black tracking-wider text-black uppercase select-none leading-none animate-in fade-in zoom-in duration-100">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* ── IMMEDIATE CENTER DOT (Zero Lag Pointer with Crisp Neo-Ring) ── */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? (cursorType === "pointer" ? 0 : 1) : 0,
          scale: isClicking ? 1.6 : 1,
        }}
        transition={{ duration: 0.1 }}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#EF4444] border-2 border-black shadow-[1px_1px_0px_0px_#000]"
      />
    </div>
  );
}
