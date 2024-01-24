import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style/UpparArea.css"

export const Courses = () => {
    const username = localStorage.getItem("username");
    const role = localStorage.getItem('role');
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });

  const createCourse = async () => {
    try {
      const response = await axios.post('http://localhost:8000/courses/create', newCourse);
      setCourses([...courses, response.data]);
      setNewCourse({ title: '', description: '' });
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:8000/courses/all');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };
  useEffect(() => {
    fetchCourses(); // Fetch courses when the component mounts
  }, []);
  


  
  return (<>
    <div className='DicsussDIV'>
      <h2>Courses</h2>
      <div>
      <div>
      <h1>Welcome, {username && username.split('@')[0]}!</h1>
      <p>Role: {role}</p>
    </div>
    </div>
    </div>
    <div>
      <h1>Teacher Dashboard</h1>
      <div>
        <h2>Create a New Course</h2>
        <input
          type="text"
          placeholder="Title"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newCourse.description}
          onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
        />
        <button onClick={createCourse}>Create Course</button>
      </div>
      <div>
        <h2>Your Courses</h2>
        <ul>
          {courses.map(course => (
            <li key={course.id}>{course.title}</li>
          ))}
        </ul>
      </div>
    </div>
</>
  )
}

