import React from "react";
import { IconArrowRightBar, IconBookmarkPlus, IconChevronRight } from "@tabler/icons-preact";
import { Link } from "react-router-dom";

const Venues = () => {
  return (
          <div className="w-full justify-center flex flex-col items-center py-[10rem]">
      <p className="text-center md:text-4xl text-3xl font-serif text-primary mb-8">Venues</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-[80vw] w-[90vw] gap-5 content-center text-primary">
        <div className="card border-[#e9e9e9] border-[0.2px] bg-base-100">
          <figure>
            <img className="h-64 w-auto"
              src="https://cdn.wallpaperhub.app/cloudcache/b/d/7/6/4/b/bd764bb25d49a05105060185774ba14cd2c846f7.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-serif font-light">Bucolic Green Hills</h2>
            <p className="line-clamp-2">
              Stay with windows xp's 4k venue. It is a natural beauty for some boring grass.
            </p>
              <button className="btn w-full text-primary mt-6 hover:text-secondary bg-accent border-none">
                <IconBookmarkPlus
                  width={18}
                  className="mr-2"
                ></IconBookmarkPlus>
                Book now
              </button>
          </div>
        </div>
        <div className="card border-[#e9e9e9] border-[0.2px] bg-base-100">
          <figure>
            <img className="h-64 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Backrooms_model.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-serif font-light">The Backroom</h2>
            <p className="line-clamp-2">
              The backroom is a overwhelming house for urban legends. This is the perfect place for your next trip
             </p>
              <button className="btn w-full text-primary mt-6 hover:text-secondary bg-accent border-none">
                <IconBookmarkPlus
                  width={18}
                  className="mr-2"
                ></IconBookmarkPlus>
                Book now
              </button>
          </div>
        </div>
        <div className="card border-[#e9e9e9] border-[0.2px] bg-base-100">
          <figure>
            <img className="h-64 w-auto"
              src="https://cdn.wallpaperhub.app/cloudcache/b/d/7/6/4/b/bd764bb25d49a05105060185774ba14cd2c846f7.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-serif font-light">Bucolic Green Hills</h2>
            <p className="line-clamp-2">
              Stay with windows xp's 4k venue. It is a natural beauty for some
              boring grass.
            </p>
              <button className="btn w-full text-primary mt-6 hover:text-secondary bg-accent border-none">
                <IconBookmarkPlus
                  width={18}
                  className="mr-2"
                ></IconBookmarkPlus>
                Book now
              </button>
          </div>
        </div>
        <div className="card border-[#e9e9e9] border-[0.2px] bg-base-100">
          <figure>
            <img className="h-64 w-auto"
              src="https://cdn.wallpaperhub.app/cloudcache/b/d/7/6/4/b/bd764bb25d49a05105060185774ba14cd2c846f7.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-serif font-light">Bucolic Green Hills</h2>
            <p className="line-clamp-2">
              Stay with windows xp's 4k venue. It is a natural beauty for some
              boring grass.
            </p>
              <button className="btn w-full text-primary mt-6 hover:text-secondary bg-accent border-none">
                <IconBookmarkPlus
                  width={18}
                  className="mr-2"
                ></IconBookmarkPlus>
                Book now
              </button>
          </div>
        </div>
      </div>
      <Link to="/allvenues" className="flex btn bg-white border-none text-primary hover:bg-white hover:text-accent mt-8 text-lg">See More <IconChevronRight></IconChevronRight></Link>
    </div>
  );
};

export default Venues;
