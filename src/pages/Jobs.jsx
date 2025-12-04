import React, { useState } from "react";

export default function Jobs() {
  const [activeTab, setActiveTab] = useState("recommended");

  return (
    <div className="min-h-screen bg-[#06122b] text-white px-6 py-10">

      {/* PAGE TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold">Job Recommendations</h1>
      <p className="text-gray-300 mt-1 mb-8">
        Get AI-powered job suggestions based on your skills and resume
      </p>

      {/* SEARCH + FILTERS */}
      <div className="bg-[#0e1a33] p-6 rounded-2xl shadow-lg">
        
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search for job title or keywords..."
            className="w-full bg-[#132044] text-gray-200 px-4 py-3 rounded-lg border border-white/10"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full md:w-1/3 bg-[#132044] text-gray-200 px-4 py-3 rounded-lg border border-white/10"
          />
          <button className="w-full md:w-40 bg-gradient-to-r from-[#00c6ff] to-[#0062ff] py-3 rounded-lg font-semibold">
            Search
          </button>
        </div>

        {/* FILTERS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <select className="bg-[#132044] text-gray-300 p-3 rounded-lg border border-white/10">
            <option>Experience Level</option>
            <option>Fresher</option>
            <option>1–2 years</option>
            <option>3–5 years</option>
            <option>Senior</option>
          </select>

          <select className="bg-[#132044] text-gray-300 p-3 rounded-lg border border-white/10">
            <option>Job Type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Remote</option>
            <option>Internship</option>
          </select>

          <select className="bg-[#132044] text-gray-300 p-3 rounded-lg border border-white/10">
            <option>Salary Range</option>
            <option>2–4 LPA</option>
            <option>4–7 LPA</option>
            <option>7–12 LPA</option>
            <option>12+ LPA</option>
          </select>
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-8 border-b border-white/10 mt-10 pb-3 text-gray-300">
        <button
          className={`${activeTab === "recommended" ? "text-blue-400 border-b-2 border-blue-500" : "hover:text-white"}`}
          onClick={() => setActiveTab("recommended")}
        >
          Recommended Jobs
        </button>

        <button
          className={`${activeTab === "saved" ? "text-blue-400 border-b-2 border-blue-500" : "hover:text-white"}`}
          onClick={() => setActiveTab("saved")}
        >
          Saved Jobs
        </button>

        <button
          className={`${activeTab === "applied" ? "text-blue-400 border-b-2 border-blue-500" : "hover:text-white"}`}
          onClick={() => setActiveTab("applied")}
        >
          My Applications
        </button>
      </div>

      {/* JOB LIST SECTION */}
      {activeTab === "recommended" && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          <JobCard
            title="Frontend Developer"
            company="Google"
            location="Bangalore"
            type="Full-time"
            salary="12–18 LPA"
            match="89%"
          />

             <JobCard
            title="MEAN Developer"
            company="Google"
            location="Bangalore"
            type="Full-time"
            salary="12–18 LPA"
            match="89%"
          />
          <JobCard
            title="MERN Developer"
            company="Google"
            location="Bangalore"
            type="Full-time"
            salary="12–18 LPA"
            match="89%"
          />


          <JobCard
            title="React Developer"
            company="Microsoft"
            location="Hyderabad"
            type="Remote"
            salary="10–15 LPA"
            match="92%"
          />
          <JobCard
            title="BackEnd Developer"
            company="Google"
            location="Bangalore"
            type="Full-time"
            salary="12–18 LPA"
            match="89%"
          />

          <JobCard
            title="UI/UX Engineer"
            company="Adobe"
            location="Noida"
            type="Full-time"
            salary="8–14 LPA"
            match="85%"
          />
        </div>
        
      )}

      {/* SAVED JOBS */}
      {activeTab === "saved" && (
        <div className="mt-10 text-center text-gray-400">
          <p>No saved jobs yet.</p>
        </div>
      )}

      {/* APPLIED JOBS */}
      {activeTab === "applied" && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          <AppliedJobCard
            title="Backend Developer"
            company="Amazon"
            date="Applied on Jan 12, 2025"
            status="In Review"
          />

          <AppliedJobCard
            title="Full Stack Developer"
            company="Flipkart"
            date="Applied on Jan 08, 2025"
            status="Interview Scheduled"
          />
        </div>
      )}
    </div>
  );
}

/* ---------------- JOB CARD COMPONENT ---------------- */
function JobCard({ title, company, location, type, salary, match }) {
  return (
    <div className="bg-[#0e1a33] p-6 rounded-2xl border border-white/5 shadow-lg">

      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-400">{company}</p>
        </div>

        <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-lg text-sm font-semibold">
          {match} match
        </span>
      </div>

      <div className="text-gray-300 text-sm mt-4 space-y-1">
        <p>📍 {location}</p>
        <p>💼 {type}</p>
        <p>💰 {salary}</p>
      </div>

      <button className="w-full mt-4 bg-[#1b2a4f] text-white py-3 rounded-xl hover:bg-[#233661] transition">
        View Details
      </button>
    </div>
  );
}

/* ---------------- APPLIED JOB CARD ---------------- */
function AppliedJobCard({ title, company, date, status }) {
  return (
    <div className="bg-[#0e1a33] p-6 rounded-2xl border border-white/5 shadow-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-400">{company}</p>

      <p className="text-gray-400 text-sm mt-2">{date}</p>

      <span className="mt-4 inline-block bg-green-600/20 text-green-400 px-3 py-1 rounded-lg font-semibold">
        {status}
      </span>

      <button className="w-full mt-4 bg-[#1b2a4f] text-white py-3 rounded-xl hover:bg-[#233661] transition">
        View Application
      </button>
    </div>
  );
}
