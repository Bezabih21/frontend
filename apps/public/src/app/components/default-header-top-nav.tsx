import React from 'react';
import { NavLink } from 'react-router-dom';
export const DefaultHeaderTopNav = () => {
  return (
    <nav
      className="navigation-bar flex space-x-8 h-14 items-center nav-text mt-2"
      style={{ color: '#292F32' }}
    >
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
    </nav>
  );
};
