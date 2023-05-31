import React, { useContext } from 'react';
import Venue from './Venue';
import { VenueContext } from '../../Contexts/ProductContext';

const AllVenues = () => {
  const venues = useContext(VenueContext);

  return (
    <div className="min-h-screen py-[3rem] w-full justify-center flex flex-col items-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-[80vw] w-[90vw] gap-5 content-center">
        {venues.map((venue) => (
          <Venue key={venue.id} location={venue.location} name={venue.name} image={venue.image}></Venue>
        ))}
      </div>
    </div>
  );
};

export default AllVenues;
