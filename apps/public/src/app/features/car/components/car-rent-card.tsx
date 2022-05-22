import { Tag } from 'antd';
import React from 'react';
import { CheckIcon } from '../../../components/icons';
import './car-rent-card.scss';

export interface CarRentResultProps {
  carResult: any;
}

const CarRentCard = (props: CarRentResultProps) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-2/6">
      <article className="overflow-hidden rounded-lg shadow-lg p-4">
        <header className="items-center leading-tight p-2 flex justify-between">
          <span
            style={{
              fontFamily: 'Open Sans',
              fontSize: '22px',
              fontWeight: 600,
              lineHeight: '30px',
              letterSpacing: '-0.11516798287630081px',
              textAlign: 'center',
            }}
          >
            {props.carResult.name}
          </span>
          <Tag className="bg-primary-400 px-3.5 py-1 text-white rounded">
            {props.carResult.type}
          </Tag>
        </header>
        <div>
          <div
            className="card-cover"
            style={{
              backgroundImage: `url('${
                props.carResult.image
                  ? props.carResult.image
                  : '/assets/images/car/rent-1.png'
              }')`,
              height: '240px',
            }}
          ></div>
        </div>
        <footer>
          <div className="flex justify-between">
            <div className="flex flex-col">
              {props.carResult.includes.map((include, i) => (
                <div>
                  <CheckIcon className="w-6 h-7"></CheckIcon>
                  <small>{include}</small>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-end">
              <span className="text-right">
                <span> From </span>
                <span className="font-bold text-primary-500 text-2xl">
                  {props.carResult.price}
                </span>
              </span>
              <a className="bg-primary-500 hover:text-white px-5 py-2.5 rounded text-gray-300">
                Rent Now
              </a>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default CarRentCard;
