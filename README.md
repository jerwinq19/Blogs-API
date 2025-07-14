# 📝 Blogs-API

Welcome to **Blogs-API** – a simple and clean RESTful API for creating, reading, updating, and deleting blog posts.

> Author: **Jico** 🚴‍♂️  
> Built with Node.js + Express  
> Status: 🛠 In development (using in-memory local data)

---

## 🚀 Getting Started

To run this project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/jerwinq19/Blogs-API
cd Blogs-API
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
npm run dev
```

> Server will run on `http://localhost:8000/` by default.

---

## 📡 API Routes

| Method | Route               | Description              |
|--------|---------------------|--------------------------|
| GET    | `/get_blogs`        | Get all blog posts       |
| GET    | `/get_blog/:id`     | Get a single blog by ID  |
| GET    | `/get_blogs?page=1&limit=10`     | Get a paginated blog post|
| POST   | `/create_blog`      | Create a new blog post   |
| DELETE | `/delete_blog/:id`  | Delete a blog by ID      |
| PUT    | `/update_blog/:id`  | Update a blog by ID      |

---

## 🧪 Sample Blog Data Structure

```json
{
  "id": 1,
  "author": "Jico",
  "content": "This is a sample blog.",
  "date": "07/14/2025",
  "time_modified": "12:03:21 PM"
}
```

---

## 📂 Project Structure

```
Blogs-API/
├── node_modules/
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## 🛠 Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon) for live dev reloads

---

## 🧠 Notes

- This project currently uses a mock in-memory database (`localDB` array).
- It's a great starter API for learning backend routes and REST architecture.
- No actual database like MongoDB or SQLite is connected (yet 😉).

---

## 📬 Contact

Want to suggest features or collab?

- GitHub: [@jerwinq19](https://github.com/jerwinq19)

---

> Happy coding, and enjoy your blog-powered backend! 🚀
