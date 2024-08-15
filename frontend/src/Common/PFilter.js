import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../CSS/PFilter.css'; // Import the custom CSS file

const PFilter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState({
    location: '',
    priceRange: '',
    bedrooms: '',
    amenities: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const applyFilters = () => {
    onFilterChange(filter);
  };

  const clearFilters = () => {
    setFilter({
      location: '',
      priceRange: '',
      bedrooms: '',
      amenities: '',
    });
    onFilterChange({}); // Clear the filters in the parent component
    navigate('/'); // Redirect to the homepage
  };

  return (
    <Form className="filter-form">
      <FormControl
        type="search"
        placeholder="Location"
        className="filter-input"
        aria-label="Search"
        name="location"
        value={filter.location}
        onChange={handleChange}
      />
      <FormControl
        as="select"
        className="filter-input"
        name="priceRange"
        value={filter.priceRange}
        onChange={handleChange}
      >
        <option value="">Price Range</option>
        <option value="low">$0 - $100</option>
        <option value="medium">$100 - $300</option>
        <option value="high">$300+</option>
      </FormControl>
      <FormControl
        as="select"
        className="filter-input"
        name="bedrooms"
        value={filter.bedrooms}
        onChange={handleChange}
      >
        <option value="">Bedrooms</option>
        <option value="1">1 Bedroom</option>
        <option value="2">2 Bedrooms</option>
        <option value="3">3 Bedrooms</option>
        <option value="4">4+ Bedrooms</option>
      </FormControl>
      <FormControl
        as="select"
        className="filter-input"
        name="amenities"
        value={filter.amenities}
        onChange={handleChange}
      >
        <option value="">Amenities</option>
        <option value="pool">Pool</option>
        <option value="wifi">Wi-Fi</option>
        <option value="parking">Parking</option>
      </FormControl>
      <Button className="filter-button" onClick={applyFilters}>Filter</Button>
      <Button className="filter-button" variant="secondary" onClick={clearFilters}>Clear</Button>
    </Form>
  );
};

export default PFilter;
