import { Button } from 'antd';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import { getHotelRoomInfo } from '../../api/hotel.api';
import AddRoomCard from './add-room-card';
import FooterLayOut from './footer-layout';
import RoomCard from './room-card';

function NonEmptyRoom({ rooms }) {
  const [urlId] = useState(useParams);
  const history = useHistory();
  const backBtn = (
    <a
      className="bg-white py-2 rounded px-4"
      onClick={() => history.push('./edit-hotel')}
    >
      Back
    </a>
  );
  const nextBtn = (
    <Button
      type="primary"
      onClick={() => history.push('./facilities-services')}
    >
      Continue
    </Button>
  );
  return (
    <div>
      <div className="bg-white p-20">
        <div className="flex justify-items-start gap-12">
          {rooms.map((room, r) => r < 3 && <RoomCard key={r} room={room} />)}
          <AddRoomCard />
        </div>
      </div>
      <FooterLayOut backBtn={backBtn} nextBtn={nextBtn} />
    </div>
  );
}

export default NonEmptyRoom;
