// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      let msg = "Login failed";
      if (typeof err === "string") msg = err;
      else if (err.message) msg = err.message;
      else if (err.response?.data?.message) msg = err.response.data.message;
      else if (err.error) msg = err.error;
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-mesh">
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full filter blur-[120px] opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full filter blur-[120px] opacity-20 animate-blob px-Animation [7s_infinite_2s]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md px-6"
      >
        <div className="glass p-8 rounded-3xl shadow-2xl border border-white/10">
          <div className="flex flex-col items-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
              className="w-16 h-16 bg-gradient-to-tr from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg mb-4"
            >
              <LogIn className="text-white" size={32} />
            </motion.div>
            <h1 className="text-4xl font-extrabold text-white text-center">Welcome Back</h1>
            <p className="text-text-muted text-center mt-2">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* EMAIL */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-muted ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary transition-colors">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="w-full bg-white/5 border border-white/10 text-white pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-text-muted">Password</label>
                <Link to="/forgot" className="text-xs text-primary hover:text-primary/80 transition-colors">
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={show ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  className="w-full bg-white/5 border border-white/10 text-white pl-10 pr-12 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-gray-600"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-white transition-colors"
                  tabIndex={-1}
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* ERROR */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs py-2 px-3 rounded-lg overflow-hidden"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* SUBMIT */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 text-white rounded-xl font-bold shadow-xl transition-all flex items-center justify-center gap-2 ${
                loading ? "opacity-70 cursor-not-allowed bg-gray-600" : "bg-gradient-to-r from-primary to-secondary hover:shadow-primary/20"
              }`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Sign In
                  <LogIn size={18} />
                </>
              )}
            </motion.button>
          </form>

          {/* SIGNUP LINK */}
          <p className="mt-8 text-center text-text-muted text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-secondary font-bold hover:underline underline-offset-4">
              Create Account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
