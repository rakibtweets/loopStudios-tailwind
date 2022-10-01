import React from 'react';

const Footer = () => {
  return (
    <footer
      className="bg-black text-white"
      id="#footer">
      <div className="container max-w-6xl py-10 mx-auto">
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          {/* manu and logo Container */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="h-8">
              <img
                src="/images/logo.svg"
                alt=""
              />
            </div>
            {/* Manu container */}
            <div className="flex flex-col md:flex-row item-center space-y-4 font-bold md:space-y-0 md:space-x-6 md:ml-3">
              {/* items  */}
              <div className="h-10 group">
                <a href="#/">About</a>
                <div className="mx-1 group-hover:border-b group-hover:border-blue-50 duration-200 ease-in-out transition"></div>
              </div>
              <div className="h-10 group">
                <a href="#/">Careers</a>
                <div className="mx-1 group-hover:border-b group-hover:border-blue-50 duration-200 ease-in-out transition"></div>
              </div>
              <div className="h-10 group">
                <a href="#/">Events</a>
                <div className="mx-1 group-hover:border-b group-hover:border-blue-50 duration-200 ease-in-out transition"></div>
              </div>
              <div className="h-10 group">
                <a href="#/">Products</a>
                <div className="mx-1 group-hover:border-b group-hover:border-blue-50 duration-200 ease-in-out transition"></div>
              </div>
              <div className="h-10 group">
                <a href="#/">Supports</a>
                <div className="mx-1 group-hover:border-b group-hover:border-blue-50 duration-200 ease-in-out transition"></div>
              </div>
            </div>
          </div>
          {/* Social and copy container */}
          <div className="flex flex-col items-center space-y-6  mx-auto md:mx-0 space-x-4 text-gray-500">
            {/* Icons */}
            <div className="flex items-center justify-center space-x-4 md:justify-end">
              {/* Icon 1 */}
              <div className="h-8 group">
                <a href="#/">
                  <img
                    src="/images/icon-facebook.svg"
                    alt=""
                    className="h-6"
                  />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#/">
                  <img
                    src="/images/icon-twitter.svg"
                    alt=""
                    className="h-6"
                  />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#/">
                  <img
                    src="/images/icon-pinterest.svg"
                    alt=""
                    className="h-6"
                  />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#/">
                  <img
                    src="/images/icon-instagram.svg"
                    alt=""
                    className="h-6"
                  />
                </a>
              </div>
            </div>
            {/* Copy container */}
            <div className="font-bold">
              &copy; 2022 Loopstudios. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
