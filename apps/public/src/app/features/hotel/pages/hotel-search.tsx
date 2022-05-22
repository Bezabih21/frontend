import React from 'react';
import HomePageSearchForm from '../components/home-page-search-form';
import StickySearchForm from '../components/sticky-search-form';

export interface HotelSearchProps {
  fromHome: boolean;
}

export const HotelSearch = ({ fromHome = true }: HotelSearchProps) => {
  return fromHome ? <HomePageSearchForm /> : <StickySearchForm />;
};

export default HotelSearch;
