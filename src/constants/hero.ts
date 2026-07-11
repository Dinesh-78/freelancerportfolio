import { Code, Database, Cloud, Smartphone } from "lucide-react";

export const heroData = {
  title: "Building MVPs for Startups",
  subtitle: "Full Stack Developer • MERN Stack experienced",
  description:
    "Experienced in MERN stack applications with focus on performance, maintainability, and security. Specializing in Next.js, React Native, TypeScript, and cloud infrastructure.",
  cta: {
    primary: {
      text: "Start Your Project",
      href: "https://wa.me/+918374330906?text=Hi%20Dinesh%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you",
    },
    secondary: {
      text: "View Resume",
      href: "https://drive.google.com/file/d/1q1BJc9afcA2kZVJJsRGza3bbbLQTvWGY/view?usp=sharing",
    },
  },
  techStack: [
    { icon: Code, label: "Frontend" },
    { icon: Database, label: "Backend" },
    { icon: Cloud, label: "Cloud" },
    { icon: Smartphone, label: "Mobile" },
  ],
  badges: [
    "MERN Stack",
    "Spring Boot",
    "Next.js & TypeScript",
    "React Native",
    "AWS Certified",
    "Docker & Kubernetes",
    "Performance Optimized",
  ],
} as const;
