import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../CSS/PropertyLists.css'; // Import the custom CSS file

const PropertyLists = ({ filters }) => {
  const properties = [
    {
      id: 1,
      title: 'A cozy apartment in the city center.',
      description: 'A cozy apartment in the city center.',
      price: '$100/night',
      image: '/images/images.jpg',
      location: 'City Center',
      bedrooms: 1,
      amenities: ['wifi'],
    },
    {
      id: 2,
      title: 'Luxury Villa',
      description: 'A luxurious villa with a private pool.',
      price: '$500/night',
      image: '/images/images 2.jpg',
      location: 'Beach',
      bedrooms: 3,
      amenities: ['pool', 'parking'],
    },
    {
      id: 3,
      description: 'A modern studio in a trendy neighborhood.',
      price: '$200/night',
      image: '/images/images 3.jpg',
      location: 'Trendy Neighborhood',
      bedrooms: 1,
      amenities: ['wifi', 'parking'],
    },
    {
      id: 4,
      title: 'Beachfront Bungalow',
      description: 'A bungalow right on the beach.',
      price: '$300/night',
      image: '/images/images 4.jpg',
      location: 'Beach',
      bedrooms: 2,
      amenities: ['pool'],
    },
  ];

  const filteredProperties = properties.filter(property => {
    const matchesLocation = !filters.location || property.location.includes(filters.location);
    const matchesPrice = !filters.priceRange || (
      (filters.priceRange === 'low' && property.price <= '$100/night') ||
      (filters.priceRange === 'medium' && property.price > '$100/night' && property.price <= '$300/night') ||
      (filters.priceRange === 'high' && property.price > '$300/night')
    );
    const matchesBedrooms = !filters.bedrooms || property.bedrooms === parseInt(filters.bedrooms);
    const matchesAmenities = !filters.amenities || property.amenities.includes(filters.amenities);

    return matchesLocation && matchesPrice && matchesBedrooms && matchesAmenities;
  });

  return (
    <Row xs={1} md={2} className="g-4">
      {filteredProperties.map((property) => (
        <Col key={property.id}>
          <Card className="custom-card"> {/* Apply the custom CSS class */}
            <Link to={`/property/${property.id}`}>
              <Card.Img variant="top" src={property.image} alt={property.title} />
            </Link>
            <Card.Body>
              <Card.Title>{property.title}</Card.Title>
              <Card.Text>{property.description}</Card.Text>
              <Card.Text><strong>{property.price}</strong></Card.Text>
              <Link to={`/property/${property.id}`}> {/* Wrap the button with Link */}
                <button className="btn btn-primary">Book Now</button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default PropertyLists;
