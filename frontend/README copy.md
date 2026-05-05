# AI CarrerHub - AI-Powered Career Platform

AI CarrerHub is a modern, premium career coach platform designed to empower job seekers with AI-driven tools. From building ATS-compliant resumes to practicing with AI-powered mock interviews, AI CarrerHub provides a comprehensive suite of features to help you land your dream job.

![AI CarrerHub UI Mockup](https://raw.githubusercontent.com/your-username/aicarrerhub/main/public/demo-screenshot.png) *(Note: Add your actual screenshot link here)*

## 🚀 Key Features

### 1. **AI Resume Builder**
*   **ATS Optimization**: Build resumes that pass through Applicant Tracking Systems (ATS) with ease.
*   **AI Critique**: Receive instant feedback on your resume content using LLM-powered analysis.
*   **PDF Generation**: Export your professional resume directly to PDF using `react-to-print`.
*   **Dynamic Templates**: Choose from modern, high-conversion templates.

### 2. **AI Mock Interviews**
*   **Real-time Interaction**: Practice with an AI interviewer that simulates real-world tech and business scenarios.
*   **Voice-Enabled Support**: (Integrated functionality) Prepare for common behavioral and technical questions.
*   **Performance Feedback**: Get insights into your responses to improve your confidence.

### 3. **Smart Job Board**
*   **Intelligent Discovery**: Find jobs that match your skills and career goals.
*   **Dynamic Filtering**: Filter by role, location, and salary expectations.
*   **Application Tracking**: Manage your application status in one centralized dashboard.

### 4. **Career Roadmaps & Skill Analysis**
*   **Learning Paths**: Personalized step-by-step guides to bridge your skill gaps.
*   **Data Insights**: Visualized analysis of your strengths and areas for improvement.

### 5. **Premium Design System**
*   **Glassmorphic UI**: A state-of-the-art visual style using frosted glass effects and vibrant gradients.
*   **Seamless Animations**: Powered by **Framer Motion** and **GSAP** for smooth page transitions and interactive micro-animations.
*   **Responsive Layout**: Fully optimized for mobile, tablet, and desktop views.

---

## 🛠️ Tech Stack

### **Frontend Core**
*   **React 19**: Leveraging the latest React features for high performance.
*   **Tailwind CSS**: Utility-first styling for a custom, premium aesthetic.
*   **React Router Dom**: Smooth SPA navigation with animated page transitions.

### **Animations & Effects**
*   **Framer Motion**: Used for entering/exiting animations and complex layout shifts.
*   **GSAP (GreenSock)**: Orchestrating high-performance scroll-triggered animations.

### **Icons & Assets**
*   **Lucide React**: Clean and consistent modern iconography.
*   **React Icons**: Access to a broad library of web icons.

### **Utilities**
*   **Axios**: Handling API requests for resume analysis and job fetching.
*   **React-to-Print**: Enabling professional PDF exports for resumes.

---

## 📂 Project Structure

```bash
src/
├── components/       # Reusable UI components (Header, Hero, Features, etc.)
├── pages/            # Main application views (Home, Resume, Jobs, InterviewPrep)
├── services/         # API logic and backend communication
├── App.jsx           # Main routing and global layout
└── index.css         # Global styles and Tailwind configurations
```

---

## ⚙️ Installation & Setup

To run AI CarrerHub locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/aicarrerhub.git
    cd aicarrerhub/Aspira
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm start
    ```
    The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 💡 How It Works

1.  **Authentication**: Users can sign up and log in to save their resume progress and interview history.
2.  **Resume Creation**: Input your details into the Resume Builder; the AI service (Backend) analyzes the text for ATS compatibility and suggests improvements.
3.  **Interview Simulation**: Select a job role, and the AI initiates a session. It evaluates your textual/voice inputs and provides a score.
4.  **Job Search**: Browse the Job Board which pulls real-time (or mocked) data based on your professional profile.

---

## 🎨 Design Philosophy

AI CarrerHub follows a **Glassmorphism** design language. We use:
*   **Dark Mode by Default**: Deep navy backgrounds (`#020617`) paired with vibrant blue/indigo accents.
*   **Backdrop Blurs**: Subtle transparency on cards and navigation menus for a modern feel.
*   **Micro-interactions**: Hover effects on cards that rotate or glow to engage the user.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
