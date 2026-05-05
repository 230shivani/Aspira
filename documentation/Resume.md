# Resume Builder (ATS Optimizer) Documentation

## Overview
The Resume Builder, titled "ATS Optimizer," allows users to create professional, ATS-friendly resumes in real-time. It provides a guided step-by-step process and an instant ATS score.

## Features
- **Step-by-Step Builder**: Sections for Personal Info, Work Experience, Education, Skills, and Projects.
- **Real-time Preview**: See how your resume looks as you type.
- **ATS Scorer**: Automatically calculates a score based on the completeness of the resume.
- **Smart Tips**: Provides actionable advice to improve resume ranking.
- **PDF Download**: Generates a clean, professional PDF of the resume using the browser's print functionality.

## Frontend Implementation
- **Component**: `Resume.jsx`
- **State Management**: Uses React `useState` to track all resume fields (personal, experience, education, skills, projects).
- **Animations**: Uses `framer-motion` for smooth transitions between steps.
- **PDF Generation**: Uses a custom `handlePrint` function that opens a new window with the resume content and triggers `window.print()`.

## Backend Implementation
- **Current Status**: The current implementation of `Resume.jsx` is primarily frontend-driven.
- **Potential Integration**: The `user.controller.js` has an `uploadResume` method for saving a resume file path to the user's profile.

## How to Use
1. Navigate to the "Resume" or "ATS Optimizer" page.
2. Fill in your details in each of the 5 steps (Personal Info, Experience, etc.).
3. Watch your ATS score increase as you add more relevant information.
4. Click "Finalize & Download" or the download icon to save your resume as a professional PDF.
