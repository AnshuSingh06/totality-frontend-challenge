// BookingContext.js

import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (property, dates) => {
    setBookings([...bookings, { ...property, dates, quantity: 1 }]);
  };

  const increaseQuantity = (index) => {
    const updatedBookings = [...bookings];
    updatedBookings[index].quantity += 1;
    setBookings(updatedBookings);
  };

  const decreaseQuantity = (index) => {
    const updatedBookings = [...bookings];
    if (updatedBookings[index].quantity > 1) {
      updatedBookings[index].quantity -= 1;
    }
    setBookings(updatedBookings);
  };

  const removeBooking = (index) => {
    setBookings(bookings.filter((_, i) => i !== index));
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, increaseQuantity, decreaseQuantity, removeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
