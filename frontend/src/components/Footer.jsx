import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#040b1d] text-white px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-20">

        {/* LEFT BRAND SECTION */}
        <div className="flex flex-col gap-4 md:w-64">
          <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
            AS
          </div>
          <p className="text-[#b9c4e0] text-[15px]">
            Your AI-powered career coach for landing your dream job.
          </p>
          <div className="flex gap-3">
            <div className="w-9 h-9 bg-[#0b1a3b] flex items-center justify-center rounded-lg cursor-pointer text-xl">🌐</div>
            <div className="w-9 h-9 bg-[#0b1a3b] flex items-center justify-center rounded-lg cursor-pointer text-xl">🐦</div>
            <div className="w-9 h-9 bg-[#0b1a3b] flex items-center justify-center rounded-lg cursor-pointer text-xl">📸</div>
            <div className="w-9 h-9 bg-[#0b1a3b] flex items-center justify-center rounded-lg cursor-pointer text-xl">💼</div>
          </div>
        </div>

        {/* COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-left">
          <div className="flex flex-col gap-2">
            <h4 className="text-[17px] font-semibold">Product</h4>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">Features</p>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">Pricing</p>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">AI Technology</p>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">Success Stories</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[17px] font-semibold">Company</h4>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">About Us</p>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">Careers</p>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">Contact</p>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">Blog</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[17px] font-semibold">Legal</h4>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">Privacy Policy</p>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">Terms of Service</p>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">Cookie Policy</p>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">GDPR</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[17px] font-semibold">Support</h4>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">Help Center</p>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">Community</p>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">FAQ</p>
            <p className="text-[#b7c3da] hover:text-white cursor-pointer">Contact Support</p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-16 border-t border-[#1b2942] pt-6 flex flex-col md:flex-row justify-between text-[14px] text-[#b7c3da] gap-2 md:gap-0">
        <p>© 2025 Aspira. All rights reserved.</p>
        <p className="text-blue-400">📧 support@aspira.ai</p>
      </div>
    </footer>
  );
};

export default Footer;
