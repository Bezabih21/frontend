import PlusSVG from 'apps/admin/src/app/icons/plus.svg';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
function AddRoomCard() {
  const [urlId] = useState(useParams);
  const history = useHistory();
  return (
    <div
      className="bg-primary-500 shadow-2xl rounded-2xl p-14 flex flex-col gap-7"
      onClick={() => history.push(`../${urlId.id}/add/room-pricing`)}
      style={{ cursor: 'pointer' }}
    >
      <div className="px-10 flex flex-col items-center">
        <div>
          <PlusSVG />
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <small className="text-center text-white">Add Another Room</small>
      </div>
    </div>
  );
}

export default AddRoomCard;
