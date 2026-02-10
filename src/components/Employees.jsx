import React, { useState } from 'react'
import { EmployeeList } from './Employeelist'
import EmployeeTable from './EmployeeTable'
import ProductTable from './ProductTable'
import StudentTable from './StudentTable'

 export const Employees = () => {
  const [showTable, setShowTable] = useState(null);

  var title = "EMPLOYEE APP";

  var compnay = {
    name: "TATA",
    year: 2026,
  };

  var employees = [
    { id: 1, name: "prey", age: 21 },
    { id: 2, name: "jay", age: 21 },
    { id: 3, name: "shyam", age: 21},
    { id: 4, name: "nandini", age: 24 },
  ];

  const handleShowTable = (tableType) => {
    setShowTable(tableType);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employees</h1>
      <EmployeeList title={title} company={compnay} employees={employees}></EmployeeList>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => handleShowTable('employee')}>Show Employee Table</button>
        <button onClick={() => handleShowTable('product')}>Show Product Table</button>
        <button onClick={() => handleShowTable('student')}>Show Student Table</button>
      </div>

      {showTable === 'employee' && <EmployeeTable />}
      {showTable === 'product' && <ProductTable />}
      {showTable === 'student' && <StudentTable />}
    </div>
  );
};
