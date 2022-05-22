import React, { useState } from 'react';
import TourGallery from '../components/tour-gallery';
import TourGalleryCol from '../components/tour-galleryCol';
import TourRecommendationResultCard from '../components/tour-recommendation-result-card';

const TourRecommendation = () => {
  const [recommendedSights, setRecommendedSights] = useState([
    {
      image: '/assets/images/tour/sight-1.png',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua.',
    },
    {
      image: '/assets/images/tour/sight-2.png',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua.',
    },
    {
      image: '/assets/images/tour/sight-3.png',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua.',
    },
  ]);
  const [mustSeeSights, setMustSeeSights] = useState([
    {
      image: '/assets/images/tour/sight-4.png',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua.',
    },
    {
      image: '/assets/images/tour/sight-5.png',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua.',
    },
    {
      image: '/assets/images/tour/sight-6.png',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua.',
    },
  ]);

  return (
    <div className="container mx-auto">
      <div className="pt-10">
        <h5 className="text-3xl text-center text-primary-500">
          Not Sure? Let’s explore Ethiopia.
        </h5>
      </div>

      <div className="md:pl-14">
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-3/12">
              <h5 className="text-3xl py-4">
                Our Clients love this attractions
              </h5>

              <p className="pb-10">
                Not many countries manage to impress their visitors in a way
                that Ethiopia does.
              </p>
              <a className="bg-primary-500 hover:text-white px-5 py-1 rounded text-gray-300">
                See More
              </a>
            </div>
            {recommendedSights.map(
              (sight, s) =>
                s < 3 && (
                  <TourRecommendationResultCard key={s} sightResult={sight} />
                )
            )}
          </div>
        </div>
      </div>

      <div className="md:pl-14">
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4 lg:pl-20">
            <TourGalleryCol />
            <TourGallery />

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
              <h5 className="text-3xl py-4">Discover new magical places.</h5>

              <p className="pb-10">
                Not many countries manage to impress their visitors in a way
                that Ethiopia does. <br></br> <br></br>The country’s
                breathtaking natural beauty, diverse culture, soulful people,
                delicious cuisine, and endemic wildlife are perfect for the
                traveler looking for different experiences.<br></br>
                <br></br> Here are the top must-see places in Ethiopia for both
                the budget packer and luxury traveler.
              </p>
              <a className="bg-primary-500 hover:text-white px-5 py-1 rounded text-gray-300">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:pl-14">
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-3/12">
              <h5 className="text-3xl py-4">Sights you need to visit</h5>
              <p className="pb-10">
                Not many countries manage to impress their visitors in a way
                that Ethiopia does.
              </p>
              <a className="bg-primary-500 hover:text-white px-5 py-1 rounded text-gray-300">
                See More
              </a>
            </div>
            {mustSeeSights.map(
              (sight, s) =>
                s < 3 && (
                  <TourRecommendationResultCard key={s} sightResult={sight} />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourRecommendation;
