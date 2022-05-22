import { Button, Form, Input } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

function CreatePartnerAccountForm() {
  const history = useHistory();
  return (
    <Form className="partner-form" layout="vertical">
      <Form.Item label="First Name">
        <Input placeholder="First Name" required />
      </Form.Item>

      <Form.Item label="Last Name">
        <Input placeholder="Last Name" required />
      </Form.Item>

      <Form.Item label="Email Address">
        <Input placeholder="First Name" required />
      </Form.Item>
      <Form.Item label="Phone Number">
        <Input placeholder="Phone Number" required />
      </Form.Item>
      <small className="pb-5">
        We'll text a two-factor authentication code to this number when you sign
        in.
      </small>
      <Form.Item className="py-3">
        <Button
          className="bg-primary-500 rounded text-white w-full"
          onClick={() => history.push('../partner/sign-in')}
        >
          Continue
        </Button>
      </Form.Item>
      <div className="text-center p-2 flex flex-col gap-2">
        <small>
          By creating an account, you agree with our{' '}
          <a className="text-blue-500">Terms & Conditions</a> and{' '}
          <a className="text-blue-500">Privacy Statement</a>.
        </small>
        <small className="text-gray-300">
          All rights reserved. Copyright ({new Date().getFullYear()}) –
          Eltnt.com™
        </small>
      </div>
    </Form>
  );
}

export default CreatePartnerAccountForm;
