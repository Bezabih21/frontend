import React, { useEffect, useState } from 'react';
import CreatePartnerAccountForm from '../components/create-partner-account-form';
import PageContainer from '../components/page-container';

function PartnerRegistration() {
  const textArray = ['Hotel', 'Car Rental', 'Tour and Travel'];
  const [textIndex, setTextIndex] = useState(0);
  useEffect(() => {
    let interval = null;
    let index = 0;
    interval = setInterval(() => {
      if (index >= textArray.length - 1) {
        index = 0;
      } else {
        index++;
      }

      setTextIndex(index);
    }, 5000);
  }, []);
  return (
    <PageContainer
      pageTitle={
        <h5 className="text-left text-2xl font-bold">
          List your<a className="text-blue-500"> {textArray[textIndex]} </a>on
          Eltnt.com
        </h5>
      }
      pageParagraph="Register in minutes and start increasing your income! - get started today!"
      img="../../../../assets/images/Illustration/1.svg"
      formTitle="Create a Partner Account"
      form={<CreatePartnerAccountForm />}
    />
  );
}

export default PartnerRegistration;
