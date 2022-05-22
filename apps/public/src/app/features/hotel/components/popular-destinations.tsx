import React from 'react';

export interface PopularDestinationsResultProps {
  destinationResult: any;
}

export const PopularDestinations = (props: PopularDestinationsResultProps) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-3/12">
      <article
        className="overflow-hidden rounded-lg shadow-lg"
        style={{
          backgroundImage: `radial-gradient(rgba(0,0,0, 0.4), rgba(0,0,0,0.4)), url('${
            props.destinationResult.picture
              ? props.destinationResult.picture
              : '/assets/images/hotels/1.png'
          }')`,

          backgroundSize: 'cover',
        }}
      >
        <header
          className="items-center leading-tight p-2"
          style={{
            height: '220px',
          }}
        >
          <div className="px-4 py-3">
            <div className="top">
              <div className="flex flex-col gap-1.5 text-white">
                <strong>{props.destinationResult.destination}</strong>
                <small>{props.destinationResult.totalResult} Properties</small>
              </div>
            </div>
          </div>
        </header>
      </article>
    </div>
  );
};

export default PopularDestinations;
