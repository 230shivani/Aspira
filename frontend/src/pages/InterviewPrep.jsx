import React, { useState, useRef } from "react";
import { Upload, Loader, AlertCircle, CheckCircle, Download } from "lucide-react";
import { jsPDF } from "jspdf";

const InterviewPrep = () => {
  const fileInputRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("resume"); // "resume" or "topic"
  
  // Resume-based generation state
  const [resumeFile, setResumeFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  
  // Topic-based generation state
  const [jobRole, setJobRole] = useState("");
  const [experience, setExperience] = useState("");
  const [topics, setTopics] = useState("");
  
  // Shared state
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setError("Please upload a PDF file");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("File size should be less than 5MB");
        return;
      }
      setResumeFile(file);
      setUploadedFileName(file.name);
      setError("");
    }
  };

  const handleGenerateQuestions = async () => {
    if (!resumeFile) {
      setError("Please upload a resume PDF first");
      return;
    }

    const formData = new FormData();
    formData.append("resumeFile", resumeFile);
    formData.append("numberOfQuestions", numberOfQuestions);

    try {
      setIsLoading(true);
      setError("");
      setSuccess("");
      console.log("Sending request to backend...");
      const response = await fetch(
        "http://localhost:5000/api/interview/generate-from-resume",
        {
          method: "POST",
          body: formData,
        }
      );

      console.log("Response received:", response.status);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to generate questions");
      }

      const data = await response.json();
      setQuestions(data.questions || []);
      setSuccess("Questions generated successfully!");
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "Failed to generate questions. Please try again.");
      setQuestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateFromTopic = async () => {
    if (!jobRole || !experience || !topics || !numberOfQuestions) {
      setError("Please fill all fields: Job Role, Experience, and Topics");
      return;
    }

    try {
      setIsLoading(true);
      setError("");
      setSuccess("");
      console.log("Generating questions from topic...");
      const response = await fetch(
        "http://localhost:5000/api/interview/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role: jobRole,
            experience: experience,
            topicsToFocus: topics,
            numberOfQuestions: numberOfQuestions,
          }),
        }
      );

      console.log("Response received:", response.status);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to generate questions");
      }

      const data = await response.json();
      setQuestions(data.questions || []);
      setSuccess("Questions generated successfully!");
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "Failed to generate questions. Please try again.");
      setQuestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadQuestions = () => {
    if (questions.length === 0) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const maxWidth = pageWidth - 2 * margin;
    let yPosition = 20;

    // Add title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Interview Questions & Answers", pageWidth / 2, yPosition, { align: "center" });
    yPosition += 15;

    // Add metadata
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, margin, yPosition);
    yPosition += 8;
    doc.text(`Total Questions: ${questions.length}`, margin, yPosition);
    yPosition += 15;

    // Add questions and answers
    questions.forEach((item, idx) => {
      // Check if we need a new page
      if (yPosition > pageHeight - 20) {
        doc.addPage();
        yPosition = 20;
      }

      // Question
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      const questionText = `Q${idx + 1}: ${item.question}`;
      const questionLines = doc.splitTextToSize(questionText, maxWidth);
      doc.text(questionLines, margin, yPosition);
      yPosition += questionLines.length * 6 + 2;

      // Answer
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      const answerText = `Answer: ${item.answer}`;
      const answerLines = doc.splitTextToSize(answerText, maxWidth);
      doc.text(answerLines, margin, yPosition);
      yPosition += answerLines.length * 6 + 10;
    });

    // Save PDF
    doc.save("interview-questions.pdf");
  };

  return (
    <div className="bg-[#06122b] text-white min-h-screen">

      <div className="py-16 px-6 md:px-20">
        <h1 className="text-[34px] md:text-[38px] font-extrabold mb-6 text-center">
          Interview Preparation
        </h1>

        <p className="text-[17px] md:text-[18px] text-[#b5c7f7] text-center max-w-2xl mx-auto mb-12">
          Generate AI-powered interview questions in two ways: upload your resume or specify a job role and topics.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => {
              setActiveTab("resume");
              setError("");
              setSuccess("");
            }}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "resume"
                ? "bg-gradient-to-r from-[#3a8cff] to-[#8b54ff] text-white shadow-lg"
                : "bg-[#0b1a3a] text-[#b5c7f7] border border-[#1a2b4f] hover:border-[#3a8cff]"
            }`}>
            From Resume
          </button>
          <button
            onClick={() => {
              setActiveTab("topic");
              setError("");
              setSuccess("");
            }}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "topic"
                ? "bg-gradient-to-r from-[#3a8cff] to-[#8b54ff] text-white shadow-lg"
                : "bg-[#0b1a3a] text-[#b5c7f7] border border-[#1a2b4f] hover:border-[#3a8cff]"
            }`}>
            From Topic
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form Section */}
          {activeTab === "resume" && (
            <div className="bg-[#0b1a3a] p-8 rounded-2xl shadow-lg border border-[#1a2b4f]">
              <h2 className="text-xl font-bold mb-6">Generate from Resume</h2>

              <div className="space-y-6">
                <div className="border-2 border-dashed border-[#3a8cff] rounded-xl p-8 text-center cursor-pointer hover:bg-[#0f2555] transition"
                  onClick={() => fileInputRef.current?.click()}>
                  <Upload size={32} className="mx-auto mb-4 text-[#3a8cff]" />
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <p className="text-[#b5c7f7] font-medium">
                    {uploadedFileName ? (
                      <span className="text-green-400">Resume selected: {uploadedFileName}</span>
                    ) : (
                      <>Click to upload your resume or drag and drop<br/>
                      <span className="text-sm text-[#8b9cc9]">PDF files only, max 5MB</span></>
                    )}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-[#cfd9f7]">
                    Number of Questions
                  </label>
                  <select
                    value={numberOfQuestions}
                    onChange={(e) => setNumberOfQuestions(parseInt(e.target.value))}
                    className="w-full bg-[#0f1f45] border border-[#1e325d] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#3a8cff]">
                    {[5, 10, 15, 20, 25].map((num) => (
                      <option key={num} value={num}>
                        {num} Questions
                      </option>
                    ))}
                  </select>
                </div>

                {error && (
                  <div className="bg-red-500/15 border border-red-500/30 rounded-lg p-4 flex gap-3">
                    <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-200 text-sm">{error}</p>
                  </div>
                )}

                {success && (
                  <div className="bg-green-500/15 border border-green-500/30 rounded-lg p-4 flex gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-green-200 text-sm">{success}</p>
                  </div>
                )}

                <button
                  onClick={handleGenerateQuestions}
                  disabled={isLoading || !resumeFile}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    isLoading || !resumeFile
                      ? "bg-[#3a8cff]/50 text-white/50 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#3a8cff] to-[#8b54ff] text-white hover:opacity-90"
                  }`}>
                  {isLoading ? (
                    <>
                      <Loader size={20} className="animate-spin" />
                      Generating Questions...
                    </>
                  ) : (
                    "Generate Interview Questions"
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Topic-based Form */}
          {activeTab === "topic" && (
            <div className="bg-[#0b1a3a] p-8 rounded-2xl shadow-lg border border-[#1a2b4f]">
              <h2 className="text-xl font-bold mb-6">Generate from Topic</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-[#cfd9f7]">
                    Job Role / Position *
                  </label>
                  <input
                    type="text"
                    value={jobRole}
                    onChange={(e) => setJobRole(e.target.value)}
                    placeholder="e.g., Senior Full Stack Developer"
                    className="w-full bg-[#0f1f45] border border-[#1e325d] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#3a8cff]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-[#cfd9f7]">
                    Years of Experience *
                  </label>
                  <input
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    placeholder="e.g., 5 years"
                    className="w-full bg-[#0f1f45] border border-[#1e325d] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#3a8cff]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-[#cfd9f7]">
                    Topics to Focus On *
                  </label>
                  <textarea
                    value={topics}
                    onChange={(e) => setTopics(e.target.value)}
                    placeholder="e.g., React, Node.js, MongoDB, System Design&#10;(Comma or newline separated)"
                    className="w-full bg-[#0f1f45] border border-[#1e325d] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#3a8cff] resize-none h-24"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-[#cfd9f7]">
                    Number of Questions
                  </label>
                  <select
                    value={numberOfQuestions}
                    onChange={(e) => setNumberOfQuestions(parseInt(e.target.value))}
                    className="w-full bg-[#0f1f45] border border-[#1e325d] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#3a8cff]">
                    {[5, 10, 15, 20, 25].map((num) => (
                      <option key={num} value={num}>
                        {num} Questions
                      </option>
                    ))}
                  </select>
                </div>

                {error && (
                  <div className="bg-red-500/15 border border-red-500/30 rounded-lg p-4 flex gap-3">
                    <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-200 text-sm">{error}</p>
                  </div>
                )}

                {success && (
                  <div className="bg-green-500/15 border border-green-500/30 rounded-lg p-4 flex gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-green-200 text-sm">{success}</p>
                  </div>
                )}

                <button
                  onClick={handleGenerateFromTopic}
                  disabled={isLoading || !jobRole || !experience || !topics}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    isLoading || !jobRole || !experience || !topics
                      ? "bg-[#3a8cff]/50 text-white/50 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#3a8cff] to-[#8b54ff] text-white hover:opacity-90"
                  }`}>
                  {isLoading ? (
                    <>
                      <Loader size={20} className="animate-spin" />
                      Generating Questions...
                    </>
                  ) : (
                    "Generate Interview Questions"
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Generated Questions Display Section */}
          <div className="bg-[#0b1a3a] p-8 rounded-2xl shadow-lg border border-[#1a2b4f]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Generated Questions</h2>
              {questions.length > 0 && (
                <button
                  onClick={downloadQuestions}
                  className="flex items-center gap-2 bg-[#8b54ff]/20 text-[#b5a4ff] px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-[#8b54ff]/30 transition">
                  <Download size={16} />
                  Download
                </button>
              )}
            </div>

            {questions.length === 0 ? (
              <div className="bg-[#0f1f45] rounded-xl p-8 text-center border border-[#1e325d]">
                <p className="text-[#8b9cc9]">No questions generated yet. Select a mode and click the generate button to get started.</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-3">
                {questions.map((q, index) => (
                  <div key={index} className="bg-[#0f1f45] rounded-lg p-5 border border-[#1e325d] hover:border-[#3a8cff]/50 transition">
                    <h3 className="font-semibold text-[#cfd9f7] mb-3 text-sm">
                      Question {index + 1}: {q.question}
                    </h3>
                    <p className="text-[#a8b8d8] text-sm leading-relaxed">{q.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
