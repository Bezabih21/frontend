import { environment } from "@eltnt/shared-components";

export const HotelEndpoints = {
  getAllHotels: `${environment.urls.api}/Hotel`,
  addBasicInfo: `${environment.urls.api}/Hotel`,
  updateBasicInfo: (id) => `${environment.urls.api}/Hotel/${id}`,
  getBasicInfo: (id) => `${environment.urls.api}/Hotel/getById/${id}`,
  addRoomType: `${environment.urls.api}/Room`,
  updateRoomType: (id) => `${environment.urls.api}/Room/${id}`,
  deleteRoomType: (id) => `${environment.urls.api}/Room/${id}`,
  getRoomTypes: (id) => `${environment.urls.api}/Room?HotelId=${id}`,
  getRoomTypeById: (id) => `${environment.urls.api}/Room/getByRoomId/${id}?Id=${id}`,
  getHotelPhotos: (id) => `${environment.urls.api}/hotels/${id}`,
  updateHotelFacilities: (id) => `${environment.urls.api}/Hotel/addHotelServices/${id}`,
  updateHotelBenefits: (id) => `${environment.urls.api}/Hotel/addHotelBenefits/${id}`,
  getPopularFacilities: `${environment.urls.api}/HotelBenefits/getPopularFacilities`,
  getPopularAminities: `${environment.urls.api}/HotelBenefits/getPopularAmenities`,
  getAminities: `${environment.urls.api}/HotelBenefits/getAmenities`,
  addHotelPolicies: `${environment.urls.api}/Policies`,
  getHotelPolicies: (id) => `${environment.urls.api}/Policies?HotelId=${id}`,
  updateHotelPolicies: (id) => `${environment.urls.api}/Policies/${id}`,
  addHotelPayments: `${environment.urls.api}/HotelPayments`,
  getHotelPayments: (id) => `${environment.urls.api}/HotelPayments?HotelId=${id}`,
  getPaymentOptions: `${environment.urls.api}/HotelPayments/getPaymentOptions`,
  updateHotelPayments: (id) => `${environment.urls.api}/HotelPayments`,
  uploadFile: `${environment.urls.api}/Gallery`,
  getHotelGallery: (id) => `${environment.urls.api}/Gallery/HotelId?HotelId=${id}`,
  getImageByteArray: (id) => `${environment.urls.api}/Gallery/getImage/${id}`,
};
