import React, { useState } from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleRemoveFromCart = () => {
    removeFromCart(item.id);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    if (typeof updateQuantity === 'function') {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (typeof updateQuantity === 'function') {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (typeof updateQuantity === 'function') {
        updateQuantity(item.id, newQuantity);
      }
    }
  };

  return (
    <div>
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>
        Quantity:
        <button onClick={handleDecreaseQuantity}>-</button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={handleIncreaseQuantity}>+</button>
      </p>
      <button onClick={handleRemoveFromCart}>Remove</button>
    </div>
  );
};

export default CartItem;
