import React, { ReactNode, useState } from 'react';
import { CloseIcon, HumbuggerIcon } from './icons';
import { MobileNav } from './mobile-nav';
export interface HeaderTopNavContainerProps {
  image: ReactNode;
  fromHome?: boolean;
  leftNav?: ReactNode;
  rightNav?: ReactNode;
}
export const HeaderTopNavContainer = ({
  image,
  leftNav,
  rightNav,
  fromHome = true,
}: HeaderTopNavContainerProps) => {
  const [open, setOpen] = useState(true);
  const [display, setDisplay] = useState(false);

  const toggle = () => {
    setOpen(!open);
    setDisplay(!display);
  };

  return (
    <header
      className={`${fromHome ? 'absolute' : ''} top-0 left-0 right-0 z-20`}
    >
      <nav className="container mx-auto px-6 md:px-12">
        <div className="md:flex justify-between items-center">
          <div className="flex justify-between items-center">
            <a href="#" className="text-white">
              {image}
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
          {leftNav}
          <div className="hidden md:flex items-center">{rightNav}</div>
        </div>
      </nav>
      {display ? <MobileNav /> : <></>}
    </header>
  );
};
