
export const awsCertification = {
  title: "AWS Developer Certified",
  issuer: "Amazon Web Services (AWS)",
  status: "Verified Credential",
  description:
    "Formally certified in architecting, developing, and deploying cloud-native applications on AWS, specializing in serverless microservices, containerized deployments, and distributed database systems.",
} as const;

export const skillCategories = [
  {
    category: "Frontend",
    items: [
      "Next.js",
      "React.js",
      "React Native CLI",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  { category: "Styling & UI", items: ["Tailwind CSS", "shadcn/ui", "CSS"] },
  {
    category: "Backend & Database",
    items: ["Node.js", "Django", "MySQL", "Prisma", "Redis", "GraphQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "GCP"],
  },
  {
    category: "Tools & Services",
    items: ["RESTful APIs", "Cron", "Firebase", "Kafka"],
  },
] as const;
