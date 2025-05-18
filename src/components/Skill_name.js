import { HoverEffect } from "./ui/card-hover-effect";
import { TbBrandJavascript, TbBrandMysql, TbBrandPython } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiJupyter, SiMongodb, SiScikitlearn, SiTableau, SiTensorflow } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

export function Skill_name() {
  return (
    (<div className="max-w-4xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: <TbBrandJavascript />,
    description:
      "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: <FaReact />,
    description:
      "React",
    link: "https://react.dev",
  },
  {
    title: <RiNextjsFill />,
    description:
      "Next.js",
    link: "https://nextjs.org",
  },
  {
    title: <TbBrandPython />,
    description:
      "Python",
    link: "https://python.org",
  },
  {
    title: <SiMongodb />,
    description:
      "MongoDB",
    link: "https://mongodb.com",
  },
  {
    title: <FaNodeJs />,
    description:
      "Node.js",
    link: "https://nodejs.com",
  },
  {
    title:<SiTypescript />,
    description:
      "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    title:<RiTailwindCssFill />,
    description:
      "Tailwind CSS",
    link: "https://tailwindcss.com",
  },
  {
    title:<SiFramer />,
    description:
      "Framer",
    link: "https://motion.dev",
  },
  {
    title:<SiExpress />,
    description:
      "Express",
    link: "https://expressjs.com",
  },
  {
    title: <FaGitAlt />,
    description:
      "Git",
    link: "https://git-scm.com/",
  },
  {
    title: <TbBrandMysql />,
    description:
      "MySQL",
    link: "https://www.mysql.com/",
  },
  {
    title: <SiTensorflow />,
    description:
      "TensorFlow",
    link: "https://www.tensorflow.org/",
  },
  {
    title: <SiScikitlearn />,
    description:
      "Scikit-learn",
    link: "https://scikit-learn.org/stable/",
  },
  {
    title: <  SiTableau />,
    description:
      "Tableau",
      link: "https://www.tableau.com/",
  },
  {
    title: <SiJupyter />,
    description:
      "Jupyter Notebook",
    link: "https://jupyter.org/",
  },


];
