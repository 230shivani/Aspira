import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { registerUser, loginUser } from "../services/userService";

export default function Signup() {
  const navigate = useNavigate();

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
      await registerUser(form);
      await loginUser(form.email, form.password);
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
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
      {/* Image Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1600&auto=format&fit=crop')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-sm bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl px-6 py-5">
        <h1 className="text-xl font-semibold text-center text-white">
          Create account
        </h1>
        <p className="text-xs text-gray-400 text-center mb-4">
          Join Aspira for free
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input label="Name" name="name" value={form.name} onChange={onChange} />
          <Input
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
          />

          {/* Password */}
          <div>
            <label className="block text-[11px] text-gray-400 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={onChange}
                required
                disabled={loading}
                className="w-full bg-[#020617] border border-white/10 text-white px-3 py-2 rounded-md text-sm pr-9 focus:ring-1 focus:ring-blue-500 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-[11px] text-gray-400 mb-1">
              Bio
            </label>
            <textarea
              rows={2}
              name="bio"
              value={form.bio}
              onChange={onChange}
              className="w-full bg-[#020617] border border-white/10 text-white px-3 py-2 rounded-md text-sm focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>

          <Input
            label="Experience (yrs)"
            type="number"
            name="experience"
            value={form.experience}
            onChange={onChange}
          />

          {error && (
            <p className="text-xs text-red-400 bg-red-500/10 px-2 py-1 rounded">
              {error}
            </p>
          )}

          <button
            disabled={loading}
            className={`w-full py-2 rounded-md text-sm font-semibold transition ${
              loading
                ? "bg-blue-500/40 cursor-not-allowed"
                : "bg-gradient-to-r from-teal-400 to-blue-600 hover:opacity-90"
            }`}
          >
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-[11px] text-gray-400 mb-1">{label}</label>
      <input
        {...props}
        className="w-full bg-[#020617] border border-white/10 text-white px-3 py-2 rounded-md text-sm focus:ring-1 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}
