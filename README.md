
# ASPIRA - AI-Powered Career Intelligence Platform

Your Gateway to Career Success

Aspira is a full-stack AI-powered platform designed to revolutionize career preparation. It combines cutting-edge AI technologies with modern web development to deliver real-time interview simulations, intelligent cover letter generation, live job matching, and comprehensive performance analytics.

---

## Core Features

### AI Interview Lab
Real-time mock interviews powered by dual AI engines for realistic interview preparation.
- Groq (Llama 3.3) for ultra-fast responses
- Google Gemini as intelligent fallback system
- Adaptive AI interviewer that responds to candidate answers
- Real-time performance evaluation and scoring
- Instant feedback with detailed analytics

### Cover Letter Generation
Professional cover letter creation powered by AI.
- Auto-generate drafts based on company and job details
- Personalized content for each application
- Version management and tracking
- Download and sharing capabilities

### Job Matching Engine
Live job board with intelligent matching algorithms.
- Real-time job fetching from external APIs
- Advanced filtering by category, type, and location
- AI-powered match scoring for each position
- Application tracking dashboard
- Live vs. database job selection

### Performance Analytics Dashboard
Comprehensive tracking and analysis of interview performance.
- Category-wise scoring (Technical, Communication, Confidence)
- Historical performance tracking
- Progress visualization over time
- Detailed improvement recommendations

### Resume Management
Multi-template resume builder with export capabilities.
- 4 professional templates (Modern, Professional, Creative, Technical)
- Dynamic field editing
- PDF export for applications
- ATS compliance formatting

---

## Technology Stack

### Frontend
- React 19.2.0
- Tailwind CSS 3.4.18
- Framer Motion & GSAP for animations
- React Router 7.9.6 for navigation
- Axios for API communication

### Backend
- Node.js runtime environment
- Express.js 5.2.1 web framework
- MongoDB 9.0.0 database
- Mongoose 9.0.0 ODM
- Groq SDK 1.1.2 for LLM inference
- Google Generative AI for fallback
- JWT for secure authentication
- Bcrypt for password hashing

### Infrastructure
- Express Rate Limiting for API protection
- Express Validator for input validation
- Multer for file uploads
- PDF Parse for resume processing

---

## Quick Start Guide

### Prerequisites
- Node.js version 18.0.0 or higher
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Backend Setup

1. Navigate to Backend directory
```bash
cd Backend
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create `.env` file with:
```env
MONGO_URI=mongodb://localhost:27017/aspira
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key_here
JWT_EXPIRES_IN=30d
GROQ_API_KEY=your_groq_key_here
GEMINI_API_KEY=your_gemini_key_here
FRONTEND_URL=http://localhost:3000
```

4. Start the server
```bash
npm run dev
```

Backend will run on: http://localhost:5000

### Frontend Setup

1. Navigate to frontend directory
```bash
cd frontend
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create `.env` file with:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start development server
```bash
npm start
```

Frontend will run on: http://localhost:3000

---

## Configuration Details

### Environment Variables (Backend)

| Variable | Description | Example |
|----------|-------------|---------|
| MONGO_URI | MongoDB connection string | mongodb://localhost:27017/aspira |
| PORT | Server port | 5000 |
| NODE_ENV | Environment mode | development |
| JWT_SECRET | Token signing key | your_secret_key |
| GROQ_API_KEY | Groq LLM API key | (optional) |
| GEMINI_API_KEY | Google Gemini API key | (optional) |
| FRONTEND_URL | Frontend application URL | http://localhost:3000 |

### Environment Variables (Frontend)

| Variable | Description | Example |
|----------|-------------|---------|
| REACT_APP_API_URL | Backend API base URL | http://localhost:5000/api |

---

## API Endpoints

### Authentication
- POST /api/users/register - Create new user account
- POST /api/users/login - Authenticate user and receive JWT
- GET /api/users/me - Retrieve current user profile

### Interview Management
- GET /api/interview/questions - Retrieve interview questions
- POST /api/interview/chat - Send message to AI interviewer
- POST /api/interview/assessment - Save assessment results
- GET /api/interview/analytics/:userId - Retrieve performance analytics

### Job Management
- GET /api/jobs - Retrieve all jobs
- GET /api/jobs/live - Fetch live jobs from external API
- GET /api/jobs/:id - Get specific job details
- POST /api/jobs - Create new job listing
- DELETE /api/jobs/:id - Remove job listing

### Cover Letter Management
- POST /api/coverletter - Create new cover letter
- GET /api/coverletter/user/:userId - Retrieve user's cover letters
- GET /api/coverletter/:id - Get specific cover letter
- PUT /api/coverletter/:id - Update cover letter
- DELETE /api/coverletter/:id - Delete cover letter

---

## Security Architecture

### Authentication & Authorization
- JWT-based token system with 30-day expiration
- Secure password hashing using bcrypt (10 salt rounds)
- Protected routes requiring valid authentication tokens

### API Protection
- CORS configured for specific trusted origins
- Rate limiting: 100 requests per 15 minutes (general)
- Rate limiting: 5 login attempts per 15 minutes
- Rate limiting: 10 AI requests per minute

### Input Protection
- Comprehensive input validation using express-validator
- Data sanitization on all user inputs
- Request size limits (10MB for JSON and form data)

### Infrastructure Security
- Security headers preventing XSS attacks
- Clickjacking protection (X-Frame-Options)
- Content-Type sniffing prevention
- HTTPS ready for production

---

## Project Structure

