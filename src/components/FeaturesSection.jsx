import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaLaptopCode,
  FaMapMarkedAlt,
  FaBriefcase,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot />,
    title: "AI-Powered Resume Critique",
    description:
      "Get instant, detailed feedback on your resume with actionable suggestions to make it stand out to recruiters.",
    color: "bg-blue-500",
  },
  {
    icon: <FaLaptopCode />,
    title: "Mock Interviews",
    description:
      "Practice with AI-driven mock interviews tailored to your industry and get real-time feedback.",
    color: "bg-purple-500",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Personalized Career Roadmaps",
    description:
      "Receive customized career paths and actionable steps based on your goals, skills, and market trends.",
    color: "bg-orange-500",
  },
  {
    icon: <FaBriefcase />,
    title: "Job Match Intelligence",
    description:
      "Our AI analyzes thousands of job postings to find the perfect matches for your unique profile and aspirations.",
    color: "bg-green-500",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-[#08142D] py-20 px-6 md:px-12 text-center text-white">
      {/* Heading */}
      <motion.h2
        className="text-[34px] md:text-[38px] font-extrabold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        Powerful Features to Accelerate Your Career
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-[17px] md:text-[18px] text-[#c3d2ff] max-w-2xl mx-auto mb-14 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Everything you need to stand out in today's competitive job market
      </motion.p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-10 max-w-7xl mx-auto justify-items-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card bg-[#0D1A3A] border border-[rgba(255,255,255,0.1)]
              rounded-xl p-7 text-left shadow-lg w-full
              transform transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:brightness-110"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Icon */}
            <div
              className={`min-h-[60px] w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-white text-2xl sm:text-3xl mb-5 ${feature.color}`}
            >
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-[19px] sm:text-[21px] font-semibold mb-2 leading-snug">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] text-[#b9c4e0] leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
