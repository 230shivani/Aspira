// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "../services/userService";

export default function Login() {
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
      await loginUser(email, password);
      // loginUser stores token + user in localStorage (per your service)
      navigate("/"); // redirect to home or dashboard
    } catch (err) {
      // parse error payload (service throws error.response?.data || error)
      let msg = "Login failed";
      if (!err) msg = "Login failed";
      else if (typeof err === "string") msg = err;
      else if (err.message) msg = err.message;
      else if (err.error) msg = err.error;
      else if (err?.msg) msg = err.msg;
      else if (err?.message === undefined && err?.status === 401) msg = "Invalid credentials";

      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-[calc(100vh-64px)]">
      {/* FULLSCREEN BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center brightness-90"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1600&auto=format&fit=crop')",
        }}
      ></div>

      {/* DARK LAYER */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* LOGIN CARD */}
      <div className="relative z-20 w-full h-full flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-md border border-white/30 shadow-2xl rounded-xl p-8">
          <h1 className="text-3xl font-bold text-[#0d1425] text-center">Sign In</h1>
          <p className="text-sm text-gray-600 text-center mb-6">Welcome back — login to continue</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* EMAIL */}
            <div>
              <label className="block text-xs text-gray-600 mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
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
                  disabled={loading}
                  className="w-full border px-4 py-2.5 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  tabIndex={-1}
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* ERROR */}
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}

            {/* FORGOT LINK */}
            <div className="flex justify-end">
              <Link className="text-sm text-gray-300 hover:text-white" to="/forgot">
                Forgot Password?
              </Link>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-white rounded-lg font-semibold shadow-md transition ${
                loading ? "opacity-70 cursor-not-allowed bg-gradient-to-r from-teal-300 to-blue-400" : "bg-gradient-to-r from-teal-400 to-blue-600 hover:opacity-95"
              }`}
            >
              {loading ? "Logging in..." : "Sign In"}
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
