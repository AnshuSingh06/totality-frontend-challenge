import React from 'react';
import { useParams, Link } from 'react-router-dom';

import '../CSS/PropertyDetail.css'; 
import Header from '../Common/Header';
import PNavbar from '../Common/PNavbar';
import PFooter from '../Common/PFooter';

const PropertyDetailguest = () => {
  const { id } = useParams();
 
  const properties = [

    {
      id: 1,
      title: 'Cozy Apartment',
      description: `This charming apartment is situated in the heart of the city. 
                With its warm and inviting ambiance, the apartment is perfect for both short and long-term stays. 
                The interior features modern amenities combined with a touch of classic design, providing a comfortable living space. 
                Whether you're here for business or leisure, you'll find everything you need to feel at home. 
                Enjoy the convenience of being just steps away from public transportation and vibrant city life.`,
                price: '$100/night',
                location: 'City Center',
                bedrooms: 1,
                amenities: ['wifi'],
      images: [
        '/images/modern-house-design.jpg', // Second image
        '/images/b1.jpg', // First image
        '/images/k1.jpg'  // Third image
      ]
    },
    {
      id: 2,
      title: 'Luxury Villa',
      description: 'This stunning luxury villa offers an exquisite blend of comfort and elegance, set amidst lush greenery. With expansive living spaces, this villa is perfect for families or groups looking for a peaceful retreat. The large windows allow for plenty of natural light, creating a warm and inviting atmosphere. Enjoy breathtaking views from every room, and experience the epitome of luxurious living. Ideal for a memorable getaway, this villa provides a serene escape from the hustle and bustle of everyday life.',
      price: '$500/night',
      location: 'Beach',
      bedrooms: 3,
      amenities: ['pool', 'parking'],
      images: [
        '/images/h2.jpg', // First image
        '/images/b3.jpg', // Second image
        '/images/kl.jpg'  // Third image
      ]
    },
    {
        id: 3,
        title: 'Modern Studio',
      description: 'This sleek and stylish modern studio is located in the heart of a trendy neighborhood, offering the perfect blend of convenience and comfort. The open floor plan maximizes space, making it ideal for solo travelers or couples. With contemporary furnishings and chic decor, this studio provides a cozy yet sophisticated atmosphere. Whether you’re here for business or leisure, this well-appointed studio offers everything you need for a pleasant stay.',
      price: '$200/night',
      location: 'Trendy Neighborhood',
      bedrooms: 1,
      amenities: ['wifi', 'parking'],
        images: [
          '/images/h3.jpg', // First image
          '/images/b2.jpg', // Second image
          '/images/k4.jpg'  // Third image
        ]
      },
      {
        id: 4,
        title: 'Beachfront Bungalow',
      description: 'Experience the ultimate coastal getaway in this charming beachfront bungalow. Nestled right on the sand, this cozy retreat offers stunning ocean views and direct beach access. Perfect for those seeking a tranquil escape, the bungalow features a warm and inviting interior with rustic charm. Wake up to the sound of waves and enjoy your morning coffee on the private deck as the sun rises over the horizon. This is the perfect spot for a relaxing and rejuvenating vacation.',
      price: '$300/night',
      location: 'Beach',
      bedrooms: 2,
      amenities: ['pool'],
        images: [
            '/images/h1.png', // Second image
          '/images/b4.jpg', // First image
           '/images/k3.jpg'  // Third image
        ]
      },
   
  ];

  const property = properties.find(prop => prop.id === parseInt(id));

  if (!property) {
    return <p>Property not found</p>;
  }



  return (
    <div>
      <Header data="PropertyDetailguest"/>
      <PNavbar/>
      
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {property.images.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
       </div>
       <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p><strong>Price: </strong>{property.price}</p>
      <p><strong>Location: </strong>{property.location}</p>
      <p><strong>Bedrooms: </strong>{property.bedrooms}</p>
      <p><strong>Amenities: </strong>{property.amenities.join(', ')}</p>
       <br/>
      <PFooter/>
      
    </div>
    
  );
};

export default PropertyDetailguest;
