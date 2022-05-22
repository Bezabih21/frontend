import React, { useState } from 'react';
import { useParams } from 'react-router';
import AddRoomTypeForm from '../components/add-room-type-form';

function UpdateRoomType() {
  const [urlId] = useState(useParams);
  return (
    <div>
      <AddRoomTypeForm roomId={urlId} />
    </div>
  );
}

export default UpdateRoomType;
