import React, { useState, useEffect } from 'react';
import { getAllCourses, deleteCourse } from '../api';
import './CourseList.css';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await getAllCourses();
      setCourses(response.data);
    } catch (error) {
      console.error("Failed to fetch courses", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCourse(id);
      fetchCourses();
    } catch (error) {
      console.error("Failed to delete course", error);
    }
  };

  return (
    <div className="course-list-container">
      <h2>Course List</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            <h3>{course.name}</h3>
            <p>Department: {course.department}</p>
            <p>Status: {course.isOpen ? 'Open' : 'Closed'}</p>
            <button onClick={() => handleDelete(course.id)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;