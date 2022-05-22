import React from 'react';
import './footer.scss';
import FacebookSVG from './icons/facebook.svg';
import InstagramSVG from './icons/instagram.svg';
import TweeterSVG from './icons/tweeter.svg';

const footerContents = [
  {
    text: 'Travel',
    children: [
      { text: 'Car Rental', action: '', icon: null },
      { text: 'Flight Finder', action: '', icon: null },
      { text: 'Hotels', action: '', icon: null },
      { text: 'Deals', action: '', icon: null },
    ],
  },
  {
    text: 'Discover',
    children: [
      { text: 'Regions', action: '', icon: null },
      { text: 'Cities', action: '', icon: null },
      { text: 'Attractions', action: '', icon: null },
      { text: 'Airports', action: '', icon: null },
    ],
  },
  {
    text: 'Follow Us',
    children: [
      {
        text: 'Facebook',
        action: '',
        icon: <FacebookSVG></FacebookSVG>,
      },
      {
        text: 'Twitter',
        action: '',
        icon: <TweeterSVG></TweeterSVG>,
      },
      {
        text: 'Instagram',
        action: '',
        icon: <InstagramSVG></InstagramSVG>,
      },
    ],
  },
];

export const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="footer py-10">
        <div className="contain">
          <div className="col about">
            <div className="flex flex-col">
              <div>
                <img src="./../../assets/images/logo/Logo.svg" />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="center">
            {footerContents.map((content, i) => (
              <div className="col" key={i}>
                <h1 className="text-primary-500">{content.text}</h1>
                <ul>
                  {content.children.map((child, c) => (
                    <li key={c} className="flex justify-items-start gap-2">
                      <i
                        className={`py-0.5 mb-2 text-gray-600 ${
                          child.icon ? '' : 'hidden'
                        }`}
                      >
                        {child.icon}
                      </i>
                      <a>{child.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="md:flex md:justify-between px-3.5 text-center">
            <div className="text-gray-400">
              Copyright &#169; {new Date().getFullYear()}.{' '}
              <a href="#">Eltnt.com</a>. All rights reserved.
            </div>
            <div className="flex justify-around">
              <a className="md:px-20">Terms &amp; Conditions</a>
              <a>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
