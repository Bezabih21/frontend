import React from 'react';
import CarSVG from '../../../icons/car.svg';
import HotelSVG from '../../../icons/hotel.svg';
import PlainSVG from '../../../icons/plain.svg';
import TourSVG from '../../../icons/tour.svg';
import CollapseCard from '../components/collapse-card';
import CounterCard from '../components/counter-card';
import GraphCard from '../components/graph-card';

export const Dashebord = () => {
  const Headers = [
    {
      text: 'Hotels',
      bg: 'bg-blue-100',
      color: '#0066FF',
      icon: <HotelSVG color="#0066FF" />,
      count: 108,
    },
    {
      text: 'Car Rentals',
      bg: 'bg-yellow-100',
      color: '#F8B219',
      icon: <CarSVG color="#F8B219" />,
      count: 53,
    },
    {
      text: 'Tour Operators',
      bg: 'bg-green-100',
      color: '#008000',
      icon: <TourSVG color="#008000" />,
      count: 32,
    },
    {
      text: 'Flights',
      bg: 'bg-red-100',
      color: '#FF0000',
      icon: <PlainSVG color="#FF0000" />,
      count: 12,
    },
  ];
  return (
    <div className="p-4 gap-4 flex flex-col gap-4">
      <div className="flex justify-between gap-4">
        {Headers.map((header, h) => (
          <CounterCard header={header} key={h} />
        ))}
      </div>
      <div className="flex gap-4">
        <div className="w-2/3">
          <GraphCard />
        </div>
        <div className="w-1/2">
          <CollapseCard />
        </div>
      </div>
    </div>
  );
};

export default Dashebord;
