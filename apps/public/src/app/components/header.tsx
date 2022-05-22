import { default as React } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderTopNav } from './header-top-nav';
import './header.scss';
import { CarIcon, HotelIcon, PassengerIcon, PlaneIcon } from './icons';
export interface HeaderProps {
  heroImage?: string;
  heroText?: string | JSX.Element;
  showForm?: boolean;
  children: any;
}
export const Header = ({
  heroImage = "url('./../assets/images/cover/Hotel Hero - Image.png')",
  heroText,
  children,
}: HeaderProps) => {
  return (
    <div className="md:overflow-hidden overflow-scroll overflow-x-hidden relative">
      <img
        src={heroImage}
        className="absolute h-full w-full object-cover"
        style={{ height: '75%' }}
      />
      <div
        className="inset-0 bg-black opacity-25 absolute"
        style={{ height: '75%' }}
      ></div>
      <HeaderTopNav></HeaderTopNav>
      <div className="container md:px-12 mx-auto px-6 py-32 relative z-10">
        <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
          {heroText}
        </div>
        <div className="mt-5">
          <div className="pt-11 nav-button">
            <div className="flex justify-start nav-button">
              <NavLink
                className="px-3.5 py-4 md:px-5 md:py-6 bg-primary-500 hover:bg-white rounded-tl-3xl"
                to="/hotel"
                activeClassName="active-nav-button"
              >
                <span className="flex md:gap-5 text-center">
                  <HotelIcon className="w-6 h-5 hidden lg:block"></HotelIcon>
                  Hotel
                </span>
              </NavLink>
              <NavLink
                to="/flight"
                className="px-3.5 py-4 md:px-5 md:py-6 bg-primary-500 hover:bg-white border-l"
                activeClassName="active-nav-button"
              >
                <span className="flex md:gap-5 text-center">
                  <PlaneIcon className="w-6 h-5 hidden lg:block"></PlaneIcon>
                  Flight
                </span>
              </NavLink>
              <NavLink
                to="/car"
                className="px-3.5 py-4 md:px-5 md:py-6 bg-primary-500 hover:bg-white border-l"
                activeClassName="active-nav-button"
              >
                <span className="flex md:gap-5 text-center">
                  <CarIcon className="w-6 h-5 hidden lg:block"></CarIcon>
                  Rent a car
                </span>
              </NavLink>
              <NavLink
                to="tour"
                className="px-3.5 py-4 md:px-5 md:py-6 bg-primary-500 hover:bg-white border-l rounded-tr-3xl"
                activeClassName="active-nav-button"
              >
                <span className="flex md:gap-5 text-center">
                  <PassengerIcon className="w-6 h-5 hidden lg:block"></PassengerIcon>
                  Travel
                </span>
              </NavLink>
            </div>
          </div>
          <div className="bg-white pb-21 rounded-b-3xl md:rounded-tr-3xl shadow-2xl relative min-h-96">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
