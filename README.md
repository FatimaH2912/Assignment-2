# Task API

A simple REST API built with **Node.js** and **Express.js** that performs CRUD (Create, Read, Update, Delete) operations on an in-memory list of tasks. The project also includes **Swagger UI** for interactive API documentation and testing.

---

## Features

* Create new tasks
* View all tasks
* View a task by ID
* Update existing tasks
* Delete tasks
* Health check endpoint
* Interactive API documentation using Swagger UI

---

## Technologies Used

* Node.js
* Express.js
* Swagger UI Express
* OpenAPI 3.0
* JavaScript

---

## Project Structure

Assignment 2/
│── node_modules/
│── index.js
│── openapi.json
│── package.json
│── package-lock.json
└── README.md
```

---

# Installation

## 1. Clone the repository

```bash
git clone https://github.com/FatimaH2912/Assignment-2

---

## 2. Navigate into the project

```bash
cd "Assignment 2"
```

---

## 3. Install dependencies

```bash
npm install
```

---

## 4. Run the server

```bash
node index.js
```

The server will start on:

```text
http://localhost:3000
```

---

# Swagger Documentation

Once the server is running, open:

```text
http://localhost:3000/docs
```

to access the interactive Swagger UI documentation.

---

## Swagger Screenshot

```
images/SwaggerUI.jpg
```

---

# API Endpoints

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/`          | Returns API information |
| GET    | `/health`    | Checks server status    |
| GET    | `/tasks`     | Returns all tasks       |
| GET    | `/tasks/:id` | Returns a specific task |
| POST   | `/tasks`     | Creates a new task      |
| PUT    | `/tasks/:id` | Updates a task          |
| DELETE | `/tasks/:id` | Deletes a task          |

---

# Example cURL Request

### Create a Task

```bash
curl -i -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d "{\"title\":\"Study Express\"}"
```

### Example Output

```http
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
    "id": 4,
    "title": "Study Express",
    "done": false
}
```

---

# Testing

The API can be tested using:

* Swagger UI (`/docs`)
* curl
* Postman (optional)

---

# Assignment Stages Completed

* Stage 1 – Express Server Setup
* Stage 2 – Basic API Endpoints
* Stage 3 – CRUD Operations
* Stage 4 – Testing with curl
* Stage 5 – Swagger UI Documentation
* Stage 6 – GitHub Repository and README

---

# Notes

* This project stores data in memory using a JavaScript array.
* Restarting the server resets all tasks to the initial sample data because no database is used.

---

# Author

**Name:** `Fatima Haroon`

**GitHub:** `https://github.com/FatimaH2912`
