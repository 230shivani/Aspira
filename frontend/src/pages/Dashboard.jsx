import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch user's interviews from backend
    fetchInterviews();
  }, []);

  const fetchInterviews = async () => {
    try {
      setLoading(true);
      // TODO: Replace with actual API endpoint
      const response = await fetch("http://localhost:5000/api/interview/user-interviews", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });

      if (!response.ok) {
        // For now, show mock data if API fails
        setInterviews([
          {
            id: 1,
            title: "Software Engineer Interview",
            date: "2025-05-01",
            status: "completed",
            questions: 5
          },
          {
            id: 2,
            title: "Data Scientist Interview",
            date: "2025-05-02",
            status: "in-progress",
            questions: 3
          }
        ]);
        return;
      }

      const data = await response.json();
      setInterviews(data.interviews || []);
    } catch (err) {
      console.error("Error fetching interviews:", err);
      setError("Failed to load interviews");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    setInterviews(interviews.filter(interview => interview.id !== id));
  };

  const handleStartInterview = (id) => {
    navigate(`/interview-prep?id=${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Manage your interview sessions</p>
        </div>

        {/* Create New Button */}
        <button
          onClick={() => navigate("/interview-prep")}
          className="mb-8 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          <span>New Interview Session</span>
        </button>

        {/* Error Message */}
        {error && (
          <div className="bg-red-900/30 border border-red-700 text-red-200 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <p className="text-gray-400 mt-4">Loading your interviews...</p>
          </div>
        ) : interviews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No interviews yet. Start by creating one!</p>
          </div>
        ) : (
          /* Interviews Table */
          <div className="bg-slate-700/50 border border-slate-600 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-600 bg-slate-700/80">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Questions</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {interviews.map((interview) => (
                    <tr key={interview.id} className="border-b border-slate-600 hover:bg-slate-600/30 transition">
                      <td className="px-6 py-4 text-white font-medium">{interview.title}</td>
                      <td className="px-6 py-4 text-gray-400">{interview.date}</td>
                      <td className="px-6 py-4 text-gray-400">{interview.questions}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            interview.status === "completed"
                              ? "bg-green-900/40 text-green-300"
                              : "bg-yellow-900/40 text-yellow-300"
                          }`}
                        >
                          {interview.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex gap-3">
                        <button
                          onClick={() => handleStartInterview(interview.id)}
                          className="text-blue-400 hover:text-blue-300 transition"
                          title="Start Interview"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(interview.id)}
                          className="text-red-400 hover:text-red-300 transition"
                          title="Delete"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
