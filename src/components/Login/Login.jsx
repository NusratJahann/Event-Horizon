import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import app from "../../firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const userFromGoogle = result.user;
        console.log(userFromGoogle);
      })
      .catch(error => {
        console.log("error", error)
      })
  };
  return (
    <div className="hero min-h-screen text-primary py-[3rem]">
      <div className="card flex-shrink-0 w-[80vw] max-w-[400px] border-[#e9e9e9] border-[0.2px] bg-base-100">
        <div className="card-body">
          <p className="text-3xl font-serif text-center pb-5">Login</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered border-[#cccccc] w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered border-[#cccccc] w-full"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-primary">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn border-none text-primary bg-accent hover:text-secondary tracking-wider">
              Login
            </button>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline text-primary hover:text-secondary hover:bg-primary tracking-wider"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
