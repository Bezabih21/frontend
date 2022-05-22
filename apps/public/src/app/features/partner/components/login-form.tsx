import { Button, Form, Input } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  const history = useHistory();
  return (
    <Form layout="vertical">
      <Form.Item label="Email Address">
        <Input placeholder="Email Address" required />
      </Form.Item>
      <Form.Item label="Password">
        <Input placeholder="Password" type="password" required />
      </Form.Item>
      <Form.Item className="py-3">
        <Button
          className="bg-primary-500 rounded text-white w-full"
          onClick={() => history.push('../partner/getting-start')}
        >
          Sign in
        </Button>
      </Form.Item>
      <div className="text-right">
        <a
          className="text-blue-400"
          onClick={() => history.push('partner/forgot-password')}
        >
          Forgot password?
        </a>
      </div>

      <div className="text-center p-2 flex flex-col gap-2">
        <small className="text-gray-300">
          All rights reserved. Copyright ({new Date().getFullYear()}) –
          Eltnt.com™
        </small>
      </div>
    </Form>
  );
}

export default LoginForm;
