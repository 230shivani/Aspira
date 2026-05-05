import React, { useState, useRef } from "react";
<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Trash2,
  FileText,
  User,
  Briefcase,
  GraduationCap,
  Wrench,
  FolderRoot,
  Download,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

const steps = [
  { id: "personal", name: "Personal Info", icon: <User size={18} /> },
  { id: "experience", name: "Work Experience", icon: <Briefcase size={18} /> },
  { id: "education", name: "Education", icon: <GraduationCap size={18} /> },
  { id: "skills", name: "Skills", icon: <Wrench size={18} /> },
  { id: "projects", name: "Projects", icon: <FolderRoot size={18} /> },
];

export default function Resume() {
  const contentRef = useRef();

  const handlePrint = () => {
    const content = contentRef.current;
    if (!content) return;

    const printWindow = window.open("", "_blank", "width=800,height=1000");
    if (!printWindow) {
      alert("Please allow popups to download the resume.");
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>${data.name || "Resume"}_AI_CarrerHub</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            body { 
              font-family: 'Inter', sans-serif; 
              background: white; 
              color: black; 
              padding: 0;
              margin: 0;
            }
            .resume-content { padding: 40px; }
            @page { margin: 0; size: auto; }
            * { -webkit-print-color-adjust: exact; }
          </style>
        </head>
        <body class="bg-white">
          <div class="resume-content">
            ${content.innerHTML}
          </div>
          <script>
            window.onload = () => {
              setTimeout(() => {
                window.print();
                window.close();
              }, 500);
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const [activeStep, setActiveStep] = useState("personal");
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [data, setData] = useState({
    name: "",
    title: "",
    location: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    resumeSummary: "",
    experience: [{ role: "", company: "", period: "", description: "" }],
    education: [{ degree: "", school: "", year: "", gpa: "" }],
    skills: "",
    projects: [{ name: "", tech: "", description: "", github: "", live: "" }],
  });

  const templates = [
    { id: "modern", name: "Modern", description: "Centered & Clean" },
    { id: "professional", name: "Professional", description: "Left-aligned & Classic" },
    { id: "creative", name: "Creative", description: "Modern Two-column" },
    { id: "technical", name: "Technical", description: "Developer Focused" },
  ];

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "technical":
        return (
          <div ref={contentRef} className="bg-white text-black p-10 font-sans leading-tight border-t-8 border-gray-900">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">{data.name || "YOUR NAME"}</h1>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mt-1">{data.title}</p>
              </div>
              <div className="text-right space-y-1">
                <div className="text-[10px] font-bold text-gray-500">{data.location}</div>
                <div className="text-[10px] font-bold text-gray-900">{data.email}</div>
                <div className="text-[10px] font-bold text-gray-900">{data.phone}</div>
                <div className="flex gap-2 justify-end mt-2">
                  {data.github && <span className="px-2 py-0.5 bg-gray-100 rounded text-[8px] font-mono">github.com/{data.github}</span>}
                  {data.linkedin && <span className="px-2 py-0.5 bg-gray-100 rounded text-[8px] font-mono">linkedin.in/{data.linkedin}</span>}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-900 rounded text-white flex items-center justify-center text-[8px]">{">_"}</span>
                Technical Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.split(',').map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-md text-[9px] font-bold text-gray-700">
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-[2px] bg-blue-600"></span> Experience
              </h2>
              {data.experience.map((exp, i) => (
                <div key={i} className="mb-5">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-[11px] font-black text-gray-900">{exp.role} @ {exp.company}</h3>
                    <span className="text-[9px] font-mono font-bold text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-[9.5px] text-gray-600 leading-relaxed whitespace-pre-line pl-4 border-l-2 border-blue-50">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-[2px] bg-blue-600"></span> Projects
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {data.projects.map((proj, i) => (
                  <div key={i} className="p-3 border border-gray-100 rounded-xl hover:border-blue-100 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-[10px] font-black text-gray-900">{proj.name}</h3>
                      <div className="flex gap-1">
                        {proj.github && <span className="text-[7px] text-blue-500 font-bold uppercase">Code</span>}
                        {proj.live && <span className="text-[7px] text-green-500 font-bold uppercase">Live</span>}
                      </div>
                    </div>
                    <p className="text-[8px] font-mono text-blue-400 mb-2">{proj.tech}</p>
                    <p className="text-[9px] text-gray-500 leading-snug">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Education</h2>
              {data.education.map((edu, i) => (
                <div key={i} className="flex justify-between text-[10px]">
                  <span className="font-bold text-gray-900">{edu.degree} — {edu.school}</span>
                  <span className="font-bold text-gray-400 italic">{edu.year} • {edu.gpa}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "professional":
        return (
          <div ref={contentRef} className="bg-white text-black p-10 font-serif leading-tight">
            <div className="border-b-2 border-black pb-2 mb-6">
              <h1 className="text-3xl font-bold text-gray-900">{data.name || "YOUR NAME"}</h1>
              <p className="text-sm font-medium text-gray-600 mt-1">{data.title}</p>
              <div className="text-[10px] text-gray-600 flex flex-wrap gap-x-3 mt-2">
                {data.location && <span>{data.location}</span>}
                {data.email && <span>{data.email}</span>}
                {data.phone && <span>{data.phone}</span>}
                {data.linkedin && <span>LinkedIn: {data.linkedin}</span>}
              </div>
            </div>

            {data.resumeSummary && (
              <div className="mb-6">
                <h2 className="text-xs font-bold text-gray-900 border-b border-gray-300 mb-2 uppercase tracking-widest">Profile</h2>
                <p className="text-[10px] text-gray-800 leading-relaxed italic">{data.resumeSummary}</p>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-xs font-bold text-gray-900 border-b border-gray-300 mb-3 uppercase tracking-widest">Experience</h2>
              {data.experience.map((exp, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-[11px] font-bold text-gray-900">{exp.role}</h3>
                    <span className="text-[10px] font-medium text-gray-600">{exp.period}</span>
                  </div>
                  <div className="text-[10px] font-semibold text-gray-700 mb-1">{exp.company}</div>
                  <p className="text-[10px] text-gray-800 whitespace-pre-line leading-relaxed pl-2 border-l border-gray-100">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h2 className="text-xs font-bold text-gray-900 border-b border-gray-300 mb-3 uppercase tracking-widest">Projects</h2>
              {data.projects.map((proj, i) => (
                <div key={i} className="mb-3">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-[11px] font-bold text-gray-900">{proj.name}</h3>
                    <span className="text-[10px] italic text-gray-600">{proj.tech}</span>
                  </div>
                  <p className="text-[10px] text-gray-800 leading-relaxed mb-1">{proj.description}</p>
                  <div className="flex gap-3">
                    {proj.github && <span className="text-[9px] text-blue-600">Github: {proj.github}</span>}
                    {proj.live && <span className="text-[9px] text-blue-600">Live: {proj.live}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-xs font-bold text-gray-900 border-b border-gray-300 mb-3 uppercase tracking-widest">Education</h2>
                {data.education.map((edu, i) => (
                  <div key={i} className="mb-2">
                    <div className="text-[10.5px] font-bold text-gray-900">{edu.degree}</div>
                    <div className="text-[10px] text-gray-700">{edu.school}</div>
                    <div className="text-[9px] font-medium text-gray-500">{edu.year} • {edu.gpa}</div>
                  </div>
                ))}
              </div>
              <div>
                <h2 className="text-xs font-bold text-gray-900 border-b border-gray-300 mb-3 uppercase tracking-widest">Expertise</h2>
                <p className="text-[10px] text-gray-800 leading-relaxed">{data.skills}</p>
              </div>
            </div>
          </div>
        );
      case "creative":
        return (
          <div ref={contentRef} className="bg-white text-black min-h-[700px] flex font-sans">
            {/* Sidebar */}
            <div className="w-1/3 bg-gray-900 text-white p-8 space-y-8">
              <div className="text-center">
                <h1 className="text-xl font-black uppercase tracking-tighter leading-none mb-2">{data.name || "YOUR NAME"}</h1>
                <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">{data.title}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-[11px] font-black uppercase border-b border-white/20 pb-1 text-blue-400">Contact</h2>
                <div className="space-y-2 text-[9px]">
                  {data.email && <div className="flex flex-col"><span className="text-white/40">Email</span>{data.email}</div>}
                  {data.phone && <div className="flex flex-col"><span className="text-white/40">Phone</span>{data.phone}</div>}
                  {data.location && <div className="flex flex-col"><span className="text-white/40">Address</span>{data.location}</div>}
                  {data.linkedin && <div className="flex flex-col"><span className="text-white/40">LinkedIn</span>{data.linkedin}</div>}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-[11px] font-black uppercase border-b border-white/20 pb-1 text-blue-400">Education</h2>
                {data.education.map((edu, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-[10px] font-bold">{edu.degree}</div>
                    <div className="text-[9px] text-white/60">{edu.school}</div>
                    <div className="text-[8px] text-blue-300">{edu.year}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h2 className="text-[11px] font-black uppercase border-b border-white/20 pb-1 text-blue-400">Skills</h2>
                <div className="flex flex-wrap gap-1.5">
                  {data.skills.split(',').map((skill, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white/10 rounded-sm text-[8px]">{skill.trim()}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-2/3 p-8">
              {data.resumeSummary && (
                <div className="mb-8">
                  <h2 className="text-[13px] font-black uppercase mb-3 text-gray-900 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-blue-600"></span> About Me
                  </h2>
                  <p className="text-[10px] text-gray-600 leading-relaxed">{data.resumeSummary}</p>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-[13px] font-black uppercase mb-4 text-gray-900 flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-blue-600"></span> Experience
                </h2>
                {data.experience.map((exp, i) => (
                  <div key={i} className="mb-6 relative pl-4 border-l-2 border-gray-100">
                    <div className="absolute w-2 h-2 bg-blue-600 rounded-full -left-[5px] top-1"></div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-[11px] font-bold text-gray-900">{exp.role}</h3>
                      <span className="text-[9px] font-bold text-gray-400">{exp.period}</span>
                    </div>
                    <div className="text-[10px] font-bold text-blue-600 mb-2">{exp.company}</div>
                    <p className="text-[9.5px] text-gray-600 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-[13px] font-black uppercase mb-4 text-gray-900 flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-blue-600"></span> Projects
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {data.projects.map((proj, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg">
                      <h3 className="text-[10.5px] font-bold text-gray-900 mb-1">{proj.name}</h3>
                      <p className="text-[9px] text-gray-500 mb-2 italic">{proj.tech}</p>
                      <p className="text-[9.5px] text-gray-600 leading-snug">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      default: // Modern
        return (
          <div ref={contentRef} className="bg-white text-black p-10 font-sans leading-tight">
            <div className="text-center border-b-[1.5px] border-black pb-4 mb-4">
              <h1 className="text-2xl font-bold uppercase tracking-wide mb-1">{data.name || "YOUR NAME"}</h1>
              <div className="text-[10px] font-medium text-gray-700 flex flex-wrap justify-center gap-x-2">
                {data.location && <span>{data.location}</span>}
                {data.email && <span>• {data.email}</span>}
                {data.phone && <span>• {data.phone}</span>}
                {data.linkedin && <span>• LinkedIn: {data.linkedin}</span>}
              </div>
            </div>

            {data.resumeSummary && (
              <div className="mb-4">
                <h2 className="text-[11px] font-bold border-b border-gray-300 mb-1 uppercase tracking-wider">Professional Summary</h2>
                <p className="text-[10px] text-gray-800 leading-normal">{data.resumeSummary}</p>
              </div>
            )}

            <div className="mb-4">
              <h2 className="text-[11px] font-bold border-b border-gray-300 mb-1 uppercase tracking-wider">Professional Experience</h2>
              {data.experience.map((exp, i) => (
                <div key={i} className="mb-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-[10.5px] font-bold">{exp.role}</h3>
                    <span className="text-[9px] font-semibold">{exp.period}</span>
                  </div>
                  <div className="text-[9.5px] font-bold text-gray-700 italic">{exp.company}</div>
                  <p className="text-[9.5px] text-gray-800 mt-1 whitespace-pre-line leading-normal">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <h2 className="text-[11px] font-bold border-b border-gray-300 mb-1 uppercase tracking-wider">Projects</h2>
              {data.projects.map((proj, i) => (
                <div key={i} className="mb-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-[10.5px] font-bold">{proj.name}</h3>
                    <div className="flex gap-2">
                      {proj.github && <span className="text-[8px] text-gray-500">GitHub: {proj.github}</span>}
                      {proj.live && <span className="text-[8px] text-gray-500">Live: {proj.live}</span>}
                      <span className="text-[9px] italic text-gray-600 font-medium">{proj.tech}</span>
                    </div>
                  </div>
                  <p className="text-[9.5px] text-gray-800 leading-normal">{proj.description}</p>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <h2 className="text-[11px] font-bold border-b border-gray-300 mb-1 uppercase tracking-wider">Education</h2>
              {data.education.map((edu, i) => (
                <div key={i} className="mb-1">
                  <div className="flex justify-between items-baseline">
                    <div className="text-[10px] font-bold">{edu.degree} — {edu.school}</div>
                    <span className="text-[9px] font-semibold">{edu.year}</span>
                  </div>
                  {edu.gpa && <div className="text-[9px] text-gray-700">CGPA/GPA: {edu.gpa}</div>}
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-[11px] font-bold border-b border-gray-300 mb-1 uppercase tracking-wider">Skills</h2>
              <p className="text-[10px] leading-normal">{data.skills}</p>
            </div>
          </div>
        );
    }
  };

  const updateField = (section, index, field, value) => {
    if (index === null) {
      setData({ ...data, [section]: value });
    } else {
      const newList = [...data[section]];
      newList[index][field] = value;
      setData({ ...data, [section]: newList });
    }
  };

  const addItem = (section, defaultItem) => {
    setData({ ...data, [section]: [...data[section], defaultItem] });
  };

  const removeItem = (section, index) => {
    if (data[section].length > 1) {
      const newList = data[section].filter((_, i) => i !== index);
      setData({ ...data, [section]: newList });
    }
  };

  const calculateScore = () => {
    let score = 0;
    if (data.name) score += 10;
    if (data.resumeSummary) score += 15;
    if (data.experience[0].role) score += 25;
    if (data.education[0].degree) score += 15;
    if (data.skills) score += 15;
    if (data.projects[0].name) score += 20;
    return score;
  };

  return (
    <div className="min-h-screen bg-mesh py-12 px-4 md:px-8">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/10 to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            ATS <span className="text-gradient">Optimizer</span>
          </motion.h1>
          <p className="text-text-muted">Create a professional, high-scoring resume in real-time.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* BUILDER SIDE */}
          <div className="lg:col-span-6 space-y-6">
            {/* Stepper Tabs */}
            <div className="glass p-2 rounded-2xl flex overflow-x-auto no-scrollbar gap-1 border border-white/10">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${activeStep === step.id
                      ? "bg-primary text-white shadow-lg"
                      : "text-text-muted hover:text-white hover:bg-white/5"
                    }`}
                >
                  {step.icon}
                  {step.name}
                </button>
              ))}
            </div>

            {/* Template Selection */}
            <div className="glass p-4 rounded-3xl border border-white/10 shadow-xl">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4 block">Select Format</label>
              <div className="grid grid-cols-3 gap-3">
                {templates.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTemplate(t.id)}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl border-2 transition-all ${
                      selectedTemplate === t.id 
                        ? "border-primary bg-primary/10" 
                        : "border-white/5 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <FileText size={16} className={selectedTemplate === t.id ? "text-primary" : "text-text-muted"} />
                    </div>
                    <span className={`text-[10px] font-bold ${selectedTemplate === t.id ? "text-white" : "text-text-muted"}`}>{t.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="glass p-8 rounded-3xl border border-white/10 shadow-xl min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {activeStep === "personal" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="Full Name" value={data.name} onChange={(v) => updateField("name", null, null, v)} placeholder="John Doe" />
                      <Input label="Job Title" value={data.title} onChange={(v) => updateField("title", null, null, v)} placeholder="Senior Software Engineer" />
                      <Input label="Email Address" value={data.email} onChange={(v) => updateField("email", null, null, v)} placeholder="john@example.com" />
                      <Input label="Phone" value={data.phone} onChange={(v) => updateField("phone", null, null, v)} placeholder="+1 234 567 890" />
                      <Input label="Location" value={data.location} onChange={(v) => updateField("location", null, null, v)} placeholder="New York, NY" />
                      <Input label="LinkedIn" value={data.linkedin} onChange={(v) => updateField("linkedin", null, null, v)} placeholder="linkedin.com/in/johndoe" />
                      <div className="md:col-span-2">
                        <label className="text-sm font-semibold text-text-muted mb-2 block">Professional Summary</label>
                        <textarea
                          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-primary h-32 resize-none"
                          value={data.resumeSummary}
                          onChange={(e) => updateField("resumeSummary", null, null, e.target.value)}
                          placeholder="Briefly describe your career achievements and goals..."
                        />
                      </div>
                    </div>
                  )}

                  {activeStep === "experience" && (
                    <div className="space-y-8">
                      {data.experience.map((exp, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4 relative group">
                          <button onClick={() => removeItem("experience", index)} className="absolute top-4 right-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Trash2 size={18} />
                          </button>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Role" value={exp.role} onChange={(v) => updateField("experience", index, "role", v)} placeholder="Software Engineer" />
                            <Input label="Company" value={exp.company} onChange={(v) => updateField("experience", index, "company", v)} placeholder="Google" />
                            <Input label="Period" value={exp.period} onChange={(v) => updateField("experience", index, "period", v)} placeholder="Jan 2021 - Present" />
                            <div className="md:col-span-2">
                              <label className="text-sm font-semibold text-text-muted mb-2 block">Key Achievements</label>
                              <textarea
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-primary h-24 resize-none"
                                value={exp.description}
                                onChange={(e) => updateField("experience", index, "description", e.target.value)}
                                placeholder="Bullet points of your impact..."
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={() => addItem("experience", { role: "", company: "", period: "", description: "" })}
                        className="w-full py-4 border border-dashed border-white/20 rounded-2xl text-text-muted hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                      >
                        <Plus size={18} /> Add Experience
                      </button>
                    </div>
                  )}

                  {activeStep === "education" && (
                    <div className="space-y-6">
                      {data.education.map((edu, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4 relative group">
                          <button onClick={() => removeItem("education", index)} className="absolute top-4 right-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Trash2 size={18} />
                          </button>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Degree" value={edu.degree} onChange={(v) => updateField("education", index, "degree", v)} placeholder="B.Tech" />
                            <Input label="Institution" value={edu.school} onChange={(v) => updateField("education", index, "school", v)} placeholder="IIT Bombay" />
                            <Input label="Graduation Year" value={edu.year} onChange={(v) => updateField("education", index, "year", v)} placeholder="2020" />
                            <Input label="GPA / Percentage" value={edu.gpa} onChange={(v) => updateField("education", index, "gpa", v)} placeholder="9.0/10" />
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={() => addItem("education", { degree: "", school: "", year: "", gpa: "" })}
                        className="w-full py-4 border border-dashed border-white/20 rounded-2xl text-text-muted hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                      >
                        <Plus size={18} /> Add Education
                      </button>
                    </div>
                  )}

                  {activeStep === "skills" && (
                    <div className="space-y-4">
                      <label className="text-sm font-semibold text-text-muted mb-2 block">Technical & Soft Skills</label>
                      <textarea
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-primary h-64 resize-none"
                        value={data.skills}
                        onChange={(e) => updateField("skills", null, null, e.target.value)}
                        placeholder="React.js, Node.js, AWS, System Design, Communication..."
                      />
                      <div className="flex gap-2">
                        {["JavaScript", "Python", "Docker", "Agile"].map(s => (
                          <button key={s} onClick={() => updateField("skills", null, null, data.skills + (data.skills ? ", " : "") + s)} className="px-3 py-1 bg-white/5 rounded-full text-xs text-text-muted hover:text-white transition-colors">+{s}</button>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeStep === "projects" && (
                    <div className="space-y-6">
                      {data.projects.map((proj, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4 relative group">
                          <button onClick={() => removeItem("projects", index)} className="absolute top-4 right-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Trash2 size={18} />
                          </button>
                          <Input label="Project Name" value={proj.name} onChange={(v) => updateField("projects", index, "name", v)} placeholder="AI CarrerHub AI" />
                          <div className="grid grid-cols-2 gap-4">
                            <Input label="Github Link" value={proj.github} onChange={(v) => updateField("projects", index, "github", v)} placeholder="github.com/user/repo" />
                            <Input label="Live Demo" value={proj.live} onChange={(v) => updateField("projects", index, "live", v)} placeholder="project.vercel.app" />
                          </div>
                          <Input label="Tech Stack" value={proj.tech} onChange={(v) => updateField("projects", index, "tech", v)} placeholder="React, Tailwind, Framer Motion" />
                          <textarea
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-1 focus:ring-primary h-24 resize-none"
                            value={proj.description}
                            onChange={(e) => updateField("projects", index, "description", e.target.value)}
                            placeholder="Describe your project impact..."
                          />
                        </div>
                      ))}
                      <button
                        onClick={() => addItem("projects", { name: "", tech: "", description: "", github: "", live: "" })}
                        className="w-full py-4 border border-dashed border-white/20 rounded-2xl text-text-muted hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                      >
                        <Plus size={18} /> Add Project
                      </button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="mt-12 flex justify-between">
                <button
                  disabled={activeStep === "personal"}
                  onClick={() => {
                    const idx = steps.findIndex(s => s.id === activeStep);
                    setActiveStep(steps[idx - 1].id);
                  }}
                  className="px-6 py-2.5 rounded-xl border border-white/10 text-white flex items-center gap-2 hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={18} /> Back
                </button>
                <button
                  onClick={() => {
                    const idx = steps.findIndex(s => s.id === activeStep);
                    if (idx < steps.length - 1) setActiveStep(steps[idx + 1].id);
                    else handlePrint();
                  }}
                  className="px-8 py-2.5 rounded-xl bg-primary text-white font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  {activeStep === "projects" ? "Finalize & Download" : "Next Step"} <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* PREVIEW SIDE */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white/5 p-4 rounded-3xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">ATS Scorer</h4>
                  <p className="text-text-muted text-xs">Based on current industry standards</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-black text-secondary">{calculateScore()}%</div>
                </div>
                <button onClick={handlePrint} className="p-3 bg-primary rounded-xl text-white shadow-lg shadow-primary/20 hover:scale-110 transition-transform">
                  <Download size={20} />
                </button>
              </div>
            </div>

            {/* Smart Tips */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-2xl flex gap-3">
                <AlertCircle className="text-blue-400 shrink-0" size={18} />
                <div>
                  <div className="text-white text-xs font-bold mb-1">ATS Tip</div>
                  <p className="text-[10px] text-blue-200/70">Use standard fonts like Arial or Roboto for better parser readability.</p>
                </div>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-2xl flex gap-3">
                <CheckCircle2 className="text-green-400 shrink-0" size={18} />
                <div>
                  <div className="text-white text-xs font-bold mb-1">Strategy</div>
                  <p className="text-[10px] text-green-200/70">Mirror keywords from the job description in your skills section.</p>
                </div>
              </div>
            </div>

            {/* Resume Page Preview */}
            <div className="sticky top-24 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="bg-gray-800 p-2 border-b border-white/5 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/50"></div>
                <span className="text-[10px] text-white/30 ml-2 font-medium uppercase">{selectedTemplate}_TEMPLATE.PDF</span>
              </div>
              <div className="h-[700px] overflow-y-auto no-scrollbar bg-white p-1">
                {renderTemplate()}
              </div>

              {/* DOWNLOAD BUTTON OVERLAY */}
              <div className="p-6 bg-[#020617]/80 backdrop-blur-md border-t border-white/10">
                <button
                  onClick={handlePrint}
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                >
                  <Download size={22} />
                  Download {selectedTemplate.charAt(0).toUpperCase() + selectedTemplate.slice(1)} Resume (PDF)
                </button>
              </div>
            </div>
=======
import { Download, Eye, EyeOff } from "lucide-react";
import html2pdf from "html2pdf.js";
import { ClassicTemplate, ModernTemplate, MinimalistTemplate, CreativeTemplate, TwoColumnTemplate, ExecutiveTemplate, ColorfulTemplate, AtsFriendlyTemplate } from "../components/ResumeTemplates";

const Resume = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("classic");
  const [showPreview, setShowPreview] = useState(false);
  const previewRef = useRef(null);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    professionalSummary: "",
    skills: "",
    experienceYears: "",
    education: "",
    certifications: "",
    projects: "",
    languages: "",
    linkedin: "",
    portfolio: "",
  });

  const templates = {
    classic: { name: "Classic", component: ClassicTemplate, color: "from-gray-600 to-gray-800" },
    modern: { name: "Modern", component: ModernTemplate, color: "from-blue-600 to-blue-800" },
    minimalist: { name: "Minimalist", component: MinimalistTemplate, color: "from-gray-500 to-gray-700" },
    creative: { name: "Creative", component: CreativeTemplate, color: "from-purple-600 to-purple-800" },
    twoColumn: { name: "Two Column", component: TwoColumnTemplate, color: "from-slate-700 to-slate-900" },
    executive: { name: "Executive", component: ExecutiveTemplate, color: "from-amber-700 to-amber-900" },
    colorful: { name: "Colorful", component: ColorfulTemplate, color: "from-teal-500 to-blue-600" },
    ats: { name: "ATS-Friendly", component: AtsFriendlyTemplate, color: "from-gray-700 to-gray-900" },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const downloadResumePDF = () => {
    if (!previewRef.current) return;

    const element = previewRef.current;
    const opt = {
      margin: 5,
      filename: `resume-${formData.fullName || "resume"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
    };

    html2pdf().set(opt).from(element).save();
  };

  const SelectedTemplate = templates[selectedTemplate].component;

  return (
    <div className="bg-[#06122b] text-white min-h-screen pb-12">
      <div className="py-16 px-6 md:px-20">
        <h1 className="text-[34px] md:text-[38px] font-extrabold mb-6 text-center">
          Resume & Profile
        </h1>

        <p className="text-[17px] md:text-[18px] text-[#b5c7f7] text-center max-w-2xl mx-auto mb-12">
          Create a professional resume with our built-in templates and get AI-powered feedback.
        </p>

        {/* Template Selector */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-xl font-bold mb-6">Select Your Template</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(templates).map(([key, template]) => (
              <button
                key={key}
                onClick={() => setSelectedTemplate(key)}
                className={`p-6 rounded-xl border-2 transition-all ${
                  selectedTemplate === key
                    ? "border-[#3a8cff] bg-[#0f2555] shadow-lg shadow-blue-500/50"
                    : "border-[#1a2b4f] bg-[#0b1a3a] hover:border-[#3a8cff]"
                }`}>
                <div className={`bg-gradient-to-r ${template.color} h-20 rounded-lg mb-4`}></div>
                <h3 className="font-bold text-lg">{template.name}</h3>
                <p className="text-sm text-[#8b9cc9] mt-1">Professional template</p>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form Section */}
          <div className="space-y-6 max-h-[750px] overflow-y-auto pr-2">
            {/* Contact Information Section */}
            <div className="bg-[#0b1a3a] p-6 rounded-2xl shadow-lg border border-[#1a2b4f]">
              <h3 className="text-lg font-bold mb-4 text-[#3a8cff]">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#cfd9f7] mb-2">Full Name *</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-[#0f1f45] p-3 rounded-lg w-full text-white border border-[#1e325d] focus:border-[#3a8cff] focus:outline-none transition"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#cfd9f7] mb-2">Email</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      className="bg-[#0f1f45] p-3 rounded-lg w-full text-white border border-[#1e325d] focus:border-[#3a8cff] focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#cfd9f7] mb-2">Phone</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1-234-567-8900"
                      className="bg-[#0f1f45] p-3 rounded-lg w-full text-white border border-[#1e325d] focus:border-[#3a8cff] focus:outline-none transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#cfd9f7] mb-2">Location</label>
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="New York, USA"
                    className="bg-[#0f1f45] p-3 rounded-lg w-full text-white border border-[#1e325d] focus:border-[#3a8cff] focus:outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information Section */}
            <div className="bg-[#0b1a3a] p-6 rounded-2xl shadow-lg border border-[#1a2b4f]">
              <h3 className="text-lg font-bold mb-4 text-[#3a8cff]">Professional Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#cfd9f7] mb-2">Professional Summary</label>
                  <textarea
                    name="professionalSummary"
                    value={formData.professionalSummary}
                    onChange={handleChange}
                    placeholder="A brief overview of your professional background and career goals..."
                    className="bg-[#0f1f45] p-3 rounded-lg h-20 w-full text-white border border-[#1e325d] focus:border-[#3a8cff] focus:outline-none transition resize-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#cfd9f7] mb-2">Years of Experience</label>
                    <input
                      name="experienceYears"
                      value={formData.experienceYears}
                      onChange={handleChange}
                      placeholder="5"
                      type="number"
                      className="bg-[#0f1f45] p-3 rounded-lg w-full text-white border border-[#1e325d] focus:border-[#3a8cff] focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#cfd9f7] mb-2">Languages</label>
                    <input
                      name="languages"
                      value={formData.languages}
                      onChange={handleChange}
                      placeholder="English, Spanish, French"
                      className="bg-[#0f1f45] p-3 rounded-lg w-full text-white border border-[#1e325d] focus:border-[#3a8cff] focus:outline-none transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#cfd9f7] mb-2">Technical Skills</label>
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="React, Node.js, TypeScript, MongoDB, AWS, Docker..."
                    className="bg-[#0f1f45] p-3 rounded-lg h-20 w-full text-white border border-[#1e325d] focus:border-[#3a8cff] focus:outline-none transition resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Education & Certifications Section */}
            <div className="bg-[#0b1a3a] p-6 rounded-2xl shadow-lg border border-[#1a2b4f]">
              <h3 className="text-lg font-bold mb-4 text-[#3a8cff]">Education & Certifications</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#cfd9f7] mb-2">Education</label>
                  <textarea
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    placeholder="Bachelor of Science in Computer Science from XYZ University (2020)"
                    className="bg-[#0f1f45] p-3 rounded-lg h-16 w-full text-white border border-[#1e325d] focus:border-[#3a8cff] focus:outline-none transition resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#cfd9f7] mb-2">Certifications</label>
                  <textarea
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleChange}
                    placeholder="AWS Certified Solutions Architect, Google Cloud Associate..."
                    className="bg-[#0f1f45] p-3 rounded-lg h-16 w-full text-white border border-[#1e325d] focus:border-[#3a8cff] focus:outline-none transition resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Projects & Links Section */}
            <div className="bg-[#0b1a3a] p-6 rounded-2xl shadow-lg border border-[#1a2b4f]">
              <h3 className="text-lg font-bold mb-4 text-[#3a8cff]">Projects & Links</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#cfd9f7] mb-2">LinkedIn URL</label>
                  <input
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/johndoe"
                    className="bg-[#0f1f45] p-3 rounded-lg w-full text-white border border-[#1e325d] focus:border-[#3a8cff] focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#cfd9f7] mb-2">Portfolio / GitHub URL</label>
                  <input
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="https://github.com/johndoe"
                    className="bg-[#0f1f45] p-3 rounded-lg w-full text-white border border-[#1e325d] focus:border-[#3a8cff] focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#cfd9f7] mb-2">Notable Projects</label>
                  <textarea
                    name="projects"
                    value={formData.projects}
                    onChange={handleChange}
                    placeholder="Project 1: Developed a full-stack web application using React and Node.js..."
                    className="bg-[#0f1f45] p-3 rounded-lg h-16 w-full text-white border border-[#1e325d] focus:border-[#3a8cff] focus:outline-none transition resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <button className="w-full bg-gradient-to-r from-[#3a8cff] to-[#8b54ff] py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all">
              Save Changes
            </button>
          </div>

          {/* Preview Section */}
          <div>
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-2 bg-gradient-to-r from-[#3a8cff] to-[#8b54ff] px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all">
                {showPreview ? (
                  <>
                    <EyeOff size={20} /> Hide Preview
                  </>
                ) : (
                  <>
                    <Eye size={20} /> Show Preview
                  </>
                )}
              </button>
              <button
                onClick={downloadResumePDF}
                className="flex items-center gap-2 bg-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all">
                <Download size={20} /> Download PDF
              </button>
            </div>

            {showPreview && (
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-[#1a2b4f] overflow-hidden">
                <div ref={previewRef}>
                  <SelectedTemplate data={formData} />
                </div>
              </div>
            )}
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}


function Input({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="space-y-1.5 flex-1">
      <label className="text-xs font-semibold text-text-muted ml-0.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600"
      />
    </div>
  );
}

=======
};

export default Resume;
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
