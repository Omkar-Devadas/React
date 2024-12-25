// src/components/ProductList.js
import React, { useContext } from 'react';
import { SCMContext } from '../SCMContext';

const ProductList = () => {
  const { products } = useContext(SCMContext);

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.stock} units - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
