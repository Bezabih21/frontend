import { httpService } from '@eltnt/core';
import { HotelQuery } from '../../../models/hotel.query';
import { HotelEndpoints } from './hotel.endpoints';

export const getAllHotelsApi = (query: HotelQuery) => {
  const params = {
    city: query.CityCode,
    currency: 0,
    dailyPriceFrom: query.DailyPriceFrom,
    dailyPriceTo: query.DailyPriceTo,
    starRatingFrom: query.StarRatingFrom,
    starRatingTo: query.StarRatingTo,
    dateFrom: query.CheckInDate,
    dateTo: query.CheckOutDate,
  };

  return httpService
    .post(`${HotelEndpoints.getAllHotels}`, params)
    .then((response) => {
      return response.data;
    });
};

export const reserveRoomApi = (query: any) => {
  const params = {
    // city: query.CityCode,
    // adultQuantity: query.Adults,
    // roomQuantity: query.RoomQuantity,
    // startDate: format(query.CheckInDate, 'MM/DD/YYYY'),
    // endDate: format(query.CheckOutDate, 'MM/DD/YYYY'),
  };
  return httpService
    .post(`${HotelEndpoints.reserveRoom}`, {
      roomId: query.roomId,
      firstName: query.firstName,
      lastName: query.lastName,
      email: query.email,
      country: query.country,
      phoneNumber: query.phoneNumber,
      isForMyself: query.forSelf,
      wantToBookTaxi: query.bookTaxi,
      interestedInRentingCar: query.rentCar,
      smokingRoomPrefered: query.smokingStatus,
      specialRequest: query.otherRequests,
      startDate: query.startDate,
      endDate: query.endDate,
      freeCancelationBefore: query.freeCancellation,
      unitPrice: query.unitPrice,
    })
    .then((response) => {
      return response.data;
    });
};

export const getHotelDetailApi = (query: string, hotelQuery: any) => {
  const params = {
    hotelId: query,
    roomId: hotelQuery.roomId,
    days: hotelQuery.days,
  };
  return httpService
    .get(`${HotelEndpoints.getHotelDetail}`, {
      params: { ...params },
    })
    .then((response) => {
      return response.data;
    });
};
