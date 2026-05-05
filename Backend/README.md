# AI CarrerHub Career Platform - Backend

This is the power-house of the AI CarrerHub platform, a robust and scalable Node.js/Express backend designed to handle career-related services like AI Mock Interviews, Job Board management, and ATS-compliant Resume/Cover Letter generation.

## 🚀 Key Modules & Functionalities

### 1. User Authentication & Profile
- **Purpose**: Secure access to personalized career tools.
- **Logic**: Handles user registration, login, and profile management using JWT (JSON Web Tokens) for session security.
- **Files**: `models/user.model.js`, `controllers/user.controller.js`, `Routes/user.routes.js`.

### 2. AI Interview Lab (Interview Prep)
- **Purpose**: High-fidelity mock interview simulations.
- **Logic**: 
    - **Questions Bank**: Serves industry-specific technical and behavioral questions.
    - **AI Chat**: Simulates a real-time conversational interview (Sarah Mitchell) using text-based AI interaction.
    - **Analytics**: Stores and calculates performance scores, tracking user progress over time.
- **WebRTC Support**: The frontend utilizes WebRTC for camera/mic streaming, while the backend manages the session state and assessment results.
- **Files**: `models/interviewQuestion.model.js`, `models/assessment.model.js`, `controllers/interview.controller.js`, `Routes/interview.routes.js`.

### 3. Job Board & Application Tracking
- **Purpose**: Connecting talent with opportunities.
- **Logic**: CRUD operations for job listings (Title, Description, Salary, Requirements).
- **Files**: `models/job.model.js`, `controllers/job.controller.js`, `Routes/job.routes.js`.

### 4. Resume & Cover Letter Management
- **Purpose**: Automated, professional document creation.
- **Logic**: Stores structured data for resumes and generated cover letters, ensuring they are ATS-friendly.
- **Files**: `models/resume.model.js`, `models/coverletter.model.js`.

---

## 📂 Project Structure

```bash
Backend/
├── config/             # Database connection & environment configuration
├── controllers/        # Logical processing of API requests (The "Brain")
├── middleware/         # Auth guards and request validators
├── models/             # Mongoose Schemas (Database structure)
├── Routes/             # API Endpoints (URL definitions)
├── uploads/            # Temporary storage for resume/profile files
├── server.js           # Main entry point (Express app initialization)
├── seed.js             # Populate database with initial sample jobs
└── seedInterview.js    # Populate database with initial sample questions
```

---

## 🛠️ Tech Stack
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (NoSQL)
- **ODM**: [Mongoose](https://mongoosejs.com/)
- **Authentication**: JWT & Bcrypt (for password hashing)

---

## ⚙️ Getting Started

### 1. Prerequisites
- Install Node.js
- Install MongoDB (Local or Atlas)

### 2. Environment Variables (`.env`)
Create a `.env` file in the root of the Backend directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 3. Installation
```bash
npm install
```

### 4. Seed Data (Optional)
To populate the database with sample interview questions:
```bash
node seedInterview.js
```

### 5. Start the Server
```bash
npm start
# Or for development
npm run dev
```

---

## 💡 Why this architecture?
- **Controller-Route Separation**: Keeps the code clean and testable.
- **Modular Routes**: Each feature (Jobs, Interviews, Users) has its own isolated route file for better maintainability.
- **Scalable Models**: Mongoose schemas are designed to grow with the platform's requirements.
