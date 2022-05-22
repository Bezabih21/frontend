import React from 'react';
import HotelSearch from './hotel-search';
export interface HotelProps {
  fromHome?: boolean;
}
export const Hotel = ({ fromHome = true }: HotelProps) => {
  return (
    <div className={`${fromHome ? '' : 'bg-primary-500'}`}>
      <HotelSearch fromHome={fromHome} />
    </div>
  );
};
