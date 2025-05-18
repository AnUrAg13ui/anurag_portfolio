import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import profilepic from "../../public/images/profile/anurag.jpg";
import MultipleAnimatedText from '@/components/MultipleAnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import ReachOut from '@/components/ReachOut';
import { FlipWords } from '@/components/ui/flip-words';
import { ProgrammingSkillsIcons } from '@/components/ProgrammingSkillsIcon';
import TransitionEffect from '@/components/TransitionEffect';
import { motion } from "framer-motion";


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const words = ["AI & ML Enthusiast", "Data Analyst", "MERN Stack Developer"];
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Portfolio of Anurag Kumar Goutam - Mern Developer & AI ML Enthusiast" />
      </Head>
      <TransitionEffect/>
      <main className="w-full min-h-screen text-dark dark:bg-dark dark:text-white pt-[6rem] md:pt-[8rem]">
        
        <Layout className="pt-0 dark:bg-dark dark:text-white">
          <div className="flex flex-col md:flex-row items-center justify-around gap-10 md:gap-0 px-6 md:px-14 w-full">
            
            {/* Profile Picture Section */}
        {/* Profile Picture Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group hover:scale-105 hover:rotate-1 transition-transform duration-300 ease-in-out"
          >
            <Image
              src={profilepic}
              alt="Anurag Kumar Goutam"
              className="rounded-full shadow-xl border-4 border-light dark:border-white group-hover:shadow-2xl"
              priority
              width={280}
              height={280}
            />
            <div className="absolute inset-0 rounded-full ring-2 ring-offset-2 ring-dark dark:ring-white animate-pulse group-hover:animate-none pointer-events-none" />
          </motion.div>
        </div>






            {/* Introduction Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center self-center text-center md:text-left">
              <p className="text-lg md:text-xl">Hi, I'm</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-wide">Anurag Kumar Goutam</h1>
              <div className="text-4xl mx-auto font-normal text-dark pt-6 -ml-[0.6rem] pb-4">
                <FlipWords words={words} />
              </div>
              <p className="text-sm md:text-base text-dark dark:bg-dark dark:text-white font-medium mb-4">
                I'm a full-stack developer with a passion for building intelligent, real-world solutions. With hands-on experience in the MERN stack and Machine Learning, I create smart web apps that merge functionality with data-driven intelligence.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-5">
                <Link
                  href="/resume_anurag.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark dark:bg-light dark:text-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light dark:hover:bg-dark dark:hover:text-light hover:text-dark border-2 border-solid border-transparent dark:hover:border-light hover:border-dark"
                  // download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:anuraggoutam133@gmail.com"
                  target={"_blank"}
                  className="text-lg font-medium capitalize text-dark underline dark:text-white dark:bg-dark"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <ReachOut />
      </main>
    </>
  );
}
