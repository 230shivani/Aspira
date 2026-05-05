import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MessageSquare,
  BookOpen,
  Video,
  ChevronRight,
  Star,
  Cpu,
  Target,
  Clock,
  CheckCircle2,
  ArrowRight,
  X,
  Mic,
  Pause,
  Play,
  RotateCcw,
  BarChart3,
  Award,
  Zap,
  Send,
  AlertTriangle
} from "lucide-react";
import interviewService from "../services/interviewService";

const interviewCategories = [
  { id: "behavioral", name: "Behavioral", icon: <MessageSquare size={18} />, color: "from-blue-500 to-indigo-600" },
  { id: "technical", name: "Technical", icon: <Cpu size={18} />, color: "from-purple-500 to-pink-600" },
  { id: "strategy", name: "Case Study", icon: <Target size={18} />, color: "from-teal-500 to-emerald-600" },
  { id: "tips", name: "Quick Tips", icon: <BookOpen size={18} />, color: "from-orange-500 to-yellow-600" },
];

export default function InterviewPrep() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [analytics, setAnalytics] = useState(null);
  const [sessionAnalysis, setSessionAnalysis] = useState(null);

  // Placeholder user ID - in a real app, this would come from auth context
  const userId = localStorage.getItem("userId") || "60d0fe4f5311236168a109ca";

  const fetchAnalytics = async () => {
    try {
      const aData = await interviewService.getAnalytics(userId);
      setAnalytics(aData);
    } catch (error) {
      console.error("Error fetching analytics:", error);
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const qData = await interviewService.getQuestions({ category: activeTab, search: searchQuery });
        setQuestions(qData);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
    fetchAnalytics();
  }, [activeTab, searchQuery]);

  const filteredQuestions = questions;

  return (
    <div className="min-h-screen bg-mesh py-12 px-4 md:px-8">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10 animate-blob px-Animation [7s_infinite_2s]"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
          >
            <Video size={16} />
            <span>Master Your Next Interview</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            AI CareerHub <span className="text-gradient">Interview Lab</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-lg max-w-2xl mx-auto"
          >
            Prepare with confidence using our expert questions library, AI-powered mock sessions, and industry-standard frameworks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content Areas */}
          <div className="lg:col-span-8 space-y-8">
            {/* Search & Tabs */}
            <div className="glass p-6 rounded-3xl space-y-6">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Search popular questions..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-medium"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === "all" ? "bg-primary text-white shadow-lg shadow-primary/30 font-bold" : "bg-white/5 text-text-muted hover:bg-white/10"
                    }`}
                >
                  All Questions
                </button>
                {interviewCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === cat.id ? "bg-primary text-white shadow-lg shadow-primary/30 font-bold" : "bg-white/5 text-text-muted hover:bg-white/10"
                      }`}
                  >
                    {cat.icon}
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {loading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-20 text-center"
                  >
                    <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-text-muted">Loading questions...</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="questions-list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {filteredQuestions.map((q, idx) => (
                      <motion.div
                        key={q._id || q.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`glass rounded-3xl overflow-hidden transition-all duration-300 border ${expandedId === (q._id || q.id) ? "border-primary/40 bg-white/[0.08]" : "border-white/10"}`}
                      >
                        <button
                          onClick={() => setExpandedId(expandedId === (q._id || q.id) ? null : (q._id || q.id))}
                          className="w-full text-left p-6 flex items-start justify-between gap-4"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <span className="text-xs font-bold uppercase tracking-wider text-primary">{q.category}</span>
                              <span className="w-1 h-1 rounded-full bg-white/20"></span>
                              <span className={`text-[10px] px-2 py-0.5 rounded-full border border-white/10 font-bold ${q.difficulty === "Hard" ? "text-red-400" : q.difficulty === "Medium" ? "text-yellow-400" : "text-green-400"}`}>
                                {q.difficulty}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-white">{q.question}</h3>
                          </div>
                          <ChevronRight className={`text-text-muted transition-transform duration-300 flex-shrink-0 ${expandedId === (q._id || q.id) ? "rotate-90" : ""}`} />
                        </button>

                        <AnimatePresence>
                          {expandedId === (q._id || q.id) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="px-6 pb-6"
                            >
                              <div className="pt-4 border-t border-white/10">
                                <h4 className="text-sm font-semibold text-secondary mb-3 flex items-center gap-2">
                                  <Star size={16} /> Suggested Strategy
                                </h4>
                                <p className="text-text-muted leading-relaxed text-sm">
                                  {q.answer}
                                </p>
                                <div className="mt-6 flex items-center gap-6">
                                  <div className="flex items-center gap-2 text-xs text-text-muted">
                                    <Clock size={14} /> Estimated prep: {q.time}
                                  </div>
                                  <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                                    Add to Practice <ArrowRight size={14} />
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                    {filteredQuestions.length === 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 glass rounded-3xl border border-dashed border-white/10"
                      >
                        <p className="text-text-muted font-medium">No questions found matching your search.</p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="lg:col-span-4 space-y-6">
            {/* AI Mock Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl border border-primary/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] group-hover:bg-primary/30 transition-all"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-tr from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <Cpu className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">AI Mock Expert</h3>
                <p className="text-text-muted text-sm mb-6 leading-relaxed">
                  Practice in a real-time simulated environment with our AI interviewer. Get instant feedback on your performance.
                </p>
                <button
                  onClick={() => setIsSessionActive(true)}
                  className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/5 active:scale-95"
                >
                  Start Session <Video size={18} />
                </button>
              </div>
            </motion.div>

            {/* Quick Stats/Progress Card */}
            <div className="glass p-8 rounded-3xl border border-white/10">
              <h3 className="text-lg font-bold text-white mb-6">Your Progress</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-text-muted">Mastery Level</span>
                    <span className="text-primary font-bold">{analytics?.overallScore || 0}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${analytics?.overallScore || 0}%` }}
                      className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    ></motion.div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-text-muted">
                    <CheckCircle2 className="text-secondary" size={16} />
                    <span>{analytics?.totalSessions || 0} Total mock sessions</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-muted">
                    <CheckCircle2 className="text-secondary" size={16} />
                    <span>{analytics?.history?.length || 0} Assessments recorded</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowAnalytics(true)}
                  className="w-full border border-white/10 text-white font-bold py-3 rounded-xl hover:bg-white/5 transition-all text-sm"
                >
                  View Full Analytics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODALS */}
      <AnimatePresence>
        {isSessionActive && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setIsSessionActive(false)}
            />
            <MockInterviewSimulation 
              onClose={() => setIsSessionActive(false)} 
              onAnalysisComplete={(data) => {
                setSessionAnalysis(data);
                setIsSessionActive(false);
                setShowAnalytics(true);
                fetchAnalytics(); 
              }}
              userId={userId}
            />
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAnalytics && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setShowAnalytics(false)}
            />
            <AnalyticsModal 
              onClose={() => {
                setShowAnalytics(false);
                setSessionAnalysis(null);
              }} 
              data={sessionAnalysis}
              userId={userId}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AnalyticsModal({ onClose, data, userId }) {
  const [loading, setLoading] = useState(!data);
  const [analyticsData, setAnalyticsData] = useState(data);

  useEffect(() => {
    if (!data && userId) {
      const fetchLatest = async () => {
        setLoading(true);
        try {
          const history = await interviewService.getAnalytics(userId);
          if (history && history.history && history.history.length > 0) {
            setAnalyticsData({
              overallScore: history.overallScore,
              categories: [
                { name: "Technical Knowledge", score: history.overallScore - 5 },
                { name: "Communication Skills", score: history.overallScore + 5 },
                { name: "Problem Solving", score: history.overallScore },
                { name: "Confidence", score: history.overallScore - 10 }
              ],
              strengths: ["Consistent performance", "Regular practice"],
              improvements: ["Focus on technical depth"],
              summary: `You have completed ${history.totalSessions} sessions so far. Your average readiness is ${history.overallScore}%.`
            });
          }
        } catch (error) {
          console.error("Failed to fetch latest analytics:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchLatest();
    }
  }, [data, userId]);

  const defaultData = {
    overallScore: 0,
    categories: [
      { name: "Technical Knowledge", score: 0 },
      { name: "Communication Skills", score: 0 },
      { name: "Problem Solving", score: 0 },
      { name: "Confidence", score: 0 }
    ],
    strengths: ["No data yet"],
    improvements: ["Complete your first interview"],
    summary: "Complete an interview session to see your full performance analysis."
  };

  const displayData = analyticsData || defaultData;
  const colors = ["bg-blue-500", "bg-purple-500", "bg-emerald-500", "bg-orange-500", "bg-pink-500"];
  const formattedCategories = displayData.categories.map((cat, i) => ({
    ...cat,
    color: cat.color || colors[i % colors.length]
  }));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 40 }}
      className="relative w-full max-w-5xl bg-[#0a101f] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto custom-scrollbar"
    >
      <div className="p-8 border-b border-white/5 flex items-center justify-between sticky top-0 bg-[#0a101f]/80 backdrop-blur-md z-20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
            <BarChart3 size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white leading-tight">Full Performance Analysis</h3>
            <p className="text-text-muted text-sm">Detailed breakdown of your interview readiness</p>
          </div>
        </div>
        <button onClick={onClose} className="p-3 hover:bg-white/5 rounded-full text-white/50 transition-colors">
          <X size={24} />
        </button>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1 glass bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-[32px] border border-primary/20 flex flex-col items-center justify-center text-center">
            <h4 className="text-white/70 text-sm font-bold uppercase tracking-widest mb-4">Overall Readiness</h4>
            <div className="relative w-40 h-40 flex items-center justify-center mb-6">
              {loading ? (
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                    <motion.circle
                      cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="8" fill="transparent"
                      strokeDasharray={440}
                      initial={{ strokeDashoffset: 440 }}
                      animate={{ strokeDashoffset: 440 - (440 * displayData.overallScore) / 100 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-black text-white">{displayData.overallScore}%</span>
                    <span className="text-xs font-bold text-primary">{displayData.overallScore > 70 ? "ADVANCED" : "LEARNING"}</span>
                  </div>
                </>
              )}
            </div>
            <p className="text-text-muted text-sm italic">
              {displayData.overallScore > 0 ? "\"Keep practicing to reach your 90% target!\"" : "\"Start an interview to see your score.\""}
            </p>
          </div>

          <div className="lg:col-span-2 glass p-8 rounded-[32px] border border-white/5 space-y-6">
            <h4 className="text-white font-bold text-lg mb-2">Category Breakdown</h4>
            <div className="space-y-5">
              {formattedCategories.map((cat, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-text-muted uppercase">{cat.name}</span>
                    <span className="text-white">{cat.score}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${cat.score}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`h-full ${cat.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
            {displayData.summary && (
              <p className="text-text-muted text-sm mt-6 border-t border-white/5 pt-4 leading-relaxed">
                {displayData.summary}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-[32px] bg-emerald-500/5 border border-emerald-500/20">
            <h4 className="text-emerald-400 font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 size={20} /> Key Strengths
            </h4>
            <div className="space-y-4">
              {displayData.strengths.length > 0 ? displayData.strengths.map((s, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  {s}
                </div>
              )) : <p className="text-text-muted text-xs">No strengths recorded yet.</p>}
            </div>
          </div>

          <div className="p-8 rounded-[32px] bg-orange-500/5 border border-orange-500/20">
            <h4 className="text-orange-400 font-bold mb-6 flex items-center gap-2">
              <Zap size={20} /> Focus Areas
            </h4>
            <div className="space-y-4">
              {displayData.improvements.length > 0 ? displayData.improvements.map((s, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  {s}
                </div>
              )) : <p className="text-text-muted text-xs">Complete an interview for suggestions.</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 pt-0 mt-8 flex justify-center">
        <button onClick={onClose} className="px-12 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.05] transition-all">
          BACK TO PREP
        </button>
      </div>
    </motion.div>
  );
}

function MockInterviewSimulation({ onClose, onAnalysisComplete, userId }) {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Welcome to AI CareerHub Interview Lab. I'm Sarah Mitchell, your AI interviewer today. Are you ready to begin our session?" }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [stream, setStream] = useState(null);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCamOn, setIsCamOn] = useState(true);
  const [hasJoined, setHasJoined] = useState(false);
  const [permissionStatus, setPermissionStatus] = useState("idle");
  const [camError, setCamError] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState(null);

  const scrollRef = useRef(null);
  const setupVideoRef = useRef(null);
  const sessionVideoRef = useRef(null);

  // Stop stream when component unmounts
  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  // Handle stream assignment manually to avoid React lifecycle issues
  useEffect(() => {
    if (stream) {
      if (!hasJoined && setupVideoRef.current) {
        setupVideoRef.current.srcObject = stream;
      }
      if (hasJoined && sessionVideoRef.current) {
        sessionVideoRef.current.srcObject = stream;
      }
    }
  }, [stream, hasJoined]);

  const requestPermission = async () => {
    try {
      setPermissionStatus("pending");
      setCamError(null);
      
      let mediaStream;
      try {
        // Try getting both first
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      } catch (err) {
        console.warn("Camera/Mic error:", err);
        if (err.name === 'NotFoundError' || err.name === 'NotReadableError') {
          try {
            // Fallback 1: Try just video (maybe they have no microphone)
            mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
          } catch (err2) {
            // Fallback 2: Try just audio (maybe they have no camera)
            mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
          }
        } else {
          throw err;
        }
      }

      setStream(mediaStream);
      setIsCamOn(mediaStream.getVideoTracks().length > 0);
      setIsMicOn(mediaStream.getAudioTracks().length > 0);
      
      setPermissionStatus("granted");
      return true;
    } catch (err) {
      console.error("Permission fully denied:", err);
      setPermissionStatus("denied");
      setCamError(err.name === 'NotFoundError' ? 'No Camera Found' : err.name === 'NotAllowedError' ? 'Camera Blocked' : 'Camera Error');
      return false;
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const handleJoin = async () => {
    if (permissionStatus === "granted" || permissionStatus === "denied") {
      setHasJoined(true);
    } else {
      const success = await requestPermission();
      if (success) setHasJoined(true);
    }
  };

  const toggleMic = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsMicOn(audioTrack.enabled);
      }
    }
  };

  const toggleCam = () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsCamOn(videoTrack.enabled);
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.role === "ai" && hasJoined) {
      speakMessage(lastMessage.text);
    }
  }, [messages, isTyping, hasJoined]);

  const speakMessage = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(v => v.name.includes("Google US English") || v.name.includes("Female") || v.name.includes("Zira"));
    if (femaleVoice) utterance.voice = femaleVoice;
    utterance.pitch = 1.1;
    utterance.rate = 0.95;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!userInput.trim() || isTyping) return;

    const userMsg = { role: "user", text: userInput };
    setMessages(prev => [...prev, userMsg]);
    setUserInput("");
    setIsTyping(true);

    try {
      const response = await interviewService.aiChat(userInput, messages);
      if (response && response.reply) {
        setMessages(prev => [...prev, { role: "ai", text: response.reply }]);
      } else {
        setError("AI returned an empty response. Please try again.");
      }
      setIsTyping(false);
    } catch (error) {
      console.error("AI Chat Error:", error);
      const errorMsg = error.response?.data?.error || error.message || "Failed to connect to AI.";
      setError(errorMsg);
      setIsTyping(false);
    }
  };

  const handleEndSession = async () => {
    if (messages.length < 3) {
      onClose();
      return;
    }
    
    setIsAnalyzing(true);
    try {
      const analysis = await interviewService.analyzeSession(userId, messages);
      onAnalysisComplete(analysis);
    } catch (error) {
      console.error("Analysis Error:", error);
      setError("Failed to generate analysis. Closing session...");
      setTimeout(onClose, 2000);
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (!hasJoined) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-2xl bg-[#0a101f] border border-white/10 rounded-[40px] p-8 md:p-12 text-center shadow-2xl z-10"
      >
        <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/5 bg-black/40 flex items-center justify-center">
          {permissionStatus === "granted" ? (
            <video ref={setupVideoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
          ) : (
            <div className="text-center p-2">
              <Video size={36} className="mx-auto text-text-muted mb-2 opacity-20" />
              <p className="text-[10px] font-bold text-text-muted">{camError || "Camera Needed"}</p>
              {camError === 'Camera Blocked' && <p className="text-[9px] text-red-400 mt-1 px-4 leading-tight">Please check your browser settings (top left corner) to allow camera</p>}
            </div>
          )}
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Ready to start?</h3>
        <p className="text-text-muted mb-10 max-w-md mx-auto text-sm leading-relaxed">
          Sarah Mitchell is ready to evaluate your professional skills.
        </p>
        <button
          onClick={handleJoin}
          className="w-full bg-primary text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3"
        >
          Start Session <ArrowRight size={20} />
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 40 }}
      className="relative w-full max-w-6xl bg-[#0a101f] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row h-[90vh] md:h-[650px]"
    >
      <div className="md:w-1/2 bg-[#0d1425] relative flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-white/10">
        <div className="absolute top-8 left-8 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Live Session</span>
        </div>

        <div className="relative w-full aspect-video md:aspect-[4/3] max-h-[400px] rounded-3xl overflow-hidden bg-black/40 border border-white/10 group shadow-2xl">
          <video 
            ref={sessionVideoRef} 
            autoPlay 
            playsInline 
            muted 
            className={`w-full h-full object-cover ${(!stream || !isCamOn) ? 'hidden' : ''}`} 
          />
          {(!stream || !isCamOn) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-text-muted p-4 text-center">
              <Video size={24} className="mb-4 opacity-20" />
              <p className="text-xs font-semibold opacity-60">{camError || "Camera is paused"}</p>
              {camError === 'Camera Blocked' && <p className="text-[10px] text-red-400/80 mt-2">Browser blocked access.</p>}
            </div>
          )}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={toggleMic} className={`w-10 h-10 rounded-full flex items-center justify-center ${isMicOn ? "bg-white/10" : "bg-red-500"} text-white`}><Mic size={18} /></button>
            <button onClick={toggleCam} className={`w-10 h-10 rounded-full flex items-center justify-center ${isCamOn ? "bg-white/10" : "bg-red-500"} text-white`}><Video size={18} /></button>
            <button onClick={onClose} className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center"><X size={18} /></button>
          </div>
        </div>

        <div className="mt-8 w-full flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0"><Cpu size={24} /></div>
          <div className="flex-1">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">AI Interviewer</h5>
            <p className="text-[10px] text-text-muted">{isSpeaking ? "Sarah is speaking..." : "Sarah Mitchell is listening..."}</p>
          </div>
          <div className="flex gap-1">
            {isSpeaking && (
              <>
                <div className="w-1 h-3 bg-secondary rounded-full animate-bounce [animation-delay:0.1s]"></div>
                <div className="w-1 h-5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1 h-3 bg-secondary rounded-full animate-bounce [animation-delay:0.3s]"></div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col bg-[#0a101f]">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageSquare size={18} className="text-primary" />
            <h4 className="text-white font-bold text-sm">Interview Log</h4>
          </div>
          {messages.length > 2 && (
            <button 
              onClick={handleEndSession}
              disabled={isAnalyzing}
              className="text-[10px] font-bold px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {isAnalyzing ? "Analyzing..." : "End & Analyze"}
              {!isAnalyzing && <Zap size={14} />}
            </button>
          )}
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
          {messages.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${m.role === "ai" ? "justify-start" : "justify-end"}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl ${m.role === "ai" ? "bg-white/5 border border-white/10" : "bg-primary text-white"} text-sm leading-relaxed`}>
                {m.text}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex gap-1">
                <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </motion.div>
          )}
          {error && (
            <div className="flex justify-center p-2">
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold px-4 py-2 rounded-full flex items-center gap-2">
                <AlertTriangle size={14} />
                {error}
                <button onClick={() => setError(null)} className="hover:text-white transition-colors"><X size={14} /></button>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSendMessage} className="p-6 border-t border-white/5">
          <div className="relative">
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-white pr-14"
              placeholder="Your answer..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center"><Send size={18} /></button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
