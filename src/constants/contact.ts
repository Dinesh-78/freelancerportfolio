import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  MessageCircle,
  Download,
  Workflow,
  LucideIcon,
} from "lucide-react";

export interface Skill {
  name: string;
  icon?: LucideIcon;
  iconUrl?: string; // URL for technology logo/image
  level: string;
}

export const skills: Skill[] = [
  {
    name: "Next.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    level: "advanced",
  },
  {
    name: "React.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: "advanced",
  },
  {
    name: "React Native CLI",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: "advanced",
  },
  {
    name: "TypeScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: "advanced",
  },
  {
    name: "Node.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: "Advanced",
  },
  {
    name: "Spring Boot",
    iconUrl:
      "https://d2jdgazzki9vjm.cloudfront.net/springboot/images/spring-boot-tutorial.jpg",
    level: "Advanced",
  },
  {
    name: "Django",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    level: "Intermediate",
  },
  {
    name: "MySQL",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    level: "intermediate",
  },
  {
    name: "Prisma",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    level: "intermediate",
  },
  {
    name: "Redis",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    level: "intermediate",
  },
  {
    name: "GraphQL",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    level: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    level: "Advanced",
  },
  {
    name: "Docker",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    level: "intermediate",
  },
  {
    name: "Kubernetes",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    level: "Beginner",
  },
  {
    name: "AWS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    level: "Certified",
  },
  {
    name: "GitHub Actions",
    icon: Workflow,
    level: "intermediate",
  },
];

export interface ContactMethod {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Mail;
  href: string;
}

export const contactMethods: ContactMethod[] = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    subtitle: "Quick chat & calls",
    icon: MessageCircle,
    href: "https://wa.me/918374330906?text=Hi%20Dinesh%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    subtitle: "Professional networking",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dinesh-veerapareddy/",
  },
  {
    id: "github",
    title: "GitHub",
    subtitle: "View my code & projects",
    icon: Github,
    href: "https://github.com/Dinesh-78",
  },
  {
    id: "twitter",
    title: "Twitter",
    subtitle: "Follow my journey",
    icon: Twitter,
    href: "https://x.com/vdinesh2222",
  },
  {
    id: "resume",
    title: "Resume",
    subtitle: "Download my latest CV",
    icon: Download,
    href: "https://drive.google.com/file/d/1q1BJc9afcA2kZVJJsRGza3bbbLQTvWGY/view",
  },
];
