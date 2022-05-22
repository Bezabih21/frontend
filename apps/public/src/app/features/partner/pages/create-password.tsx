import React from 'react';
import CreatePasswordForm from '../components/create-password-form';
import PageContainer from '../components/page-container';

function CreatePassword() {
  return (
    <PageContainer
      pageTitle={
        <h5 className="text-left text-2xl font-bold">
          List your<a className="text-blue-500"> Car Rental </a>on Eltnt.com
        </h5>
      }
      pageParagraph="Register in minutes and start increasing your income! - get started today!"
      img="../../../../assets/images/Illustration/3.svg"
      formTitle="Create Password"
      formSubTitle="Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers."
      form={<CreatePasswordForm />}
    />
  );
}

export default CreatePassword;
