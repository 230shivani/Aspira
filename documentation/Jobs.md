# Jobs Module Documentation

## 💼 Overview
The **Jobs** module is the central hub for discovering career opportunities. It provides a real-time matching engine that connects users with job listings based on their skills and preferences.

---

## 🚀 Key Features

### 1. Advanced Job Search
- **Keywords & Location**: Users can search for specific roles or companies and filter by geographic location.
- **Category Filtering**: Quick access to specialized fields like Software, Design, Marketing, and Data Science.

### 2. Live Jobs Mode
- **Dynamic Fetching**: A high-priority mode that pulls the latest job listings directly from live data sources via the `/api/jobs/live` endpoint.
- **Sparkle Tagging**: Live jobs are distinguished with a "Sparkles" icon to indicate high urgency and freshness.

### 3. AI-Powered Matching
- **Match Percentage**: Every job card displays a "Match %" indicating how well it aligns with the user's profile and resume.
- **Smart Recommendations**: A sidebar component provides personalized role suggestions based on the user's recent updates.

### 4. Application Tracking (My Apps)
- **Centralized Dashboard**: Users can track every job they've applied for in a dedicated "My Apps" tab.
- **Status Indicators**: Visual feedback (green checkmarks) shows which roles have already been applied to, preventing duplicate submissions.

---

## 🔄 Technical Implementation

### 1. Data Retrieval
- **Service Layer**: `jobService.js` handles all asynchronous requests using Axios.
- **Backend API**: 
  - `GET /api/jobs` — Standard database retrieval with query params for category/search.
  - `GET /api/jobs/live` — Fetches real-time market data.

### 2. UI/UX Design
- **Responsive Layout**: Uses a multi-column grid that shifts from a desktop sidebar to a mobile-friendly stack.
- **Framer Motion**: Smooth transitions and animations for job card loading and modal popups.
- **Detail Modals**: A rich overlay that provides the full job context without leaving the primary feed.

### 3. State Management
- **React Hooks**: Uses `useState` and `useEffect` to manage filtering logic, search debouncing, and tabs switching between search and applications.

---

## 📂 Component Map
- **Page**: `src/pages/Jobs.jsx`
- **Components**: `JobCard` (Individual listing), `JobDetailModal` (Expanded view)
- **Service**: `src/services/jobService.js`
- **Backend**: `controllers/job.controller.js` & `Routes/job.routes.js`
