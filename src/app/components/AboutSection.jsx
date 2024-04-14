"use client";
import React from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Expertise",
    id: "expertise",
    content: (
      <ul className="list-disc pl-2">
        <li>Sniper Bots Development</li>
        <li>Stealth Technologies</li>
        <li>Precision Algorithms</li>
        <li>Advanced Targeting Systems</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>100+ Successful Sniper Missions</li>
        <li>50+ Awards for Precision and Accuracy</li>
        <li>10 Years of Experience in Sniper Bot Development</li>
      </ul>
    ),
  },
  {
    title: "Services",
    id: "services",
    content: (
      <ul className="list-disc pl-2">
        <li>Custom Sniper Bot Development</li>
        <li>Stealth Training and Consultation</li>
        <li>Precision Analysis and Optimization</li>
        <li>Targeting System Integration</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = React.useState("expertise");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/SXNpng_3x-removebg-preview.png" width={500} height={500} alt="Snipex" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Snipex</h2>
          <p className="text-base lg:text-lg">
            Snipex is a leading provider of cutting-edge sniper bot technologies,
            specializing in stealth solutions, precision algorithms, and advanced
            targeting systems. Our team of experts has achieved numerous accolades
            for our expertise and successful missions in various environments.
            We offer tailored services to meet your specific needs and ensure
            optimal performance in every operation.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
