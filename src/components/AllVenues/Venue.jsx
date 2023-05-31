import React from 'react';
import { IconBookmarkPlus } from "@tabler/icons-preact";
import VenueDetais from './VenueDetails/VenueDetais';

const HomeVenues = (props) => {
    return (
        <div>
        <div className="card border-[#e9e9e9] border-[0.2px] bg-base-100" onClick={() => <VenueDetais></VenueDetais>}>
          <figure>
            <div
              className="hero h-64"
              style={{ backgroundImage: `url(${props.image})` }}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-serif font-light">{props.name}</h2>
            <p className="line-clamp-2">
              {props.location}
            </p>
            <button className="btn w-full text-neutral mt-6 hover:text-white hover:bg-neutral bg-primary border-none" onClick={() => <VenueDetais details={props}/>}>
              <IconBookmarkPlus width={18} className="mr-2"></IconBookmarkPlus>
              Book now
            </button>
          </div>
        </div>
      </div>
    );
};

export default HomeVenues;