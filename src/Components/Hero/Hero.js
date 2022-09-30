import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container max-w-6xl mx-auto px-6 py-12 ">
        {/* Menu/Logo container */}
        <nav className="flex items-center justify-between font-bold text-white">
          <img
            src="/images/logo.svg"
            alt=""
          />
          {/* Menu */}
          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            <div className="group">
              <a href="#/">Carrers</a>
              <div className="mx-w group-hover:border-b group-hover:border-b-blue-50"></div>
            </div>
            <div className="group">
              <a href="#/">Events</a>
              <div className="mx-w group-hover:border-b group-hover:border-b-blue-50"></div>
            </div>
            <div className="group">
              <a href="#/">Products</a>
              <div className="mx-w group-hover:border-b group-hover:border-b-blue-50"></div>
            </div>
            <div className="group">
              <a href="#/">Support</a>
              <div className="mx-w group-hover:border-b group-hover:border-b-blue-50"></div>
            </div>
          </div>
          {/* @todo: Hambuger manu*/}
        </nav>
        {/* @todo: Mobile manu */}
        <div className="max-w-lg mt-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
          <p>IMPRESSIVE EXPERIENCES THAT DELIVER</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
