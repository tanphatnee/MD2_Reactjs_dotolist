import React from 'react';
import ProductItem from './ProductItem';
import productsData from './ProductsData';

const ProductList = ({ addToCart }) => {
  return (
    <div>
      
      <div className='product-app'>
        {productsData.map((product, index) => (
          <ProductItem key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
