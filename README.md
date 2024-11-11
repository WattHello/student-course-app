Student-Course Application

Overview

The Student-Course Application is a web-based system designed to manage student and course information. Users can view, add, update, and delete records for students and courses. The application is built using React for the frontend and Express.js for the backend.

Features

- View a list of students and courses
- Add new students and courses
- Update existing student and course information
- Delete students and courses
- Filter students and courses based on various criteria

Technologies Used

- Frontend: React, Axios, React Router
- Backend: Node.js, Express.js
- Data Storage: In-memory data (JavaScript arrays)

Project Structure

Frontend Components
App.js: Main component that sets up routing and overall structure.
StudentList.js: Displays a list of all students.
CourseList.js: Displays a list of all courses.
AddStudent.js: Form component for adding a new student.
AddCourse.js: Form component for adding a new course.

Backend Endpoints

Students
GET /api/students: Retrieve all students.

GET /api/students/:id: Retrieve a specific student by ID.

POST /api/students: Add a new student.

PUT /api/students/:id: Update an existing student.

DELETE /api/students/:id: Delete a student.
Courses

GET /api/courses: Retrieve all courses.

POST /api/courses: Add a new course.

PUT /api/courses/:id: Update an existing course.

DELETE /api/courses/:id: Delete a course.