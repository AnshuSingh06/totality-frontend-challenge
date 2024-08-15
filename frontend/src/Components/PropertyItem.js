import React from 'react';

const PropertyItem = ({ property }) => {
  return (
    <div className="property-item">
      <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>{property.price}</p>
      <button>Book Now</button>
    </div>
  );
};

export default PropertyItem;
