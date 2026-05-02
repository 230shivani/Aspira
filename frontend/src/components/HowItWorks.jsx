import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Build Your Profile",
    description:
      "Upload your resume and tell us about your career goals and aspirations.",
  },
  {
    number: "02",
    title: "Get AI Insights",
    description:
      "Receive personalized recommendations, interview prep, and resume optimization.",
  },
  {
    number: "03",
    title: "Land Your Dream Job",
    description:
      "Apply with confidence using AI-generated cover letters and interview strategies.",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-[#06122b] py-24 px-6 text-center text-white">
      {/* Heading */}
      <h2 className="text-[34px] md:text-[38px] font-extrabold mb-3">
        How It Works
      </h2>
      <p className="text-[17px] md:text-[18px] text-[#b5c7f7] mb-16 max-w-2xl mx-auto leading-relaxed">
        Get started in three simple steps
      </p>

      {/* Steps Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 mt-6 relative">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            {/* Step */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              className="flex flex-col items-center max-w-xs text-center relative z-10"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#3a8cff] to-[#8b54ff] flex items-center justify-center text-3xl md:text-4xl font-bold mb-5 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-[19px] md:text-[21px] font-semibold mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-[15px] md:text-[16px] text-[#b9c4e0] leading-relaxed">
                {step.description}
              </p>
            </motion.div>

            {/* Line between steps */}
            {idx < steps.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.3 + 0.3 }}
                className="hidden md:block flex-1 h-1 bg-gradient-to-r from-[#4f7cff] to-[#9b57ff] z-0"
              />
            )}
          </React.Fragment>
        ))}

        {/* Mobile lines */}
        <div className="md:hidden absolute left-1/2 top-20 flex flex-col items-center gap-12 z-0">
          <div className="w-[2px] h-12 bg-gradient-to-b from-[#4f7cff] to-[#9b57ff]"></div>
          <div className="w-[2px] h-12 bg-gradient-to-b from-[#4f7cff] to-[#9b57ff]"></div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
