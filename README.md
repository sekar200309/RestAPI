# User Management REST API (Node.js + Express)

This project is a simple **User Management RESTful API** built with **Node.js**, **Express**, and follows the **MVC architecture** pattern. It uses UUID for generating unique user IDs and is designed to be easily extended into a full **social media backend**.

---

## 📁 Project Structure

```
📦 rest-api
├── 📁 controllers
│   └── usersController.js       # All business logic (CRUD operations)
├── 📁 routes
│   └── users.js                 # All routes for the /users endpoint
├── index.js                     # Entry point of the server
└── package.json
```

---

## 🚀 Features

- Create a user (`POST /users`)
- Get all users (`GET /users`)
- Get a specific user (`GET /users/:id`)
- Update a specific user (`PATCH /users/:id`)
- Replace user data completely (`PUT /users/:id`)
- Delete a user (`DELETE /users/:id`)

---

## 📦 Installation

```bash
git clone <your-repo-url>
cd rest-api
npm install
```

---

## ▶️ Running the Server

```bash
npm run dev
```

> Uses `nodemon` to auto-restart on changes

---

## 🧪 API Endpoints

### 🔹 `GET /users`

* Fetch all users

### 🔹 `GET /users/:id`

* Fetch user by ID

### 🔹 `POST /users`

* Create new users

```json
[
  {
    "username": "panda",
    "age": 21
  },
  {
    "username": "sekar",
    "age": 22
  }
]
```

### 🔹 `PATCH /users/:id`

* Update specific fields (e.g., only `username`)

### 🔹 `PUT /users/:id`

* Replace entire user object

### 🔹 `DELETE /users/:id`

* Delete user by ID

---

## 📚 Technologies Used

* Node.js
* Express.js
* UUID (for user IDs)
* ES Modules
* RESTful conventions
* MVC architecture

---

## 🔧 Tools Recommended for Testing

* [Postman](https://www.postman.com/)
* [Thunder Client (VS Code extension)](https://www.thunderclient.com/)
* [Insomnia](https://insomnia.rest/)

---

## 📌 Notes

* Data is stored **in-memory** (array), meaning it resets on server restart.
* Ideal for learning REST API and MVC structure before adding a real database (MongoDB, PostgreSQL, etc.)
* Ready to be extended into a full **social media backend** with authentication and MongoDB.

---

## 🧑‍💻 Author

Made with 💻 by **Sekar**


---
