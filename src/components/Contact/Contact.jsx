import React from 'react';

const Contact = () => {
    return (
<div className="hero min-h-screen bg-secondary py-[3rem]">
  <div className="hero-content sm-w-full w-[80vw] flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left lg:pl-16">
      <h1 className="md:text-4xl text-3xl font-serif">Contact Now</h1>
      <p className="py-6 text-1xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-[80vw] max-w-[400px] border-[#e9e9e9] border-[0.2px] bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered border-[#cccccc]" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea className="textarea textarea-bordered border-[#cccccc] textarea-lg w-full max-w-x" placeholder="Message  "></textarea>
        </div>
        <div className="form-control mt-6">
        <button className="btn w-full text-neutral mt-6 hover:text-white hover:bg-neutral bg-primary border-none">Send Message</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Contact;