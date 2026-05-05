# ASPIRA - Setup & Running Guide

## Project Structure
- **Backend**: Express.js + MongoDB + Mongoose
- **Frontend**: React 19 + Tailwind CSS + Framer Motion
- **AI Engines**: Groq (Primary) + Google Gemini (Fallback)

---

## Prerequisites

- **Node.js** >= 18.0.0
- **MongoDB** (local or Atlas connection string)
- **npm** or **yarn**
- API Keys (optional but recommended):
  - Groq API Key: https://console.groq.com
  - Google Gemini API Key: https://makersuite.google.com/app/apikey

---

## Backend Setup

### 1. Navigate to Backend Directory
```bash
cd Backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the `Backend` directory (or rename `.env.local`):

```env
# MongoDB Configuration
MONGO_URI=mongodb://localhost:27017/aspira
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/aspira

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRES_IN=30d

# AI Configuration
GROQ_API_KEY=your_groq_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

### 4. Ensure MongoDB is Running
```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas connection string in .env
```

### 5. Start Backend Server
```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

**Expected Output:**
```
Connected to MongoDB
Server running on PORT: 5000
```

---

## Frontend Setup

### 1. Navigate to Frontend Directory
```bash
cd frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the `frontend` directory (or rename `.env.example`):

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Start Frontend Development Server
```bash
npm start
```

The app will open automatically at `http://localhost:3000`

---

## Full Setup (Both Backend & Frontend)

### Terminal 1 - Backend
```bash
cd Backend
npm install
npm run dev
# Runs on http://localhost:5000
```

### Terminal 2 - Frontend
```bash
cd frontend
npm install
npm start
# Opens http://localhost:3000
```

---

## Testing the Application

### 1. Register a New User
- Go to http://localhost:3000/signup
- Fill in the registration form
- Click "Sign Up"

### 2. Login
- Go to http://localhost:3000/login
- Use your registered credentials

### 3. Test Features
- **Interview Prep**: Upload a resume or take a practice interview
- **Jobs**: Browse jobs or view live job board
- **Cover Letter**: Generate AI-powered cover letters
- **Resume**: Build and download your resume

---

## API Documentation

### Authentication Endpoints
- `POST /api/users/register` - Create new user
- `POST /api/users/login` - Login user (returns JWT)
- `GET /api/users/me` - Get current user profile (requires auth)

### Interview Endpoints
- `GET /api/interview/questions` - Get interview questions
- `POST /api/interview/chat` - AI mock interview
- `POST /api/interview/assessment` - Save assessment
- `GET /api/interview/analytics/:userId` - Get user analytics

### Job Endpoints
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/live` - Get live jobs from external API
- `POST /api/jobs` - Create new job (requires auth)

### Cover Letter Endpoints
- `POST /api/coverletter` - Create cover letter (requires auth)
- `GET /api/coverletter/user/:userId` - Get user's letters
- `PUT /api/coverletter/:id` - Update letter (requires auth)

---

## Security Features Implemented

✅ **CORS Protection** - Restricted to allowed origins
✅ **Rate Limiting** - Prevents API abuse
✅ **JWT Authentication** - Secure token-based auth
✅ **Input Validation** - All user inputs validated
✅ **Password Hashing** - Bcrypt with 10 salt rounds
✅ **Security Headers** - XSS, Clickjacking protection

---

## Troubleshooting

### MongoDB Connection Error
- Check if MongoDB is running
- Verify connection string in `.env`
- For MongoDB Atlas, ensure IP is whitelisted

### CORS Errors
- Verify `FRONTEND_URL` in backend `.env`
- Check that frontend URL matches allowed origins

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

---

## Production Deployment

### Backend
1. Set `NODE_ENV=production`
2. Use strong `JWT_SECRET`
3. Set `FRONTEND_URL` to production URL
4. Use MongoDB Atlas or managed database
5. Store API keys in secrets manager
6. Deploy to: Heroku, Railway, Render, or AWS

### Frontend
1. Build optimized version: `npm run build`
2. Deploy to: Vercel, Netlify, AWS S3, or similar
3. Configure environment variables for production API URL

---

## File Structure

```
Aspira/
├── Backend/
│   ├── config/          # Configuration files
│   ├── controllers/      # Business logic
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── middleware/       # Auth, validation, etc.
│   ├── utils/           # Utility functions
│   ├── uploads/         # Resume storage
│   ├── server.js        # Main server
│   └── package.json
├── frontend/
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API services
│   │   ├── context/     # React context
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
└── README.md
```

---

## Support

For issues or questions, refer to:
- API Documentation: See API section above
- Environment Setup: See prerequisites
- Troubleshooting: See common issues section

---

**Version**: 1.0.0
**Last Updated**: May 5, 2026
