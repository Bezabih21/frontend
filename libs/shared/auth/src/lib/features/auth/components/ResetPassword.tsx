import { Button, Form, Input } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { resetPasswordApi } from '../../../contexts/auth/apis/account.api';
import { formatErrorMessage } from '../../../util';

interface RouteParams {
  id: string;
  token: string;
}

const ResetPassword = () => {
  const [registerForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const { id, token } = useParams<RouteParams>();

  const onPasswordReset = (values: any) => {
    const password = values.password;

    setLoading(true);
    setIsSuccess(false);

    resetPasswordApi(id, token, password).then(
      () => {
        setIsSuccess(true);
      },
      (error) => {
        const resMessage = formatErrorMessage(error);

        setLoading(false);
        setIsSuccess(false);
        setMessage(resMessage);
      }
    );
    setLoading(false);
    setIsSuccess(false);
  };

  return (
    <>
      {!isSuccess ? (
        <>
          <div className="text-xl font-bold my-6">Reset your password</div>

          <Form
            form={registerForm}
            layout="vertical"
            onFinish={onPasswordReset}
          >
            <div>
              <div className="mb-3">
                <FormItem
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
                    placeholder={'New Password'}
                    name="password"
                  />
                </FormItem>
              </div>

              <div className="mb-3">
                <FormItem
                  name="confirmPassword"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          'The two passwords that you entered do not match!'
                        );
                      },
                    }),
                  ]}
                >
                  <Input
                    type="password"
                    placeholder={'Confirm Password'}
                    name="confirmPassword"
                  />
                </FormItem>
              </div>

              {message ? (
                <div className="bg-red-200 border-red-500 p-6 text-red-800 my-3 text-center rounded">
                  {message}
                </div>
              ) : null}
            </div>

            <div>
              <Button
                type="primary"
                htmlType="submit"
                className="btn btn-primary w-full flex justify-center space-x-3"
              >
                {loading ? (
                  <svg
                    style={{ background: 'none', shapeRendering: 'auto' }}
                    width="16px"
                    height="16px"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="8"
                      r="42"
                      strokeDasharray="113.09733552923255 150"
                      transform="rotate(306.582 50 50)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        repeatCount="indefinite"
                        dur="1s"
                        values="0 50 50;360 50 50"
                        keyTimes="0;1"
                      >
                        <span>Reset Password</span>
                      </animateTransform>
                    </circle>
                  </svg>
                ) : null}
                <span>Reset Password</span>
              </Button>
            </div>
          </Form>
        </>
      ) : null}
      {isSuccess ? (
        <>
          <div className="flex justify-center my-3 mt-10">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM30 50C18.975 50 10 41.025 10 30C10 18.975 18.975 10 30 10C41.025 10 50 18.975 50 30C50 41.025 41.025 50 30 50ZM25 35.425L41.475 18.95L45 22.5L25 42.5L15 32.5L18.525 28.975L25 35.425Z"
                fill="#39DC77"
              />
            </svg>
          </div>

          <div className="flex justify-center text-lg text-black my-2">
            Success
          </div>
          <div className="text-center ">
            Your password have been reset successfully. You can now sign in with
            your new password.
          </div>
          <div className="text-center ">
            <span>
              <Link to={{ pathname: '/account/login' }}>
                <Button type="link">Sign in</Button>
              </Link>
            </span>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ResetPassword;
