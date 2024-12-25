// src/components/SupplierList.js
import React, { useContext } from 'react';
import { SCMContext } from '../SCMContext';

const SupplierList = () => {
  const { suppliers } = useContext(SCMContext);

  return (
    <div>
      <ul>
        {suppliers.map(supplier => (
          <li key={supplier.id}>
            {supplier.name} - {supplier.contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierList;
