import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BookingProvider } from './Context/BookingContext';
import PropertyLists from './Components/PropertyLists';
import PropertyDetail from './Components/PropertyDetail';
import Registration from "./Forms/Registration";
import Login from "./Forms/Login";
import HomePage from './Pages/HomePage'; // Assuming you have a HomePage component
import HomePageuser from './Pages/HomePageuser';
import Cart from './Components/Cart';
import Checkout from './Pages/CheckoutPage';
import PropertyDetailguest from './Components/PropertyDetailguest';
const App = () => {
  return (
    <BookingProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/userreg" element={<Registration />} />
        <Route exact path="/userlog" element={<Login />} />
        <Route exact path="/userhome/:userId" element={<HomePageuser />} />
        <Route path="/properties" element={<PropertyLists />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/propertyguest/:id" element={<PropertyDetailguest />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
    </BookingProvider>
  );
};

export default App;
