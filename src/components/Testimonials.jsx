import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer at Google",
    image: "/test1.jpg",
    text: "FuturePath AI helped me land my dream job at Google! The mock interviews were incredibly realistic and the resume feedback was spot-on.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager at Meta",
    image: "/test2.jpg",
    text: "The personalized career roadmap completely transformed my job search. I went from feeling lost to getting three offers in two months!",
  },
  {
    name: "Emily Rodriguez",
    role: "Data Scientist at Amazon",
    image: "/test3.jpg",
    text: "The AI-powered resume critique identified issues I never noticed. After implementing the changes, my interview callback rate tripled!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#06122b] py-24 px-6 text-center text-white overflow-hidden">
      <h2 className="text-[34px] md:text-[38px] font-extrabold mb-3">
        Loved by Professionals Worldwide
      </h2>
      <p className="text-[17px] md:text-[18px] text-[#b5c7f7] mb-16 max-w-2xl mx-auto leading-relaxed">
        Join thousands who've transformed their careers
      </p>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 28, // a bit slower for smoothness
            ease: "linear",
          }}
        >
          {testimonials.concat(testimonials).map((testimonial, i) => (
            <div
              key={i}
              className="bg-[#0D1A3A] border border-white/10 rounded-3xl p-6 flex-shrink-0 w-[360px] h-[300px] flex flex-col items-center justify-center text-center shadow-2xl"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover shadow-lg"
              />

              <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>

              <p className="text-[15px] md:text-[16px] text-[#b9c4e0] italic mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              <h3 className="text-[18px] md:text-[19px] font-semibold mb-1">
                {testimonial.name}
              </h3>
              <p className="text-blue-400 text-[15px] md:text-[16px]">
                {testimonial.role}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
