import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="relative w-full h-[calc(100vh-64px)]"> {/* Header height removed */}
      
      {/* FULLSCREEN BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center brightness-90"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1600&auto=format&fit=crop')",
        }}
      ></div>

      {/* DARK LAYER (optional for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* LOGIN CARD OVER IMAGE */}
      <div className="relative z-20 w-full h-full flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md border border-white/30 shadow-2xl rounded-xl p-8">
          
          <h1 className="text-3xl font-bold text-[#0d1425] text-center">
            Sign In
          </h1>
          <p className="text-sm text-gray-600 text-center mb-6">
            Welcome back — login to continue
          </p>

          <form onSubmit={submit} className="space-y-4">
            
            {/* EMAIL */}
            <div>
              <label className="block text-xs text-gray-600 mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-xs text-gray-600 mb-2">Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border px-4 py-2.5 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* FORGOT LINK */}
            <div className="flex justify-end">
              <Link className="text-sm text-gray-300 hover:text-white" to="/forgot">
                Forgot Password?
              </Link>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-white rounded-lg font-semibold shadow-md hover:opacity-95 transition"
            >
              Sign In
            </button>
          </form>

          {/* SIGNUP LINK */}
          <p className="mt-6 text-center text-white">
            Not registered yet?{" "}
            <Link to="/signup" className="text-teal-300 font-semibold">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
