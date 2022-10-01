import React from 'react';

const Hero = () => {
  const navToggle = () => {
    document.getElementById('menu-btn').classList.toggle('btn-open');
    document.getElementById('menu').classList.toggle('flex');
    document.getElementById('menu').classList.toggle('hidden');
  };

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
          <div className="md:hidden">
            <button
              id="menu-btn"
              type="button"
              onClick={navToggle}
              className=" z-40 block hamburger md:hidden focus:outline-none">
              <div>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </div>
            </button>
          </div>
        </nav>
        {/* @todo: Mobile manu */}
        <div
          id="menu"
          className="absolute top-0 bottom-0 left-0 hidden flex-col items-center self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-white text-lg bg-black">
          <a
            href="#/"
            className="hover:text-pink-500">
            About
          </a>
          <a
            href="#/"
            className="hover:text-pink-500">
            Careers
          </a>
          <a
            href="#/"
            className="hover:text-pink-500">
            Events
          </a>
          <a
            href="#/"
            className="hover:text-pink-500">
            Products
          </a>
          <a
            href="#/"
            className="hover:text-pink-500">
            Support
          </a>
        </div>
        <div className="max-w-lg mt-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
          <p>IMPRESSIVE EXPERIENCES THAT DELIVER</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
