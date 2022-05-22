import React from 'react';
import ConformationForm from '../components/conformation-form';
import PageContainer from '../components/page-container';

function Conformation() {
  return (
    <PageContainer
      pageTitle={<h5 className="text-left text-2xl font-bold">Welcome,</h5>}
      pageParagraph="Register now for easy booking, deal notifications and much more."
      img="../../../../assets/images/Illustration/3.svg"
      form={<ConformationForm />}
    />
  );
}

export default Conformation;
