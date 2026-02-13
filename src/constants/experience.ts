import { Briefcase, Code, Smartphone, Database, Cloud } from "lucide-react";

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  icon: typeof Briefcase;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  // {
  //   title: "Software Engineer",
  //   company: "Freelancer",
  //   location: "Hyderabad",
  //   period: "Sep 2025 - Present",
  //   icon: Briefcase,
  //   achievements: [
  //     "Guiding a team of Interns in designing and maintaining scalable MERN stack applications with focus on performance, maintainability, and security",
  //     "Responsible for complete backend architecture including caching, Redis integration, Firebase, and Kafka-based asynchronous messaging for efficient task processing",
  //     "Designed and implemented optimized database queries and indexing strategies improving API performance by 40%",
  //     "Handled DevOps activities including CI/CD pipelines, Docker containerization, Kubernetes (kubectl) orchestration, and monitoring deployment on GCP and AWS",
  //     "Worked closely with DevOps engineers to automate build, testing, and deployment workflows using GitHub Actions",
  //     "Conducted regular code reviews, mentoring interns, and ensuring adherence to quality and performance standards",
  //   ],
  //   technologies: [
  //     "MERN Stack",
  //     "Redis",
  //     "Firebase",
  //     "Kafka",
  //     "Docker",
  //     "Kubernetes",
  //     "GCP",
  //     "AWS",
  //     "GitHub Actions",
  //     "Node.js",
  //     "MongoDB",
  //   ],
  // },
  {
    title: "Next.js Full Stack Developer",
    company: "MOVE37 Productions",
    location: "Remote",
    period: "May 2025 - Sep 2025",
    icon: Code,
    achievements: [
      "Developing scalable and high-performing UI systems using Next.js, TypeScript, and Tailwind CSS",
      "Built AI features including audio transcription feature",
      "Implementing responsive and optimized frontend solutions with focus on performance and user experience",
      "Collaborating with cross-functional teams to deliver client-focused web applications",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "AI Integration",
    ],
  },
  {
    title: "Mobile App Development Internship",
    company: "Bits and Volts",
    location: "Remote",
    period: "6 Months",
    icon: Smartphone,
    achievements: [
      "Developed mobile applications using React Native CLI with focus on custom UI/UX design",
      "Contributed to live projects and gained hands-on experience in real-world app development and deployment",
      "Collaborated with development teams to implement client requirements and ensure project deliverables",
      "Enhanced skills in mobile app architecture, state management, and API integration",
    ],
    technologies: [
      "React Native CLI",
      "JavaScript",
      "API Integration",
      "State Management",
    ],
  },
];

export const experienceStats = [
  { icon: Code, label: "MERN Stack", value: "Advanced" },
  { icon: Database, label: "Backend", value: "Intermediate" },
  { icon: Cloud, label: "Cloud & DevOps", value: "Intermediate" },
  { icon: Smartphone, label: "Mobile", value: "Intermediate" },
] as const;
