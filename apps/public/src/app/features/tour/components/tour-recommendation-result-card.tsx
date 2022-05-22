import React from 'react';
export interface RecommendedSightsResultProps {
  sightResult: any;
}

const TourRecommendationResultCard = (props: RecommendedSightsResultProps) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-3/12">
      <article
        className="overflow-hidden rounded-lg shadow-lg"
        style={{
          backgroundImage: `radial-gradient(rgba(0,0,0, 0.4), rgba(0,0,0,0.4)), url('${
            props.sightResult.image
              ? props.sightResult.image
              : '/assets/images/hotels/1.png'
          }')`,
          backgroundSize: 'cover',
          height: '220px',
          position: 'relative',
        }}
      >
        <footer
          className="text-white px-11"
          style={{ position: 'absolute', bottom: '10%', left: 0 }}
        >
          {props.sightResult.text}
        </footer>
      </article>
    </div>
  );
};

export default TourRecommendationResultCard;
