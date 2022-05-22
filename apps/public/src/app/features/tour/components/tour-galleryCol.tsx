import React from 'react';

const TourGalleryCol = () => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <div className="flex flex-col gap-2.5">
        <article
          className="overflow-hidden rounded-lg shadow-lg"
          style={{
            backgroundImage: `radial-gradient(rgba(0,0,0, 0.0), rgba(0,0,0,0.0)), url('${'/assets/images/tour/sight-7.png'}')`,
            backgroundSize: 'cover',
            height: '440px',
            position: 'relative',
          }}
        >
          <footer
            className="text-white px-11"
            style={{ position: 'absolute', bottom: '10%', left: 0 }}
          >
            <span className="font-bold">
              Soak up the unique culture of the Omo valley tribes.
            </span>
            <small>
              Untouched by the outside world, the tribes of the Omo valley with
              chalk painted bodies and unique attires are some of Africa’s most
              traditional tribes.
            </small>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default TourGalleryCol;
