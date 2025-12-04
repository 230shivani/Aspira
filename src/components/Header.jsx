import React, { useState } from "react";
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

export default function Header({ user = null }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goLogin = () => navigate("/login");
  const goSignup = () => navigate("/signup");
  const handleLogout = () => {
    console.log("Logged out!");
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
          {/* ⭐ FIXED DASHBOARD ROUTE */}
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

          {/* Desktop Auth Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {!user ? (
              <>
                <button
                  onClick={goLogin}
                  className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white/90 text-sm font-medium transition"
                >
                  Sign In
                </button>

                <button
                  onClick={goSignup}
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-teal-400 to-blue-600 text-white text-sm font-semibold shadow hover:opacity-90 transition"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    {user.name?.[0] ?? "U"}
                  </div>
                  <div className="hidden sm:block text-left">
                    <div className="text-sm font-medium">{user.name}</div>
                    <div className="text-xs text-white/60">{user.role}</div>
                  </div>
                </div>

                <button onClick={handleLogout} className="text-white/70 hover:text-white p-2 rounded-md">
                  <LogOut size={18} />
                </button>
              </div>
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

          {/* ⭐ FIXED MOBILE DASHBOARD ROUTE */}
          <Link
            to="/dashboard"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-white/90 px-3 py-2 rounded-lg hover:bg-white/10"
          >
            <Home size={18} /> Dashboard
          </Link>

          <Link
            to="/resume"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-white/90 px-3 py-2 rounded-lg hover:bg-white/10"
          >
            <FileText size={18} /> Resume
          </Link>

          <Link
            to="/interview-prep"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-white/90 px-3 py-2 rounded-lg hover:bg-white/10"
          >
            <MessageSquare size={18} /> Interview Prep
          </Link>

          <Link
            to="/jobs"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 text-white/90 px-3 py-2 rounded-lg hover:bg-white/10"
          >
            <Briefcase size={18} /> Jobs
          </Link>

          {/* MOBILE AUTH BUTTONS */}
          <div className="w-full border-t border-white/10 pt-3 flex flex-col gap-3">
            {!user ? (
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
                className="w-full py-3 bg-red-500/60 text-white rounded-md font-semibold"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
