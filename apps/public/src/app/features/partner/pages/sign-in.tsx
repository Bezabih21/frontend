import React from 'react';
import LoginForm from '../components/login-form';
import PageContainer from '../components/page-container';

function SignIn() {
  return (
    <PageContainer
      pageTitle={
        <h5 className="text-left text-2xl font-bold">Welcome back, </h5>
      }
      pageParagraph="Sign in to manage your property, listings, reservations and much more"
      img="../../../../assets/images/Illustration/2.svg"
      formTitle="Sign in to your account"
      form={<LoginForm />}
    />
  );
}

export default SignIn;
