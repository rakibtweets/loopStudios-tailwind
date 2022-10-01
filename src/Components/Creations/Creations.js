import React from 'react';

const Creations = () => {
  return (
    <section id="#creations">
      <div className="container max-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        {/* Creation Header */}
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Creation
          </h2>
          <button className="hidden btn md:block">See All</button>
        </div>
        {/* Items Container */}
        <div className="item-container ">
          {/* Item 1 */}
          <div className="group item">
            {/* Desktop image */}
            <img
              src="/images/desktop/image-deep-earth.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile image */}
            <img
              src="/images/mobile/image-deep-earth.jpg"
              alt=""
              className="md:hidden w-full "
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item text */}
            <h5>Deep Earth</h5>
          </div>
          <div className="group item">
            {/* Desktop image */}
            <img
              src="/images/desktop/image-curiosity.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile image */}
            <img
              src="/images/mobile/image-curiosity.jpg"
              alt=""
              className="md:hidden w-full "
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item text */}
            <h5>the Curiosity</h5>
          </div>
          <div className="group item">
            {/* Desktop image */}
            <img
              src="/images/desktop/image-fisheye.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile image */}
            <img
              src="/images/mobile/image-fisheye.jpg"
              alt=""
              className="md:hidden w-full "
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item text */}
            <h5>The Fisheye</h5>
          </div>
          <div className="group item">
            {/* Desktop image */}
            <img
              src="/images/desktop/image-from-above.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile image */}
            <img
              src="/images/mobile/image-from-above.jpg"
              alt=""
              className="md:hidden w-full "
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item text */}
            <h5>From Avobe</h5>
          </div>
          <div className="group item">
            {/* Desktop image */}
            <img
              src="/images/desktop/image-pocket-borealis.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile image */}
            <img
              src="/images/mobile/image-pocket-borealis.jpg"
              alt=""
              className="md:hidden w-full "
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item text */}
            <h5>The Pocket Borealis</h5>
          </div>
          <div className="group item">
            {/* Desktop image */}
            <img
              src="/images/desktop/image-night-arcade.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile image */}
            <img
              src="/images/mobile/image-night-arcade.jpg"
              alt=""
              className="md:hidden w-full "
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item text */}
            <h5>The Night Arcade</h5>
          </div>
          <div className="group item">
            {/* Desktop image */}
            <img
              src="/images/desktop/image-grid.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile image */}
            <img
              src="/images/mobile/image-grid.jpg"
              alt=""
              className="md:hidden w-full "
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item text */}
            <h5>The Grid</h5>
          </div>
          <div className="group item">
            {/* Desktop image */}
            <img
              src="/images/desktop/image-soccer-team.jpg"
              alt=""
              className="hidden w-full duration-200 md:block group-hover:scale-110"
            />
            {/* Mobile image */}
            <img
              src="/images/mobile/image-soccer-team.jpg"
              alt=""
              className="md:hidden w-full "
            />
            {/* Item Gradient */}
            <div className="item-gradient"></div>
            {/* Item text */}
            <h5>The Soccer Team</h5>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
  );
};

export default Creations;
