import { CaretDownOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
export interface TopNavProps {
  btnText: any;
  url: any;
  btnUrl: string;
}
export const TopNavigation = ({ linkText, btnText, btnUrl = '../' }) => {
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
        <div
          className="flex gap-4 pl-12"
          style={{ float: 'left' }}
          onClick={() => history.push('../hotel')}
        >
          <a href="#" className="text-white">
            <img src="./../../assets/images/logo/Logo.svg" />
          </a>
          <a
            className="text-primary-500 font-medium py-6"
            style={{ fontSize: '16px' }}
          >
            Eltnt.com
          </a>
        </div>
        <div className="flex gap-4 py-6" style={{ float: 'right' }}>
          <div className="py-1">
            <span style={{ fontSize: '16px' }}>{linkText}</span>
          </div>

          <a href={btnUrl}>
            <button
              className="bg-primary-500 px-4 py-1.5 py-2 rounded text-white"
              // onClick={() => history.push({ btnUrl })}
            >
              {btnText}
            </button>
          </a>
          <div>
            <button className="border-2 px-4 py-1 rounded">Help</button>
          </div>

          <div className="flex justify-around gap-1 py-1">
            <span className="font-bold">{language}</span>
            <span style={{ marginTop: '-5px' }}>
              <CaretDownOutlined />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopNavigation;
