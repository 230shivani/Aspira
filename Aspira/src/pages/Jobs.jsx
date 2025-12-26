import React, { useState } from "react";
import { Search, MapPin, Briefcase, DollarSign, Clock, Eye, Send } from "lucide-react";

export default function Jobs() {
  const [tab, setTab] = useState("search");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1220] via-[#0a1a33] to-[#050b18] text-white px-6 py-12">
      
      {/* HEADER */}
      <h1 className="text-4xl font-bold">Job Search & Applications</h1>
      <p className="text-white/60 mt-2">
        Find your perfect role and track your applications
      </p>

      {/* TABS */}
      <div className="flex gap-8 mt-8 border-b border-white/10">
        <button
          onClick={() => setTab("search")}
          className={`pb-3 flex items-center gap-2 ${
            tab === "search"
              ? "text-cyan-400 border-b-2 border-cyan-400"
              : "text-white/60"
          }`}
        >
          <Search size={18} /> Job Search
        </button>

        <button
          onClick={() => setTab("applications")}
          className={`pb-3 flex items-center gap-2 ${
            tab === "applications"
              ? "text-cyan-400 border-b-2 border-cyan-400"
              : "text-white/60"
          }`}
        >
          <Briefcase size={18} /> My Applications
          <span className="ml-1 text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full">
            4
          </span>
        </button>
      </div>

      {/* SEARCH BAR */}
      {tab === "search" && (
        <>
          <div className="mt-8 bg-[#0e1b2f] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-4">
            <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 flex-1">
              <Search className="text-white/50" />
              <input
                placeholder="Job title, keywords..."
                className="bg-transparent outline-none w-full text-white"
              />
            </div>

            <div className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 w-full md:w-64">
              <MapPin className="text-white/50" />
              <input
                placeholder="Location"
                className="bg-transparent outline-none w-full text-white"
              />
            </div>

            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 justify-center">
              <Search size={18} /> Search
            </button>
          </div>

          <p className="mt-4 text-white/60 flex items-center gap-2 cursor-pointer">
            Advanced Filters
          </p>

          {/* JOB CARDS */}
          <div className="mt-8 space-y-6">
            <JobCard
              title="Senior Software Engineer"
              company="TechCorp Inc."
              location="San Francisco, CA"
              type="Full-time"
              salary="$150K - $200K"
              posted="2 days ago"
              match="95%"
              description="Design and implement scalable backend systems."
            />

            <JobCard
              title="Lead Frontend Engineer"
              company="Digital Solutions Ltd"
              location="New York, NY"
              type="Full-time"
              salary="$140K - $180K"
              posted="3 days ago"
              match="92%"
              description="Lead frontend team building performant UI."
            />
          </div>
        </>
      )}
    </div>
  );
}

/* ---------------- JOB CARD ---------------- */

function JobCard({
  title,
  company,
  location,
  type,
  salary,
  posted,
  match,
  description,
}) {
  return (
    <div className="bg-[#0e1b2f] border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition">
      
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
          {match} Match
        </span>
      </div>

      <div className="flex flex-wrap gap-4 text-white/60 mt-2 text-sm">
        <span>{company}</span>
        <span className="flex items-center gap-1"><MapPin size={14} /> {location}</span>
        <span className="flex items-center gap-1"><Briefcase size={14} /> {type}</span>
        <span className="flex items-center gap-1"><DollarSign size={14} /> {salary}</span>
        <span className="flex items-center gap-1"><Clock size={14} /> {posted}</span>
      </div>

      <p className="mt-4 text-white/80">{description}</p>

      <div className="flex flex-wrap gap-4 mt-6">
        <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg flex items-center gap-2">
          <Eye size={18} /> View Details
        </button>

        <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg">
          Generate Cover Letter
        </button>

        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-lg flex items-center gap-2">
          <Send size={18} /> Apply Now
        </button>
      </div>
    </div>
  );
}