```
Aspira/
├── Backend/
│   ├── config/              # Configuration files
│   │   ├── db.config.js
│   │   └── server.config.js
│   ├── controllers/          # Business logic layer
│   │   ├── user.controller.js
│   │   ├── interview.controller.js
│   │   ├── job.controller.js
│   │   └── coverletter.controller.js
│   ├── models/              # MongoDB Mongoose schemas
│   │   ├── user.model.js
│   │   ├── assessment.model.js
│   │   ├── interview.model.js
│   │   └── job.model.js
│   ├── routes/              # API route definitions
│   │   ├── user.routes.js
│   │   ├── interview.routes.js
│   │   ├── job.routes.js
│   │   └── coverletter.routes.js
│   ├── middleware/           # Express middleware
│   │   ├── auth.middleware.js
│   │   ├── validation.middleware.js
│   │   └── resumeUploadMiddleware.js
│   ├── utils/               # Utility functions
│   │   └── prompts.js
│   ├── uploads/             # File storage directory
│   ├── server.js            # Application entry point
│   ├── package.json         # Dependencies
│   └── .env                 # Environment configuration
│
├── frontend/
│   ├── public/              # Static assets
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ProtectedRoute.js
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── InterviewPrep.jsx
│   │   │   ├── Jobs.jsx
│   │   │   ├── CoverLetter.jsx
│   │   │   └── Settings.jsx
│   │   ├── services/        # API communication layer
│   │   │   ├── api.js
│   │   │   ├── userService.js
│   │   │   ├── interviewService.js
│   │   │   ├── jobService.js
│   │   │   └── coverLetterService.js
│   │   ├── context/         # React Context for state
│   │   │   └── AuthContext.js
│   │   ├── App.jsx          # Root component
│   │   └── index.js         # React entry point
│   ├── package.json         # Dependencies
│   └── .env                 # Environment configuration
│
├── SETUP_GUIDE.md           # Comprehensive setup instructions
├── FIXES_APPLIED.md         # Detailed list of improvements
└── README.md                # This file
```

---

## Troubleshooting

### MongoDB Connection Issues
**Problem**: Cannot connect to MongoDB database
**Solution**:
- Verify MongoDB is running: `mongod` command
- Check connection string in `.env` file
- For MongoDB Atlas: Ensure IP address is whitelisted
- Test connection: `mongo mongodb://localhost:27017`

### CORS Errors
**Problem**: Frontend cannot communicate with backend
**Solution**:
- Verify FRONTEND_URL matches in backend `.env`
- Check frontend API URL: `REACT_APP_API_URL=http://localhost:5000/api`
- Ensure both services are running on correct ports

### Port Already in Use
**Problem**: Port 5000 or 3000 is already occupied
**Solution** (Windows):
```bash
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F
```

**Solution** (Mac/Linux):
```bash
lsof -ti:5000 | xargs kill -9
```

### Dependencies Installation Fails
**Problem**: npm install fails with permission or version errors
**Solution**:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## Features Included

### Authentication System
- User registration and login
- JWT-based session management
- Password security with bcrypt hashing
- Protected route system

### Interview System
- Real-time AI conversation engine
- Dual AI model architecture (Groq primary, Gemini fallback)
- Session recording and playback
- Automatic performance scoring
- Detailed feedback generation

### Job Listing System
- Local database job listings
- Live job API integration
- Advanced search and filtering
- Match percentage calculation
- Application tracking

### Cover Letter System
- AI-powered content generation
- Template-based creation
- Version management
- PDF export functionality

### Resume Management
- Multiple professional templates
- WYSIWYG editing interface
- PDF export with proper formatting
- ATS-compliant structure

### Analytics System
- Session-based scoring
- Category performance breakdown
- Progress tracking over time
- Statistical analysis
- Visual performance dashboard

---

## Recent Improvements

- Consolidation of duplicate code files
- Comprehensive input validation implementation
- Rate limiting on all API endpoints
- Enhanced CORS security configuration
- Security header implementation
- Removal of redundant database fields
- Complete documentation and setup guide
- Security vulnerability fixes via npm audit

---

## Future Enhancements

### Planned Features
- WebSocket support for real-time features
- Video interview recording and playback
- Email notification system
- Advanced analytics with charts
- Integration with ATS platforms
- Mobile application (React Native)
- Multi-language support
- Cloud-based resume storage
- Advanced performance recommendations

### Potential Improvements
- Caching layer (Redis)
- Database query optimization
- Frontend performance optimization
- Automated testing suite
- CI/CD pipeline integration
- Load balancing setup
- Database backup automation

---

## Getting Help

### Documentation
- Comprehensive setup guide: See [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- Detailed changes log: See [FIXES_APPLIED.md](./FIXES_APPLIED.md)
- API documentation: See SETUP_GUIDE.md API section

### Common Issues
- Review the Troubleshooting section above
- Check error messages in console logs
- Verify all environment variables are set
- Ensure MongoDB is running and accessible

### Support Resources
- Express.js documentation: https://expressjs.com/
- React documentation: https://react.dev/
- MongoDB documentation: https://docs.mongodb.com/
- Mongoose documentation: https://mongoosejs.com/
- JWT documentation: https://jwt.io/

---

## License

MIT License - This project is freely available for personal and commercial use.

---

## Project Information

Version: 1.0.0
Last Updated: May 5, 2026
Status: Production Ready for Local Development

For detailed setup and deployment instructions, please refer to [SETUP_GUIDE.md](./SETUP_GUIDE.md)


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


