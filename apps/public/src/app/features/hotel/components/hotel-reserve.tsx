import { Rate } from 'antd';
import React from 'react';
import {
  AreaIcon,
  BedIcon,
  CheckIcon,
  ChevronLeftIcon,
  ClipBoardIcon,
  SmokingBanIcon,
  SnowFlakeIcon,
  ThumbsUp,
  UserIcon,
  WifiIcon,
} from '../../../components/icons';
import HotelReserveForm from './hotel-reserve-form';
import './hotel.scss';

const reservedHotel = {
  hotelDetail: {
    id: 1,
    name: 'Ethiopian Skylight Hotel',
    picture: 'assets/images/hotels/1.png',
    rate: 5,
    address:
      'Bole International Airport, P.O.Box 1755, Bole,1755 Addis Ababa, Ethiopia',
    reviews: { rank: 8.3, grade: 'Excellent', totalReviews: 468 },
  },
  roomOfferDetail: {
    roomType: 'Standard King Room',
    detail: {
      adult: 1,
      area: 34,
      wifi: 'free WiFi',
      bed: '1 extra large double bed',
      smokingCheck: 'Non-smoking',
      airConditioning: true,
      hasWindow: true,
    },
    cancellation: { from: '', to: '' },
  },
  price: { per: '1', cost: '', vat: '15', cancellation: '', cityTax: '10' },
};
function HotelReserve() {
  const submitForm = (e) => {
    console.log('form submited', e);
  };
  return (
    <div className="px-28 py-16">
      <div className="bg-gray-100 p-5 rounded">
        <div className="bg-gray-100 flex justify-between">
          <div
            className="mr-4 w-1/3 flex flex-col md:gap-6"
            style={{ maxWidth: '390px' }}
          >
            <div className="bg-white rounded">
              <header
                className="rounded-t"
                style={{
                  backgroundImage: `url('${
                    reservedHotel.hotelDetail.picture
                      ? reservedHotel.hotelDetail.picture
                      : 'assets/images/hotels/1.png'
                  }')`,
                  height: '150px',
                  maxWidth: '390px',
                  maskRepeat: 'no-repeat',
                }}
              ></header>
              <div className="body-container p-3.5">
                <div className="hotel-info">
                  <p className="font-bold text-base text-gray-700">
                    {reservedHotel.hotelDetail.name}
                  </p>
                  <Rate
                    disabled
                    allowHalf
                    defaultValue={reservedHotel.hotelDetail.rate}
                  />
                  <div className="flex gap-3 items-end py-2">
                    <div className="bg-primary-500 grade px-1.5 py-1.5 rounded text-white">
                      {reservedHotel.hotelDetail.reviews.rank}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-700 text-xs">
                        {reservedHotel.hotelDetail.reviews.grade}
                      </span>
                      <small className="text-gray-700">
                        {reservedHotel.hotelDetail.reviews.totalReviews} reviews
                      </small>
                    </div>
                  </div>
                  <p className="font-light py-1 text-gray-400 text-sm">
                    {reservedHotel.hotelDetail.address}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3.5 bg-white rounded">
              <p className="font-bold text-gray-700">
                {reservedHotel.roomOfferDetail.roomType}
              </p>

              {reservedHotel.roomOfferDetail.detail.adult ? (
                <div className="flex gap-1.5 p-2">
                  <UserIcon className="w-6 h-5"></UserIcon>
                  <small className="font-medium p-0.5 text-gray-500">
                    {reservedHotel.roomOfferDetail.detail.adult} Adult
                  </small>
                </div>
              ) : null}
              {reservedHotel.roomOfferDetail.detail.area ? (
                <div className="flex gap-1.5 p-2">
                  <AreaIcon className="w-6 h-5"></AreaIcon>
                  <small className="font-medium p-0.5 text-gray-500">
                    {reservedHotel.roomOfferDetail.detail.area} m²
                  </small>
                </div>
              ) : null}
              {reservedHotel.roomOfferDetail.detail.wifi ? (
                <div className="flex gap-1.5 p-2">
                  <WifiIcon className="w-6 h-5"></WifiIcon>
                  <small className="font-medium p-0.5 text-gray-500">
                    {reservedHotel.roomOfferDetail.detail.wifi}
                  </small>
                </div>
              ) : null}

              {reservedHotel.roomOfferDetail.detail.bed ? (
                <div className="flex gap-1.5 p-2">
                  <BedIcon className="w-6 h-5"></BedIcon>
                  <small className="font-medium p-0.5 text-gray-500">
                    {reservedHotel.roomOfferDetail.detail.bed}
                  </small>
                </div>
              ) : null}

              {reservedHotel.roomOfferDetail.detail.smokingCheck ? (
                <div className="flex gap-1.5 p-2">
                  <SmokingBanIcon className="w-6 h-7"></SmokingBanIcon>
                  <small className="font-medium p-0.5 text-gray-500">
                    {reservedHotel.roomOfferDetail.detail.smokingCheck}
                  </small>
                </div>
              ) : null}

              {reservedHotel.roomOfferDetail.detail.airConditioning ? (
                <div className="flex gap-1.5 p-2">
                  <SnowFlakeIcon className="w-6 h-7"></SnowFlakeIcon>
                  <small className="font-medium p-0.5 text-gray-500">
                    Air Conditioning
                  </small>
                </div>
              ) : null}

              {reservedHotel.roomOfferDetail.detail.hasWindow ? (
                <div className="flex gap-1.5 p-2">
                  <CheckIcon className="w-6 h-7"></CheckIcon>
                  <small className="font-medium p-0.5 text-gray-500">
                    Has Windows
                  </small>
                </div>
              ) : null}
            </div>
            <div className="p-3.5 bg-white rounded">
              <p className="font-bold text-gray-700 pb-2">Price Summary</p>
              <div className="flex justify-between px-2 pb-1">
                <small className="text-gray-500 p-0.5">1 room x 7 nights</small>
                <h5 className="">US$ 952.20</h5>
              </div>
              <div className="flex justify-between px-2 pb-1">
                <small className="text-gray-500 p-0.5">
                  {reservedHotel.price.vat}% VAT
                </small>
                <h5 className="">US$ 142.20</h5>
              </div>
              <div className="flex justify-between px-2 pb-1">
                <small className="text-gray-500 p-0.5">
                  {reservedHotel.price.cityTax}% City tax
                </small>
                <h5 className="font-semibold">US$ 95.20</h5>
              </div>
              <div className="flex justify-between px-2 py-2">
                <h5 className="font-black">Total</h5>
                <h5 className="font-semibold text-base">US$ 1,190.00</h5>
              </div>
            </div>
            <div className="p-3.5 bg-white rounded">
              <p className="font-bold text-gray-700 pb-2">Cancellation</p>
              <small className="text-green-500">
                Free cancellation until 23:59 on Dec 10
              </small>
              <div className="flex justify-between pb-1">
                <small className="text-gray-500 p-0.5">
                  From 00:00 on Dec 11
                </small>
                <h5 className="font-semibold text-base">US$ 95.20</h5>
              </div>
            </div>
            <div className="p-3.5 bg-white rounded">
              <p className="font-bold text-gray-700 pb-2">The fine print</p>
              <p className="font-light font-sans pb-2">
                In response to Coronavirus (COVID-19), additional safety and
                sanitation measures are currently in effect at this property.
              </p>
              <p className="font-light font-sans pb-2">
                Spa and gym facilities at this property are unavailable due to
                Coronavirus (COVID-19).
              </p>
              <p className="font-light font-sans pb-2">
                Due to Coronavirus (COVID-19), this property adheres to strict
                physical distancing measures.
              </p>
              <p className="font-light font-sans pb-2">
                Due to Coronavirus (COVID-19), wearing a face mask is mandatory
                in all indoor common areas.
              </p>
              <p className="font-light font-sans pb-2">
                Please inform Ethiopian Skylight Hotel in advance of your
                expected arrival time. You can use the Special Requests box when
                booking, or contact the property directly with the contact
                details provided in your confirmation.
              </p>
            </div>
          </div>
          <div className="w-2/3 flex flex-col md:gap-6">
            <div className="bg-white rounded p-4">
              <div className="flex p-2 gap-2">
                <ThumbsUp className="w-6 h-5" />
                <span className="font-bold">
                  Well done! You've chosen the best price available at this
                  hotel.
                </span>
              </div>
              <div className="flex p-2 gap-2">
                <ClipBoardIcon className="w-6 h-5" />
                <span>Booking takes just 2 minutes!</span>
              </div>
            </div>
            <div className="bg-white rounded p-4">
              <div className="flex p-2 gap-2">
                <CheckIcon className="w-6 h-5" />
                <span>
                  This property is in a good location. Guests have rated it 8.7!
                </span>
              </div>
              <div className="flex p-2 gap-2">
                <CheckIcon className="w-6 h-5" />
                <span>One of our top picks in Addis Ababa</span>
              </div>
              <div className="flex p-2 gap-2">
                <CheckIcon className="w-6 h-5" />
                <span style={{ color: '#0D8B21' }}>
                  FREE cancellation before 23:59 on 10 December 2020
                </span>
              </div>
            </div>

            <HotelReserveForm />

            <div className="bg-gray-100">
              <div className="flex p-2 gap-2">
                <ChevronLeftIcon className="w-8 h-8"></ChevronLeftIcon>
                <span className="font-bold text-blue-400 py-1">
                  Change selection
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelReserve;
