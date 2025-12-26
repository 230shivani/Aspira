
# Aspira Project

Aspira is a full-stack web application that streamlines job applications, resume building, and cover letter generation. The project consists of two main parts:

- **Aspira (Frontend):** React.js application for user interaction.
- **Backend:** Node.js/Express.js REST API for authentication, resume, and cover letter management.

---

## Features

- User authentication (signup/login, JWT-based)
- Resume builder and upload
- Cover letter generator
- Job listings and application tracking
- Responsive UI with Tailwind CSS

---

## Project Structure

```
Aspira/           # Frontend (React)
  src/
    components/   # Reusable UI components
    pages/        # Main app pages (Home, Jobs, Login, Resume, Signup)
    services/     # API and user service logic
  public/         # Static assets
  ...             # Config files (tailwind, postcss, etc.)

Backend/          # Backend (Node.js/Express)
  config/         # DB and server config
  controllers/    # Route handlers
  middleware/     # Auth middleware
  models/         # Mongoose models
  routes/         # Express routes
  uploads/        # Uploaded files (resumes, etc.)
  ...             # server.js, .env, etc.
```

---

## Prerequisites
- Node.js (v16+ recommended)
- npm
- MongoDB (local or Atlas)

---

## Getting Started


### 1. Clone the Repository
```sh
git clone <repo-url>
cd aspira
```

### 2. Setup the Backend
```sh
cd Backend
npm install
# Create your .env file with MONGO_URI and PORT (see below)
npm start              # or: npx nodemon server.js
```

**Example .env:**
```
MONGO_URI=mongodb://localhost:27017/aspira
PORT=5000
```

### 3. Setup the Frontend
Open a new terminal:
```sh
cd Aspira
npm install
# Create your .env file with REACT_APP_API_URL (see below)
npm start
```

**Example .env:**
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## Usage

1. Visit [http://localhost:3000](http://localhost:3000) in your browser.
2. Register a new account, login, and start using the platform.

---

## API Endpoints (Backend)

- `POST   /api/users/register` — Register new user
- `POST   /api/users/login` — Login
- `GET    /api/users/me` — Get current user profile (auth required)
- `PATCH  /api/users/:id` — Update user profile
- `POST   /api/users/:id/upload/resume` — Upload resume

---

## Technologies Used

- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Multer

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

MIT License
