import { AlertService } from '@eltnt/core';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../../contexts/auth/actions';
import { useAuthDispatch, useAuthState } from '../../../contexts/auth/context';

export const alert = new AlertService();

export const LoginPage = () => {
  const [loginForm] = Form.useForm();
  const authState = useAuthState();
  const dispatch = useAuthDispatch();

  const onLogin = (values) => {
    loginUser(dispatch, {
      username: values.username,
      password: values.password,
    });
  };

  return (
    <>
      <div className="text-xl font-bold my-6">Welcome back to Eltnt ! Sign In </div>

      <Form form={loginForm} layout="vertical" onFinish={onLogin}>
        <div>
          <div className="">
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Input
                type="text"
                autoComplete="username"
                placeholder={'Username'}
                name="username"
              />
            </Form.Item>
          </div>

          <div className="">
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'This field is required',
                },
              ]}
            >
              <Input
                type="password"
                placeholder={'Password'}
                autoComplete="current-password"
              />
            </Form.Item>
          </div>

          {authState.errorMessage ? (
            <div className="bg-red-200 border-red-500 p-6 text-red-800 my-3 text-center rounded">
              {authState.errorMessage}
            </div>
          ) : null}

          <div>
            <Button
              loading={authState.loading}
              type="primary"
              className="w-full"
              htmlType="submit"
            >
              Login
            </Button>
          </div>

          <div className="my-3">
            <Link
              className="text-primary-500"
              to={{ pathname: '/account/forgot' }}
            >
              <Button type="link" style={{ marginLeft: -15 }}>
                Forgot password?{' '}
              </Button>
            </Link>
          </div>
        </div>
      </Form>
    </>
  );
};
