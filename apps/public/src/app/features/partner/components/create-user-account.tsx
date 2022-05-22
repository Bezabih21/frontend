import { Button, Form, Input } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

function CreateUserAccountForm() {
  const history = useHistory();
  return (
    <Form layout="vertical">
      <Form.Item label="Email Address">
        <Input placeholder="First Name" required />
      </Form.Item>
      <Form.Item className="py-3">
        <Button
          className="bg-primary-500 rounded text-white"
          onClick={() => history.push('/login')}
        >
          Continue
        </Button>
      </Form.Item>

      <div className="text-center p-2 flex flex-col gap-2">
        <small className="font-bold">- Or continue with -</small>
        <div className="flex justify-between">
          <i>Google</i>
          <i>facebook</i>
          <i>tweeter</i>
        </div>
        <small>
          By creating an account, you agree with our{' '}
          <a className="text-blue-500">Terms & Conditions</a> and{' '}
          <a className="text-blue-500">Privacy Statement</a>.
        </small>
        <small className="text-gray-300">
          All rights reserved. Copyright (2021) – Eltnt.com™
        </small>
      </div>
    </Form>
  );
}

export default CreateUserAccountForm;
