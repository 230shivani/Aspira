import React from "react";
import StatCard from "../components/StatCard";
import ActionItemCard from "../components/ActionItemCard";
import QuickAccessCard from "../components/QuickAccessCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#06122b] text-white px-6 py-10">

      {/* TOP HEADER */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Aspira 👋</h1>
        <p className="text-gray-300 text-lg">Let's continue working towards your career goals</p>
      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <StatCard title="Resume Score" value="92 / 100" icon="⚡" />
        <StatCard title="Applications" value="12" icon="📦" />
        <StatCard title="Interviews" value="8" icon="💬" />
        <StatCard title="Days Active" value="45" icon="⏱️" />
      </div>

      {/* CAREER PROGRESS SECTION */}
      <div className="mt-12 bg-[#0e1a33] p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Career Goal Progress</h2>
          <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">On Track</span>
        </div>

        <p className="text-gray-300 mb-3">Senior Software Engineer Role</p>

        {/* PROGRESS BAR */}
        <div className="w-full bg-gray-700 h-3 rounded-full">
          <div className="bg-blue-500 h-3 rounded-full" style={{ width: "68%" }}></div>
        </div>

        {/* STATUS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
          <div className="bg-[#132044] p-4 rounded-lg text-center">
            <h3 className="font-semibold">Resume</h3>
            <p className="text-blue-300">Optimized</p>
          </div>

          <div className="bg-[#132044] p-4 rounded-lg text-center">
            <h3 className="font-semibold">Interview Prep</h3>
            <p className="text-yellow-300">In Progress</p>
          </div>

          <div className="bg-[#132044] p-4 rounded-lg text-center">
            <h3 className="font-semibold">Applications</h3>
            <p className="text-green-300">12 Sent</p>
          </div>
        </div>

        {/* NEXT RECOMMENDED ACTION */}
        <div className="bg-[#1b2a4f] mt-6 p-5 rounded-xl text-gray-200">
          <p className="font-semibold text-lg">Next Recommended Action</p>
          <p className="text-gray-300 mt-1">
            Complete 3 behavioral interview practice sessions to increase your interview readiness score.
          </p>
        </div>
      </div>

      {/* ACTION ITEMS & QUICK ACCESS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

        {/* Left = Quick Access */}
        <div className="col-span-2">
          <h2 className="text-xl font-semibold mb-4">Quick Access</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <QuickAccessCard title="Refine Resume" desc="Get AI feedback on your resume" icon="📘" />
            <QuickAccessCard title="Start Mock Interview" desc="Practice with AI interviewer" icon="💬" />
            <QuickAccessCard title="Find Jobs" desc="Discover matching opportunities" icon="👜" />
            <QuickAccessCard title="Career Roadmap" desc="View your personalized path" icon="📈" />
          </div>
        </div>

        {/* Right = Action Items */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Action Items</h2>

          <div className="space-y-4">
            <ActionItemCard title="Update LinkedIn Summary" priority="High" />
            <ActionItemCard title="Practice Behavioral Questions" priority="High" />
            <ActionItemCard title="Apply to 3 New Positions" priority="High" />
            <ActionItemCard title="Review Resume Keywords" priority="Medium" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
