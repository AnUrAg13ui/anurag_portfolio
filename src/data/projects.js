// data/projects.js

import { SiMongodb, SiExpress, SiReact, SiNextdotjs, SiTailwindcss, SiNeo4J, SiPython, SiDjango, Si365Datascience } from "react-icons/si";

export const projects = [
  {
    name: "Fintrack",
    videoUrl: "/videos/fintrack.mp4",
    description:
      "FinTrack is a smart financial tracking platform with multi-account support, AI receipt scanning, recurring transactions, and interactive dashboards.",
    githubLink: "https://github.com/AnUrAg13ui/Fintrack.git",
    liveLink: "https://carrer-craft-ai.vercel.app/",
    technologies: [
      { name: "React", icon: <SiReact className="w-6 h-6 text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-blue-500" /> },
      { name: "Shadcn ui", icon: <SiExpress className="w-6 h-6 text-gray-800" /> },

    ],
  },
  {
    name: "Fraud Buster",
    videoUrl: "/videos/fraudBuster.mp4",
    description:
      "Fraud Buster is an intelligent system that detects and prevents fraudulent Insurance  using machine learning and Python ML related Libraries.",
    githubLink: "https://github.com/AnUrAg13ui/fraudbuster.git",
    technologies: [
    
      { name: "Python", icon: <SiPython className="w-6 h-6 text-gray-800" /> },
      { name: "Django", icon: <SiDjango className="w-6 h-6 text-blue-500" /> },
      { name: "logistic Regresstion", icon: <Si365Datascience className="w-6 h-6 text-black" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-blue-500" /> },
    ],
  },
];
