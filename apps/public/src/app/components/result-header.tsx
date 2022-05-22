import { CaretDownOutlined } from '@ant-design/icons';
import { default as React } from 'react';
import { DefaultHeaderTopNav } from './default-header-top-nav';
import { HeaderTopNavContainer } from './header-top-nav-container';
import './header.scss';
export interface HeaderProps {
  showForm?: boolean;
  whiteLogo?: boolean;
  children: any;
}

const topNavImage = <img src="./../../assets/images/logo/Logo.png" />;
const whiteTopNavImage = <img src="./../../assets/images/logo/WhiteLogo.png" />;

const topNavHeaderRight = (
  <div className="flex space-x-8 h-14 items-center nav-text mt-2">
    <div className="hidden xl:flex px-12" style={{ color: '#292F32' }}>
      <div
        className="flex space-x-8 items-center h-full"
        style={{ marginTop: '-5px' }}
      >
        <a className="font-semibold" href="/partner/sign-up">
          Become a partner
        </a>
        <button className="bg-primary-500 font-semibold px-2 py-2 rounded text-white">
          Sign In
        </button>
        <div>
          <div>
            <div className="flex justify-around gap-1">
              <span className="font-bold">{'EN'}</span>
              <span style={{ marginTop: '-5px' }}>
                <CaretDownOutlined />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ResultHeader = ({ whiteLogo = false, children }: HeaderProps) => {
  return (
    <div className="md:overflow-hidden overflow-scroll overflow-x-hidden bg-white">
      <HeaderTopNavContainer
        image={whiteLogo ? whiteTopNavImage : topNavImage}
        leftNav={<DefaultHeaderTopNav></DefaultHeaderTopNav>}
        rightNav={topNavHeaderRight}
        fromHome={false}
      ></HeaderTopNavContainer>
      <div className="w-full">
        <div className="">{children}</div>
      </div>
    </div>
  );
};
