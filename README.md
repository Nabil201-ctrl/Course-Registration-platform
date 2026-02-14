# Course Management System

A Node.js Express application for managing courses, students, and registrations.

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd course-management-system
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory with your database configuration:
    ```env
    CONNECTION_STRING=postgresql://username:password@localhost:5432/database_name
    ```

4.  **Database Setup:**
    Run the SQL commands in `models/schema.sql` to create the necessary tables.

5.  **Start the Server:**
    ```bash
    npm start
    ```
    The server will start on port 3000.

## API Documentation

Interactive API documentation is available via Swagger UI.

1.  Start the server.
2.  Navigate to `http://localhost:3000/api-docs` in your browser.

Here you can explore and test all available endpoints for Courses, Registrations, and Users.

## Security & Data Integrity Improvements ("Loop Holes")

During the review of the codebase, several issues were identified and addressed:

1.  **Data Integrity (Foreign Key Constraints):**
    - **Issue:** The `Registrations` table lacked foreign key constraints, allowing for orphaned records (e.g., a registration existing for a deleted user or course).
    - **Fix:** Added `FOREIGN KEY` constraints to `student_id` (referencing `users`) and `course_id` (referencing `courses`) in `models/schema.sql`.

2.  **Logical Consistency:**
    - **Issue:** The `users` table had a `UNIQUE` constraint on the `department` column, which meant only one student could exist per department.
    - **Fix:** Removed the `UNIQUE` constraint from the `department` column in the schema.

3.  **API Documentation:**
    - **Issue:** Lack of documentation made it difficult to understand API usage.
    - **Fix:** Integrated Swagger UI (`swagger-ui-express`) to provide clear, interactive documentation.

## License

ISC
