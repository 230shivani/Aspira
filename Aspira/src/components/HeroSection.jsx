import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const headingWords = ["Unlock", "Your", "Career", "Potential", "with", "AI"];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#06122b] to-[#0c1c40] flex flex-col md:flex-row items-center px-6 md:px-16 py-12">
      
      {/* LEFT SIDE */}
      <div className="flex-1 max-w-xl text-white">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-block bg-blue-600/30 border border-blue-500 px-4 py-1 rounded-full text-sm font-medium"
        >
          AI-Powered Career Coaching
        </motion.span>

        <h1 className="mt-6 text-[44px] md:text-[52px] font-extrabold leading-tight">
          {headingWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-4 text-[#bfd4ff] text-[18px] md:text-[20px] leading-relaxed"
        >
          Get personalized career guidance, resume optimization, and interview
          preparation powered by advanced AI technology. Your dream job is
          closer than you think.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-6 flex flex-wrap gap-4"
        >
          <button className="px-8 py-4 rounded-lg bg-blue-500 text-white font-semibold shadow-md hover:opacity-90 transition">
            Get Started
          </button>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 2 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <img
          src="/ai-graph.jpg"
          alt="AI Growth Graph"
          className="w-full max-w-xl md:max-w-2xl rounded-lg shadow-2xl border-4 border-blue-500/20"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
