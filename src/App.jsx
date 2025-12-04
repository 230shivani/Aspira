// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import InterviewPrep from "./pages/InterviewPrep";
import Jobs from "./pages/Jobs";





export default function App() {
  return (
    <div className="min-h-screen">
      <Header /> {/* Header uses Links/useNavigate but doesn't wrap a Router */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/interview-prep" element={<InterviewPrep />} />
          <Route path="/jobs" element={<Jobs />} />



        </Routes>
      </main>
    </div>
  );
}
