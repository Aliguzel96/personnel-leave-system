# Personnel Leave Management System

This project is a simple full-stack application developed as a technical case study.  
It allows employees to submit leave requests and administrators to review and manage them.

---

## 🚀 Live Demo

Frontend: https://shiny-tapioca-9056ed.netlify.app  
Backend API: https://personnel-leave-system-z1w7.onrender.com

---

## 🧩 Features

### Employee (Public Access)
- Submit leave requests without authentication
- Select leave type (Annual, Sick, Personal)
- Choose start and end dates
- Add description
- Form validation (required fields, date consistency)

### Admin (Protected)
- Secure login with JWT authentication
- View all leave requests
- Approve or reject requests
- See leave duration

---

## 🛠️ Tech Stack

### Backend
- Java Spring Boot
- Spring Security
- JWT Authentication
- H2 Database (in-memory)

### Frontend
- React
- Material UI
- Axios

### Deployment
- Backend: Render
- Frontend: Netlify

---

## 📡 API Endpoints

### Public
- `POST /api/leaves` → Create a leave request

### Authentication
- `POST /api/auth/login` → Returns JWT token

### Admin (Protected)
- `GET /api/leaves` → List all requests
- `PUT /api/leaves/{id}` → Update leave status

---

## 🧪 Validation & Error Handling

- Required fields validation (name, dates)
- Start date cannot be after end date
- API returns proper HTTP status codes
- User-friendly error messages displayed on UI

---

## 🧠 Design Decisions

- Public endpoint for submitting requests (no authentication required)
- Admin-only access for viewing and updating requests
- JWT used for stateless authentication
- Separation of frontend and backend for scalability

---

## ▶️ Run Locally

### Backend
cd backend

./mvnw spring-boot:run


### Frontend
cd frontend

npm install

npm start

---

## 📌 Notes

- Admin credentials are stored securely via environment variables
- CORS configuration allows communication between deployed frontend and backend
- SPA routing handled via Netlify redirects

---

## 👨‍💻 Author

Ali Güzel