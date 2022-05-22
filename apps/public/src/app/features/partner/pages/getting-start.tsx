// import { TourIcon } from 'libs/shared/components/src/lib/icons';
import React, { useState } from 'react';
import { CarIcon, HotelIcon, PlaneIcon } from '../../../components/icons';
import Choose from '../components/choose';

function GettingStart() {
  const [category, setCategory] = useState([
    {
      id: 1,
      icon: <HotelIcon color="#0066FF" />,
      text: 'Hotels, Apartments and more',
      url: 'partner/add-hotel',
    },
    { id: 1, icon: <CarIcon color="#F8B219" />, text: 'Car Rental', url: '' },
    {
      id: 1,
      // icon: <TourIcon color="#FF0000" />,
      text: 'Tour and Travel',
      url: '',
    },
    { id: 1, icon: <PlaneIcon color="#FF0000" />, text: 'Flights', url: '' },
  ]);
  return (
    <div className="container py-28 pl-24">
      <h1>To get started,</h1>
      <p className="py-2.5">
        Please select the type of business you want to list on eltnt.com{' '}
      </p>
      <div className="flex gap-12 py-6">
        {category.map((cat, c) => (
          <Choose category={cat} key={c} />
        ))}
      </div>
    </div>
  );
}

export default GettingStart;
