import React from 'react';
import StudentList from './components/StudentList';
import CourseList from './components/CourseList';
import AddStudent from './components/AddStudent';
import AddCourse from './components/AddCourse';

function App() {
  return (
    <div className="App">
      <h1>Student-Course Application</h1>
      <StudentList />
      <AddStudent onStudentAdded={() => {}} />
      <CourseList />
      <AddCourse onCourseAdded={() => {}} />
    </div>
  );
}

export default App;