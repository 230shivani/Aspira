// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import InterviewPrep from "./pages/InterviewPrep";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header /> {/* Header uses Links/useNavigate but doesn't wrap a Router */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/interview-prep" element={<InterviewPrep />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}
