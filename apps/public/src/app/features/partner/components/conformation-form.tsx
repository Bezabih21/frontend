import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import GreenCheckSVG from '../../../components/icons/green-check.svg';

function ConformationForm() {
  const history = useHistory();
  return (
    <div className="pb-20">
      <div className="p-10 pl-40">
        <GreenCheckSVG />
      </div>
      <div className="flex flex-col gap-10">
        <div className="text-center">
          <h1 className="font-bold">Account Created Successfully!</h1>
        </div>
        <Button
          className="bg-primary-500 rounded text-white w-full"
          onClick={() => history.push('/')}
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  );
}

export default ConformationForm;
