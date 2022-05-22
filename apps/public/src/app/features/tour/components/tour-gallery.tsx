import React from 'react';

const TourGallery = () => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-2/6">
      <div className="flex flex-col gap-2.5">
        <article
          className="overflow-hidden rounded-lg shadow-lg"
          style={{
            backgroundImage: `radial-gradient(rgba(0,0,0, 0.0), rgba(0,0,0,0.0)), url('${'/assets/images/tour/sight-8.png'}')`,
            backgroundSize: 'cover',
            height: '220px',
            position: 'relative',
          }}
        >
          <footer
            className="text-white px-11"
            style={{ position: 'absolute', bottom: '10%', left: 0 }}
          >
            <span className="font-bold">
              Immerse in nature at Bale Mountains National Park
            </span>
            <small>home to Ethiopia’s endemic animals</small>
          </footer>
        </article>
        <article
          className="overflow-hidden rounded-lg shadow-lg"
          style={{
            backgroundImage: `radial-gradient(rgba(0,0,0, 0.0), rgba(0,0,0,0.0)), url('${'/assets/images/tour/sight-4.png'}')`,
            backgroundSize: 'cover',
            height: '220px',
            position: 'relative',
          }}
        >
          <footer
            className="text-white px-11"
            style={{ position: 'absolute', bottom: '10%', left: 0 }}
          >
            <span className="font-bold">
              Feel the heat at the Danakil Depression
            </span>
            <small>home to the hottest place on Earth</small>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default TourGallery;
