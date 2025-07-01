import React, { useState } from "react";

export default function App3() {
  const [courses, setCourses] = useState([
    { name: "Full Stack Development", score: 2 },
    { name: "Algorithms", score: 3 },
    { name: "Database Applications", score: 4 },
    { name: "Tin", score: 5 },
  ]);

  const [courseName, setCourseName] = useState("");
  const [courseScore, setCourseScore] = useState("");

  const handleAdd = () => {
    if (!courseName || !courseScore) return;
    const newCourse = {
      name: courseName,
      score: parseFloat(courseScore),
    };

    setCourses([...courses, newCourse]);
    setCourseName("");
    setCourseScore("");
  };

  const handleDelete = (name) => {
    setCourses(courses.filter((course) => course.name !== name));
  };

  const averageScore =
    courses.reduce((sum, course) => sum + course.score, 0) / courses.length;

  return (
    <div className="container mt-4">
      <h2>Learning Results</h2>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>Course name</th>
            <th>Score</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.name}>
              <td>{course.name}</td>
              <td>{course.score}</td>

              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(course.name)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        <strong>Average Score:</strong> {averageScore.toFixed(2)}
      </p>

      <div className="mt-3">
        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="form-control mb-2"
        />

        <input
          type="number"
          placeholder="Course Score"
          value={courseScore}
          onChange={(e) => setCourseScore(e.target.value)}
          className="form-control mb-2"
        />

        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}
