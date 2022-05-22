import React from 'react';
import { UserIcon } from '../../../components/icons';
import HotelReservePaymentForm from './hotel-reserve-payment-form';
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
function HotelReservePayment() {
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
              <div className="body-container p-3.5 flex flex-col gap-2">
                <div className="hotel-info flex flex-col gap-2">
                  <p className="font-bold text-base text-gray-700">
                    {reservedHotel.hotelDetail.name}
                  </p>
                  <span style={{ fontWeight: 400, fontSize: 14 }}>
                    Standard King Room
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="flex flex-col">
                    <span style={{ fontWeight: 600, fontSize: 14 }}>
                      Dec 12, 2020
                    </span>
                    <small>Check in</small>
                  </span>
                  <span className="flex flex-col">
                    <span style={{ fontWeight: 600, fontSize: 14 }}>
                      Dec 19, 2020
                    </span>
                    <small>Check out</small>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ fontWeight: 600, fontSize: 14 }}>
                    1 Room(s)
                  </span>
                  <span style={{ fontWeight: 600, fontSize: 14 }}>
                    7 Night(s)
                  </span>
                </div>
              </div>
            </div>
            <div className="p-3.5 bg-white rounded">
              <div className="flex gap-2">
                <UserIcon className="w-6 h-5"></UserIcon>
                <div className="flex flex-col gap-2">
                  <span>Grinder / Stephen</span>
                  <span>718-643-5494</span>
                  <span>Stephen.grind@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <HotelReservePaymentForm />
        </div>
      </div>
    </div>
  );
}

export default HotelReservePayment;
