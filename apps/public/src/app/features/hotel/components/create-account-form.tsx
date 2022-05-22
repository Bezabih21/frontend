import { Form, Input } from 'antd';
import React from 'react';

function CreateAccountForm() {
  return (
    <div className="px-24 rounded-md shadow-2xl">
      <div className="w-96">
        <div className="py-8">
          <h5 className="text-2xl font-bold text-center">
            Create a Partner Account
          </h5>
          <Form layout="vertical">
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
              We'll text a two-factor authentication code to this number when
              you sign in.
            </small>
            <Form.Item className="py-3">
              <a className="bg-primary-500 px-40 py-2.5 rounded text-white">
                Continue
              </a>
            </Form.Item>
            <small>
              By creating an account, you agree with our{' '}
              <a className="text-blue-500">Terms & Conditions</a> and{' '}
              <a className="text-blue-500">Privacy Statement</a>.
            </small>
          </Form>
          <div className="py-5 text-center">
            {' '}
            <small>
              All rights reserved. Copyright ({new Date().getFullYear()}) –
              Eltnt.com™
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountForm;
