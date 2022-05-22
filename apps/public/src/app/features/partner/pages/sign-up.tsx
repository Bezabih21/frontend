import React from 'react';
import CreateUserAccountForm from '../components/create-user-account';
import PageContainer from '../components/page-container';

function SignUp() {
  return (
    <PageContainer
      pageTitle={
        <h5 className="text-left text-2xl font-bold">
          user account form title goes here
        </h5>
      }
      pageParagraph="Register in minutes and start increasing your income! - get started today!"
      img="../../../../assets/images/Illustration/1.svg"
      formTitle="Create a Partner Account"
      form={<CreateUserAccountForm />}
    />
  );
}

export default SignUp;
