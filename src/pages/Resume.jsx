import React, { useState } from "react";
import Header from "../components/Header";

const Resume = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#06122b] text-white min-h-screen">
      

      <div className="py-16 px-6 md:px-20">
        <h1 className="text-[34px] md:text-[38px] font-extrabold mb-6 text-center">
          Resume & Profile
        </h1>

        <p className="text-[17px] md:text-[18px] text-[#b5c7f7] text-center max-w-2xl mx-auto mb-12">
          Manage your professional profile and get AI-powered resume feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#0b1a3a] p-6 rounded-2xl shadow-lg border border-[#1a2b4f]">
            <h2 className="text-xl font-bold mb-4">Profile Details</h2>

            <div className="flex flex-col gap-4">
              <input name="fullName" onChange={handleChange} placeholder="Full Name" className="bg-[#0f1f45] p-3 rounded-lg w-full" />
              <input name="email" onChange={handleChange} placeholder="Email" className="bg-[#0f1f45] p-3 rounded-lg w-full" />
              <input name="phone" onChange={handleChange} placeholder="Phone Number" className="bg-[#0f1f45] p-3 rounded-lg w-full" />
              <input name="location" onChange={handleChange} placeholder="Location" className="bg-[#0f1f45] p-3 rounded-lg w-full" />

              <textarea name="professionalSummary" onChange={handleChange} placeholder="Professional Summary" className="bg-[#0f1f45] p-3 rounded-lg h-28 w-full" />
              <textarea name="skills" onChange={handleChange} placeholder="Skills (React, Node.js, AWS...)" className="bg-[#0f1f45] p-3 rounded-lg h-20 w-full" />
              <input name="experienceYears" onChange={handleChange} placeholder="Years of Experience" className="bg-[#0f1f45] p-3 rounded-lg w-full" />
              <textarea name="education" onChange={handleChange} placeholder="Education" className="bg-[#0f1f45] p-3 rounded-lg h-24 w-full" />

              <textarea name="certifications" onChange={handleChange} placeholder="Certifications" className="bg-[#0f1f45] p-3 rounded-lg h-20 w-full" />
              <textarea name="projects" onChange={handleChange} placeholder="Projects" className="bg-[#0f1f45] p-3 rounded-lg h-24 w-full" />
              <input name="languages" onChange={handleChange} placeholder="Languages" className="bg-[#0f1f45] p-3 rounded-lg w-full" />
              <input name="linkedin" onChange={handleChange} placeholder="LinkedIn URL" className="bg-[#0f1f45] p-3 rounded-lg w-full" />
              <input name="portfolio" onChange={handleChange} placeholder="Portfolio / GitHub URL" className="bg-[#0f1f45] p-3 rounded-lg w-full" />

              <button className="mt-4 bg-gradient-to-r from-[#3a8cff] to-[#8b54ff] py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all w-full">
                Save Changes
              </button>
            </div>
          </div>

          <div className="bg-[#0b1a3a] p-6 rounded-2xl shadow-lg border border-[#1a2b4f]">
            <h2 className="text-xl font-bold mb-4">AI Resume Critique</h2>

            <button className="mb-6 bg-[#3a8cff] px-5 py-2 rounded-full font-semibold hover:bg-[#66a3ff] transition-all">
              Get New Critique
            </button>

            <div className="bg-[#13254d] rounded-xl p-5 border border-[#203763]">
              <h3 className="text-lg font-semibold mb-4 text-yellow-300">Top 3 Areas for Improvement</h3>
              <ol className="list-decimal ml-5 text-[#cfd9f7] space-y-2">
                <li>Add more leadership and collaboration examples.</li>
                <li>Include missing keywords (Docker, Kubernetes, TS).</li>
                <li>Expand summary to highlight value proposition.</li>
              </ol>
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
};

export default Resume;
