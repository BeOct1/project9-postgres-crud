# User Management API

## Overview

This API provides endpoints for managing users.

## Endpoints

### GET /users

* Retrieves a list of all users.
* Returns a JSON array of user objects.

### GET /users/:id

* Retrieves a user by ID.
* Returns a JSON object representing the user.

### POST /users

* Creates a new user.
* Expects a JSON object with the following properties:
  * name (string)
  * email (string)
  * age (number)
* Returns a JSON object representing the created user.

### PUT /users/:id

* Updates an existing user.
* Expects a JSON object with the following properties:
  * name (string)
  * email (string)
  * age (number)
* Returns a JSON object representing the updated user.

### DELETE /users/:id

* Deletes a user by ID.
* Returns a 204 No Content response.

## Database Setup

Before running the application, ensure you have a PostgreSQL database set up. Create a `users` table with the following SQL:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INTEGER NOT NULL
);
```

## Environment Variables

Create a `.env` file in the root directory with the following content (see `.env.example`):

```env
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_db_name
```

## Error Handling & Input Validation

* All endpoints use input validation with `express-validator` to ensure data integrity.
* Errors are handled by a centralized error handler middleware, returning a JSON error message.

## Server & Database Connection Logic

The server will only start if a connection to the PostgreSQL database is successful. If the database connection fails, the application will log an error and exit. The server port can be configured via the `PORT` environment variable (defaults to 3000).

## Running the Application

1. Clone the repository using `git clone https://github.com/your-username/user-management-api.git`
2. Navigate to the project directory using `cd user-management-api`
3. Install dependencies using `npm install`
4. Start the application using `npm start`
5. Use a tool like Postman or cURL to test the API endpoints.

## Limitations & Troubleshooting

* The application does not include authentication or authorization; all endpoints are public.
* No pagination is implemented for the GET /users endpoint.
* The API expects a running PostgreSQL instance and a correctly configured `.env` file. If you encounter connection errors, verify your database credentials and that the database server is running.
* Error messages are generic for security reasons. Check your server logs for more details if debugging is needed.
* If you receive validation errors, ensure your request body matches the required schema for each endpoint.
* The application does not include automated tests.

## Project Structure

* `index.js`: Main entry point. Sets up Express, connects to the database, and starts the server only if the database connection is successful.
* `config/db.js`: Database connection logic using `pg` and environment variables.
* `routes/users.js`: Defines user-related API endpoints and applies input validation.
* `controllers/users.js`: Contains business logic for CRUD operations on users, using parameterized queries for security.
* `middleware/errorHandler.js`: Centralized error handling middleware for consistent error responses.

## PUT Method Implementation

The PUT /users/:id endpoint is implemented in the codebase (see `controllers/users.js` and `routes/users.js`). It allows you to update a user's name, email, and age by ID. If you receive a 404 error, the user ID may not exist in the database.