import { CaretDownOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const MobileNav = () => {
  const [language, setLanguage] = useState('EN');

  const updateLanguage = (value) => {
    setLanguage(value);
  };

  return (
    <div className="bg-primary-500 flex flex-col gap-12 h-screen md:hidden p-10">
      <nav className="text-2xl font-thin text-gray-400">
        <NavLink
          className="font-semibold"
          to="/hotel"
          activeClassName="active-nav-text"
        >
          Hotels
          <div className="w-4 h-1 mt-2 mx-auto"></div>
        </NavLink>
        <NavLink
          className="font-semibold"
          to="/flight"
          activeClassName="active-nav-text"
        >
          Flights
          <div className="w-4 h-1 mt-2 mx-auto"></div>
        </NavLink>
        <NavLink
          className="font-semibold"
          to="/car"
          activeClassName="active-nav-text"
        >
          Car Rentals
          <div className="w-4 h-1 mt-2 mx-auto"></div>
        </NavLink>
        <NavLink
          className="font-semibold"
          to="/tour"
          activeClassName="active-nav-text"
        >
          Tour and Travels
          <div className="w-4 h-1 mt-2 mx-auto"></div>
        </NavLink>
        <NavLink
          className="font-semibold"
          to="/deals"
          activeClassName="active-nav-text"
        >
          Deals
          <div className="w-4 h-1 mt-2 mx-auto"></div>
        </NavLink>
        <div>
          <div className="gap-2">
            <span className="font-bold">{language}</span>
            <span>
              <CaretDownOutlined />
            </span>
          </div>
        </div>
      </nav>
      <div className="flex flex-col font-semibold font-thin gap-2.5 text-2xl text-gray-400">
        <a className="text-center">Register</a>
        <button className="bg-white font-semibold py-2 rounded text-primary-500">
          Sign In
        </button>
      </div>
    </div>
  );
};
