import {
  Truck,
  Leaf,
  Coins,
  Users,
  Activity,
  LucideIcon,
  Video,
} from "lucide-react";

export interface Project {
  title: string;
  icon: LucideIcon;
  tech: string[];
  desc: string;
  type: string;
  deliveryTime: string;
  isWebsite?: boolean;
  metrics?: {
    performance?: string;
    transactions?: string;
    uptime?: string;
    users?: string;
    orders?: string;
    rating?: string;
  };
  testimonial?: string;
  client: string;
  demoUrl: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Vittup — Rewards App",
    icon: Coins,
    tech: ["React Native", "Express.js", "Node.js", "Android"],
    desc: "A mobile rewards aggregator that captures user cashbacks and rewards across platforms like Amazon Pay, Google Pay, and more. Live on Google Play Store with 100+ active users and growing.",
    type: "Mobile App",
    deliveryTime: "4 weeks",
    metrics: {
      users: "100+ active users",
    },
    testimonial:
      '"Seamless reward tracking across platforms with great performance and user experience."',
    client: "Vittup",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.vittup",
    caseStudyUrl: "#",
  },
  {
    title: "Myotrek Fitness App",
    icon: Activity,
    tech: [
      "React Native",
      "Bluetooth BLE",
      "TypeScript",
      "Node.js",
      "Express.js",
    ],
    desc: "A mobile fitness application that connects seamlessly with Bluetooth BLE devices to monitor reps, workout performance, and exercise metrics in real-time. Built for performance athletes and gym coaches with 100+ active users.",
    type: "Mobile App",
    deliveryTime: "4 weeks",
    metrics: {
      users: "100+ users",
    },
    testimonial:
      '"Seamless Bluetooth integration and real-time exercise tracking makes workout management effortless."',
    client: "Myotrek",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.myotrek.fitness",
    caseStudyUrl: "#",
  },
  {
    title: "Truck Management System",
    icon: Truck,
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    desc: "Streamlined logistics operations for a delivery company with real-time fleet tracking, route optimization, and delivery status management. Reduced manual processing by 60% and improved delivery tracking accuracy to 99.9% uptime.",
    type: "Full Stack Project",
    deliveryTime: "3 weeks",
    isWebsite: true,
    metrics: {
      performance: "60% faster processing",
      transactions: "1000+ daily",
      uptime: "99.9%",
    },
    testimonial:
      '"Delivered ahead of schedule with excellent API performance."',
    client: "Logistics Company",
    demoUrl: "https://fleetmanagementsyetem.vercel.app/",
    caseStudyUrl: "#",
  },
  {
    title: "Financial Growth Platform",
    icon: Coins,
    tech: ["React.js", "Redux", "Firebase", "Tailwind CSS"],
    desc: "A comprehensive financial management platform for tracking personal and business finances. Includes real-time expense tracking, smart budget management, financial analytics dashboards, and actionable growth insights.",
    type: "Client Project",
    deliveryTime: "7 weeks",
    isWebsite: true,
    testimonial: '"Professional delivery and excellent post-launch support."',
    client: "Retail Business",
    demoUrl: "https://growth-marketing-wheat.vercel.app/",
    caseStudyUrl: "#",
  },
  {
    title: "Merchant Loyalty App",
    icon: Coins,
    tech: [
      "React Native",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
    ],
    desc: "A full-stack loyalty platform for merchants to manage customer rewards and transactions. Features real-time transaction tracking, customer management dashboard, and analytics — delivering a 60% faster reward processing pipeline.",
    type: "Full Stack Project",
    deliveryTime: "3 weeks",
    metrics: {
      performance: "60% faster processing",
    },
    testimonial: '"Delivered a fully working loyalty system end-to-end in just 3 weeks. Solid architecture and clean code."',
    client: "Loyalty App Client",
    demoUrl:
      "https://drive.google.com/file/d/14AiDsGd-_MazwMG6KoZR8N5nA8Utw4NV/view?usp=sharing",
    caseStudyUrl: "#",
  },
  
  {
    title: "Driver Connect App",
    icon: Users,
    tech: ["React Native", "Express.js", "MongoDB", "WebSockets"],
    desc: "A real-time driver-to-consumer connectivity platform with live GPS tracking, order management, and push notifications. Processed 500+ orders and maintains a 4.8/5 user rating with real-time delivery updates.",
    type: "Mobile App",
    deliveryTime: "4 weeks",
    metrics: {
      users: "200+ drivers",
      orders: "500+ processed",
      rating: "4.8/5 stars",
    },
    testimonial:
      '"Intuitive design and smooth user experience. Highly recommended!"',
    client: "Logistics Startup",
    demoUrl:
      "https://drive.google.com/file/d/15DRWES9buH5xNST5cAvejllGU4TEUE8Z/view?usp=sharing",
  },
  {
    title: "AndroAI Webinar Platform",
    icon: Video,
    tech: ["React.js", "Redux", "Firebase", "Tailwind CSS"],
    desc: "A feature-rich live webinar and online events platform for developers and creators. Supports real-time video sessions, audience Q&A, chat, and post-event replays — built and deployed for a live client in 2 weeks.",
    type: "Client Project",
    deliveryTime: "2 weeks",
    isWebsite: true,
    testimonial: '"Professional delivery and excellent post-launch support."',
    client: "AndroAI",
    demoUrl: "https://androai.io/",
    caseStudyUrl: "#",
  },
];
