import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Jobs from "./pages/Jobs";
import InterviewPrep from "./pages/InterviewPrep";
import CoverLetter from "./pages/CoverLetter";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 selection:text-blue-200">
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              <Route path="/resume" element={
                <ProtectedRoute>
                  <Resume />
                </ProtectedRoute>
              } />
              <Route path="/jobs" element={
                <ProtectedRoute>
                  <Jobs />
                </ProtectedRoute>
              } />
              <Route path="/interview-prep" element={
                <ProtectedRoute>
                  <InterviewPrep />
                </ProtectedRoute>
              } />
              <Route path="/cover-letter" element={
                <ProtectedRoute>
                  <CoverLetter />
                </ProtectedRoute>
              } />
              <Route path="/settings" element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
