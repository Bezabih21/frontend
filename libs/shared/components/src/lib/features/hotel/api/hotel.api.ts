import { httpService } from '@eltnt/core';
import { ListQuery } from '../models/list.query';
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
      starRate: query.starRating,
      address: {
        city: query.city,
        state: query.country,
        country: query.country,
        street: query.street,
        addressLineOne: query.addressLineOne,
        addressLineTwo: query.addressLineTwo,
      },
      contactPerson: {
        firstName: query.contactFirstName,
        lastName: query.contactLastName,
        email: query.contactEmail,
        phoneNumber: query.contactPhone,
      }
    })
    .then((response) => {
      return response.data;
    });
};
export const updateHotelBasicInfoApi = (query: any) => {
  return httpService
    .put(`${HotelEndpoints.updateBasicInfo(query.id)}`, {
      name: query.hotelName,
      id: query.id,
      starRate: query.starRating,
      address: {
        city: query.city,
        state: query.country,
        country: query.country,
        addressLineOne: query.addressLineOne,
        addressLineTwo: query.addressLineTwo,
      },
      contactPerson: {
        firstName: query.contactFirstName,
        lastName: query.contactLastName,
        email: query.contactEmail,
        phoneNumber: query.contactPhone,
      }

    })
    .then((response) => {
      return response.data;
    });
};
export const getHotelBasicInfo = (id: any) => {
  return httpService
    .get(`${HotelEndpoints.getBasicInfo(id)}`)
    .then((response) => {
      return response.data;
    });
};
export const saveHotelRoomTypeApi = (query: any) => {
  return httpService
    .post(`${HotelEndpoints.addRoomType}`, {
      name: query.room_name,
      roomType: query.room_type,
      roomSize: query.room_size,
      quantity: query.room_quantity,
      price: query.price,
      priceUnit: query.unit,
      currency: query.currency,
      hotelId: query.hotelId
    })
    .then((response) => {
      return response.data;
    });
};
export const updateHotelRoomTypeApi = (query: any) => {
  return httpService
    .put(`${HotelEndpoints.updateRoomType(query.id)}`, {
      id: query.id,
      name: query.room_name,
      roomType: query.room_type,
      roomSize: query.room_size,
      quantity: query.room_quantity,
      price: query.price,
      priceUnit: query.unit,
      currency: query.currency,
    })
    .then((response) => {
      return response.data;
    });
};

export const deleteHotelRoomTypeApi = (id: any) => {
  return httpService
    .delete(`${HotelEndpoints.deleteRoomType(id)}`)
    .then((response) => {
      return response.data;
    });
};

export const getHotelRoomInfo = (id: any) => {
  return httpService
    .get(`${HotelEndpoints.getRoomTypeById(id)}`)
    .then((response) => {
      return response;
    });
};
export const getHotelRoomsApi = (id: any) => {
  return httpService.get(`${HotelEndpoints.getRoomTypes(id)}`).then((response) => {
    return response.data.items;
  });
};
export const updateHotelFacilities = (query: any) => {
  return httpService
    .put(`${HotelEndpoints.updateHotelFacilities(query.id)}`,
      {
        id: query.id,
        parking: {
          availableToGuest: query.breakfastAvailable,
          reservationNeeded: query.parkingReserve,
          parkingType: query.parkingType,
          parkingLocation: query.parkingLocation,
          price: query.parkingPrice,
          priceUnit: 1,
          currency: query.currency
        },
        breakfast: {
          availableToGuest: query.breakfastAvailable,
          price: query.breakfastPrice,
          priceUnit: 1,
          currency: query.currency,
        },
        language: query.language,
        breakFastAvailable: query.language,
        provideExtraBed: query.extraBed
      }
    )
    .then((response) => {
      return response.data;
    });
};

export const addHotelBenefits = (query: any) => {
  return httpService.put(`${HotelEndpoints.updateHotelBenefits(query.id)}`,
    {
      id: query.id,
      benefits: query.benefits
    })
    .then((response) => {
      return response.data
    })
}
export const getPopularFacilities = (query: ListQuery) => {
  const params = {
    pageIndex: query.PageIndex,
  };
  return httpService.get(`${HotelEndpoints.getPopularFacilities}`, { params }).then((response) => {
    return response.data;
  });
};

