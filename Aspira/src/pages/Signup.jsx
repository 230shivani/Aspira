// src/pages/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { registerUser, loginUser } from "../services/userService";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [experience, setExperience] = useState(0);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Register
      await registerUser({ name, email, password, bio, experience });

      // Auto-login after successful signup (registerUser doesn't log in)
      await loginUser(email, password);

      // Redirect to home/dashboard
      navigate("/");
    } catch (err) {
      let msg = "Signup failed";
      if (!err) msg = "Signup failed";
      else if (typeof err === "string") msg = err;
      else if (err.message) msg = err.message;
      else if (err.error) msg = err.error;
      setError(msg);
    } finally {
      setLoading(false);
    }
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Card */}
      <div className="relative z-20 w-full h-full flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md border border-white/30 shadow-2xl rounded-xl p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0d1425] text-center">Create account</h1>
          <p className="text-sm text-gray-600 text-center mb-6">Join us — create your free account</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs text-gray-600 mb-2">Full name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
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
                disabled={loading}
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
                  disabled={loading}
                  className="w-full border px-4 py-2.5 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  aria-label={show ? "Hide password" : "Show password"}
                  tabIndex={-1}
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-xs text-gray-600 mb-2">Short bio</label>
              <textarea
                required
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                disabled={loading}
                className="w-full border px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="A short intro about yourself"
                rows={3}
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-xs text-gray-600 mb-2">Years of experience</label>
              <input
                type="number"
                min={0}
                value={experience}
                onChange={(e) => setExperience(Number(e.target.value))}
                disabled={loading}
                className="w-full border px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="0"
              />
            </div>

            {/* Error */}
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-white rounded-lg font-semibold shadow-md transition ${
                loading ? "opacity-70 cursor-not-allowed bg-gradient-to-r from-teal-300 to-blue-400" : "bg-gradient-to-r from-teal-400 to-blue-600 hover:opacity-95"
              }`}
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-300 font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
