import React,{ useState }from 'react';
import '../CSS/HomePage.css'; // Import the CSS file
import PropertyLists from '../Components/PropertyLists';

import PFooteruser from '../Common/PFooteruser';
import { useParams } from 'react-router-dom';
import PFilter from '../Common/PFilter';
import Header from '../Common/Header';
import PNavbaruser from '../Common/PNavbaruser';
const HomePageuser = () => {
    // const { userId } = useParams();
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
    <PNavbaruser/>
    
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
      <PropertyLists filters={filters} />
      <br/>
    <PFooteruser/>
    </>
    
  );
};

export default HomePageuser;
