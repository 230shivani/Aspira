import React from "react";
<<<<<<< HEAD
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-12 md:p-20 text-center shadow-2xl shadow-blue-500/20"
        >
          {/* Internal decorative shapes */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Free for early adopters</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready to Transform <br /> Your <span className="text-white/80">Career Path?</span>
            </h2>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Join 10,000+ professionals using AI CarrerHub to optimize their resumes, 
              ace interviews, and land high-paying roles at top companies.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-4">
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#4f46e5" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold shadow-xl transition-all flex items-center gap-3"
                >
                  Sign Up Now - It's Free
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              
              <button className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all border border-white/10 backdrop-blur-sm">
                View Success Stories
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
=======

const CTASection = () => {
  return (
    <div className="bg-[#06122b] flex justify-center py-[80px] px-[20px] sm:py-16 sm:px-5">
      <div className="bg-gradient-to-br from-[#009dff] to-[#8f4dff] 
                      w-[85%] max-w-[1200px] 
                      p-[70px] px-[40px] sm:p-16 sm:px-6 
                      rounded-[30px] text-center text-white 
                      shadow-[0_0_25px_rgba(0,0,0,0.2)]">

    
        {/* Title */}
        <h2 className="text-[32px] sm:text-[36px] md:text-[38px] font-bold mb-[10px]">
          Ready to Transform Your Career?
        </h2>

        {/* Subtitle */}
        <p className="text-[17px] sm:text-[19px] md:text-[20px] text-[#eaf1ff] mb-[30px] leading-relaxed">
          Join thousands of professionals who are already using AI to land their dream jobs.
        </p>

        {/* Button */}
        <button className="bg-white text-[#0a1b3b] 
                           px-[28px] py-[14px] 
                           text-[17px] sm:text-[18px] md:text-[19px] font-semibold 
                           rounded-[12px] shadow-[0_3px_12px_rgba(0,0,0,0.2)]
                           transition hover:bg-[#f2f2f2]
                           sm:px-[32px] sm:py-[16px] md:px-[36px] md:py-[18px]">
          Sign Up Now - It's Free →
        </button>

      </div>
    </div>
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
  );
};

export default CTASection;
<<<<<<< HEAD

=======
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
