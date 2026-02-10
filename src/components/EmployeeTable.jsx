import React from 'react';
import ReusableTable from './ReusableTable';

const EmployeeTable = ({ columns = ['ID', 'Name', 'Age'], data = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Doe', age: 35 },
] }) => {
  console.log("props", { columns, data });

  return (
    <div>
      <h2>Employee Table</h2>
      <ReusableTable columns={columns} data={data} />
    </div>
  );
};

export default EmployeeTable;
