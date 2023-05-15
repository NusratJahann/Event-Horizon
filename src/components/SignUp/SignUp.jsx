import React from "react";
const Login = () => {
  return (
    <div className="hero min-h-screen text-primary py-[3rem]">
      <div className="card flex-shrink-0 w-[80vw] max-w-[400px] border-[#e9e9e9] border-[0.2px] bg-base-100">
        <div className="card-body">
          <p className="text-3xl font-serif text-center pb-5">Sign Up</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered border-[#cccccc] w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered border-[#cccccc] w-full"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn border-none text-primary bg-accent hover:text-secondary tracking-wider">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
