// src/pages/Resume.jsx
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { getCurrentUser, updateUser, uploadResume } from "../services/userService";

export default function Resume() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [message, setMessage] = useState("");
  const [critiqueMessage, setCritiqueMessage] = useState("");
  const [file, setFile] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    professionalSummary: "",
    skills: "",
    experienceYears: "",
    education: "",
    certifications: "",
    projects: "",
    languages: "",
    linkedin: "",
    portfolio: "",
  });

  // load user from localStorage or API on mount
  useEffect(() => {
    const local = localStorage.getItem("user");
    if (local) {
      try {
        const u = JSON.parse(local);
        setIsLoggedIn(true);
        // Map from backend user fields if they exist
        setFormData((prev) => ({
          ...prev,
          fullName: u.name || prev.fullName,
          email: u.email || prev.email,
          // you can map more fields as your API returns them
        }));
      } catch {
        // fallback: try fetch
        (async () => {
          try {
            const resp = await getCurrentUser();
            if (resp) {
              setIsLoggedIn(true);
              setFormData((prev) => ({
                ...prev,
                fullName: resp.user?.name || prev.fullName,
                email: resp.user?.email || prev.email,
              }));
            }
          } catch (err) {
            // ignore
          }
        })();
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoadingSave(true);

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user?._id) {
        setMessage("You must be logged in to save.");
        setLoadingSave(false);
        return;
      }

      // Prepare updates - map front-end fields to backend fields if needed
      const updates = {
        name: formData.fullName,
        // keep email as-is (or send if your backend allows)
        // You can add other backend fields mapping here
        bio: formData.professionalSummary || " ",
        experience: Number(formData.experienceYears) || 0,
      };

      await updateUser(user._id, updates);
      // Update local user cache if name changed
      const updatedUser = { ...user, name: updates.name, bio: updates.bio, experience: updates.experience };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setMessage("Profile saved successfully.");
    } catch (err) {
      setMessage(err?.message || "Save failed");
    } finally {
      setLoadingSave(false);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files?.[0] || null);
    setMessage("");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!file) {
      setMessage("Please choose a file to upload.");
      return;
    }

    setLoadingUpload(true);
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user?._id) {
        setMessage("You must be logged in to upload.");
        setLoadingUpload(false);
        return;
      }

      await uploadResume(user._id, file);
      setMessage("Resume uploaded successfully!");
      setFile(null);
    } catch (err) {
      setMessage(err?.message || "Upload failed");
    } finally {
      setLoadingUpload(false);
    }
  };

  // Placeholder critique generator (replace with backend call later)
  const handleGetCritique = async () => {
    setCritiqueMessage("");
    setMessage("");
    setLoadingSave(true);
    try {
      // Ideally call your backend endpoint to generate critique here.
      // For now create a simple deterministic critique from form content.
      const summary = formData.professionalSummary || "";
      const skills = formData.skills || "";
      const issues = [];

      if (summary.length < 120) issues.push("Expand professional summary to 2-3 short paragraphs demonstrating impact.");
      if (!skills.toLowerCase().includes("docker") && !skills.toLowerCase().includes("kubernetes")) issues.push("Consider adding relevant infra keywords like Docker, Kubernetes.");
      if (!formData.projects) issues.push("Add 1-2 concrete projects with metrics (what you built and the impact).");

      const top3 = issues.length ? issues.slice(0, 3) : ["Great profile — consider adding metrics to projects."];
      setCritiqueMessage(`Top areas: ${top3.join(" • ")}`);
    } catch (err) {
      setCritiqueMessage("Could not generate critique right now.");
    } finally {
      setLoadingSave(false);
    }
  };

  return (
    <div className="bg-[#06122b] text-white min-h-screen">
      <Header isLoggedIn={isLoggedIn} />

      <div className="py-16 px-6 md:px-20">
        <h1 className="text-[34px] md:text-[38px] font-extrabold mb-6 text-center">Resume & Profile</h1>

        <p className="text-[17px] md:text-[18px] text-[#b5c7f7] text-center max-w-2xl mx-auto mb-12">
          Manage your professional profile and get AI-powered resume feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#0b1a3a] p-6 rounded-2xl shadow-lg border border-[#1a2b4f]">
            <h2 className="text-xl font-bold mb-4">Profile Details</h2>

            <form onSubmit={handleSave} className="flex flex-col gap-4">
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="bg-[#0f1f45] p-3 rounded-lg w-full"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-[#0f1f45] p-3 rounded-lg w-full"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-[#0f1f45] p-3 rounded-lg w-full"
              />
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="bg-[#0f1f45] p-3 rounded-lg w-full"
              />

              <textarea
                name="professionalSummary"
                value={formData.professionalSummary}
                onChange={handleChange}
                placeholder="Professional Summary"
                className="bg-[#0f1f45] p-3 rounded-lg h-28 w-full"
              />
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Skills (React, Node.js, AWS...)"
                className="bg-[#0f1f45] p-3 rounded-lg h-20 w-full"
              />
              <input
                name="experienceYears"
                value={formData.experienceYears}
                onChange={handleChange}
                placeholder="Years of Experience"
                className="bg-[#0f1f45] p-3 rounded-lg w-full"
              />
              <textarea
                name="education"
                value={formData.education}
                onChange={handleChange}
                placeholder="Education"
                className="bg-[#0f1f45] p-3 rounded-lg h-24 w-full"
              />

              <textarea
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                placeholder="Certifications"
                className="bg-[#0f1f45] p-3 rounded-lg h-20 w-full"
              />
              <textarea
                name="projects"
                value={formData.projects}
                onChange={handleChange}
                placeholder="Projects"
                className="bg-[#0f1f45] p-3 rounded-lg h-24 w-full"
              />
              <input
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                placeholder="Languages"
                className="bg-[#0f1f45] p-3 rounded-lg w-full"
              />
              <input
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="LinkedIn URL"
                className="bg-[#0f1f45] p-3 rounded-lg w-full"
              />
              <input
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="Portfolio / GitHub URL"
                className="bg-[#0f1f45] p-3 rounded-lg w-full"
              />

              <div className="flex gap-3 mt-2">
                <button
                  type="submit"
                  disabled={loadingSave}
                  className="flex-1 mt-4 bg-gradient-to-r from-[#3a8cff] to-[#8b54ff] py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all"
                >
                  {loadingSave ? "Saving..." : "Save Changes"}
                </button>

                <label className="flex-1">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <button
                    onClick={(e) => {
                      // trigger file input click
                      e.preventDefault();
                      document.querySelector('input[type="file"]').click();
                    }}
                    className="w-full mt-4 bg-[#1f4bb6] py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all"
                  >
                    Choose Resume
                  </button>
                </label>
              </div>

              {file && (
                <div className="flex items-center justify-between mt-2 gap-3">
                  <div className="text-sm text-[#cfd9f7]">{file.name}</div>
                  <button
                    onClick={handleUpload}
                    disabled={loadingUpload}
                    className="bg-[#16a34a] px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    {loadingUpload ? "Uploading..." : "Upload Resume"}
                  </button>
                </div>
              )}

              {message && <p className="text-sm text-yellow-300 mt-3">{message}</p>}
            </form>
          </div>

          <div className="bg-[#0b1a3a] p-6 rounded-2xl shadow-lg border border-[#1a2b4f]">
            <h2 className="text-xl font-bold mb-4">AI Resume Critique</h2>

            <button
              onClick={handleGetCritique}
              className="mb-6 bg-[#3a8cff] px-5 py-2 rounded-full font-semibold hover:bg-[#66a3ff] transition-all"
            >
              {loadingSave ? "Generating..." : "Get New Critique"}
            </button>

            <div className="bg-[#13254d] rounded-xl p-5 border border-[#203763]">
              <h3 className="text-lg font-semibold mb-4 text-yellow-300">Top 3 Areas for Improvement</h3>
              {/* show critiqueMessage or default items */}
              {critiqueMessage ? (
                <p className="text-[#cfd9f7]">{critiqueMessage}</p>
              ) : (
                <ol className="list-decimal ml-5 text-[#cfd9f7] space-y-2">
                  <li>Add more leadership and collaboration examples.</li>
                  <li>Include missing keywords (Docker, Kubernetes, TS).</li>
                  <li>Expand summary to highlight value proposition.</li>
                </ol>
              )}
            </div>

            <div className="mt-8 space-y-6">
              {["Bullet Point Optimization", "ATS Keywords", "Format & Structure", "Readability Score", "Technical Depth"].map((title, i) => (
                <div key={i} className="bg-[#0f1f45] p-4 rounded-xl border border-[#1e325d]">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">{title}</h4>
                    <span className="text-green-400 font-bold">90/100</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
