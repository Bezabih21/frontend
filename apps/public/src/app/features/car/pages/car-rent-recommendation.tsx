import React, { useState } from 'react';
import CarOrderCard from '../components/car-order-card';
import CarRentCard from '../components/car-rent-card';

const CarRentRecommendation = () => {
  const [orderCar, setorderCar] = useState([
    {
      name: 'Taxiye',
      maxCapacity: 4,
      price: '$1.50',
      image: '/assets/images/car/order-1.png',
    },
    {
      name: '7 Seater',
      maxCapacity: 7,
      price: '$1.50',
      image: '/assets/images/car/order-2.png',
    },
    {
      name: 'Mlni',
      maxCapacity: 4,
      price: '$1.50',
      image: '/assets/images/car/order-3.png',
    },
  ]);

  const [rentCar, setRentCar] = useState([
    {
      name: 'Toyota Yaris 2019',
      image: '/assets/images/car/rent-1.png',
      type: 'Economy',
      price: '$25',
      includes: ['5 people', 'Automatic', '1 large bag', '2 small bags'],
    },
    {
      name: 'Toyota Yaris 2019',
      image: '/assets/images/car/rent-2.png',
      type: 'Standard',
      price: '$25',
      includes: ['5 people', 'Automatic', '1 large bag', '2 small bags'],
    },
    {
      name: 'Toyota Yaris 2019',
      image: '/assets/images/car/rent-3.png',
      type: 'Economy',
      price: '$25',
      includes: ['5 people', 'Automatic', '1 large bag', '2 small bags'],
    },
  ]);

  return (
    <div className="container mx-auto">
      <div className="pt-10">
        <h5 className="text-3xl text-center text-primary-500">
          Simple and easy steps to rent.
        </h5>
        <div>
          <p className="text-center p-5">
            A few simple steps separate you from your upcoming journey. See how
            easy it is to rent a car.
          </p>
        </div>
      </div>

      <div className="md:overflow-hidden overflow-scroll overflow-x-hidden relative py-10 pb-36">
        <img src="../../../../assets/images/car/promo.svg" className="w-full" />
      </div>

      <div className="md:pl-14">
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-3/12">
              <h5 className="text-3xl py-4">
                Relieve your transport worries with us.
              </h5>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            {orderCar.map(
              (car, o) => o < 3 && <CarOrderCard key={o} carResult={car} />
            )}
          </div>
        </div>
      </div>
      <div className="md:pl-14 md:py-28">
        <h5 className="font-bold text-2xl text-center pb-10">
          Most Popular Cars
        </h5>
        <div className="flex justify-around">
          {/* <div
            style={{
              marginTop: '10%',
            }}
          >
            <LeftOutlined />
          </div> */}
          <div className="container my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {rentCar.map(
                (car, r) => r < 3 && <CarRentCard key={r} carResult={car} />
              )}
            </div>
          </div>
          {/* <div
            style={{
              marginTop: '10%',
            }}
          >
            <RightOutlined />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CarRentRecommendation;
