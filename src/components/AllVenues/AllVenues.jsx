import React, { useEffect, useState } from 'react';
import Venue from './Venue';
const AllVenues = () => {
  const [venues, setVenues] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/venues")
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        const venueData = data[0].venues;
        setVenues(venueData);
      }
    })
  },[])

  
  return (
    <div className="min-h-screen py-[3rem] w-full justify-center flex flex-col items-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-[80vw] w-[90vw] gap-5 content-center text-primary">
      {
        venues.map(venue => <Venue key={venue.id} location={venue.location} name={venue.name} image={venue.image}></Venue>)
      }
      </div>
    </div>
  );
};

export default AllVenues;
