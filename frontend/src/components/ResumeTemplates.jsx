import React from "react";

export const ClassicTemplate = ({ data }) => (
  <div className="w-full bg-white text-black p-8" style={{ fontFamily: "Calibri, sans-serif" }}>
    {/* Header */}
    <div className="border-b-2 border-gray-800 pb-4 mb-6">
      <h1 className="text-3xl font-bold">{data.fullName}</h1>
      <div className="flex gap-4 text-sm text-gray-700 mt-2">
        {data.email && <span>{data.email}</span>}
        {data.phone && <span>•</span>}
        {data.phone && <span>{data.phone}</span>}
        {data.location && <span>•</span>}
        {data.location && <span>{data.location}</span>}
      </div>
      {data.linkedin && <p className="text-sm text-blue-600 mt-1">{data.linkedin}</p>}
    </div>

    {/* Professional Summary */}
    {data.professionalSummary && (
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">PROFESSIONAL SUMMARY</h2>
        <p className="text-sm text-gray-700">{data.professionalSummary}</p>
      </div>
    )}

    {/* Skills */}
    {data.skills && (
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">SKILLS</h2>
        <p className="text-sm text-gray-700">{data.skills}</p>
      </div>
    )}

    {/* Experience */}
    {data.experienceYears && (
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">EXPERIENCE</h2>
        <p className="text-sm text-gray-700">{data.experienceYears} years of professional experience</p>
      </div>
    )}

    {/* Education */}
    {data.education && (
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">EDUCATION</h2>
        <p className="text-sm text-gray-700">{data.education}</p>
      </div>
    )}

    {/* Certifications */}
    {data.certifications && (
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">CERTIFICATIONS</h2>
        <p className="text-sm text-gray-700">{data.certifications}</p>
      </div>
    )}

    {/* Projects */}
    {data.projects && (
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2">PROJECTS</h2>
        <p className="text-sm text-gray-700">{data.projects}</p>
      </div>
    )}
  </div>
);

