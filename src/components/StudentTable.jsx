import React from 'react';
import ReusableTable from './ReusableTable';

const StudentTable = ({ columns = ['ID', 'Name', 'Grade'], data = [
  { id: 1, name: 'Alice', grade: 'A' },
  { id: 2, name: 'Bob', grade: 'B' },
  { id: 3, name: 'Charlie', grade: 'A+' },
] }) => {
  console.log("props", { columns, data });

  return (
    <div>
      <h2>Student Table</h2>
      <ReusableTable columns={columns} data={data} />
    </div>
  );
};

export default StudentTable;
