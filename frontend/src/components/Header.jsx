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
<<<<<<< HEAD
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
=======
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in by checking localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
  }, []);

  const goLogin = () => navigate("/login");
  const goSignup = () => navigate("/signup");

  const handleLogout = () => {
<<<<<<< HEAD
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
=======
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="w-full bg-[#0d1425] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-10 h-10 rounded-xl flex items-center justify-center font-semibold">
            AS
          </div>
          <span className="text-lg font-semibold">Aspira</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="flex items-center gap-2 text-white/70 hover:text-white transition">
            <Home size={18} /> Dashboard
          </Link>

          <Link
            to="/resume"
            className="flex items-center gap-2 text-white/70 px-4 py-2 rounded-xl hover:bg-white/5 transition"
          >
            <FileText size={18} /> Resume
          </Link>

          <Link
            to="/interview-prep"
            className="flex items-center gap-2 text-white/70 hover:text-white transition"
          >
            <MessageSquare size={18} /> Interview Prep
          </Link>

          <Link
            to="/jobs"
            className="flex items-center gap-2 text-white/70 hover:text-white transition"
          >
            <Briefcase size={18} /> Jobs
          </Link>

          <Link
            to="/settings"
            className="flex items-center gap-2 text-white/70 hover:text-white transition"
          >
            <Settings size={18} />
          </Link>
        </nav>

        {/* RIGHT AREA */}
        <div className="flex items-center gap-3">

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                {/* SIGN IN */}
                <button
                  onClick={goLogin}
                  className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white/90 text-sm font-medium transition"
                >
                  Sign In
                </button>

                {/* SIGN UP */}
                <button
                  onClick={goSignup}
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-teal-400 to-blue-600 text-white text-sm font-semibold shadow hover:opacity-90 transition"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition flex items-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </button>
            )}
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden p-2 rounded-md bg-white/5 hover:bg-white/10"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
        </div>
      </div>

      {/* MOBILE MENU */}
<<<<<<< HEAD
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
=======
      <div className={`md:hidden ${open ? "block" : "hidden"} bg-[#0b111b] border-t border-white/10`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">

          <Link to="/dashboard" onClick={() => setOpen(false)} className="flex items-center gap-3 text-white/90 px-3 py-2 rounded-lg hover:bg-white/10">
            <Home size={18} /> Dashboard
          </Link>

          <Link to="/resume" onClick={() => setOpen(false)} className="flex items-center gap-3 text-white/90 px-3 py-2 rounded-lg hover:bg-white/10">
            <FileText size={18} /> Resume
          </Link>

          <Link to="/interview-prep" onClick={() => setOpen(false)} className="flex items-center gap-3 text-white/90 px-3 py-2 rounded-lg hover:bg-white/10">
            <MessageSquare size={18} /> Interview Prep
          </Link>

          <Link to="/jobs" onClick={() => setOpen(false)} className="flex items-center gap-3 text-white/90 px-3 py-2 rounded-lg hover:bg-white/10">
            <Briefcase size={18} /> Jobs
          </Link>

          {/* MOBILE AUTH */}
          <div className="w-full border-t border-white/10 pt-3 flex flex-col gap-3">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    setOpen(false);
                    goLogin();
                  }}
                  className="w-full py-3 bg-white/10 text-white rounded-md"
                >
                  Sign In
                </button>

                <button
                  onClick={() => {
                    setOpen(false);
                    goSignup();
                  }}
                  className="w-full py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-white rounded-md font-semibold"
                >
                  Create Account
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setOpen(false);
                  handleLogout();
                }}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold flex items-center justify-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
    </header>
  );
}
