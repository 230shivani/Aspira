# Cover Letter Builder Documentation

## 📄 Overview
The **Cover Letter Builder** (Cover Empire) is a tool designed to help users create, manage, and tailor professional cover letters for specific job applications. It features an AI-powered draft generator to speed up the writing process.

---

## 🚀 Key Features
- **AI-Powered Personalization**: Automatically generates a professional draft based on the target company and job title.
- **CRUD Operations**: Users can create, view, edit, and delete their saved cover letters.
- **Dashboard View**: Side panel listing all previous letters with their creation dates.
- **Copy & Export**: Ability to copy content to clipboard or export for application submissions.

---

## 🔄 Data Flow & Logic

### 1. Data Source
- **Backend Storage**: All data is fetched from and saved to a **MongoDB** collection named `CoverLetter`.
- **Primary Key**: User sessions are tracked via `userId` (stored in `localStorage`) to ensure users only see their own letters.

### 2. API Integration
The frontend interacts with the server through `coverLetterService.js` using the following endpoints:
- `GET /api/coverletter/user/:userId` — Fetches the list of all letters for the sidebar.
- `POST /api/coverletter` — Saves a new draft or generated letter.
- `DELETE /api/coverletter/:id` — Removes a specific letter.
- `PUT /api/coverletter/:id` — Updates an existing draft.

### 3. AI Content Generation
The "Auto-Generate Draft" feature works as follows:
- **Inputs**: Takes the `Company Name` and `Job Title` provided by the user.
- **Frontend Logic**: Uses a dynamic template engine in `CoverLetter.jsx` to craft a professional story.
- **Customization**: The generated text is fully editable, allowing users to add specific details from the job description for better matching.

---

## ⚙️ Technical Components

- **Frontend Page**: `src/pages/CoverLetter.jsx`
- **Frontend Service**: `src/services/coverLetterService.js`
- **Backend Controller**: `controllers/coverletter.controller.js`
- **Database Model**: `models/coverletter.model.js`

---

## 🛠️ How to use
1. Click on **"New Letter"**.
2. Enter the **Company** and **Job Title**.
3. (Optional) Paste the **Job Description**.
4. Click **"Auto-Generate Draft"** to get a starting point.
5. Finalize your content and click **"Save & Initialize"**.
6. Access your saved letters anytime from the sidebar for future applications.
