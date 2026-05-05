import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const heroImage = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070";

  return (
    <section className="relative w-full min-h-screen pt-32 pb-20 overflow-hidden bg-mesh">
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[140px] animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={itemVariants} className="flex">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-blue-400 text-sm font-semibold shadow-xl">
                <Sparkles size={16} />
                <span>AI-Powered Career Transformation</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
                Elevate Your <br />
                <span className="text-gradient">Professional Path</span>
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-lg">
                AI CareerHub leverages cutting-edge AI to provide personalized career coaching, 
                resume optimization, and real-world interview simulations. 
                Step into your future with confidence.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold flex items-center gap-3 transition-all"
                >
                  Join Now Free
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-white/10 overflow-hidden shadow-xl">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white shadow-xl">
                  10k+
                </div>
              </div>
              <div className="text-sm font-medium text-white/40">
                Trusted by <span className="text-white">10,000+</span> aspirants <br /> worldwide
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT - VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Visual */}
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10 bg-black min-h-[300px]">
              <img
                src={heroImage}
                alt="AI Technology Visualization"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 z-20 glass p-5 rounded-3xl border-white/10 shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <div className="text-xs text-white/50 font-bold uppercase tracking-wider">Interview Stats</div>
                  <div className="text-xl font-bold text-white">94% Score</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 z-20 glass p-6 rounded-3xl border-white/10 shadow-2xl hidden md:block"
            >
              <div className="flex flex-col gap-3">
                <div className="text-xs text-white/50 font-bold uppercase tracking-wider">AI Analysis</div>
                <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="h-full bg-blue-500"
                  ></motion.div>
                </div>
                <div className="text-white font-bold">Resume Quality: Excellent</div>
              </div>
            </motion.div>

            {/* Glowing Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
