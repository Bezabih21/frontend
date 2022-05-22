import { CaretDownOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { CloseIcon, HumbuggerIcon } from './icons';
import { MobileNav } from './mobile-nav';
export const HeaderTopNav = () => {
  const history = useHistory();
  const [language, setLanguage] = useState('EN');

  const updateLanguage = (value) => {
    setLanguage(value);
  };

  const [open, setOpen] = useState(true);
  const [display, setDisplay] = useState(false);

  const toggle = () => {
    setOpen(!open);
    setDisplay(!display);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="container mx-auto px-6 md:px-12 py-4">
        <div className="md:flex justify-between items-center">
          <div className="flex justify-between items-center">
            <a href="#" className="text-white">
              <img src="./../../assets/images/logo/Logo.svg" />
            </a>
            <div className="md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={toggle}
              >
                <HumbuggerIcon
                  className={`py-0.5 mb-2 ${open ? 'block' : 'hidden'}`}
                />
                <CloseIcon
                  className={`py-0.5 mb-2 ${open ? 'hidden' : 'block'}`}
                />
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className="flex space-x-8 h-14 items-center nav-text mt-2">
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
              <div
                className="hidden xl:flex px-12"
                style={{ color: '#292F32' }}
              >
                <div
                  className="flex space-x-8 items-center h-full"
                  style={{ marginTop: '-5px' }}
                >
                  <a
                    className="font-semibold"
                    onClick={() => history.push('../partner/sign-up')}
                  >
                    Become a partner
                  </a>
                  <button
                    className="bg-primary-500 font-semibold px-2 py-2 rounded text-white"
                    onClick={() => history.push('../partner/sign-in')}
                  >
                    Sign In
                  </button>
                  <div>
                    <div>
                      <div className="flex justify-around gap-1">
                        <span className="font-bold">{language}</span>
                        <span style={{ marginTop: '-5px' }}>
                          <CaretDownOutlined />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {display ? <MobileNav /> : <></>}
    </header>
  );
};
