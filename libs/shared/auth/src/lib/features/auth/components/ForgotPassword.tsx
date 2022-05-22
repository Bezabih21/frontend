import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { forgotPasswordApi } from '../../../contexts/auth/apis/account.api';
import { formatErrorMessage } from '../../../util';

const ForgotPassword = (props: any) => {
  const [forgotPasswordForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onConfirm = (values: any) => {
    setLoading(true);
    setMessage('');
    forgotPasswordApi(values.email).then(
      () => {
        setIsSuccess(true);
      },
      (error) => {
        const resMessage = formatErrorMessage(error.data.message);

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      <div className="text-xl font-bold text-center my-6">Forgot password </div>

      {!isSuccess ? (
        <>
          <Form
            form={forgotPasswordForm}
            layout="vertical"
            onFinish={onConfirm}
          >
            <div className="mb-3">
              <Form.Item name="email">
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder={'Email'}
                  name="email"
                />
              </Form.Item>
            </div>

            {message ? (
              <div className="bg-red-200 border-red-500 p-6 text-red-800 my-3 text-center rounded">
                {message}
              </div>
            ) : null}

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
                      ></animateTransform>
                    </circle>
                  </svg>
                ) : null}
                <span>Send Verification code </span>
              </Button>
            </div>
          </Form>

          <div className="absolute bottom-0 text-center pb-10 w-full">
            <span>Do you remember your account?</span>
            <Link to={{ pathname: '/account/login' }}>
              <Button className="-mr-2" type="link">
                Sign in
              </Button>
            </Link>
          </div>
        </>
      ) : null}

      {isSuccess ? (
        <SendVerificationSuccess
          email={forgotPasswordForm.getFieldValue('email')}
        />
      ) : null}
    </>
  );
};

export default ForgotPassword;

function SendVerificationSuccess(props: any) {
  return (
    <>
      <div className="flex justify-center my-3">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 45C13.975 45 5 36.025 5 25C5 13.975 13.975 5 25 5C36.025 5 45 13.975 45 25C45 36.025 36.025 45 25 45ZM20 30.425L36.475 13.95L40 17.5L20 37.5L10 27.5L13.525 23.975L20 30.425Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="25"
              y1="0"
              x2="25"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5825C6" />
              <stop offset="1" stopColor="#5345D3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex justify-center text-lg text-black my-2">
        Successful
      </div>

      <div className="text-center ">
        We sent a reset password link to
        <span className="font-semibold">{props.email}</span>, Please follow the
        link on the email
      </div>
    </>
  );
}
