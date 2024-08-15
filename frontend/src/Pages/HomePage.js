import React, { useState } from 'react';
import '../CSS/HomePage.css'; // Import the CSS file

import PNavbar from '../Common/PNavbar';
import PFooter from '../Common/PFooter';

import PFilter from '../Common/PFilter';
import GuestPropertyLists from '../Components/GuestPropertyLists';
import Header from '../Common/Header';

const HomePageuser = () => {
 
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    bedrooms: '',
    amenities: '',
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
    <Header data="HomePageuser"/>
      <PNavbar  />
      
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img 
            src="/images/AdobeStock_209124760.png" 
            alt="..." 
          />
          <div className="carousel-caption">
            <h1 className="mb-2">New Properties</h1>
            <h3>Exclusive by Totality Crop</h3>
          </div>
        </div>
      </div><br/>
      <PFilter onFilterChange={handleFilterChange}/>
      <br/>
      <GuestPropertyLists filters={filters} />
      <br/>
      <PFooter />
    </>
  );
};

export default HomePageuser;
