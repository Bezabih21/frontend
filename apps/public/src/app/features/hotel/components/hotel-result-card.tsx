import { Rate } from 'antd';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MarkerIcon } from '../../../components/icons';
import { HotelListItem } from '../../../models/hotel';
import { HotelQuery } from '../../../models/hotel.query';

export interface HotelResultCardProps {
  hotel: HotelListItem;
  query: HotelQuery;
}

function HotelResultCard(props: HotelResultCardProps) {
  const [hotelParams, setHotelParams] = useState('');

  useEffect(() => {
    let paramText = `?city=${props.query.CityCode}`;
    if (props.query.CheckInDate) {
      paramText = `${paramText}&startDate=${format(
        props.query.CheckInDate,
        'YYYY-MM-DD'
      )}`;
    }
    if (props.query.CheckOutDate) {
      paramText = `${paramText}&endDate=${format(
        props.query.CheckOutDate,
        'YYYY-MM-DD'
      )}`;
    }
    if (props.query.RoomQuantity) {
      paramText = `${paramText}&roomQuantity=${props.query.RoomQuantity}`;
    }
    if (props.query.Adults) {
      paramText = `${paramText}&adultQuantity=${props.query.Adults}`;
    }
    if (props.query.Children) {
      paramText = `${paramText}&childrenQuantity=${props.query.Children}`;
    }
    setHotelParams(paramText);
    return () => {
      setHotelParams('');
    };
  }, []);

  return (
    <div className="bg-white shadow-2xl rounded">
      <header
        className="rounded-t"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0, 0.4), rgba(0,0,0,0.4)), url('${
            props.hotel?.image
              ? props.hotel?.image
              : '/assets/images/hotels/1.png'
          }')`,
          maskRepeat: 'no-repeat',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '250px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div className="px-4 py-3">
          <div className="top">
            <div className="flex justify-between">
              <div>
                <h5 className="font-bold text-white">
                  {props.hotel?.hotelName}
                </h5>
                <small className="text-gray-200">
                  {props.hotel.address?.city}
                </small>
              </div>
              <MarkerIcon className="w-6 h-5 mt-0.5"></MarkerIcon>
            </div>
            <Rate
              disabled
              allowHalf
              defaultValue={parseInt(props.hotel?.starRate + '')}
            />
          </div>
        </div>

        <div className="flex gap-3 justify-end px-4 py-3">
          <div className="flex flex-col">
            <span className="text-white text-xs">{'Excellent'}</span>
            <small className="text-gray-200">{0} reviews</small>
          </div>

          <div className="bg-primary-500 grade p-1.5 font-bold rounded text-white">
            {10}
          </div>
        </div>
      </header>
      <div className="body-container flex gap-4 px-3.5 pt-4 justify-between">
        <div className="info flex-1">
          <div className="info-name">
            <p className="room-type text-base capitalize font-bold">
              {props?.hotel?.roomName}
            </p>
          </div>
        </div>
        <div className="info flex-2">
          <div className="info-name">
            <small className="font-bold text-gray-400">
              {props.query?.dateDiff.replace('day', 'night')},{' '}
              {props.query?.Adults}{' '}
              {props.query?.Adults === 1
                ? 'adult'
                : props.query?.Adults > 1
                ? 'adults'
                : ''}
            </small>
          </div>
        </div>
      </div>
      <div className="body-container flex gap-4 px-3.5 justify-between">
        <div className="info flex-1">
          <div className="info-name">
            <small className="bed-type text-gray-500">
              {props?.hotel?.description}
            </small>
          </div>
        </div>
        <div className="info flex-2">
          <div className="info-name">
            <div className="price">
              <div className="price-frame">
                <div className="room-spec">
                  {/* <small className="font-bold text-gray-400">
                {props.hotel.offers[0].room.typeEstimated.}
              </small> */}
                </div>
                <div className="price-info">
                  <p className="font-extrabold text-gray-900">
                    {props.hotel.pricePerDay} {props.hotel.currency}
                  </p>
                  {/* <small className="text-black">
                {(props.hotel.price.dollar * 45).toFixed(2)} Birr
              </small> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="price-btn flex justify-end  p-3.5">
        <Link
          to={{
            pathname: `/hotel/${props.hotel?.hotelId}`,
            search: `${hotelParams}&roomId=${props.hotel?.roomId}`,
          }}
          className="bg-primary-500 p-1 py-2.5 rounded text-gray-300 hover:text-white"
        >
          See Availability
        </Link>
      </div>
    </div>
  );
}
export default HotelResultCard;
