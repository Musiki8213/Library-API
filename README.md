# Library API

A simple RESTful API for managing a library system with **authors** and **books**.  
Built with **Node.js**, **TypeScript**, and **Express**. Data is stored in-memory for simplicity.

---

## Features

### Authors
- **Create Author:** `POST /authors`
- **List All Authors:** `GET /authors`
- **Get Author by ID:** `GET /authors/:id`
- **Update Author:** `PUT /authors/:id`
- **Delete Author:** `DELETE /authors/:id`
- **List Books by Author:** `GET /authors/:id/books`

### Books
- **Create Book:** `POST /books` (must reference a valid author)
- **List All Books:** `GET /books`
- **Get Book by ID:** `GET /books/:id`
- **Update Book:** `PUT /books/:id`
- **Delete Book:** `DELETE /books/:id`

### Middleware
- **Logger:** Logs HTTP method and URL
- **Validation:** Ensures required fields are present and valid
- **Error Handling:** Centralized handling for 400, 404, 409, and 500 errors

---

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm

### Installation
```bash
# Clone repository
git clone <your-repo-url>
cd <repo-folder>

# Install dependencies
npm install

# Install UUID package and types
npm install uuid
npm install --save-dev @types/uuid

# Run server
npm run dev
