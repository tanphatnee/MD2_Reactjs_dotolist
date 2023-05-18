import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setQuantity(1); // Reset quantity back to 1 after adding to cart
  };

  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.heading}</p>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div className="quantity-control">
        <button onClick={handleDecreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
