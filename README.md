## Overview

This project is a REST API built with **Node.js** and **Express.js** for managing tasks.

The project demonstrates how to replace an in-memory data store with a real **PostgreSQL** database using the **Repository Pattern**, without changing the application's routes.

The application is fully containerized using **Docker** and **Docker Compose**, allowing both the API and database to start with a single command.

---

# Features

* REST API using Express.js
* PostgreSQL database
* Docker & Docker Compose
* Repository Pattern
* Environment Variables using `.env`
* Swagger API Documentation
* Persistent data using Docker Volumes

---

# Technologies Used

* Node.js
* Express.js
* PostgreSQL
* Docker
* Docker Compose
* Swagger UI
* dotenv
* pg

---

# Project Structure

Assignment 2
│
├── database/
│   └── init.sql
│
├── src/
│   ├── repositories/
│   │   └── taskRepository.js
│   ├── db.js
│   ├── initDatabase.js
│   └── server.js
│
├── .dockerignore
├── .env
├── .env.example
├── compose.yaml
├── Dockerfile
├── index.js
├── openapi.json
├── package.json
└── README.md
```

---

# Installation

Clone the repository.

```bash
git clone <YOUR_GITHUB_REPOSITORY_LINK>
```

Go into the project.

```bash
cd "Assignment 2"
```

---

# Environment Variables

Copy the example environment file.

```bash
cp .env.example .env
```

Example:

```env
DATABASE_URL=postgres://postgres:dev@localhost:5433/tasks
```

> **Note:** When running with Docker Compose, the application automatically uses:

```env
DATABASE_URL=postgres://postgres:dev@db:5432/tasks
```

---

# Running the Project

Start the entire application with one command.

```bash
docker compose up
```

This starts:

* Express API
* PostgreSQL Database

---

# API Endpoints

| Method | Endpoint   | Description           |
| ------ | ---------- | --------------------- |
| GET    | /          | API information       |
| GET    | /health    | Health check          |
| GET    | /tasks     | Get all tasks         |
| GET    | /tasks/:id | Get task by ID        |
| POST   | /tasks     | Create task           |
| PUT    | /tasks/:id | Update task           |
| DELETE | /tasks/:id | Delete task           |
| GET    | /docs      | Swagger Documentation |

---

# Example Request

Create a task

```bash
curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d "{\"title\":\"Learn PostgreSQL\"}"
```

Example Response

```json
{
    "id": 4,
    "title": "Learn PostgreSQL",
    "done": false
}
```

---

# Swagger Documentation

Open:

```
http://localhost:3000/docs
```

---

# Repository Pattern

This project uses the **Repository Pattern**.

Originally, tasks were stored in an in-memory JavaScript array.

For Assignment 3, only the repository layer was changed to use PostgreSQL.

The application's routes and API behavior remained unchanged.

---

# Database Initialization

On startup the application automatically:

* Creates the `tasks` table if it does not exist.
* Seeds three default tasks only when the table is empty.

This prevents duplicate seed data every time the server starts.

---

# Docker

The application uses Docker Compose to run:

* API Container
* PostgreSQL Container

Docker Volume:

```
taskdata
```

is used to persist the database.

---

# Persistence Test

Persistence was verified using the following steps:

1. Started the application using Docker Compose.
2. Created new tasks through the API.
3. Stopped the containers using:

```bash
docker compose down
```

4. Started the containers again.

```bash
docker compose up
```

5. Verified that the previously created tasks still existed in the database.

This confirms that PostgreSQL data is stored in the Docker volume and survives container restarts.

---

# Screenshots

## Docker Compose Running

![Docker Successfully Running](<Docker compose running-1.jpg>)

---

## Swagger Documentation
![SwaggerUI](SwaggerUI-1.jpg)

---

# Assignment Requirements Completed

* ✔ PostgreSQL running in Docker
* ✔ Docker Volume for persistent storage
* ✔ Environment variables using `.env`
* ✔ `.env.example` committed
* ✔ Repository Pattern implemented
* ✔ Service and routes unchanged
* ✔ CRUD operations using PostgreSQL
* ✔ Docker Compose
* ✔ Swagger Documentation
* ✔ Persistence verified after restart

---

# GitHub Repository

**Repository:**

>https://github.com/FatimaH2912/Assignment-2

---

# Author

**Fatima Haroon**
https://github.com/FatimaH2912
