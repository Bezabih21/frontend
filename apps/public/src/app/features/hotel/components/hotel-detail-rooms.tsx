import React from 'react';
import { Room, SearchedHotelDetail } from '../../../models/hotel-detail';
import HotelDetailRoom from './hotel-detail-room';

export interface HotelDetailRoomsProps {
  rooms: any;
  hotel: any;
  searchedHotel: SearchedHotelDetail;
}

function HotelDetailRooms(props: HotelDetailRoomsProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {props?.rooms?.map((roomSet: Room, index) => {
        return (
          <HotelDetailRoom
            roomDetail={roomSet}
            searchedHotelDetail={props?.searchedHotel}
            // hotel={props?.hotel}
            key={`${index}`}
          ></HotelDetailRoom>
        );
      })}
    </div>
  );
}

export default HotelDetailRooms;
