import React from 'react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import {
  Container,
  PageTitle,
  LocationsGrid,
  LocationCard,
  LocationImage,
  LocationDetails,
  LocationName,
  LocationAddress,
  ContactInfo,
  OpeningHours,
  Rating,
  ViewMenuButton
} from './styles';

const locations = [
  {
    id: 1,
    name: "Slice Haven Downtown",
    image: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg",
    address: "123 Pizza Street, New York, NY 10001",
    phone: "(212) 555-0123",
    hours: "11:00 AM - 11:00 PM",
    rating: 4.8
  },
  {
    id: 2,
    name: "Slice Haven Brooklyn",
    image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
    address: "456 Pepperoni Ave, Brooklyn, NY 11201",
    phone: "(718) 555-0124",
    hours: "11:00 AM - 10:00 PM",
    rating: 4.7
  },
  {
    id: 3,
    name: "Slice Haven Queens",
    image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg",
    address: "789 Margherita Blvd, Queens, NY 11101",
    phone: "(718) 555-0125",
    hours: "11:00 AM - 10:30 PM",
    rating: 4.9
  }
];

const LocationsPage: React.FC = () => {
  return (
    <Container>
      <PageTitle>
        <MapPin size={32} />
        Our Locations
      </PageTitle>

      <LocationsGrid>
        {locations.map(location => (
          <LocationCard key={location.id}>
            <LocationImage src={location.image} alt={location.name} />
            
            <LocationDetails>
              <LocationName>{location.name}</LocationName>
              
              <Rating>
                <Star size={18} fill="currentColor" />
                {location.rating.toFixed(1)}
              </Rating>
              
              <LocationAddress>
                <MapPin size={18} />
                {location.address}
              </LocationAddress>
              
              <ContactInfo>
                <Phone size={18} />
                {location.phone}
              </ContactInfo>
              
              <OpeningHours>
                <Clock size={18} />
                {location.hours}
              </OpeningHours>
              
              <ViewMenuButton to="/">View Menu</ViewMenuButton>
            </LocationDetails>
          </LocationCard>
        ))}
      </LocationsGrid>
    </Container>
  );
};

export default LocationsPage;