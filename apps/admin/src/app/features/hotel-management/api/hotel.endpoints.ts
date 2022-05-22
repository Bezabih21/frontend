import { environment } from "@eltnt/shared-components";

export const HotelEndpoints = {
  getAllHotels: `${environment.urls.api}/Hotel`,
  addBasicInfo: `${environment.urls.api}/Hotel`,
  addRoomType: `${environment.urls.api}/Room`,
  getRoomTypes: (id) => `${environment.urls.api}/Room/${id}?HotelId=${id}`,
  updateBasicInfo: `${environment.urls.api}/hotels/updateBasicInfo`,
  getBasicInfo: (id) => `${environment.urls.api}/hotels/${id}`,
  getHotelPhotos: (id) => `${environment.urls.api}/hotels/${id}`,
  getFacilities: `${environment.urls.api}/facilities`,
  getTags: `${environment.urls.api}/tags`,
};
