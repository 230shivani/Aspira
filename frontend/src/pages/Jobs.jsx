import React, { useState } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  Eye,
  Send,
  Sparkles,
  Filter,
  ArrowRight,
  TrendingUp,
  Globe,
  Star,
  Zap,
  ChevronDown,
  X,
  CheckCircle2 as CheckIcon
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import jobService from "../services/jobService";

const categories = ["All Jobs", "Software", "Design", "Marketing", "Data Science", "Product"];
const jobTypes = ["Full-time", "Contract", "Remote", "Freelance"];

const mockJobs = [
  {
    id: 1,
    title: "Senior Product Designer",
    company: "Nebula AI",
    logoColor: "bg-purple-500",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$160K - $220K",
    posted: "2h ago",
    match: 98,
    category: "Design",
    description: "Lead the design evolution of our core AI platform. We're looking for someone who can translate complex neural network data into elegant user experiences."
  },
  {
    id: 2,
    title: "Staff Fullstack Engineer",
    company: "Quantum Labs",
    logoColor: "bg-blue-500",
    location: "Berlin / Remote",
    type: "Remote",
    salary: "$140K - $190K",
    posted: "5h ago",
    match: 94,
    category: "Software",
    description: "Join our rapid-response team building ultra-fast data visualizations for quantum computing monitoring. React 19 and Go stack."
  },
  {
    id: 3,
    title: "Marketing Growth Lead",
    company: "AI CareerHub Global",
    logoColor: "bg-teal-500",
    location: "London, UK",
    type: "Full-time",
    salary: "$120K - $170K",
    posted: "1d ago",
    match: 87,
    category: "Marketing",
    description: "Drive global adoption of AI CareerHub's career tools. Experience with viral loops and community-led growth is a major plus."
  },
  {
    id: 4,
    title: "AI Research Scientist",
    company: "DeepNeural",
    logoColor: "bg-rose-500",
    location: "Toronto, CA",
    type: "Full-time",
    salary: "$180K - $250K",
    posted: "3h ago",
    match: 92,
    category: "Data Science",
    description: "Push the boundaries of localized LLM training. We are building the next generation of private-first artificial intelligence."
  }
];

