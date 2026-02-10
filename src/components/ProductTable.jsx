import React from 'react';
import ReusableTable from './ReusableTable';

const ProductTable = ({ columns = ['ID', 'Name', 'Price'], data = [
  { id: 1, name: 'Laptop', price: '$999' },
  { id: 2, name: 'Mouse', price: '$25' },
  { id: 3, name: 'Keyboard', price: '$75' },
] }) => {
  console.log("props", { columns, data });

  return (
    <div>
      <h2>Product Table</h2>
      <ReusableTable columns={columns} data={data} />
    </div>
  );
};

export default ProductTable;
