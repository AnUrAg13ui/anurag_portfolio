"use client";

import React, { useRef } from 'react';
import Head from 'next/head';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import LiIcons from '@/components/LiIcons';
import TransitionEffect from '@/components/TransitionEffect';

const About = () => {
  const ref = useRef(null);

  // Framer Motion's useScroll for tracking scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"], // Scroll mapping to the container
  });

  // Smooth animation for the line length
  const scaleY = useSpring(scrollYProgress, { stiffness: 20, damping: 20 });

  // Transform scaleY to stop exactly at each circle
  const lineHeight = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Learn more about me, my skills, education, and experience."
        />
      </Head>
      <TransitionEffect/>
      <main className="p-6 bg-light text-dark min-h-screen pt-[8rem] dark:text-light dark:bg-dark">
        <section className="max-w-3xl mx-auto text-center mb-12 px-4">
          {/* Eye-Catching Tagline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[6rem] font-extrabold text-dark dark:text-light mb-4 leading-tight">
            Transforming Ideas into Reality
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-600 dark:text-gray-400">
            Passionate MERN stack developer | AI & ML Enthusiast | Tech Explorer
          </p>
        </section>
        <div ref={ref} className="w-[75%] mx-auto relative">
          {/* Animated Perpendicular Line */}
          <motion.div
            className="side-line absolute top-0 w-[4px] h-full bg-dark dark:bg-primary origin-top"
            style={{
              scaleY: lineHeight,
              transformOrigin: "top center",
            }}
          ></motion.div>
          <section className="max-w-2xl ml-14 mx-auto text-dark dark:text-light flex justify-center items-start gap-8 flex-col">
            {/* Biography Section */}
            <div>
              <LiIcons progress={scrollYProgress} />
              <h1 className="text-2xl font-semibold mb-2">Biography</h1>
              <p className="text-lg leading-relaxed mb-6 text-dark dark:text-light font-medium">
                Hi, I’m <strong>Anurag Kumar Goutam</strong>, a second-year <strong>Master of Computer Application 
             </strong> student. I thrive on building innovative web applications and solving challenging coding problems.
              </p>
            </div>
            {/* Skills Section */}
            <div>
              <LiIcons progress={scrollYProgress} />
              <h2 className="text-2xl font-semibold mb-2">Skills & Expertise</h2>
              <ul className="list-disc pl-6 mb-6 font-medium text-dark dark:text-light">
                <li>MERN Stack Development (MongoDB, Express, React, Node.js) with Next.js </li>
                <li>AI & ML Enthusiast</li>
                <li>Data Structures and Algorithms</li>
                <li>Responsive Design and User Interfaces</li>
                <li>System Design and Backend Optimization</li>
              </ul>
            </div>
            {/* Current Learning and Goals */}
            <div>
              <LiIcons progress={scrollYProgress} />
              <h2 className="text-2xl font-semibold mb-2 text-dark dark:text-light">Current Learning & Goals</h2>
              <p className="text-[1rem] leading-relaxed mb-6 text-dark font-medium dark:text-light">
                Currently, I’m diving deeper into advanced <strong>Machine Learning Algorithms</strong> and exploring LLMs and Neaural Networks. My goal is to
                to leverage machine learning and AI to build intelligent, data-driven systems that solve real-world problems.
              </p>
            </div>
            {/* Education Section */}
            <div>
              <LiIcons progress={scrollYProgress} />
              <h2 className="text-2xl font-semibold mb-2 text-dark dark:text-light">Education</h2>
              <ul className="list-disc pl-6 mb-6 text-dark font-medium dark:text-light">
                <li>
                  <strong>Master of Computer Application (MCA)</strong> - MES IMCC College, Pune University Pune (Maharashtra)
                  <br />
                  <span className="text-gray-600 dark:text-gray-300">2024 - Present</span>
                  <br />
                  <span className="text-gray-600 dark:text-gray-300">CGPA - 8.98 </span>
                </li>
                <li>
                  <strong>Bachelor of Science in Mathematics, Electronics and IT (BSc)</strong> - Devi Ahilya Vishwavidyalaya, Indore (Madhya Pradesh) 
                  <br />
                  <span className="text-gray-600 dark:text-gray-300">2021 -2024 </span>
                  <br />
                  <span className="text-gray-600 dark:text-gray-300">CGPA - 8.0</span>
                </li>
                <li>
                  <strong>Senior Secondary (10+2)</strong> - DAV ACC Public School,Kymore (Madhya Pradesh)
                  <br />
                  <span className="text-gray-600 dark:text-gray-300">Completed in 2021</span>
                  <br />
                  <span className="text-gray-600 dark:text-gray-300">Percentage - 95.00</span>
                </li>
              </ul>
            </div>
            {/* Unique Selling Point */}
            <div className=''>
              <LiIcons progress={scrollYProgress} />
              <h2 className="text-2xl font-semibold mb-2 dark:text-light">What Sets Me Apart</h2>
              <p className="text-lg leading-relaxed mb-6 text-dark font-medium dark:text-light">
                What sets me apart is my drive to build intelligent, impactful solutions that go beyond just functionality. 
                From AI-powered finance tools to fraud detection systems, I blend full-stack development with machine learning to create meaningful, real-world applications. 
                My focus is on <strong>, scalability, and delivering smooth, data-driven user experiences.</strong>
              </p>
            </div>
            {/* Experience and Projects */}
            <div>
              <LiIcons progress={scrollYProgress} />
              <h2 className="text-2xl font-semibold text-dark mb-2 dark:text-light">Experience</h2>
              <li>
                  <strong>Shakham Inc.</strong> - Full Stack Developer Intern with ML integration
                  <br />
                  <span className="text-gray-600 dark:text-gray-300">April, 2025 - Present</span>
                  <br />
                  <br />
      
                  <span className="text-gray-600 dark:text-gray-300 ">At Shakham Inc, I contributed to live projects using the MERN stack, building <strong>full-stack web apps with real client requirements</strong>. I also worked on integrating machine learning models into the backend to power smart features and data-driven functionality. 
                    This role sharpened my skills in both development and AI, while giving me hands-on experience in delivering scalable, production-ready solutions.</span>
                </li>
                <br />
                <li>
                  <strong>ANCHOR SoftwareDeveloper andSolutions Pvt.Ltd.</strong> - Programmer Intern
                  <br />
                  <span className="text-gray-600 dark:text-gray-300">Feb, 2024 –May, 2024</span>
                  <br />
                  <br />
                  <span className="text-gray-600 dark:text-gray-300">As aProgrammeratAnchorSoftware,Iplayed apivotalrole in developing embeddedsystemsand software/hardware
solutions.</span>
                </li>
            </div>
            {/* Hobbies and Personality */}
            <div>
              <LiIcons progress={scrollYProgress} />
              <h2 className="text-2xl font-semibold mb-2 dark:text-light">Hobbies & Interests</h2>
              <p className="text-lg leading-relaxed mb-6 text-dark font-medium dark-text-light dark:text-light">
                I enjoy exploring how things work — from gadgets to algorithms. I’m passionate about problem-solving, love diving into Football and Table Tennis, and often spend time experimenting with new AI tools.
              </p>
            </div>
            {/* Call to Action */}
            <div>
              <LiIcons progress={scrollYProgress} />
              <h2 className="text-2xl font-semibold mb-2 text-dark dark:text-light">Let’s Connect</h2>
              <p className="text-lg leading-relaxed text-dark font-medium dark:text-light">
                Feel free to explore my projects and get in touch. I’m always open to collaborations, learning
                opportunities, and exciting challenges!
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
