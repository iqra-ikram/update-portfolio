import React from 'react';

const Email = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://a.storyblok.com/f/199240/1200x675/86cf3d11e6/contact-us-preview.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-2 text-5xl font-bold text-white">
           
            </h1>
            {/* Adjusted contact details below the 'Contact Us' text */}
            <p className=" text-white">
              Email <span className="font-semibold">contactiqra@12gmail.com</span>
            </p> <br /> <br /> 
            <button className="btn btn-primary text-white shadow-lg">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
