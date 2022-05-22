import { environment } from '@eltnt/shared-components';

export const HotelEndpoints = {
  getAllHotels: `${environment.urls.api}/PublicHotels/getSearchedRooms`,
  getHotelDetail: `${environment.urls.api}/PublicHotels/getSelectedRoom`,
  reserveRoom: `${environment.urls.booking_api}/ReserveRoom`,
};
