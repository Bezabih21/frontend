import React, { useState } from 'react';
import { useParams } from 'react-router';
import BasicInfoForm from '../components/basic-info';

function UpdateBasicInfo() {
  const [urlId] = useState(useParams);

  return (
    <div>
      <BasicInfoForm hotelId={urlId.id} />
    </div>
  );
}

export default UpdateBasicInfo;