export default function Jobs() {
  const [tab, setTab] = useState("search");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Jobs");
  const [selectedJob, setSelectedJob] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLiveMode, setIsLiveMode] = useState(false);

  // Fetch jobs from backend
  const fetchJobs = async () => {
    setLoading(true);
    try {
      let data;
      if (isLiveMode) {
        data = await jobService.getLiveJobs();
      } else {
        const params = {};
        if (activeCategory !== "All Jobs") params.category = activeCategory;
        if (searchQuery) params.search = searchQuery;
        data = await jobService.getAllJobs(params);
      }
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchJobs();
  }, [activeCategory, searchQuery, isLiveMode]);

  const handleApply = (jobId) => {
    if (!appliedJobs.includes(jobId)) {
        setAppliedJobs([...appliedJobs, jobId]);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -z-10 animate-blob"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 blur-[120px] -z-10 animate-blob px-Animation [7s_infinite_2s]"></div>

      {/* HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
          <Zap size={14} className="fill-primary" />
          <span>Real-time talent matching engine</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
              Gateway to Your <span className="text-gradient">Empire</span>
            </h1>
            <p className="text-lg text-text-muted max-w-2xl">
                {tab === "search" 
                    ? "Curated opportunities at high-growth organizations. Use our AI filters to find roles that perfectly align with your journey."
                    : "Track your active applications and recruitment progress in one centralized dashboard."
                }
            </p>
          </div>
          <div className="flex gap-2">
             <div className="bg-white/5 border border-white/10 p-2 rounded-2xl flex gap-1">
                <button 
                  onClick={() => { setTab("search"); setIsLiveMode(false); }}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${tab === "search" && !isLiveMode ? "bg-primary text-white shadow-lg" : "text-text-muted hover:text-white"}`}
                >
                  Search
                </button>
                <button 
                  onClick={() => { setTab("search"); setIsLiveMode(true); }}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${tab === "search" && isLiveMode ? "bg-secondary text-white shadow-lg" : "text-text-muted hover:text-white"}`}
                >
                  Live Jobs <Sparkles size={14} className="inline ml-1" />
                </button>
                <button 
                  onClick={() => setTab("applications")}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${tab === "applications" ? "bg-primary text-white shadow-lg" : "text-text-muted hover:text-white"}`}
                >
                  My Apps ({appliedJobs.length})
                </button>
             </div>
          </div>
        </div>
      </motion.div>

      {/* MAIN CONTENT AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* SIDEBAR FILTERS - Only show in search tab */}
        {tab === "search" && (
            <div className="hidden lg:block space-y-8">
            <div className="glass p-6 rounded-3xl border border-white/10 space-y-8">
                <div className="space-y-4">
                <h3 className="text-white font-bold flex items-center gap-2">
                    <Filter size={18} className="text-primary" /> Categories
                </h3>
                <div className="flex flex-col gap-2">
                    {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${activeCategory === cat ? "bg-primary/20 text-primary border border-primary/20" : "text-text-muted hover:bg-white/5"}`}
                    >
                        {cat}
                    </button>
                    ))}
                </div>
                </div>

                <div className="space-y-4">
                <h3 className="text-white font-bold flex items-center gap-2">
                    <Globe size={18} className="text-secondary" /> Job Type
                </h3>
                <div className="space-y-3">
                    {jobTypes.map(type => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-5 h-5 rounded-md bg-white/5 border-white/10 border text-primary focus:ring-primary focus:ring-offset-0" />
                        <span className="text-text-muted text-sm group-hover:text-white transition-colors">{type}</span>
                    </label>
                    ))}
                </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 relative overflow-hidden group">
                    <Sparkles className="absolute top-2 right-2 text-primary/30 group-hover:scale-125 transition-transform" />
                    <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">AI Recommendation</h4>
                    <p className="text-[11px] text-text-muted leading-relaxed">Based on your recent resume update, we found 12 new roles for you.</p>
                    <button className="mt-3 text-primary text-[11px] font-bold underline">View all matched</button>
                </div>
                </div>
            </div>
            </div>
        )}

        {/* FEED AREA */}
        <div className={tab === "search" ? "lg:col-span-3 space-y-6" : "lg:col-span-4 max-w-4xl mx-auto w-full space-y-6"}>
          {tab === "search" ? (
             <>
                <div className="glass p-4 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors" size={20} />
                    <input 
                        type="text"
                        placeholder="Job title, keywords, or company..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/5 border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-white hover:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-medium"
                    />
                    </div>
                    <div className="relative group md:w-64">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-secondary transition-colors" size={20} />
                    <input 
                        type="text"
                        placeholder="Location"
                        className="w-full bg-white/5 border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-white hover:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-secondary/50 transition-all font-medium"
                    />
                    </div>
                </div>

                <AnimatePresence mode="popLayout">
                    <div className="grid grid-cols-1 gap-6">
                        {loading ? (
                          <div className="py-20 text-center">
                            <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                            <p className="mt-4 text-text-muted">Loading opportunities...</p>
                          </div>
                        ) : jobs.length > 0 ? jobs.map((job, idx) => (
                        <JobCard 
                            key={job._id || job.id} 
                            job={job} 
                            index={idx} 
                            isApplied={appliedJobs.includes(job._id || job.id)}
                            onApply={() => handleApply(job._id || job.id)}
                            onView={() => setSelectedJob(job)}
                        />
                        )) : (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-20 text-center glass rounded-3xl border border-dashed border-white/10"
                        >
                            <p className="text-text-muted">No jobs found matching your criteria.</p>
                        </motion.div>
                        )}
                    </div>
                </AnimatePresence>
             </>
          ) : (
            <div className="space-y-6">
                {appliedJobs.length > 0 ? (
                    jobs.filter(j => appliedJobs.includes(j._id || j.id)).map((job, idx) => (
                        <JobCard 
                            key={job._id || job.id} 
                            job={job} 
                            index={idx} 
                            isApplied={true}
                            onView={() => setSelectedJob(job)}
                        />
                    ))
                ) : (
                    <div className="py-20 text-center glass rounded-[40px] border border-dashed border-white/10">
                        <Briefcase className="mx-auto text-white/10 mb-6" size={64} />
                        <h3 className="text-xl font-bold text-white mb-2">No Applications Yet</h3>
                        <p className="text-text-muted mb-8">Start applying to your dream roles to track them here.</p>
                        <button onClick={() => setTab("search")} className="px-8 py-3 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20">Browse Jobs</button>
                    </div>
                )}
            </div>
          )}
        </div>
      </div>

      {/* DETAIL MODAL */}
      <AnimatePresence>
        {selectedJob && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
               <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedJob(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
               />
               <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-bg-main border border-white/10 w-full max-w-2xl rounded-[40px] overflow-hidden shadow-2xl"
               >
                  <div className={`h-32 ${selectedJob.logoColor} relative flex items-center justify-center`}>
                     <button onClick={() => setSelectedJob(null)} className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all">
                        <X size={20} />
                     </button>
                     <div className="w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center text-4xl font-black translate-y-12">
                        {selectedJob.company[0]}
                     </div>
                  </div>
                  <div className="p-10 pt-16 space-y-6">
                     <div className="text-center">
                        <h2 className="text-3xl font-black text-white">{selectedJob.title}</h2>
                        <div className="text-primary font-bold text-lg">{selectedJob.company}</div>
                     </div>
                     <div className="flex flex-wrap items-center justify-center gap-6 py-4 border-y border-white/5">
                        <span className="flex items-center gap-2 text-text-muted text-sm"><MapPin size={16} /> {selectedJob.location}</span>
                        <span className="flex items-center gap-2 text-text-muted text-sm"><Briefcase size={16} /> {selectedJob.type}</span>
                        <span className="flex items-center gap-2 text-text-muted text-sm"><DollarSign size={16} /> {selectedJob.salary}</span>
                     </div>
                     <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">Full Decription</h4>
                        <p className="text-text-muted leading-relaxed">
                            {selectedJob.description} We are seeking a visionary individual who can navigate the fast-paced ecosystem of AI development. You will collaborate with cross-functional teams to deliver pixel-perfect designs and scalable code architectures.
                        </p>
                     </div>
                     <div className="pt-6">
                        <button 
                            disabled={appliedJobs.includes(selectedJob._id || selectedJob.id)}
                            onClick={() => {
                                handleApply(selectedJob._id || selectedJob.id);
                                setSelectedJob(null);
                            }}
                            className={`w-full py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 ${appliedJobs.includes(selectedJob._id || selectedJob.id) 
                                ? "bg-green-500/10 text-green-400 border border-green-500/20" 
                                : "bg-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02]"
                            }`}
                        >
                            {appliedJobs.includes(selectedJob._id || selectedJob.id) ? (
                                <> <CheckIcon size={20} /> Applied Successfully </>
                            ) : (
                                <> Apply for this Role <ArrowRight size={20} /> </>
                            )}
                        </button>
                     </div>
                  </div>
               </motion.div>
            </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function JobCard({ job, index, isApplied, onApply, onView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group glass p-8 rounded-3xl border border-white/5 hover:border-primary/20 hover:bg-white/[0.08] transition-all duration-300 relative overflow-hidden"
    >
      {/* Match Badge - Top Right */}
      <div className="absolute top-0 right-0 p-1 pr-6 pt-6">
         <div className={`text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 ${isApplied ? "bg-green-500/20 text-green-400 border border-green-400/20" : "bg-gradient-to-tr from-primary to-secondary animate-pulse"}`}>
            {isApplied ? <CheckIcon size={12} /> : <Star size={12} className="fill-white" />}
            {isApplied ? "APPLICATION SENT" : `${job.match}% MATCH`}
         </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Company Logo */}
        <div className={`w-16 h-16 rounded-2xl ${job.logoColor} shrink-0 flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-black/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
          {job.company[0]}
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-2xl font-black text-white group-hover:text-primary transition-colors leading-tight">
              {job.title}
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
               <span className="text-secondary font-bold text-sm tracking-wide">{job.company}</span>
               <span className="w-1 h-1 bg-white/20 rounded-full mt-2.5"></span>
               <span className="text-text-muted text-sm flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
               <span className="w-1 h-1 bg-white/20 rounded-full mt-2.5"></span>
               <span className="text-text-muted text-sm flex items-center gap-1"><Clock size={14} /> {job.posted}</span>
            </div>
          </div>

          <p className="text-text-muted text-sm leading-relaxed line-clamp-2 max-w-2xl">
            {job.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
             <span className="px-3 py-1 bg-white/5 rounded-lg text-xs font-bold text-white/50 group-hover:text-white transition-colors">{job.type}</span>
             <span className="px-3 py-1 bg-white/5 rounded-lg text-xs font-bold text-white/50 group-hover:text-white transition-colors">{job.salary}</span>
             <span className="px-3 py-1 bg-primary/10 rounded-lg text-xs font-bold text-primary">{job.category}</span>
          </div>
        </div>

        <div className="flex md:flex-col justify-end gap-3 mt-4 md:mt-0">
           <button 
                onClick={onApply}
                disabled={isApplied}
                className={`flex-1 md:flex-none px-6 py-3 font-bold rounded-xl active:scale-95 transition-all text-sm flex items-center justify-center gap-2 ${isApplied 
                    ? "bg-green-500/10 text-green-400 border border-green-500/20 cursor-default" 
                    : "bg-white text-black hover:bg-white/90"
                }`}
            >
              {isApplied ? (
                <> <CheckIcon size={16} /> Saved </>
              ) : (
                <> Apply Now <ArrowRight size={16} /> </>
              )}
           </button>
           <button 
                onClick={onView}
                className="flex-1 md:flex-none px-6 py-3 bg-white/5 text-white/70 font-bold rounded-xl hover:bg-white/10 border border-white/5 transition-all text-sm flex items-center justify-center gap-2"
            >
              <Eye size={16} />
              View
           </button>
        </div>
      </div>
    </motion.div>
  );
}



