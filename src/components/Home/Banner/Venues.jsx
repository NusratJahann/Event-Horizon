import React, { useContext } from "react";
import {
  IconArrowRightBar,
  IconBookmarkPlus,
  IconChevronRight,
} from "@tabler/icons-preact";
import { Link } from "react-router-dom";
import VenueContext from "../../../Contexts/ProductContext";

const Venues = () => {
  const venues = useContext(VenueContext);
  return (
    <div className="w-full justify-center flex flex-col items-center py-[10rem]">
      <p className="text-center md:text-4xl text-3xl font-serif text-primary mb-8">
        Venues
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-[80vw] w-[90vw] gap-5 content-center text-primary">
        {venues.slice(0, 4).map((venue) => (
          <div className="card border-[#e9e9e9] border-[0.2px] bg-base-100">
            <figure>
              <div
                className="hero h-64"
                style={{ backgroundImage: `url(${venue.image})` }}
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-primary">
              <h2 className="card-title font-serif font-light">{venue.name}</h2>
              <p className="line-clamp-2">{venue.location}</p>
              <button
                className="btn w-full text-primary mt-6 hover:text-secondary bg-accent border-none"
                onClick={() => <VenueDetais details={venue} />}
              >
                <IconBookmarkPlus
                  width={18}
                  className="mr-2"
                ></IconBookmarkPlus>
                Book now
              </button>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/allvenues"
        className="flex btn bg-white border-none text-primary hover:bg-white hover:text-accent mt-8 text-lg"
      >
        See More <IconChevronRight></IconChevronRight>
      </Link>
    </div>
  );
};

export default Venues;
