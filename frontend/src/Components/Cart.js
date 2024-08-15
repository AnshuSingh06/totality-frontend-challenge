import React from 'react';
import { useBooking } from '../Context/BookingContext';
import { Link } from 'react-router-dom';
import Header from '../Common/Header';
import PNavbaruser from '../Common/PNavbaruser';
import PFooteruser from '../Common/PFooteruser';

const Cart = () => {
  const { bookings, increaseQuantity, decreaseQuantity, removeBooking } = useBooking();

  if (bookings.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  const total = bookings.reduce((sum, booking) => sum + parseFloat(booking.price.slice(1)) * booking.quantity, 0);

  return (
    <>
    <Header data="Cart"/>
    <PNavbaruser/>
    <div className="checkout-container">
      

      <h2>Your Cart</h2>
      {bookings.map((booking, index) => (
        <div key={index}>
          <h3>{booking.title}</h3>
          <p>Dates: {booking.dates.start} - {booking.dates.end}</p>
          <p>Price: {booking.price} x {booking.quantity}</p>
          <button onClick={() => increaseQuantity(index)}>+</button>
          <button onClick={() => decreaseQuantity(index)}>-</button>
          <button onClick={() => removeBooking(index)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
      <br/>
      
    </div>
    <PFooteruser/>
    </>
  );
};

export default Cart;
