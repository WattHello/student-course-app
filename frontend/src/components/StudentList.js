import React, { useState, useEffect } from 'react';
import { getAllStudents, deleteStudent } from '../api';
import './StudentList.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await getAllStudents();
      setStudents(response.data);
    } catch (error) {
      console.error("Failed to fetch students", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      fetchStudents();
    } catch (error) {
      console.error("Failed to delete student", error);
    }
  };

  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <div className="student-list">
        {students.map((student) => (
          <div key={student.id} className="student-item">
            <span className="student-name">{student.name}</span>
            <span>{student.department}</span>
            <span>Semester {student.semester}</span>
            <button onClick={() => handleDelete(student.id)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;