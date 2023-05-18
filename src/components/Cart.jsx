import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = (items) => {
    const totalPrice = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    calculateTotalPrice(cartItems);
  }, [cartItems]);

  const handleIncreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    // Update the cartItems in the parent component directly
    // or use a state management solution like Redux to manage the cartItems
    console.log('Updated cart items:', updatedCartItems);

    // Recalculate the total price
    calculateTotalPrice(updatedCartItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    // Update the cartItems in the parent component directly
    // or use a state management solution like Redux to manage the cartItems
    console.log('Updated cart items:', updatedCartItems);

    // Recalculate the total price
    calculateTotalPrice(updatedCartItems);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    // Update the cartItems in the parent component directly
    // or use a state management solution like Redux to manage the cartItems
    console.log('Updated cart items:', updatedCartItems);

    // Recalculate the total price
    calculateTotalPrice(updatedCartItems);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={handleUpdateQuantity}
              increaseQuantity={() => handleIncreaseQuantity(item.id)}
              decreaseQuantity={() => handleDecreaseQuantity(item.id)}
            />
          ))}
        </div>
      )}
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button onClick={clearCart}>Clear Cart</button>
      
    </div>
  );
};

export default Cart;
