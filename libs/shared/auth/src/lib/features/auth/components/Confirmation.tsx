import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { activateApi } from '../../../contexts/auth/apis/account.api';
import { formatErrorMessage } from '../../../util';

interface RouteParams {
  id: string;
  token: string;
}

const ConfirmationPage = (props: any) => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const { id, token } = useParams<RouteParams>();

  useEffect(() => {
    setLoading(true);
    setMessage('');

    activateApi(id, token).then(
      () => {
        setIsSuccess(true);
        setLoading(false);
      },
      (error) => {
        const resMessage = formatErrorMessage(error.data.message);

        setLoading(false);
        setIsSuccess(false);
        setMessage(resMessage);
      }
    );
  }, [id, token]);

  return (
    <>
      <div className="text-xl font-bold text-center my-6">Confirmation</div>
      {message ? (
        <div className="bg-red-200 border-red-500 p-6 text-red-800 my-3 text-center rounded">
          {message}
        </div>
      ) : null}

      {isSuccess ? <ConfirmationSuccess /> : null}
    </>
  );
};

export default ConfirmationPage;

function ConfirmationSuccess() {
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
        You can now use this email to login. We promise we won’t spam your email
        <span>
          <Link to={{ pathname: '/account/login' }}>
            <Button type="link">Sign in</Button>
          </Link>
        </span>
      </div>
    </>
  );
}
