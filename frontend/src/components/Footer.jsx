import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github, 
  Mail, 
  MapPin, 
  Phone 
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Twitter size={18} />, path: "#" },
    { icon: <Linkedin size={18} />, path: "#" },
    { icon: <Instagram size={18} />, path: "#" },
    { icon: <Github size={18} />, path: "#" },
  ];

  return (
    <footer className="relative bg-[#020617] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-6 col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
                AS
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                AI CarrerHub
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of professionals with AI-driven career guidance 
              and interview preparation. Your journey to excellence starts here.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.path} 
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-blue-600 transition-all duration-300 border border-white/5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Platform</h4>
              <ul className="flex flex-col gap-4">
                <li><Link className="text-white/50 hover:text-blue-400 text-sm transition-colors">AI Resume Builder</Link></li>
                <li><Link className="text-white/50 hover:text-blue-400 text-sm transition-colors">Mock Interviews</Link></li>
                <li><Link className="text-white/50 hover:text-blue-400 text-sm transition-colors">Job Matching</Link></li>
                <li><Link className="text-white/50 hover:text-blue-400 text-sm transition-colors">Career Roadmap</Link></li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Company</h4>
              <ul className="flex flex-col gap-4">
                <li><Link className="text-white/50 hover:text-blue-400 text-sm transition-colors">About Us</Link></li>
                <li><Link className="text-white/50 hover:text-blue-400 text-sm transition-colors">Wall of Fame</Link></li>
                <li><Link className="text-white/50 hover:text-blue-400 text-sm transition-colors">Our Blog</Link></li>
                <li><Link className="text-white/50 hover:text-blue-400 text-sm transition-colors">Contact Support</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Contact Info</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-white/50 text-sm"><Mail size={16} /> hello@aicarrerhub.ai</li>
                <li className="flex items-center gap-3 text-white/50 text-sm"><MapPin size={16} /> Silicon Valley, CA</li>
                <li className="flex items-center gap-3 text-white/50 text-sm"><Phone size={16} /> +1 (555) 000-0000</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs">
            © 2026 AI CarrerHub. Made with ❤️ for the future of work.
          </p>
          <div className="flex gap-8">
            <Link className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</Link>
=======

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
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Background Orbs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
=======
      {/* BOTTOM */}
      <div className="mt-16 border-t border-[#1b2942] pt-6 flex flex-col md:flex-row justify-between text-[14px] text-[#b7c3da] gap-2 md:gap-0">
        <p>© 2025 Aspira. All rights reserved.</p>
        <p className="text-blue-400">📧 support@aspira.ai</p>
      </div>
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
    </footer>
  );
};

export default Footer;
<<<<<<< HEAD

=======
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
