import React from "react";
const students = [
  { id: 1, name: "Alice", GPA: 3.2 },
  { id: 2, name: "Bob", GPA: 2.4 },
  { id: 3, name: "Carol", GPA: 1.8 },
  { id: 4, name: "Tin", GPA: 3.9 },
];

function getGrade(gpa) {
  if (gpa < 2) return "NN";
  if (gpa < 3) return "OK";
  return "HD";
}

export default function App2() {
  return (
    <div className="container mt-4">
      <h2>Student List</h2>

      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>GPA</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.GPA}</td>
              <td>{getGrade(s.GPA)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
