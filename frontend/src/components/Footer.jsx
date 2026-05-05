import React from "react";
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
                AI CareerHub
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
                <li className="flex items-center gap-3 text-white/50 text-sm"><Mail size={16} /> hello@aicareerhub.ai</li>
                <li className="flex items-center gap-3 text-white/50 text-sm"><MapPin size={16} /> Silicon Valley, CA</li>
                <li className="flex items-center gap-3 text-white/50 text-sm"><Phone size={16} /> +1 (555) 000-0000</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs">
            © 2026 AI CareerHub. Made with ❤️ for the future of work.
          </p>
          <div className="flex gap-8">
            <Link className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Background Orbs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
