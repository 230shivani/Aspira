# Authentication & User Management Documentation

## 🛡️ Overview
AI CarrerHub implements a robust and secure authentication system using **JWT (JSON Web Tokens)** and **Bcrypt.js**. This ensures that user data is protected and that only authorized users can access personal features like resume building and job tracking.

---

## 🚀 Key Features
- **User Signup**: Registration with multi-field profiles (Name, Email, Bio, Experience).
- **Secure Login**: Credential verification against hashed passwords.
- **JWT-based Sessions**: Stateless authentication that maintains security across requests.
- **Profile Updates**: Real-time updates for user metadata and media (Resumes/Cover Letters).
- **Protected Routing**: Middleware-enforced access to private API endpoints.

---

## ⚙️ Technical Implementation

### 1. Security & Password Hashing
- **Library**: `bcryptjs`
- **Process**: When a user registers, the plain-text password is "salted" and "hashed" 10 times.
- **Storage**: Only the irreversible hash is stored in the MongoDB `User` collection. This prevents data leaks even if the database is compromised.

### 2. Session Management (JWT)
- **Library**: `jsonwebtoken`
- **Login Flow**: Upon successful password comparison, the server signs a payload containing the `id` and `email` using a private `JWT_SECRET`.
- **Token**: The generated token is sent to the frontend and typically expires in 7 days.
- **Auth Header**: The frontend includes this token in the `Authorization` header for every request:  
  `Authorization: Bearer <your_jwt_token>`

### 3. Backend Middleware
- **Path**: `Backend/middleware/auth.middleware.js`
- **Function**: The `authenticate` function intercepts incoming requests, verifies the JWT, and attaches the user's identity to the request object (`req.user`). If the token is invalid or missing, it returns a `401 Unauthorized` status.

---

## 🛠️ API Reference

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/users/register` | `POST` | Create a new user account | No |
| `/api/users/login` | `POST` | Authenticate and get token | No |
| `/api/users/me` | `GET` | Get current user profile | Yes |
| `/api/users/:id` | `PATCH` | Update profile details | Yes |
| `/api/users/:id/upload/resume` | `POST` | Upload resume (PDF/DOC) | Yes |

---

## 📱 Frontend Integration
- **State Management**: Authentication state is maintained via `localStorage`.
- **Axios Interceptors**: The app is configured to automatically pull the token from storage and attach it to API calls.
- **UI Feedback**: Dynamic navigation changes (e.g., swapping "Login" with "Dashboard") based on the presence of a valid session token.

---

## 📂 File Structure
- **Frontend Components**: `Login.jsx`, `Signup.jsx`
- **Backend Routes**: `Routes/user.routes.js`
- **Backend Controllers**: `controllers/user.controller.js`
- **Models**: `models/user.model.js` (Mongoose)
- **Middleware**: `middleware/auth.middleware.js`
