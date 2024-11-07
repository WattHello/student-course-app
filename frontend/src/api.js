import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getAllStudents = () => axios.get(`${API_URL}/students`);
export const getStudentById = (id) => axios.get(`${API_URL}/students/${id}`);
export const filterStudents = (filters) => axios.post(`${API_URL}/students/filter`, filters);
export const addStudent = (student) => axios.post(`${API_URL}/students`, student);
export const updateStudent = (id, student) => axios.put(`${API_URL}/students/${id}`, student);
export const deleteStudent = (id) => axios.delete(`${API_URL}/students/${id}`);

export const getAllCourses = () => axios.get(`${API_URL}/courses`);
export const filterCourses = (filters) => axios.post(`${API_URL}/courses/filter`, filters);
export const addCourse = (course) => axios.post(`${API_URL}/courses`, course);
export const updateCourse = (id, course) => axios.put(`${API_URL}/courses/${id}`, course);
export const deleteCourse = (id) => axios.delete(`${API_URL}/courses/${id}`);