import React from "react";

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
  );
};

export default CTASection;
