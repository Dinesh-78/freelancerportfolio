export const heroData = {
  // Rotating text phrases for the animated headline
  rotatingWords: [
    "Web Applications",
    "Mobile Apps",
    "AI Automation",
    "Cloud Solutions",
    "SaaS Products",
  ],
  
  // Main value proposition
  headline: "I help businesses build software that drives growth",
  subheadline: "From idea to production in weeks — not months. Full-stack development, mobile apps, AI automation, and enterprise-grade architecture.",
  
  // CTA
  cta: {
    primary: {
      text: "Book a Free Strategy Call",
      href: "https://calendly.com/dineshreddy0906/30min",
    },
    secondary: {
      text: "View My Work",
      href: "#projects",
    },
  },

  // Social proof stats
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "7+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "AWS", label: "Certified" },
  ],

  // Trust badges / tech stack
  badges: [
    "Next.js & React",
    "React Native",
    "Spring Boot",
    "Node.js",
    "TypeScript",
    "AWS Certified",
    "AI & Automation",
    "Docker & K8s",
  ],
} as const;