export const getPopularAminities = (query: ListQuery) => {
  const params = {
    pageIndex: query.PageIndex,
  };
  return httpService.get(`${HotelEndpoints.getPopularAminities}`, { params }).then((response) => {
    return response.data;
  });
};

export const getAminities = (query: ListQuery) => {
  const params = {
    pageIndex: query.PageIndex,
  };
  return httpService.get(`${HotelEndpoints.getAminities}`, { params }).then((response) => {
    return response.data;
  });
};

export const getHotelPolicies = (id: any) => {
  return httpService
    .get(`${HotelEndpoints.getHotelPolicies(id)}`)
    .then((response) => {
      return response.data;
    });
};

export const updateHotelPolicies = (query: any) => {
  return httpService
    .put(`${HotelEndpoints.updateHotelPolicies(query.id)}`,
      {
        id: query.id,
        checkinFrom: query.checkInFrom,
        checkinTo: query.checkInTo,
        checkOutFrom: query.checkOutFrom,
        checkOutTo: query.checkOutTo,
        cancellationDays: query.cancellationDay,
        enableAccidentalBooking: query.accidentalBookingProtection,
        childrenAccommodation: query.accommodateChildren,
        allowPets: query.allowPets,
        haveChargeForPets: query.additionalCharges
      }
    )
    .then((response) => {
      return response.data;
    });
};
export const addHotelPolicies = (query: any) => {
  return httpService
    .post(`${HotelEndpoints.addHotelPolicies}`,
      {
        hotelId: query.hotelId,
        checkinFrom: query.checkInFrom,
        checkinTo: query.checkInTo,
        checkOutFrom: query.checkOutFrom,
        checkOutTo: query.checkOutTo,
        cancellationDays: query.cancellationDay,
        enableAccidentalBooking: query.accidentalBookingProtection,
        childrenAccommodation: query.accommodateChildren,
        allowPets: query.allowPets,
        haveChargeForPets: query.additionalCharges
      }
    )
    .then((response) => {
      return response.data;
    });
};

export const getHotelPayments = (id: any) => {
  return httpService
    .get(`${HotelEndpoints.getHotelPayments(id)}`)
    .then((response) => {
      return response.data;
    });
};

export const addHotelPayments = (query: any) => {
  return httpService
    .post(`${HotelEndpoints.addHotelPayments}`,
      {
        hotelId: query.hotelId,
        chargeCreditCards: query.chargeCreditCards,
        paymentMethods: query.paymentOption,
        legalCompanyName: query.legalCompany,
        recipientCountry: query.recipientCountry,
        recipientCity: query.recipientCity,
        recipientStreetAddress: query.recipientStreet,
      }
    )
    .then((response) => {
      return response.data;
    });
};

export const updateHotelPayments = (query: any) => {

  return httpService
    .put(`${HotelEndpoints.updateHotelPayments(query.id)}`,
      {
        id: query.id,
        chargeCreditCards: query.chargeCreditCards,
        paymentMethods: query.paymentOption,
        legalCompanyName: query.legalCompany,
        recipientCountry: query.recipientCountry,
        recipientCity: query.recipientCity,
        recipientStreetAddress: query.recipientStreet,
      }
    )
    .then((response) => {
      return response.data;
    });
};

export const getPaymentOptions = (query?: ListQuery) => {
  const params = {
    // pageIndex: query.PageIndex,
  };
  console.log(params, query);

  return httpService
    .get(`${HotelEndpoints.getPaymentOptions}`, { params })
    .then((response) => {
      return response.data.items;
    });
};

export const uploadGallery = (query) => {
  let formData = new FormData();
  formData.append('HotelId', query.id);
  formData.append('RoomId', query.selectedRoom);

  for (var i = 0; i < query.tags.length; i++) {
    formData.append('tags', query.tags[i]);
  }
  formData.append('FormFile', query.photo);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      Accept: 'application/json',
      type: 'formData',
    },
  };
  return httpService
    .post(`${HotelEndpoints.uploadFile}`, formData, config)
    .then((response) => {
      return response.data;
    });
};

export const getHotelGallery = (id: any) => {
  return httpService
    .get(`${HotelEndpoints.getHotelGallery(id)}`)
    .then((response) => {
      return response.data;
    });
};

export const getImageByteArray = (id: any) => {
  return httpService
    .get(`${HotelEndpoints.getImageByteArray(id)}`)
    .then((response) => {
      return response.data;
    });
};


