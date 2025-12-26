import React, { useState, useRef } from "react";
import { Plus } from "lucide-react";

export default function Resume() {
  const previewRef = useRef();

  const [data, setData] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    portfolio: "",

    experience: [
      {
        role: "",
        company: "",
        date: "",
        bullets: [""],
      },
    ],

    education: [
      {
        degree: "",
        institute: "",
        year: "",
        score: "",
      },
    ],

    skills: "",

    projects: [
      {
        title: "",
        bullets: [""],
        tech: "",
      },
    ],
  });

  /* ---------------- UPDATE HELPERS ---------------- */

  const update = (path, value) => {
    const copy = structuredClone(data);
    path.reduce((o, k, i) =>
      i === path.length - 1 ? (o[k] = value) : o[k],
    copy);
    setData(copy);
  };

  const addEducation = () => {
    setData((p) => ({
      ...p,
      education: [
        ...p.education,
        { degree: "", institute: "", year: "", score: "" },
      ],
    }));
  };

  const addProject = () => {
    setData((p) => ({
      ...p,
      projects: [...p.projects, { title: "", bullets: [""], tech: "" }],
    }));
  };

  /* ---------------- PDF DOWNLOAD ---------------- */

  const downloadPdf = () => {
    const printContent = previewRef.current;
    if (!printContent) return;

    const win = window.open("", "", "width=900,height=650");
    win.document.write(`
      <html>
        <head>
          <title>Resume</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 24px; }
            h1, h2 { margin-bottom: 6px; }
            ul { margin-left: 18px; }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    win.document.close();
    win.focus();
    win.print();
    win.close();
  };

  return (
    <div className="min-h-screen bg-[#06122b] text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Resume Builder
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* ================= FORM ================= */}
        <div className="bg-[#0b1a3a] p-6 rounded-xl space-y-4">

          <h2 className="font-bold">Basic Info</h2>
          {["name", "location", "email", "phone", "linkedin", "github", "portfolio"].map(f => (
            <input
              key={f}
              className="input"
              placeholder={f.toUpperCase()}
              onChange={(e) => update([f], e.target.value)}
            />
          ))}

          <h2 className="font-bold mt-4">Experience</h2>
          <input className="input" placeholder="Role" onChange={e => update(["experience",0,"role"], e.target.value)} />
          <input className="input" placeholder="Company" onChange={e => update(["experience",0,"company"], e.target.value)} />
          <input className="input" placeholder="Date / Location" onChange={e => update(["experience",0,"date"], e.target.value)} />
          <textarea className="input" placeholder="Bullets (one per line)" onChange={e => update(["experience",0,"bullets"], e.target.value.split("\n"))} />

          <h2 className="font-bold mt-4 flex justify-between">
            Education
            <button onClick={addEducation} className="text-blue-400 flex items-center gap-1">
              <Plus size={16} /> Add
            </button>
          </h2>

          {data.education.map((edu, i) => (
            <div key={i} className="grid grid-cols-2 gap-3">
              <input className="input" placeholder="Degree" onChange={e => update(["education",i,"degree"], e.target.value)} />
              <input className="input" placeholder="Institute" onChange={e => update(["education",i,"institute"], e.target.value)} />
              <input className="input" placeholder="Year" onChange={e => update(["education",i,"year"], e.target.value)} />
              <input className="input" placeholder="CGPA / %" onChange={e => update(["education",i,"score"], e.target.value)} />
            </div>
          ))}

          <h2 className="font-bold mt-4">Skills</h2>
          <textarea
            className="input"
            placeholder="Skills (comma separated)"
            onChange={(e) => update(["skills"], e.target.value)}
          />

          <h2 className="font-bold mt-4 flex justify-between">
            Projects
            <button onClick={addProject} className="text-blue-400 flex items-center gap-1">
              <Plus size={16} /> Add
            </button>
          </h2>

          {data.projects.map((p, i) => (
            <div key={i} className="space-y-2">
              <input className="input" placeholder="Project Title" onChange={e => update(["projects",i,"title"], e.target.value)} />
              <textarea className="input" placeholder="Bullets (one per line)" onChange={e => update(["projects",i,"bullets"], e.target.value.split("\n"))} />
              <input className="input" placeholder="Tech Stack" onChange={e => update(["projects",i,"tech"], e.target.value)} />
            </div>
          ))}

          <button onClick={downloadPdf} className="btn-green w-full mt-6">
            Download PDF
          </button>
        </div>

        {/* ================= PREVIEW ================= */}
        <div ref={previewRef} className="bg-white text-black p-8 text-sm leading-relaxed">

          <h1 className="text-2xl font-bold">{data.name || "Your Name"}</h1>
          <p>{data.location} | {data.email} | {data.phone}</p>
          <p className="text-blue-700">
            {data.linkedin} {data.github} {data.portfolio}
          </p>

          <Section title="PROFESSIONAL EXPERIENCE">
            <b>{data.experience[0].role}</b><br />
            {data.experience[0].company}<br />
            <i>{data.experience[0].date}</i>
            <ul>
              {data.experience[0].bullets.map((b,i)=><li key={i}>{b}</li>)}
            </ul>
          </Section>

          <Section title="EDUCATION">
            {data.education.map((e,i)=>(
              <p key={i}>
                <b>{e.degree}</b>, {e.institute} ({e.year}) — {e.score}
              </p>
            ))}
          </Section>

          <Section title="SKILLS">
            <ul>
              {data.skills.split(",").filter(Boolean).map((s,i)=><li key={i}>{s.trim()}</li>)}
            </ul>
          </Section>

          <Section title="PROJECTS">
            {data.projects.map((p,i)=>(
              <div key={i}>
                <b>{p.title}</b>
                <ul>
                  {p.bullets.map((b,j)=><li key={j}>{b}</li>)}
                </ul>
                <i>Tech: {p.tech}</i>
              </div>
            ))}
          </Section>

        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: #0f1f45;
          padding: 10px;
          border-radius: 8px;
        }
        .btn-green {
          background: #16a34a;
          padding: 12px;
          border-radius: 10px;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}

const Section = ({ title, children }) => (
  <div className="mt-6">
    <h2 className="font-bold border-b mb-2">{title}</h2>
    {children}
  </div>
);
