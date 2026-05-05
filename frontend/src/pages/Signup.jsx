import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Mail, Lock, Briefcase, FileText, UserPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    experience: 0,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setError("");
    setLoading(true);
    try {
      await signup(form);
      navigate("/");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-mesh py-12">
      {/* Decorative Blobs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary rounded-full filter blur-[120px] opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary rounded-full filter blur-[120px] opacity-20 animate-blob px-Animation [7s_infinite_2s]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-xl px-6"
      >
        <div className="glass p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10">
          <div className="flex flex-col items-center mb-8">
            <motion.div
              initial={{ rotate: -20, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
              className="w-16 h-16 bg-gradient-to-tr from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg mb-4"
            >
              <UserPlus className="text-white" size={32} />
            </motion.div>
            <h1 className="text-4xl font-extrabold text-white text-center">Create Account</h1>
            <p className="text-text-muted text-center mt-2">Join AI CareerHub to kickstart your career journey</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <Input 
                label="Full Name" 
                name="name" 
                value={form.name} 
                onChange={onChange} 
                icon={<User size={18} />}
                placeholder="John Doe"
              />
            </div>
            
            <div className="md:col-span-1">
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                icon={<Mail size={18} />}
                placeholder="john@example.com"
              />
            </div>

            <div className="md:col-span-1">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted ml-1">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary transition-colors">
                    <Lock size={18} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    required
                    disabled={loading}
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 text-white pl-10 pr-12 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-gray-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <Input
                label="Experience (Years)"
                type="number"
                name="experience"
                value={form.experience}
                onChange={onChange}
                icon={<Briefcase size={18} />}
                placeholder="2"
              />
            </div>

            <div className="md:col-span-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-muted ml-1">Short Bio</label>
                <div className="relative group">
                  <div className="absolute top-3 left-3 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary transition-colors">
                    <FileText size={18} />
                  </div>
                  <textarea
                    rows={3}
                    name="bio"
                    value={form.bio}
                    onChange={onChange}
                    placeholder="Tell us a bit about yourself..."
                    className="w-full bg-white/5 border border-white/10 text-white pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-gray-600 resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs py-2 px-3 rounded-lg overflow-hidden mb-4"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={loading}
                className={`w-full py-4 rounded-xl text-white font-bold shadow-xl transition-all flex items-center justify-center gap-2 ${
                  loading
                    ? "opacity-70 cursor-not-allowed bg-gray-600"
                    : "bg-gradient-to-r from-primary to-secondary hover:shadow-primary/20"
                }`}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Create Account
                    <UserPlus size={18} />
                  </>
                )}
              </motion.button>
            </div>
          </form>

          <p className="mt-8 text-center text-text-muted text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-bold hover:underline underline-offset-4">
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function Input({ label, icon, ...props }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-text-muted ml-1">{label}</label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted group-focus-within:text-primary transition-colors">
          {icon}
        </div>
        <input
          {...props}
          className="w-full bg-white/5 border border-white/10 text-white pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-gray-600"
        />
      </div>
    </div>
  );
}
