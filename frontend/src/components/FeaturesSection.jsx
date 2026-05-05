import React from "react";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { 
  Zap, 
  Target, 
  Rocket, 
  Users, 
  BarChart3, 
  ShieldCheck,
  Cpu,
  Globe
} from "lucide-react";

const features = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Resume Critique",
    description: "Instant feedback powered by LLMs to optimize your resume for ATS and human recruiters.",
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/10"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Mock Interviews",
    description: "Realistic voice-enabled AI interviews that simulate top-tier tech and business scenarios.",
    color: "from-indigo-500 to-purple-600",
    shadow: "shadow-indigo-500/10"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Career Roadmaps",
    description: "Step-by-step personalized learning paths to fill your skill gaps and reach your goals.",
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/10"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Job Matching",
    description: "Intelligent job discovery that matches your profile with high-growth opportunities.",
    color: "from-orange-500 to-red-600",
    shadow: "shadow-orange-500/10"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Skill Analysis",
    description: "Data-driven insights into your strengths and areas for improvement.",
    color: "from-cyan-500 to-blue-600",
    shadow: "shadow-cyan-500/10"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Network Coaching",
    description: "AI-generated strategies for effective LinkedIn outreach and networking.",
    color: "from-violet-500 to-fuchsia-600",
    shadow: "shadow-violet-500/10"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Privacy First",
    description: "Your data is encrypted and used only to enhance your personalized experience.",
    color: "from-gray-700 to-gray-900",
    shadow: "shadow-gray-700/10"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Reach",
    description: "Access career insights and job market trends from across the globe.",
    color: "from-pink-500 to-rose-600",
    shadow: "shadow-pink-500/10"
  }
=======
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
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
];

const FeaturesSection = () => {
  return (
<<<<<<< HEAD
    <section className="py-24 relative bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-blue-400 text-sm font-bold mb-6"
          >
            <Zap size={16} />
            <span>The AI CarrerHub Advantage</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Supercharge Your <span className="text-gradient">Career Engine</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/50 leading-relaxed"
          >
            We provide the most comprehensive AI suite for modern job seekers. 
            Everything you need to go from application to offer.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-3xl glass-morphism border-white/5 hover:border-white/20 transition-all duration-500 ${feature.shadow}`}
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Circle */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
=======
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
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
  );
};

export default FeaturesSection;
<<<<<<< HEAD

=======
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
