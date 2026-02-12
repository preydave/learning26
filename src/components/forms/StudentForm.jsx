import React, { useState } from "react";

const StudentForm = () => {

  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
    rollNo: "",
    college: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setSubmittedData(student);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={student.age}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Course: </label>
          <input
            type="text"
            name="course"
            value={student.course}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Roll No: </label>
          <input
            type="text"
            name="rollNo"
            value={student.rollNo}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>College: </label>
          <input
            type="text"
            name="college"
            value={student.college}
            onChange={handleChange}
          />
        </div>

        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Show Submitted Data */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Age: {submittedData.age}</p>
          <p>Course: {submittedData.course}</p>
          <p>Roll No: {submittedData.rollNo}</p>
          <p>College: {submittedData.college}</p>
        </div>
      )}

    </div>
  );
};

export default StudentForm;
