import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      </div>
    </div>
  );
}
