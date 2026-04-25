# 🧑‍💼 Personnel Leave Management System

A simple REST API built with Spring Boot for managing employee leave requests.

---

## 🚀 Features

* Create leave request (POST)
* List all requests (GET)
* Approve / Reject request (PUT)
* Validation & error handling
* In-memory database (H2)
* Preloaded sample data

---

## 🛠️ Tech Stack

* Java 17
* Spring Boot
* Spring Data JPA
* H2 Database

---

## ▶️ How to Run

1. Clone the repository
2. Run the application:

```
mvn spring-boot:run
```

3. API will be available at:

```
http://localhost:8080/api/leaves
```

---

## 🧪 Sample Data

The application comes with preloaded data using `data.sql`.

---

## 📬 API Endpoints

### Create Leave

POST /api/leaves

### Get All Leaves

GET /api/leaves

### Update Status

PUT /api/leaves/{id}?status=APPROVED

---

## 📊 H2 Console

```
http://localhost:8080/h2-console
```

JDBC URL:

```
jdbc:h2:mem:testdb
```

---

## 💡 Notes

* Validation errors return HTTP 400
* Start date cannot be after end date

---

## 📌 Future Improvements

* Frontend (React + MUI)
* Authentication (JWT)
* PostgreSQL integration
