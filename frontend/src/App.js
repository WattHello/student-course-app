import React from 'react';
import StudentList from './components/StudentList';
import CourseList from './components/CourseList';
import AddStudent from './components/AddStudent';
import AddCourse from './components/AddCourse';
import './styles/global.css';

function App() {
  const students = [
    { id: 1, name: 'Alice', department: 'Computer Science', semester: 3 },
  ];
  const courses = [
    { id: 1, name: "Data Structures", department: "Computer Science", isOpen: true },
    { id: 2, name: "Linear Algebra", department: "Mathematics", isOpen: true },
    { id: 3, name: "Organic Chemistry", department: "Chemistry", isOpen: false },
  ];

  return (
    <div className="App">
      <h1>Student and Course Management</h1>
      <StudentList students={students} />
      <AddStudent onStudentAdded={() => console.log("Student Added")} />
      <CourseList courses={courses} />
    </div>
  );
}

export default App;