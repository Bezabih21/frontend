import { RightOutlined } from '@ant-design/icons';
import { Collapse, Divider } from 'antd';
import React from 'react';
import CarSVG from '../../../icons/car.svg';
import HotelSVG from '../../../icons/hotel.svg';
import TourSVG from '../../../icons/tour.svg';

const { Panel } = Collapse;
export const CollapseCard = () => {
  const getPannelHeader = (text) => {
    return (
      <>
        <div className="flex justify-between">
          <div className="flex gap-4 ">
            {text.icon}
            <div className="flex flex-col text-left">
              <span
                className="font-bold text-primary-400"
                style={{ fontSize: '18px' }}
              >
                {text.text}
              </span>
              <small>{text.description}</small>
            </div>
          </div>

          <RightOutlined />
        </div>
        <span>
          <Divider></Divider>
        </span>
      </>
    );
  };
  return (
    <div className="">
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <div className="py-4">
          <Collapse ghost>
            <Panel
              showArrow={false}
              header={getPannelHeader({
                text: 'New Hotel',
                description: 'Condimentum vitae sapien mi quis',
                icon: <HotelSVG color="#16586F" />,
              })}
              key="1"
            >
              <p>Condimentum vitae sapien mi quis</p>
            </Panel>
            <Panel
              showArrow={false}
              header={getPannelHeader({
                text: 'New Car Rental',
                description: 'Fringilla est ullamcorper eget nulla',
                icon: <CarSVG color="#16586F" />,
              })}
              key="2"
            >
              <p>Fringilla est ullamcorper eget nulla</p>
            </Panel>
            <Panel
              showArrow={false}
              header={getPannelHeader({
                text: 'New Tour Operator',
                description: 'Fringilla tour est ullamcorper eget nulla',
                icon: <TourSVG color="#16586F" />,
              })}
              key="3"
            >
              <p>Fringilla tour est ullamcorper eget nulla</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default CollapseCard;
