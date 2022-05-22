import React from 'react';

export const FlightRecommendation = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-10">
        <h5 className="text-3xl text-center text-primary-500">
          Easily search, compare and book your flight with us
        </h5>

        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 lg:py-16">
          <div className="flex flex-col gap-3 text-center">
            <img
              alt="fig"
              src="../../../../assets/images/flight/1.png"
              style={{
                width: '249.03px',
                height: '150px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <span className="font-bold text-xl">Flexible booking</span>

            <span className="max-h-16 p-3.5">
              Choose your level of flexibility and enjoy simple change and
              cancellation rules for all your travels.
            </span>

            <div className="py-16">
              <a className="bg-primary-500 p-2.5 px-5 rounded-md text-white">
                Learn more
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <img
              alt="fig"
              src="../../../../assets/images/flight/2.png"
              style={{
                width: '249.03px',
                height: '150px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <span className="font-bold text-xl">Safe travel done right</span>
            <span className="max-h-16 p-3.5">
              It’s safe again to travel, as long as you take certain
              precautions. Here’s what the airlines are doing to ensure your
              health and safety.
            </span>
            <div className="py-16">
              <a className="bg-primary-500 p-2.5 px-5 rounded-md text-white">
                Learn more
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <img
              alt="fig"
              src="../../../../assets/images/flight/3.png"
              style={{
                width: '249.03px',
                height: '150px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <span className="font-bold text-xl">Special Deals</span>
            <span className="max-h-16 p-3.5">
              Save on flights, hotels, Tour and vacation packages and much more.
            </span>
            <div className="py-16">
              <a className="bg-primary-500 p-2.5 px-5 rounded-md text-white">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-500">
        <div>
          <div className="p-16 text-center">
            <span className="text-4xl text-white">
              Need Inspiration for next trip?
            </span>
            <div className="flex flex-col gap-7 py-4">
              <span className="text-white">
                Get the latest tour packages, trips and inspirations for your
                trip
              </span>
              <div className="py-3">
                <a className="bg-white font-black p-2.5 px-5 rounded-md">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlightRecommendation;
