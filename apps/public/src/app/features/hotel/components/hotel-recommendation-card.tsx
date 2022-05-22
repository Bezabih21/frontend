import { Rate } from 'antd';
import React from 'react';
import { MarkerIcon } from '../../../components/icons';

export interface HotelRecommendationResultProps {
  recommendationResult: any;
}

export const HotelRecommendationCard = (
  props: HotelRecommendationResultProps
) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-3/12">
      <article
        className="overflow-hidden rounded-lg shadow-lg"
        style={{
          // backgroundImage: `url('${
          //   props.recommendationResult.picture
          //     ? props.recommendationResult.picture
          //     : 'https://picsum.photos/600/400/?random'
          // }')`,
          backgroundImage: `radial-gradient(rgba(0,0,0, 0.4), rgba(0,0,0,0.4)), url('${
            props.recommendationResult.picture
              ? props.recommendationResult.picture
              : '/assets/images/hotels/1.png'
          }')`,
          backgroundSize: 'cover',
        }}
      >
        <header
          className="items-center leading-tight p-2"
          style={{
            height: '340px',
          }}
        >
          <div className="px-4 py-3">
            <div className="top">
              <div className="flex justify-between">
                <div>
                  <h5 className="font-bold text-white">
                    {' '}
                    {props.recommendationResult.name}
                  </h5>
                  <small className="text-gray-200">
                    {props.recommendationResult.address}
                  </small>
                </div>
                <MarkerIcon className="w-6 h-5 mt-0.5"></MarkerIcon>
              </div>
              <Rate
                disabled
                allowHalf
                defaultValue={props.recommendationResult.rate}
              />
            </div>
          </div>
        </header>
        <footer className="leading-none p-2 md:p-4">
          <div className="flex justify-between">
            <div className="text-white">
              <div className="flex flex-col">
                <strong>$ {props.recommendationResult.price.dollar}</strong>
                <small>
                  <span className="font-bold pr-1">
                    {props.recommendationResult.price.birr} Birr
                  </span>
                  <span>{props.recommendationResult.status}</span>
                </small>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col">
                <span className="text-white text-xs">
                  {' '}
                  {props.recommendationResult.reviews.rate}
                </span>
                <small className="text-gray-200">
                  {props.recommendationResult.reviews.totalReview} reviews
                </small>
              </div>

              <div className="bg-primary-500 grade px-1.5 py-1.5 rounded text-white">
                {props.recommendationResult.reviews.grade}
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default HotelRecommendationCard;
