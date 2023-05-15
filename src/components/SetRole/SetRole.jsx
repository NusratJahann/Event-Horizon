import React from "react";
import {
  IconHomeDollar,
  IconHomeSearch,
  IconHomeShield,
} from "@tabler/icons-preact";

const SetRole = () => {
  return (
    <div className="w-full justify-center flex flex-col items-center min-h-screen py-[3rem] text-primary">
      <p className="font-serif md:text-4xl text-3xl text-center">Select User Type</p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-5 text-primary">
        <button className="card w-[80vw] md:w-[300px] md:h-52 h-24 bg-base-100 border-[#e9e9e9] focus:outline focus:outline-offset-0 focus:outline-accent border-[0.2px] hover:text-secondary hover:bg-primary transition">
          <div className="card-body flex-row md:flex-col md:justify-center h-full w-full items-center">
            <IconHomeDollar className="md:w-24 w-8 h-8 md:h-24 text-accent"></IconHomeDollar>
            <h2 className="card-title">Are you a venue seller?</h2>
          </div>
        </button>

        <button className="card w-[80vw] md:w-[300px] md:h-52 h-24 bg-base-100 border-[#e9e9e9] focus:outline focus:outline-offset-0 focus:outline-accent border-[0.2px] hover:text-secondary hover:bg-primary transition">
          <div className="card-body flex-row md:flex-col md:justify-center h-full w-full items-center">
            <IconHomeSearch className="md:w-24 w-8 h-8 md:h-24 text-accent"></IconHomeSearch>
            <h2 className="card-title">Want to book a venue?</h2>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SetRole;
