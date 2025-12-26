// src/pages/InterviewPrep.jsx
import React, { useState } from "react";

export default function InterviewPrep() {
  const [role, setRole] = useState("Senior Software Engineer");
  const [industry, setIndustry] = useState("Technology");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [questions, setQuestions] = useState("5 Questions (~15 min)");

  return (
    <div className="min-h-screen bg-[#06122b] text-white px-6 py-10">

      {/* ---------- PAGE TITLE ---------- */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Interview Preparation</h1>
        <p className="text-gray-300 text-lg mt-1">
          Practice and perfect your interview skills with AI
        </p>
      </div>

      {/* ---------- TOP TABS ---------- */}
      <div className="flex gap-8 border-b border-white/10 pb-3 text-gray-300">
        <button className="text-blue-400 border-b-2 border-blue-500 pb-2">
          Mock Interviews
        </button>
        <button className="hover:text-white transition">Question Bank</button>
        <button className="hover:text-white transition">Tips & Resources</button>
      </div>

      {/* ---------- MOCK INTERVIEW FORM CONTAINER ---------- */}
      <div className="mt-10 bg-[#0e1a33] p-6 rounded-2xl shadow-lg">

        <h2 className="text-xl font-semibold mb-6">Start New Mock Interview</h2>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* JOB ROLE */}
          <div>
            <label className="text-gray-300 block mb-2">Job Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-[#132044] text-gray-200 p-3 rounded-lg border border-white/10"
            >
              <option>Senior Software Engineer</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
            </select>
          </div>

          {/* INDUSTRY */}
          <div>
            <label className="text-gray-300 block mb-2">Industry</label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full bg-[#132044] text-gray-200 p-3 rounded-lg border border-white/10"
            >
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
            </select>
          </div>

          {/* DIFFICULTY */}
          <div>
            <label className="text-gray-300 block mb-2">Difficulty</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full bg-[#132044] text-gray-200 p-3 rounded-lg border border-white/10"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          {/* NUMBER OF QUESTIONS */}
          <div>
            <label className="text-gray-300 block mb-2">Number of Questions</label>
            <select
              value={questions}
              onChange={(e) => setQuestions(e.target.value)}
              className="w-full bg-[#132044] text-gray-200 p-3 rounded-lg border border-white/10"
            >
              <option>5 Questions (~15 min)</option>
              <option>10 Questions (~25 min)</option>
              <option>15 Questions (~35 min)</option>
            </select>
          </div>

        </div>

        {/* ---------- START BUTTON ---------- */}
        <button className="w-full mt-4 bg-gradient-to-r from-[#00c6ff] to-[#0062ff] text-white font-semibold py-4 rounded-xl hover:opacity-90 transition">
          ▶ Start Mock Interview
        </button>
      </div>

      {/* ---------- PAST INTERVIEWS SECTION ---------- */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">My Past Interviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <PastInterviewCard
            role="Senior Software Engineer"
            company="Tech Company"
            score="88%"
            questions="10"
            duration="25 min"
            date="Nov 26, 2025"
          />

          {/* CARD 2 */}
          <PastInterviewCard
            role="Full Stack Developer"
            company="Startup Inc"
            score="92%"
            questions="8"
            duration="20 min"
            date="Nov 23, 2025"
          />

          {/* CARD 3 */}
          <PastInterviewCard
            role="Backend Engineer"
            company="Enterprise Corp"
            score="85%"
            questions="10"
            duration="28 min"
            date="Nov 20, 2025"
          />
        </div>
      </div>

    </div>
  );
}

/* ---------------------- REUSABLE CARD COMPONENT ---------------------- */
function PastInterviewCard({ role, company, score, questions, duration, date }) {
  return (
    <div className="bg-[#0e1a33] p-6 rounded-2xl shadow-lg border border-white/5">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">{role}</h3>
          <p className="text-gray-400 text-sm">{company}</p>
        </div>
        <span className="bg-yellow-500/20 text-yellow-400 font-semibold px-3 py-1 rounded-lg">
          {score}
        </span>
      </div>

      <div className="text-gray-300 text-sm space-y-1 mb-5">
        <p>Questions: {questions}</p>
        <p>Duration: {duration}</p>
        <p>Date: {date}</p>
      </div>

      <button className="w-full bg-[#1b2a4f] text-white py-3 rounded-xl hover:bg-[#233661] transition">
        Review Feedback
      </button>
    </div>
  );
}
