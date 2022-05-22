import React from 'react';
import { CheckIcon } from '../../../components/icons';
import { HotelDetailsInfo } from '../../../models/hotel-detail';

export interface HotelDetailOverviewProps {
  hotelDetail: HotelDetailsInfo;
}

function HotelDetailOverview(props: HotelDetailOverviewProps) {
  return (
    <div className="flex space-x-4">
      <div className="w-1/2 flex flex-col space-y-4">
        <div className="w-full p-5 flex flex-col bg-white rounded-md">
          <div className="flex space-x-20">
            <span className="text-sm font-bold text-primary-400">
              {props.hotelDetail.hotel.type}
            </span>
            {props.hotelDetail.otherRooms != null ? (
              <span className="text-sm font-bold text-primary-400">
                Number of rooms:
                {props.hotelDetail.otherRooms?.length}
              </span>
            ) : (
              <></>
            )}
          </div>
          <div className="mt-3 space-y-3">
            {props.hotelDetail?.hotel?.description}
          </div>
        </div>
        <div className="w-full bg-white p-5 rounded-md">
          <div>
            <span className="text-sm font-bold text-primary-400">
              Popular Amenities
            </span>
          </div>
          <div className="mt-2">
            {props.hotelDetail?.hotel?.amenities?.length == 0 ? (
              <p>Some amenities are temporarily unavailable.</p>
            ) : null}
            <div className="flex w-full justify-between mt-2 flex-wrap">
              {props.hotelDetail?.hotel?.amenities.map((amenity) => {
                return (
                  <div
                    key={amenity.code}
                    className="flex items-center space-x-2 w-1/3 py-3"
                  >
                    <CheckIcon className="w-6 h-5" />
                    <span className="capitalize">{amenity.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className="w-full bg-white p-5 rounded-md">
          <div>
            <span className="text-sm font-bold text-primary-400">
              Cleaning and safety practices
            </span>
          </div>
          <div className="mt-2">
            <div className="flex justify-between mt-2">
              <div className="flex items-center  space-x-2 w-1/3">
                <MessageOutlined className="text-primary-500 text-2xl" />
                <span>Pool</span>
              </div>
              <div className="flex items-center  space-x-2 w-1/3">
                <MessageOutlined className="text-primary-500 text-2xl" />
                <span>Pool</span>
              </div>
              <div className="flex items-center  space-x-2 w-1/3">
                <MessageOutlined className="text-primary-500 text-2xl" />
                <span>Pool</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="w-1/2">
        <div className="w-full h-full bg-white p-5 rounded-md">
          <div>
            <span className="text-sm font-bold text-primary-400">Policies</span>
          </div>
          <div className="flex flex-col p-5 space-y-5">
            {/* <div className="flex justify-between flex-wrap items-start">
              {props.hotelDetail.hotelDescriptiveInfo.propertyInfo.policies.policy.map(
                (policy) => {
                  return (
                    <div
                      key={policy.text.value}
                      className="flex flex-col w-1/2 space-y-2"
                    >
                      <span className="text-sm font-bold text-primary-400">
                        {policy.text.type}
                      </span>
                      <div className="pl-5 space-y-2">{policy.text.value}</div>
                    </div>
                  );
                }
              )}
            </div> */}
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-bold text-primary-400">
                Special check-in instructions
              </span>
              <div className="pl-5 space-y-2">
                <p>
                  To make arrangements for check-in please contact the property
                  at least 24 hours before arrival using the information on the
                  booking confirmation
                </p>
                <p>
                  Guests must contact the property in advance for check-in
                  instructions; front desk staff will greet guests on arrival
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-bold text-primary-400">
                Renovations and closures
              </span>
              <div className="pl-5 space-y-2">
                <p>
                  The following facilities or services will be unavailable from
                  September 9 2020 to December 31 2020 (dates subject to
                  change):
                </p>
                <p className="pl-5">- Fitness facilities</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-bold text-primary-400">
                Access methods
              </span>
              <div className="pl-5 space-y-2">
                <p>Staffed front desk</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-bold text-primary-400">
                Children and extra beds
              </span>
              <div className="pl-5 space-y-2">
                <p>Children are welcome</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-bold text-primary-400">Pets</span>
              <div className="pl-5 space-y-2">
                <p>Pets not allowed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetailOverview;
