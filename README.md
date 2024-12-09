### README.md

# WebSpiders Backend

This is the backend for the **WebSpiders** application, a task management system. It provides a RESTful API for managing tasks, including functionality for creating, retrieving, updating, and deleting tasks. The backend is built using **Node.js**, **Express**, and **MongoDB**, with schema validation handled by **Joi**.

---

## Features

- **CRUD Operations**: Create, read, update, and delete tasks.
- **Task Attributes**:
  - Title
  - Description
  - Status (`TODO`, `IN_PROGRESS`, `COMPLETED`)
  - Priority (`LOW`, `MEDIUM`, `HIGH`)
  - Due date
- **Filtering and Pagination**: Retrieve tasks based on filters like `status` and `priority`, with support for pagination.
- **Validation**: Ensures data integrity using **Joi**.
- **Global Error Handling**: A centralized error-handling mechanism for catching and processing application errors.

---

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud-hosted, such as MongoDB Atlas)
- **npm** (comes with Node.js)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/webspiders-backend.git
   cd webspiders-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following environment variables:

   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will start on the configured port (default is `3000`).

---

## API Endpoints

### Base URL

`http://localhost:3000`

### Routes

| Method | Endpoint       | Description                      |
|--------|----------------|----------------------------------|
| POST   | `/tasks`       | Create a new task               |
| GET    | `/tasks`       | Retrieve all tasks (with filters)|
| GET    | `/tasks/:id`   | Retrieve a specific task by ID  |
| PUT    | `/tasks/:id`   | Update a task by ID             |
| DELETE | `/tasks/:id`   | Delete a task by ID             |

### Query Parameters (for `/tasks`)

- `status`: Filter tasks by status (`TODO`, `IN_PROGRESS`, `COMPLETED`).
- `priority`: Filter tasks by priority (`LOW`, `MEDIUM`, `HIGH`).
- `sort`: Sort tasks by a specific field (e.g., `dueDate`).
- `limit`: Limit the number of tasks returned (default: 10).
- `skip`: Number of tasks to skip (default: 0).

---

## Project Structure

```
c:/My Projects/webspidersbackend/
├── .env                    # Environment variables
├── app.js                  # Main server file
├── controllers/            # Contains API logic
│   └── taskController.js
├── middleware/             # Middleware for error handling
│   └── errorHandler.js
├── models/                 # Mongoose schemas
│   └── task.js
├── routes/                 # API route definitions
│   └── tasks.js
├── package.json            # Project metadata and dependencies
└── README.md               # Documentation
```

---

## Validation Rules

The following fields are validated using **Joi**:

| Field       | Type     | Required | Additional Info                                      |
|-------------|----------|----------|-----------------------------------------------------|
| `title`     | String   | Yes      | Max length: 100                                     |
| `description` | String | No       | Optional                                            |
| `status`    | String   | No       | Must be one of: `TODO`, `IN_PROGRESS`, `COMPLETED` |
| `priority`  | String   | No       | Must be one of: `LOW`, `MEDIUM`, `HIGH`            |
| `dueDate`   | Date     | No       | Optional                                            |

---

## Error Handling

A global error handler ensures that errors are logged and appropriate responses are sent to the client. Errors include validation failures, database issues, or unexpected server issues.

---

## Future Improvements

- Authentication and Authorization (e.g., JWT for user sessions).
- More robust logging and monitoring.
- Improved test coverage for all endpoints.
- Support for soft deletion of tasks.

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute as needed.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

---

## Contact

If you have questions or need help, feel free to reach out to the maintainer:

- **Name**: Rohit
- **Email**: rohitp.vja@gmail.com
- **GitHub**: [RohitPalavanchu](https://github.com/RohitPalavanchu)  