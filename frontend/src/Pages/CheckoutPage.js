import React, { useState } from 'react';
import { useBooking } from '../Context/BookingContext';
import '../CSS/CheckoutPage.css'; 
import PFooteruser from '../Common/PFooteruser';
import Header from '../Common/Header';
import PNavbaruser from '../Common/PNavbaruser';

const CheckoutPage = () => {
  const { bookings } = useBooking();
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  if (bookings.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  const total = bookings.reduce((sum, booking) => sum + parseFloat(booking.price.slice(1)) * booking.quantity, 0);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement payment processing logic here
    alert('Payment processed successfully!');
    // Clear cart or redirect user after successful checkout
  };

  return (
    <>
     <Header data="CheckoutPage"/>
     <PNavbaruser/>
    <div className="checkout-container">
     
      <h2>Checkout</h2>
      <h3>Your Cart</h3>
      {bookings.map((booking, index) => (
        <div key={index} className="cart-item">
          <h4>{booking.title}</h4>
          <p>Dates: {booking.dates.start} - {booking.dates.end}</p>
          <p>Price: {booking.price} x {booking.quantity}</p>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>

      <form onSubmit={handleSubmit}>
        <h4>Contact Information</h4>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={contactInfo.name}
            onChange={handleContactChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleContactChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={contactInfo.phone}
            onChange={handleContactChange}
            required
          />
        </label>

        <h4>Payment Information</h4>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handlePaymentChange}
            required
          />
        </label>
        <label>
          Expiration Date:
          <input
            type="text"
            name="expirationDate"
            value={paymentInfo.expirationDate}
            onChange={handlePaymentChange}
            required
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handlePaymentChange}
            required
          />
        </label>

        <button type="submit">Complete Purchase</button>
      </form>
      <br/>
      
    </div>
    <PFooteruser/>
    </>
  );
};

export default CheckoutPage;
