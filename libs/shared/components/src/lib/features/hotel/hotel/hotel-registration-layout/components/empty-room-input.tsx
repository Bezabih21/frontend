import { AlertService } from '@eltnt/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getHotelRoomsApi } from '../../../api/hotel.api';

function EmptyRoomInput() {
  const [urlId] = useState(useParams);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (urlId.id !== undefined && urlId.id !== null) {
      setIsLoading(true);
      getHotelRoomsApi(urlId.id)
        .then((result: any) => {
          if (result) {
            if (result.length !== 0) {
              history.push('../room-pricing');
            }
          }
        })
        .catch((e) => {
          new AlertService().error(e.message);
          setIsLoading(false);
        });
    }
  }, []);
  return (
    <div className="bg-white p-20">
      <div className="items-center flex flex-col gap-4">
        <img
          src="../../../../../assets/images/Room.png"
          style={{ width: '100px' }}
        />
        <small className="text-gray-500 font-bold text-sm">
          No room has been added to your property.
        </small>
        <div>
          <a
            className="bg-primary-500 hover:text-gray-200 px-4 py-2 rounded text-white"
            onClick={() => history.push(`../../${urlId.id}/add/room-pricing`)}
          >
            Add Room
          </a>
        </div>
      </div>
    </div>
  );
}

export default EmptyRoomInput;
