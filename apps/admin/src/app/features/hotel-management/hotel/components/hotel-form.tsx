import { ArrowLeftOutlined } from '@ant-design/icons';
import { HotelFormSteps } from '@eltnt/shared-components';
import React from 'react';
import { useHistory } from 'react-router-dom';
function HotelForm() {
  const history = useHistory();
  return (
    <div className="p-4 flex flex-col gap-12">
      <div className="flex font-bold gap-2 text-2xl">
        <ArrowLeftOutlined
          onClick={() => history.push('/hotels')}
          className="py-1"
        />
        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
          Create New Hotel / Property
        </span>
      </div>
      <HotelFormSteps />
    </div>
  );
}

export default HotelForm;
