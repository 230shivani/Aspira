<<<<<<< HEAD
# 🚀 AI CareerHub: AI-Powered Career Intelligence Platform

**AI CareerHub** is a state-of-the-art full-stack platform designed to revolutionize career preparation. By leveraging cutting-edge AI models (Groq Llama 3 & Google Gemini), it provides real-time interview simulations, deep performance analysis, and automated career tools.

---

## ✨ Key Features

### 🎙️ AI Interview Lab (Real-time)
Master your interview skills with our intelligent simulation engine.
- **Dual AI Engine:** Powered by **Groq (Llama 3.3)** for ultra-fast response and **Google Gemini** as a fallback.
- **Dynamic Questioning:** Sarah Mitchell (AI) adapts to your answers for a realistic experience.
- **End-to-End Analysis:** Real-time performance evaluation using AI to calculate scores, strengths, and focus areas.
- **Progress Tracking:** Interactive sidebar and dashboard tracking your Mastery Level over time.

### ✍️ Cover Letter Empire
Craft persuasive stories that land interviews using our AI engine.
- Auto-generate professional drafts based on company and role.
- Manage and tailor multiple versions for different applications.

### 💼 Gateway to Jobs
A real-time talent matching engine to find high-growth opportunities.
- Advanced search and category filtering.
- Application tracking dashboard for your career pipeline.

### 📊 Performance Analytics
Comprehensive data visualization of your readiness.
- Category-wise breakdown (Technical, Communication, Confidence).
- Historical performance tracking with MongoDB persistence.

---

## 🛠️ Technical Stack

- **AI Inference:** **Groq SDK (Llama 3.3 70B)**, Google Generative AI (Gemini 1.5 Flash).
- **Frontend:** React.js, Tailwind CSS, Framer Motion, Axios, Lucide-React.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB (Mongoose ODM).
- **Security:** JWT-based Authentication, Bcrypt hashing.

---

## 📂 Project Structure

```
.
├── Aspira/             # Frontend Application (React)
│   ├── src/
│   │   ├── components/ # Glassmorphic UI Components
│   │   ├── pages/      # InterviewPrep, Dashboard, etc.
│   │   ├── services/   # API Communication layer
│   │   └── context/    # Auth & State Management
├── Backend/            # API Server (Node/Express)
│   ├── Controllers/    # AI Logic & DB Operations
│   ├── Routes/         # REST API Endpoints
│   ├── Models/         # Mongoose Schemas (User, Assessment, etc.)
│   └── middleware/     # Auth & Security
└── documentation/      # Detailed Module Deep-dives
```

---

## ⚡ Getting Started

### 1. Prerequisites
- Node.js (v18+)
- MongoDB Atlas account or local instance.
- **Groq API Key** (Free at [console.groq.com](https://console.groq.com))
- **Google Gemini API Key** (Optional fallback)

### 2. Backend Setup
1. `cd Backend`
2. `npm install`
3. Create `.env` file:
   ```env
   PORT=8080
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret
   GROQ_API_KEY=your_groq_key
   GEMINI_API_KEY=your_gemini_key
   ```
4. `npm run dev`

### 3. Frontend Setup
1. `cd frontend`
2. `npm install`
3. `npm run dev`

---


=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
