import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { DateParam, NumberParam, StringParam } from 'serialize-query-params';
import { useQueryParams } from 'use-query-params';
import { Room, SearchedHotelDetail } from '../../../models/hotel-detail';

export interface HotelDetailRoomProps {
  roomDetail: Room;
  searchedHotelDetail: SearchedHotelDetail;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function HotelDetailRoom(props: HotelDetailRoomProps) {
  const history = useHistory();
  const query = useQuery();
  const { id } = useParams<{ id: string }>();

  const [paramQuery, setParamQuery] = useQueryParams({
    city: StringParam,
    roomQuantity: NumberParam,
    adultQuantity: NumberParam,
    childrenQuantity: NumberParam,
    startDate: DateParam,
    endDate: DateParam,
  });

  const reserve = () => {
    console.log('reserve');
    query.append('rateKey', props?.roomDetail?.ratePlans.ratePlan[0].rateKey);
    query.append('hotel', id);

    history.push({
      pathname: '/hotel/book',
      search: query.toString(),
    });
  };

  const roomDetail = {
    type: 'Standard Twin Room',
    noOfPeople: 2,
    area: 33,
    bed: {
      type: 'twin beds',
      count: 1,
    },
    detail: {
      parkingIncluded: true,
      freeWifi: true,
    },
    reservationType: 'Reserve now, pay later',
    price: {
      type: 'per Night',
      price: 156,
      deals: {
        type: 'per Night',
        count: 7,
        price: 1190,
      },
    },
    remaining: 3,
  };
  return (
    <div className="bg-white rounded-md shadow-md">
      <div
        className="w-full rounded-md"
        style={{
          backgroundImage: `url('assets/images/cover/Hotel Room.png')`,
          backgroundSize: 'cover',
          height: '248px',
        }}
      ></div>
      <div className="flex flex-col p-3">
        <div className="text-xl font-bold capitalize">
          {props?.roomDetail?.roomDescription?.name}
        </div>
        {/* <div className="flex flex-wrap px-2 space-y-2 text-xs mt-5">
          <div className="w-1/2 flex space-x-5">
            <AreaIcon className="w-6 h-5 mt-0.5"></AreaIcon>{' '}
            <span>
              {roomDetail.area} <span>&#13217;</span>
            </span>
          </div>
          <div className="w-1/2 flex space-x-5">
            <TickIcon className="w-6 h-5 mt-0.5"></TickIcon>{' '}
            <span>{roomDetail.reservationType}</span>
          </div>
          <div className="w-1/2 flex space-x-5">
            <PeopleIcon className="w-6 h-5 mt-0.5"></PeopleIcon>{' '}
            <span>Sleep {roomDetail.noOfPeople}</span>
          </div>
          {roomDetail.detail.parkingIncluded ? (
            <div className="w-1/2 flex space-x-5">
              <ParkingIcon className="w-6 h-5 mt-0.5"></ParkingIcon>{' '}
              <span>Parking Included</span>
            </div>
          ) : null}

          <div className="w-1/2 flex space-x-5">
            <BedIcon className="w-6 h-5 mt-0.5"></BedIcon>{' '}
            <span>{props?.roomDetail?.roomDescription.name} </span>
          </div>
          {roomDetail.detail.freeWifi ? (
            <div className="w-1/2 flex space-x-5">
              <WifiIcon className="w-6 h-5 mt-0.5"></WifiIcon>{' '}
              <span>Free Wifi</span>
            </div>
          ) : null}
        </div>
        <div className="pl-2 mt-3">
          <a className="text-xs" style={{ color: '#00B8F2' }}>
            More Detail {'>'}
          </a>
        </div> */}
        <div className="pl-2 flex flex-col mt-10">
          <div className="w-full flex justify-between items-start">
            <div className="flex flex-col space-y-1">
              <span className="text-xs font-bold">Per Night</span>
              <span className="text-xs font-bold">
                {props?.searchedHotelDetail?.pricePerDay}{' '}
                {props?.searchedHotelDetail?.currency}{' '}
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-xs font-bold">
                For {props?.searchedHotelDetail?.totalDays} Nights
              </span>
              <span className="text-xs font-bold">
                {props?.searchedHotelDetail?.totalPrice}{' '}
                {props?.searchedHotelDetail?.currency}
              </span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-xs text-right text-primary-500">
                We have {props?.roomDetail?.quantity} left
              </span>
              <button
                className="h-full px-5 py-2 text-white bg-primary-500 rounded-md text-lg"
                onClick={reserve}
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetailRoom;
