import React from "react";

const Profile = () => {
  return (
    <div className="container mx-auto lg:mt-24 p-6">
      <div className="bg-white border-[.5px] rounded-lg p-8 py-14 flex flex-col md:flex-row items-center lg:item justify-center md:justify-between">
        <div className="flex flex-col items-center lg:w-1/6">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
              <span className="text-4xl">K</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-2xl font-semibold">Kermit the Frog</p>
            <p className="text-gray-600">0123456789</p>
          </div>
        </div>

        <div className="divider lg:divider-horizontal  my-6"></div>

        <div className="flex-grow ml-0 md:ml-10">
          <p className="text-xl font-semibold mb-10">Info</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <div>
              <label className="text-sm text-gray-600">Name:</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter your name"
                value="kermit the frog"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Location</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter venue location"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Capacity</label>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Enter venue capacity"
              />
            </div> */}
            <div>
              <p className="font-medium">
                Email: <span className="font-normal">Kermit@hhehe.com</span>
              </p>
            </div>
            <div>
              <p className="font-medium">
                Phone: <span className="font-normal">0123456789</span>
              </p>
            </div>
            <div>
              <p className="font-medium">
                password:{" "}
                <span className="font-normal">...................</span>
              </p>
            </div>
            <div>
              <p className="font-medium">
                Location:{" "}
                <span className="font-normal">backroom, urban lengends</span>
              </p>
            </div>
          </div>
          {/* <button className="btn btn-primary mt-7">Save Changes</button> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
