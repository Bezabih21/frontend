import React from 'react';
import './car-rent-card.scss';
export interface CarOrderResultProps {
  carResult: any;
}

const CarOrderCard = (props: CarOrderResultProps) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-3/12">
      <article className="overflow-hidden rounded-lg shadow-lg" style={{}}>
        <header className="items-center leading-tight p-2">
          <div
            className="order-card-cover"
            style={{
              backgroundImage: `url('${
                props.carResult.image
                  ? props.carResult.image
                  : '/assets/images/hotels/1.png'
              }')`,
            }}
          ></div>
        </header>
        <footer className="py-5">
          <div className="flex justify-between px-4">
            <div className="flex flex-col justify-between">
              <h5 className="font-bold">{props.carResult.name}</h5>
              <small>max {props.carResult.maxCapacity} people</small>
            </div>
            <div className="flex flex-col gap-1.5 text-right">
              <small className="font-bold">{props.carResult.price}/Km</small>
              <a className="bg-primary-500 p-1 rounded text-gray-300 hover:text-white">
                Order Now
              </a>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default CarOrderCard;
