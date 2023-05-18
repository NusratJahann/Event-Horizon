import React, { createContext, useEffect, useState } from 'react';

export const VenueContext = createContext();

export function VenueProvider({ children }) {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/venues')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const venueData = data[0].venues;
          setVenues(venueData);
        }
      });
  }, []);

  return (
    <VenueContext.Provider value={venues}>
      {children}
    </VenueContext.Provider>
  );
}

export default VenueContext;
