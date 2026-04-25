# 🚀 Personnel Leave Management System

A fullstack leave management system built with **Spring Boot** and **React**.

---

## 📌 Overview

This project allows employees to create leave requests and admins to manage them.

### 👤 Employee

* Create leave request
* Select date range
* Optional half-day leave

### 🛠️ Admin

* View all requests
* Approve / Reject requests

---

## 🧰 Tech Stack

### Backend

* Java 17
* Spring Boot
* Spring Security
* JWT Authentication
* H2 Database

### Frontend

* React
* Material UI
* Axios

---

## ⚙️ How to Run

### 🔧 Backend

```bash
cd backend
./mvnw spring-boot:run
```

👉 Runs on:

```
http://localhost:8080
```

---

### 💻 Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

👉 Runs on:

```
http://localhost:3000
```

---

## 🔐 Login

```text
username: admin
password: 1234
```

---

## 📊 Features

* JWT-based authentication
* Role-based access (ADMIN / USER)
* Leave request creation
* Admin approval system
* Half-day leave support
* Date validation (no weekends / past dates)

---

## 📁 Project Structure

```
personnel-leave-system/
├── backend/
└── frontend/
```

---

## ⚠️ Notes

* Uses H2 in-memory database
* Data resets on restart
* Development environment only

---


