import { httpService } from '@eltnt/core';
import { ListQuery } from '../../../models/list.query';
import { HotelEndpoints } from './hotel.endpoints';

export const getAllHotels = (query: ListQuery) => {
  const params = {
    pageIndex: query.PageIndex,
  };
  console.log(params, query);

  return httpService
    .get(`${HotelEndpoints.getAllHotels}`, { params })
    .then((response) => {
      return response.data.items;
    });
};
export const saveHotelBasicInfoApi = (query: any) => {

  return httpService
    .post(`${HotelEndpoints.addBasicInfo}`, {
      name: query.hotelName,
      address: {
        city: query.city,
        state: query.country,
        country: query.country,
        street: query.street,
        addressLineTwo: query.addressLineTwo,
      },
      contactPerson: {
        name: query.contactFirstName + '' + query.contactLastName,
        email: query.contactEmail,
        phoneNumber: query.contactPhone,
      }
    })
    .then((response) => {
      return response.data;
    });
};
export const saveHotelRoomTypeApi = (query: any) => {
  console.log(query);
  return httpService
    .post(`${HotelEndpoints.addRoomType}`, {
      name: query.room_name,
      // roomType: query.room_type,
      // roomSize: query.room_size,
      // quantity: query.room_quantity,
      // price: query.price,
      //priceUnit: query.unit,
      //currency: query.currency,
      hotelId: "df48c036-0274-4067-a921-7daeb67be349"
    })
    .then((response) => {
      return response.data;
    });
};

export const getHotelBasicInfo = (id: number) => {
  return httpService
    .get(`${HotelEndpoints.getBasicInfo(id)}`)
    .then((response) => {
      return response.data;
    });
};
export const getHotelPhotos = (id: number) => {
  return httpService
    .get(`${HotelEndpoints.getHotelPhotos(id)}`)
    .then((response) => {
      return response.data;
    });
};
export const getHotelRoomInfo = (id: any) => {
  return httpService
    .get(`${HotelEndpoints.getRoomTypes(id)}`)
    .then((response) => {
      return response.data;
    });
};

export const updateHotelBasicInfoApi = (query: any) => {


  const payload = query;
  // console.log(payload);

  return httpService
    .post(`${HotelEndpoints.updateBasicInfo}`, { payload })
    .then((response) => {
      return response.data;
    });
};

export const getHotelRoomsApi = () => {
  return httpService.get(`${HotelEndpoints}`).then((response) => {
    return response.data;
  });
};
export const getFacilities = () => {
  return httpService.get(`${HotelEndpoints.getFacilities}`).then((response) => {
    return response.data;
  });
};

export const getTags = () => {
  return httpService.get(`${HotelEndpoints.getTags}`).then((response) => {
    return response.data;
  });
};
