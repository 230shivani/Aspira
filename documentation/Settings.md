# Settings & Profile Management Documentation

## ⚙️ Overview
The **Settings** module allows users to personalize their professional identity, manage account security, and configure notification preferences. It acts as the "Command Center" for the user's AI CarrerHub profile.

---

## 🚀 Key Features

### 1. Account Profile Management
- **Personal Identity**: Update display name and email (view-only for security).
- **Professional Context**: Edit the primary **Bio** and **Years of Experience** that are used across the platform for job matching and AI simulations.
- **Visual Presence**: User avatar management (placeholder implemented).

### 2. Security & Privacy
- **Secure Password Update**: Verification of the current password before allowing a change to the new one.
- **Industry Standard Hashing**: All password changes are re-hashed with **Bcrypt** on the backend.
- **Privacy Controls**: View active sessions and manage two-factor authentication (Placeholders).

### 3. Notification Center
- **Alert Management**: Future-proof area for managing email and push alerts for new job matches.

---

## 🔄 Technical Implementation

### 1. Frontend Logic
- **Component**: `src/pages/Settings.jsx`
- **Global State Synchronization**: After a profile update, the `updateUserInfo` function in `AuthContext` is called to ensure the Navbar and other components reflect changes immediately without a page refresh.

### 2. Service Layer
The module communicates with the backend via `userService.js`:
- `userService.updateUser(id, data)` — `PATCH` request to update metadata.
- `userService.changePassword(creds)` — `POST` request to change credentials securely.

---

## 🔍 Deep Dive: How it works (The Workflow)

### 1. Profile Update Workflow
1. **Frontend Initiation**: User updates fields (Bio, Name) and clicks "Save".
2. **API Call**: Axios sends a `PATCH` request to `/api/users/:id` with the updated JSON body.
3. **Backend Middleware**: The `authenticate` middleware extracts the JWT from the header, verifies it, and ensures the user is updating *their own* profile.
4. **Database Operation**: Mongoose uses `findByIdAndUpdate` to save changes to MongoDB.
5. **State Sync**: Upon receiving a `200 OK` response, the frontend calls `updateUserInfo()` in the `AuthContext`. This updates the `user` state globally, causing the Navbar (Header) and other pages to re-render with the new data instantly.

### 2. Password Change Workflow (Secure)
1. **Frontend Input**: User enters `oldPassword` and `newPassword`.
2. **Verification**: The backend first fetches the user's current hashed password from the database.
3. **Bcrypt Compare**: `bcrypt.compare()` checks if the provided `oldPassword` matches the hash in the DB.
4. **Re-Hashing**: If valid, the `newPassword` is hashed with 10 salt rounds before being saved.
5. **Session Integrity**: The user remains logged in using their existing token, as the token is based on user ID which remains un-changed.

---

---

## 🛠️ How to use
1. Click the **Settings (Gear) icon** in the top navigation bar.
2. Under the **Profile Tab**, update your Bio or Experience and click **"Save Changes"**.
3. To secure your account, switch to the **Security Tab**, enter your old password, followed by a new one, and confirm it.
4. Changes are applied instantly across the entire platform.

---

## 📂 Component Map
- **Page**: `src/pages/Settings.jsx`
- **Global State**: `src/context/AuthContext.js`
- **Service**: `src/services/userService.js`
- **Backend API**: `controllers/user.controller.js` & `Routes/user.routes.js`
