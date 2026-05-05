import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Send, 
  Copy, 
  Download, 
  Trash2, 
  Plus, 
  Briefcase, 
  Building2, 
  Sparkles,
  Search,
  ChevronRight,
  Save,
  Clock,
  ExternalLink
} from "lucide-react";
import coverLetterService from "../services/coverLetterService";

export default function CoverLetter() {
  const [coverLetters, setCoverLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);
  
  const [formData, setFormData] = useState({
    company: "",
    jobTitle: "",
    jobDescription: "",
    content: ""
  });

  const userId = localStorage.getItem("userId") || "60d0fe4f5311236168a109ca";

  useEffect(() => {
    fetchCoverLetters();
  }, []);

  const fetchCoverLetters = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await coverLetterService.getAllByUser(userId);
      setCoverLetters(data);
    } catch (err) {
      console.error("Error fetching cover letters:", err);
      setError("Failed to load your letters");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const newLetter = await coverLetterService.create({ ...formData, userId });
      setCoverLetters([newLetter, ...coverLetters]);
      setIsCreating(false);
      setFormData({ company: "", jobTitle: "", jobDescription: "", content: "" });
    } catch (error) {
      console.error("Content Creation Error:", error);
      const msg = error.message || error || "Failed to save cover letter";
      alert(`Error: ${msg}`);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this cover letter?")) {
      try {
        await coverLetterService.delete(id);
        setCoverLetters(coverLetters.filter(l => l._id !== id));
        if (selectedLetter?._id === id) setSelectedLetter(null);
      } catch (error) {
        alert("Error deleting cover letter");
      }
    }
  };

  const generateAIContent = () => {
    if (!formData.company || !formData.jobTitle) {
      alert("Please enter Company and Job Title first");
      return;
    }
    // Logic to generate content based on inputs (Simulated AI)
    const generated = `Dear Hiring Manager at ${formData.company},

I am excited to apply for the ${formData.jobTitle} position. With my background in software development and my passion for building innovative solutions, I am confident that I would be a valuable asset to your team.

In my recent experience, I have developed strong skills in full-stack development, specifically focusing on modern frameworks like React and Node.js. I am particularly drawn to ${formData.company} because of your reputation for excellence and innovation in this field.

Thank you for your time and consideration. I look forward to the possibility of discussing how my skills and experience can contribute to the success of your organization.

Best regards,
[Your Name]`;
    
    setFormData({ ...formData, content: generated });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -z-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px] -z-10 animate-blob px-Animation [7s_infinite_2s]"></div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} className="fill-primary" />
            <span>AI-Powered Personalization Engine</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
             Cover <span className="text-gradient">Empire</span>
          </h1>
          <p className="text-lg text-text-muted max-w-2xl">
            Craft persuasive stories that land interviews. Use our AI engine to tailor each letter to the specific role and company culture.
          </p>
        </motion.div>
        <button 
          onClick={() => setIsCreating(true)}
          className="px-8 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.05] transition-all flex items-center gap-2 active:scale-95"
        >
          <Plus size={20} /> New Letter
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LIST SIDEBAR */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass p-6 rounded-[32px] border border-white/10 h-full min-h-[500px] flex flex-col">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <FileText size={18} className="text-primary" /> Your Letters
            </h3>
            
            <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {loading ? (
                <div className="py-20 text-center">
                  <div className="inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : error ? (
                <div className="py-10 text-center text-red-400 text-xs">
                  {error}
                </div>
              ) : coverLetters.length > 0 ? (
                coverLetters.map(letter => (
                  <motion.div
                    key={letter._id}
                    onClick={() => setSelectedLetter(letter)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer group ${selectedLetter?._id === letter._id ? "bg-primary/20 border-primary/40" : "bg-white/5 border-white/5 hover:bg-white/[0.08]"}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-bold text-sm truncate">{letter.jobTitle}</h4>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleDelete(letter._id); }}
                        className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/20 text-red-400 rounded-lg transition-all"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-text-muted font-bold uppercase tracking-widest">
                      <Building2 size={10} /> {letter.company}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[10px] text-text-muted flex items-center gap-1">
                        <Clock size={10} /> {new Date(letter.createdAt).toLocaleDateString()}
                      </span>
                      <ChevronRight size={14} className={`text-text-muted transition-all ${selectedLetter?._id === letter._id ? "translate-x-1 text-primary" : ""}`} />
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="py-10 text-center glass rounded-2xl border border-dashed border-white/10">
                  <p className="text-text-muted text-xs">No letters yet</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            {isCreating ? (
              <motion.div
                key="create"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass p-8 rounded-[40px] border border-primary/20 relative"
              >
                <div className="flex items-center justify-between mb-8 cursor-pointer" onClick={() => setIsCreating(false)}>
                   <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-xl text-primary"><Plus size={20} /></div>
                      Craft New Letter
                   </h3>
                   <button onClick={() => setIsCreating(false)} className="text-text-muted hover:text-white transition-colors">Abort</button>
                </div>

                <form onSubmit={handleCreate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-text-muted uppercase tracking-widest px-1">Target Company</label>
                      <div className="relative group">
                         <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-all" size={18} />
                         <input 
                            required
                            type="text" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                            placeholder="e.g. Google, SpaceX"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                         />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-text-muted uppercase tracking-widest px-1">Job Title</label>
                      <div className="relative group">
                         <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-secondary transition-all" size={18} />
                         <input 
                            required
                            type="text" 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-secondary/50 transition-all"
                            placeholder="e.g. Senior Frontend Lead"
                            value={formData.jobTitle}
                            onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                         />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-muted uppercase tracking-widest px-1">Job Description (Optional)</label>
                    <textarea 
                      rows="3"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                      placeholder="Paste JD for AI matching..."
                      value={formData.jobDescription}
                      onChange={(e) => setFormData({...formData, jobDescription: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Letter Content</label>
                      <button 
                        type="button" 
                        onClick={generateAIContent}
                        className="text-[10px] font-black text-primary flex items-center gap-1 hover:underline"
                      >
                        <Sparkles size={12} /> Auto-Generate Draft
                      </button>
                    </div>
                    <textarea 
                      required
                      rows="12"
                      className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 text-white focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all leading-relaxed custom-scrollbar"
                      placeholder="Write your story here..."
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95"
                  >
                    Save & Initialize <Send size={18} className="inline ml-2" />
                  </button>
                </form>
              </motion.div>
            ) : selectedLetter ? (
              <motion.div
                key="view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass p-10 rounded-[40px] border border-white/10 relative min-h-[600px] flex flex-col"
              >
                <div className="flex items-center justify-between mb-10">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-black font-black text-3xl shadow-2xl">
                          {selectedLetter.company[0]}
                      </div>
                      <div>
                        <h2 className="text-3xl font-black text-white">{selectedLetter.jobTitle}</h2>
                        <div className="flex items-center gap-2 text-primary font-bold">
                           <Building2 size={16} /> {selectedLetter.company}
                        </div>
                      </div>
                   </div>
                   <div className="flex gap-2">
                      <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-white/50 hover:text-white transition-all">
                        <Download size={20} />
                      </button>
                      <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-white/50 hover:text-white transition-all">
                        <Copy size={20} />
                      </button>
                   </div>
                </div>

                <div className="bg-white/[0.03] p-8 rounded-[32px] border border-white/5 flex-1 whitespace-pre-wrap text-text-muted leading-loose text-lg font-medium selection:bg-primary/30">
                  {selectedLetter.content}
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex gap-4">
                   <button 
                    onClick={() => {
                        setFormData({
                            company: selectedLetter.company,
                            jobTitle: selectedLetter.jobTitle,
                            jobDescription: selectedLetter.jobDescription,
                            content: selectedLetter.content
                        });
                        setIsCreating(true);
                    }}
                    className="flex-1 py-4 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all"
                   >
                     Edit Draft
                   </button>
                   <button className="flex-1 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                     Submit Application <ExternalLink size={18} />
                   </button>
                </div>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center py-20 glass rounded-[40px] border border-dashed border-white/10 opacity-50">
                 <div className="p-10 bg-white/5 rounded-full mb-8">
                    <FileText size={80} className="text-white/20" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2">Editor Ready</h3>
                 <p className="text-text-muted text-center max-w-sm px-4">
                    Select a letter from the sidebar or click 'New Letter' to start crafting your next career move.
                 </p>
                 <button 
                    onClick={() => setIsCreating(true)}
                    className="mt-8 px-8 py-3 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all"
                 >
                    Get Started
                 </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
