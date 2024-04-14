"use client";
// HeroSection.jsx

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16 ">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Sniper Bot",
                1000,
                "Expert Sniper",
                1000,
                "Stealth Master",
                1000,
                "Precision Specialist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mb-6 lg:text-xl">
            As a sniper bot, I excel in precision, stealth, and expert
            marksmanship. Hire me for your next mission!
          </p>
          <div>
            {/* Your Link components */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="rounded-lg overflow-hidden shadow-lg w-full lg:w-3/4">
            <Image
              src="/images/SXNpng_3x-removebg-preview.png"
              alt="Sniper Bot"
              width={800}
              height={600}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
