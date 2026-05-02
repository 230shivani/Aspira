import React, { useState, useRef } from "react";
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
