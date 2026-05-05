import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
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
            <p className="text-text-muted text-center mt-2">Join AI CarrerHub to kickstart your career journey</p>
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
=======
import { Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // replace with real signup logic (API call)
    console.log({ name, email, password });
    navigate("/login"); // after signup, go to login
  };

  return (
    <div className="relative w-full h-[calc(100vh-64px)]">
      {/* Fullscreen background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center brightness-90"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1600&auto=format&fit=crop')",
        }}
      />

      {/* dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Card on top of image */}
      <div className="relative z-20 w-full h-full flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md border border-white/30 shadow-2xl rounded-xl p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0d1425] text-center">Create account</h1>
          <p className="text-sm text-gray-600 text-center mb-6">
            Join us — create your free account
          </p>

          <form onSubmit={submit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs text-gray-600 mb-2">Full name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs text-gray-600 mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs text-gray-600 mb-2">Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border px-4 py-2.5 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  aria-label={show ? "Hide password" : "Show password"}
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-white rounded-lg font-semibold shadow-md hover:opacity-95 transition mt-1"
            >
              Create account
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-300 font-semibold">
              Sign in
            </Link>
          </p>
        </div>
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
      </div>
    </div>
  );
}
