import { AlertService } from '@eltnt/core';
import Spin from 'antd/lib/spin';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { getHotelRoomsApi } from '../../../api/hotel.api';
import { RoomType } from '../../../models/hotel';
import NonEmptyRoom from './non-empty-room';

function RoomPricing() {
  const history = useHistory();
  const [urlId] = useState(useParams);
  const [showEmptyRoom, setShowEmptyRoom] = useState(true);
  const [rooms, setRooms] = useState<RoomType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (urlId.id !== undefined && urlId.id !== null) {
      setIsLoading(true);
      getHotelRoomsApi(urlId.id)
        .then((result: any) => {
          if (result) {
            if (result.length === 0) {
              history.push(result + 'empty/room-pricing');
            }
            setRooms(result);
            setIsLoading(false);
          }
        })
        .catch((e) => {
          new AlertService().error(e.message);
          setIsLoading(false);
        });
    }
  }, []);
  function RoomForm() {
    return (
      <div>
        <NonEmptyRoom rooms={rooms} />
      </div>
    );
  }

  return isLoading ? (
    <div className="w-full h-96 flex justify-center items-center">
      <Spin></Spin>
    </div>
  ) : (
    RoomForm()
  );
}

export default RoomPricing;