export const ModernTemplate = ({ data }) => (
  <div className="w-full bg-white text-gray-800 p-8" style={{ fontFamily: "Segoe UI, sans-serif" }}>
    {/* Header */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg mb-8">
      <h1 className="text-4xl font-bold">{data.fullName}</h1>
      <div className="flex gap-4 text-sm mt-3 flex-wrap">
        {data.email && <span>{data.email}</span>}
        {data.phone && <span>|</span>}
        {data.phone && <span>{data.phone}</span>}
        {data.location && <span>|</span>}
        {data.location && <span>{data.location}</span>}
      </div>
    </div>

    <div className="grid grid-cols-3 gap-8">
      {/* Left Column */}
      <div className="col-span-2">
        {/* Professional Summary */}
        {data.professionalSummary && (
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b-2 border-blue-600 pb-2 mb-3">ABOUT</h2>
            <p className="text-sm text-gray-700">{data.professionalSummary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experienceYears && (
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b-2 border-blue-600 pb-2 mb-3">EXPERIENCE</h2>
            <p className="text-sm text-gray-700">{data.experienceYears} years of expertise</p>
          </div>
        )}

        {/* Education */}
        {data.education && (
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b-2 border-blue-600 pb-2 mb-3">EDUCATION</h2>
            <p className="text-sm text-gray-700">{data.education}</p>
          </div>
        )}

        {/* Projects */}
        {data.projects && (
          <div className="mb-6">
            <h2 className="text-lg font-bold border-b-2 border-blue-600 pb-2 mb-3">PROJECTS</h2>
            <p className="text-sm text-gray-700">{data.projects}</p>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div>
        {/* Skills */}
        {data.skills && (
          <div className="mb-6 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-3">SKILLS</h2>
            <p className="text-sm text-gray-700">{data.skills}</p>
          </div>
        )}

        {/* Certifications */}
        {data.certifications && (
          <div className="mb-6 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-3">CERTS</h2>
            <p className="text-sm text-gray-700">{data.certifications}</p>
          </div>
        )}

        {/* Languages */}
        {data.languages && (
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-3">LANGUAGES</h2>
            <p className="text-sm text-gray-700">{data.languages}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

export const MinimalistTemplate = ({ data }) => (
  <div className="w-full bg-white text-gray-900 p-10" style={{ fontFamily: "Arial, sans-serif" }}>
    {/* Header */}
    <div className="mb-8">
      <h1 className="text-2xl font-light">{data.fullName}</h1>
      <div className="flex gap-3 text-xs text-gray-600 mt-2">
        {data.email && <span>{data.email}</span>}
        {data.phone && <span>•</span>}
        {data.phone && <span>{data.phone}</span>}
        {data.location && <span>•</span>}
        {data.location && <span>{data.location}</span>}
      </div>
    </div>

    {/* Professional Summary */}
    {data.professionalSummary && (
      <div className="mb-8">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">About</p>
        <p className="text-sm text-gray-800">{data.professionalSummary}</p>
      </div>
    )}

    {/* Skills */}
    {data.skills && (
      <div className="mb-8">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Skills</p>
        <p className="text-sm text-gray-800">{data.skills}</p>
      </div>
    )}

    {/* Experience */}
    {data.experienceYears && (
      <div className="mb-8">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Experience</p>
        <p className="text-sm text-gray-800">{data.experienceYears} years</p>
      </div>
    )}

    {/* Education */}
    {data.education && (
      <div className="mb-8">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Education</p>
        <p className="text-sm text-gray-800">{data.education}</p>
      </div>
    )}

    {/* Certifications & Languages */}
    <div className="grid grid-cols-2 gap-8">
      {data.certifications && (
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Certifications</p>
          <p className="text-sm text-gray-800">{data.certifications}</p>
        </div>
      )}
      {data.languages && (
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Languages</p>
          <p className="text-sm text-gray-800">{data.languages}</p>
        </div>
      )}
    </div>
  </div>
);

export const CreativeTemplate = ({ data }) => (
  <div className="w-full bg-white text-gray-800 p-8" style={{ fontFamily: "Georgia, serif" }}>
    {/* Side accent */}
    <div className="flex gap-8">
      <div className="w-1 bg-purple-600"></div>
      <div className="flex-1">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-600">{data.fullName}</h1>
          <div className="flex gap-4 text-sm text-gray-600 mt-3 flex-wrap">
            {data.email && <span>{data.email}</span>}
            {data.phone && <span>•</span>}
            {data.phone && <span>{data.phone}</span>}
            {data.location && <span>•</span>}
            {data.location && <span>{data.location}</span>}
          </div>
        </div>

        {/* Professional Summary */}
        {data.professionalSummary && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-purple-600 mb-3">Professional Summary</h2>
            <p className="text-sm text-gray-700">{data.professionalSummary}</p>
          </div>
        )}

        {/* Skills */}
        {data.skills && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-purple-600 mb-3">Core Skills</h2>
            <p className="text-sm text-gray-700">{data.skills}</p>
          </div>
        )}

        {/* Experience */}
        {data.experienceYears && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-purple-600 mb-3">Professional Experience</h2>
            <p className="text-sm text-gray-700">{data.experienceYears} years of experience</p>
          </div>
        )}

        {/* Education & Certifications */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {data.education && (
            <div>
              <h2 className="text-lg font-bold text-purple-600 mb-3">Education</h2>
              <p className="text-sm text-gray-700">{data.education}</p>
            </div>
          )}
          {data.certifications && (
            <div>
              <h2 className="text-lg font-bold text-purple-600 mb-3">Certifications</h2>
              <p className="text-sm text-gray-700">{data.certifications}</p>
            </div>
          )}
        </div>

        {/* Projects */}
        {data.projects && (
          <div>
            <h2 className="text-lg font-bold text-purple-600 mb-3">Projects</h2>
            <p className="text-sm text-gray-700">{data.projects}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

export const TwoColumnTemplate = ({ data }) => (
  <div className="w-full bg-white text-gray-900 flex" style={{ fontFamily: "Open Sans, sans-serif" }}>
    {/* Left Column */}
    <div className="w-1/3 bg-gray-900 text-white p-8">
      {/* Profile Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6">PROFILE</h3>
        {data.professionalSummary && <p className="text-sm text-gray-300">{data.professionalSummary}</p>}
      </div>

      {/* Skills */}
      {data.skills && (
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">SKILLS</h3>
          <p className="text-sm text-gray-300">{data.skills}</p>
        </div>
      )}

      {/* Languages */}
      {data.languages && (
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">LANGUAGES</h3>
          <p className="text-sm text-gray-300">{data.languages}</p>
        </div>
      )}

      {/* Contact */}
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4">CONTACT</h3>
        <div className="text-sm text-gray-300 space-y-1">
          {data.email && <p>{data.email}</p>}
          {data.phone && <p>{data.phone}</p>}
          {data.location && <p>{data.location}</p>}
        </div>
      </div>

      {/* Links */}
      {(data.linkedin || data.portfolio) && (
        <div>
          <h3 className="text-lg font-bold mb-4">LINKS</h3>
          <div className="text-sm text-gray-300 space-y-1">
            {data.linkedin && <p>{data.linkedin}</p>}
            {data.portfolio && <p>{data.portfolio}</p>}
          </div>
        </div>
      )}
    </div>

    {/* Right Column */}
    <div className="w-2/3 p-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900">{data.fullName}</h1>
        <p className="text-sm text-gray-600 mt-1">Professional Resume</p>
      </div>

      {/* Experience */}
      {data.experienceYears && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-900 pb-2 mb-4">EXPERIENCE</h2>
          <p className="text-sm text-gray-700">{data.experienceYears} years of professional expertise</p>
        </div>
      )}

      {/* Education */}
      {data.education && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-900 pb-2 mb-4">EDUCATION</h2>
          <p className="text-sm text-gray-700">{data.education}</p>
        </div>
      )}

      {/* Certifications */}
      {data.certifications && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-900 pb-2 mb-4">CERTIFICATIONS</h2>
          <p className="text-sm text-gray-700">{data.certifications}</p>
        </div>
      )}

      {/* Projects */}
      {data.projects && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-900 pb-2 mb-4">PROJECTS</h2>
          <p className="text-sm text-gray-700">{data.projects}</p>
        </div>
      )}
    </div>
  </div>
);

export const ExecutiveTemplate = ({ data }) => (
  <div className="w-full bg-white text-gray-900 p-12" style={{ fontFamily: "Trebuchet MS, sans-serif" }}>
    {/* Premium Header */}
    <div className="border-l-4 border-amber-700 pl-6 mb-10">
      <h1 className="text-5xl font-bold text-gray-900">{data.fullName}</h1>
      <p className="text-lg text-amber-700 font-semibold mt-2">Professional Executive</p>
    </div>

    {/* Contact Info */}
    <div className="flex justify-between items-start mb-10 text-sm text-gray-700">
      <div>
        {data.email && <p>{data.email}</p>}
        {data.phone && <p>{data.phone}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
      <div className="text-right">
        {data.linkedin && <p>{data.linkedin}</p>}
        {data.portfolio && <p>{data.portfolio}</p>}
      </div>
    </div>

    {/* Professional Summary */}
    {data.professionalSummary && (
      <div className="mb-10 pb-6 border-b border-gray-300">
        <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wide mb-3">Executive Summary</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{data.professionalSummary}</p>
      </div>
    )}

    {/* Main Content Grid */}
    <div className="grid grid-cols-3 gap-10">
      {/* Left Column */}
      <div className="col-span-2">
        {/* Experience */}
        {data.experienceYears && (
          <div className="mb-8 pb-6 border-b border-gray-300">
            <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wide mb-3">Professional Experience</h2>
            <p className="text-sm text-gray-700">{data.experienceYears} years of executive-level experience</p>
          </div>
        )}

        {/* Education */}
        {data.education && (
          <div className="mb-8 pb-6 border-b border-gray-300">
            <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wide mb-3">Education</h2>
            <p className="text-sm text-gray-700">{data.education}</p>
          </div>
        )}

        {/* Projects */}
        {data.projects && (
          <div>
            <h2 className="text-lg font-bold text-amber-700 uppercase tracking-wide mb-3">Notable Projects</h2>
            <p className="text-sm text-gray-700">{data.projects}</p>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div>
        {/* Skills */}
        {data.skills && (
          <div className="mb-8 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-amber-700 mb-3 uppercase tracking-wide">Core Competencies</h3>
            <p className="text-sm text-gray-700">{data.skills}</p>
          </div>
        )}

        {/* Certifications */}
        {data.certifications && (
          <div className="mb-8 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-amber-700 mb-3 uppercase tracking-wide">Certifications</h3>
            <p className="text-sm text-gray-700">{data.certifications}</p>
          </div>
        )}

        {/* Languages */}
        {data.languages && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-amber-700 mb-3 uppercase tracking-wide">Languages</h3>
            <p className="text-sm text-gray-700">{data.languages}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

export const ColorfulTemplate = ({ data }) => (
  <div className="w-full bg-white text-gray-900 p-10" style={{ fontFamily: "Poppins, sans-serif" }}>
    {/* Colorful Header */}
    <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white p-8 rounded-lg mb-10">
      <h1 className="text-4xl font-bold">{data.fullName}</h1>
      <div className="flex gap-4 text-sm mt-4 flex-wrap">
        {data.email && <span className="bg-white/20 px-3 py-1 rounded-full">{data.email}</span>}
        {data.phone && <span className="bg-white/20 px-3 py-1 rounded-full">{data.phone}</span>}
        {data.location && <span className="bg-white/20 px-3 py-1 rounded-full">{data.location}</span>}
      </div>
    </div>

    {/* Professional Summary */}
    {data.professionalSummary && (
      <div className="mb-8 p-4 border-l-4 border-teal-500">
        <h2 className="font-bold text-teal-600 uppercase text-sm tracking-wide mb-2">Professional Summary</h2>
        <p className="text-sm text-gray-700">{data.professionalSummary}</p>
      </div>
    )}

    {/* Grid Layout */}
    <div className="grid grid-cols-3 gap-8 mb-8">
      {/* Experience */}
      {data.experienceYears && (
        <div className="bg-teal-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-teal-600 mb-3">Experience</h3>
          <p className="text-sm text-gray-700">{data.experienceYears} years</p>
        </div>
      )}

      {/* Education */}
      {data.education && (
        <div className="bg-cyan-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-cyan-600 mb-3">Education</h3>
          <p className="text-sm text-gray-700">{data.education}</p>
        </div>
      )}

      {/* Certifications */}
      {data.certifications && (
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-bold text-blue-600 mb-3">Certifications</h3>
          <p className="text-sm text-gray-700">{data.certifications}</p>
        </div>
      )}
    </div>

    {/* Skills & Languages */}
    <div className="grid grid-cols-2 gap-8">
      {/* Skills */}
      {data.skills && (
        <div className="p-4 border-2 border-teal-200 rounded-lg">
          <h3 className="font-bold text-teal-600 uppercase text-sm tracking-wide mb-3">Skills</h3>
          <p className="text-sm text-gray-700">{data.skills}</p>
        </div>
      )}

      {/* Languages */}
      {data.languages && (
        <div className="p-4 border-2 border-cyan-200 rounded-lg">
          <h3 className="font-bold text-cyan-600 uppercase text-sm tracking-wide mb-3">Languages</h3>
          <p className="text-sm text-gray-700">{data.languages}</p>
        </div>
      )}
    </div>

    {/* Projects */}
    {data.projects && (
      <div className="mt-8 p-4 border-l-4 border-blue-500">
        <h2 className="font-bold text-blue-600 uppercase text-sm tracking-wide mb-2">Projects</h2>
        <p className="text-sm text-gray-700">{data.projects}</p>
      </div>
    )}
  </div>
);

export const AtsFriendlyTemplate = ({ data }) => (
  <div className="w-full bg-white text-gray-900 p-8" style={{ fontFamily: "Times New Roman, serif" }}>
    {/* Simple Header */}
    <div className="mb-6">
      <h1 className="text-3xl font-bold">{data.fullName}</h1>
    </div>

    {/* Contact Information */}
    <div className="mb-6 text-sm">
      {data.email && <span>{data.email}</span>}
      {data.phone && <span> | {data.phone}</span>}
      {data.location && <span> | {data.location}</span>}
      {data.linkedin && <span> | {data.linkedin}</span>}
    </div>

    {/* Professional Summary */}
    {data.professionalSummary && (
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">PROFESSIONAL SUMMARY</h2>
        <p className="text-sm text-gray-800">{data.professionalSummary}</p>
      </div>
    )}

    {/* Experience */}
    {data.experienceYears && (
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">PROFESSIONAL EXPERIENCE</h2>
        <p className="text-sm text-gray-800">{data.experienceYears} years of professional experience in the industry.</p>
      </div>
    )}

    {/* Skills */}
    {data.skills && (
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">TECHNICAL SKILLS</h2>
        <p className="text-sm text-gray-800">{data.skills}</p>
      </div>
    )}

    {/* Education */}
    {data.education && (
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">EDUCATION</h2>
        <p className="text-sm text-gray-800">{data.education}</p>
      </div>
    )}

    {/* Certifications */}
    {data.certifications && (
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">CERTIFICATIONS AND LICENSES</h2>
        <p className="text-sm text-gray-800">{data.certifications}</p>
      </div>
    )}

    {/* Languages */}
    {data.languages && (
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2">LANGUAGES</h2>
        <p className="text-sm text-gray-800">{data.languages}</p>
      </div>
    )}

    {/* Projects */}
    {data.projects && (
      <div>
        <h2 className="text-lg font-bold mb-2">PROJECTS</h2>
        <p className="text-sm text-gray-800">{data.projects}</p>
      </div>
    )}
  </div>
);
