import React, { useState, useEffect } from "react";
import {
  Home,
  FileText,
  MessageSquare,
  Briefcase,
  Settings,
  LogOut,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { useAuth } from "../context/AuthContext";

import logo from "../logo.png";

export default function Header() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goLogin = () => navigate("/login");
  const goSignup = () => navigate("/signup");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinks = [
    { name: "Dashboard", path: "/", icon: <Home size={18} /> },
    { name: "Resume", path: "/resume", icon: <FileText size={18} /> },
    { name: "Cover Letter", path: "/cover-letter", icon: <FileText size={18} /> },
    { name: "Interview Prep", path: "/interview-prep", icon: <MessageSquare size={18} /> },
    { name: "Jobs", path: "/jobs", icon: <Briefcase size={18} /> },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass shadow-lg" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20"
          >
            <img src={logo} alt="AI CareerHub Logo" className="w-full h-full object-cover" />
          </motion.div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            AI CareerHub
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT AREA */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3">
            {!user ? (
              <>
                <button
                  onClick={goLogin}
                  className="px-5 py-2.5 rounded-xl text-white/80 text-sm font-medium hover:text-white hover:bg-white/10 transition-all"
                >
                  Sign In
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={goSignup}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all flex items-center gap-2"
                >
                  <Sparkles size={16} />
                  Get Started
                </motion.button>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-1.5 pr-4 rounded-2xl">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-sm font-bold shadow-inner">
                    {user.name?.[0] ?? "U"}
                  </div>
                  <div className="hidden xl:block">
                    <div className="text-sm font-semibold">{user.name}</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest">{user.role}</div>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-10 h-10 flex items-center justify-center text-white/50 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
                >
                  <LogOut size={20} />
                </button>
              </div>
            )}
          </div>

          <Link
            to="/settings"
            className="hidden lg:flex w-10 h-10 items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-xl transition-all"
          >
            <Settings size={20} />
          </Link>

          {/* MOBILE MENU ICON */}
          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden glass border-t border-white/10"
          >
            <div className="px-5 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setOpen(false)} 
                  className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all ${
                    location.pathname === link.path
                      ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                      : "text-white/70 hover:bg-white/5"
                  }`}
                >
                  <div className={`${location.pathname === link.path ? "text-blue-400" : "text-white/40"}`}>
                    {link.icon}
                  </div>
                  <span className="font-semibold">{link.name}</span>
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                {!user ? (
                  <>
                    <button
                      onClick={() => { setOpen(false); goLogin(); }}
                      className="w-full py-4 bg-white/5 text-white rounded-2xl font-semibold border border-white/10"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => { setOpen(false); goSignup(); }}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-600/20"
                    >
                      Create Account
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => { setOpen(false); handleLogout(); }}
                    className="w-full py-4 bg-red-500/10 text-red-500 border border-red-500/20 rounded-2xl font-bold"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
