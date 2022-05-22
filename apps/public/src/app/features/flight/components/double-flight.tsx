import { Divider } from 'antd';
import React from 'react';
import EllipsisSVG from '../../../components/icons/ellipsis';
import LineSVG from '../../../components/icons/line';
import RectangleSVG from '../../../components/icons/rectangle';

export interface FlightResultProps {
  searchResult: any;
}

export const DoubleFlight = (props: FlightResultProps) => {
  return (
    <div className="flight-card bg-white rounded shadow-md p-6">
      <div className="flex justify-between">
        <div
          style={{ width: '581px', height: '194px' }}
          className="flex flex-col gap-10"
        >
          <div className="flex justify-between">
            <img
              // className="shadow-md rounded"
              style={{ width: '77px', height: '77px' }}
              src="assets/images/logo/flight/1.svg"
            />
            <div className="flex flex-col">
              <div>
                <LineSVG className="my-8" />
              </div>
              <div
                className="flex justify-between"
                style={{ marginTop: '-62px' }}
              >
                <div className="flex flex-col items-center">
                  <span>{props.searchResult.trip[0].departure.iataCode}</span>
                  <EllipsisSVG color={'#C8E0CC'}></EllipsisSVG>
                  <small>{props.searchResult.trip[0].departure.at}</small>
                </div>
                {props.searchResult.trip[0].numberOfStops === 0 ? (
                  <div className="flex flex-col">
                    <small>Direct</small>
                    <div style={{ display: 'none' }}>
                      <RectangleSVG color={'#FED9D9'}></RectangleSVG>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4 justify-evenly">
                    {props.searchResult.trip[0].stops.map((stop, s) => (
                      <div className="flex flex-col" key={s}>
                        <span>{stop.airport}</span>
                        <div style={{ display: 'block' }}>
                          <RectangleSVG color={'#FED9D9'}></RectangleSVG>
                        </div>
                        <small style={{ maxWidth: '35px' }}>
                          {stop.totalTime} stepover
                        </small>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col items-center">
                  <span>{props.searchResult.trip[0].arrival.iataCode}</span>
                  <EllipsisSVG color={'#C8E0CC'}></EllipsisSVG>
                  <small>{props.searchResult.trip[0].arrival.at}</small>
                </div>
              </div>
            </div>

            <div className="flex flex-col font-medium">
              <span>
                {props.searchResult.trip[0].totalTimeSpent.hour} hours
              </span>
              <span>
                {props.searchResult.trip[0].totalTimeSpent.min} minutes
              </span>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col font-medium">
              <span>
                {props.searchResult.trip[1].totalTimeSpent.hour} hours
              </span>
              <span>
                {props.searchResult.trip[1].totalTimeSpent.min} minutes
              </span>
            </div>
            <div className="flex flex-col">
              <div>
                <LineSVG className="my-8" />
              </div>
              <div
                className="flex justify-between"
                style={{ marginTop: '-62px' }}
              >
                <div className="flex flex-col items-center">
                  <span>{props.searchResult.trip[1].departure.iataCode}</span>
                  <EllipsisSVG color={'#6FD980'}></EllipsisSVG>
                  <small>{props.searchResult.trip[1].departure.at}</small>
                </div>
                {props.searchResult.trip[1].numberOfStops === 0 ? (
                  <div className="flex flex-col">
                    <small>Direct</small>
                    <div style={{ display: 'none' }}>
                      <RectangleSVG color={'#FED9D9'}></RectangleSVG>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4 justify-evenly">
                    {props.searchResult.trip[1].stops.map((stop, s) => (
                      <div className="flex flex-col" key={s}>
                        <span>{stop.airport}</span>
                        <div style={{ display: 'block' }}>
                          <RectangleSVG color={'#FED9D9'}></RectangleSVG>
                        </div>
                        <small style={{ maxWidth: '35px' }}>
                          {stop.totalTime} stepover
                        </small>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-col items-center">
                  <span>{props.searchResult.trip[1].arrival.iataCode}</span>
                  <EllipsisSVG color={'#C8E0CC'}></EllipsisSVG>
                  <small>{props.searchResult.trip[1].arrival.at}</small>
                </div>
              </div>
            </div>
            <img
              style={{ width: '77px', height: '77px' }}
              // className="shadow-md rounded"
              src="assets/images/logo/flight/1.svg"
            />
          </div>
        </div>
        <Divider
          type="vertical"
          style={{ height: 'inherit' }}
          className="pl-6"
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-end">
            <span className="font-medium text-2xl">
              $ {props.searchResult.cost.price.dollar}
            </span>
            <small className="font-medium">
              apx. {props.searchResult.cost.price.birr} Birr
            </small>
            <small className="text-gray-400">
              {props.searchResult.cost.taxIncluded === true ? (
                <span>Tax included</span>
              ) : (
                <span>Tax excluded</span>
              )}
            </small>
            <small className="text-gray-400 text-right">
              {props.searchResult.baggageInfo.totalCount}{' '}
              {props.searchResult.baggageInfo.description}
            </small>
          </div>
          <div className="text-right">
            <a className="bg-primary-500 p-2 px-4 rounded text-gray-100 hover:text-white">
              Choose Flight
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
