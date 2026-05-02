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
  }, []);

  const goLogin = () => navigate("/login");
  const goSignup = () => navigate("/signup");

  const handleLogout = () => {
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

        </div>
      </div>

      {/* MOBILE MENU */}
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
    </header>
  );
}
