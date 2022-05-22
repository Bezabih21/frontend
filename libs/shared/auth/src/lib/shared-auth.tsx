import React from 'react';
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom';
import { useAuthState } from './contexts/auth/context';
import AccountPage from './features/auth/pages/account';
import './shared-auth.module.scss';

/* eslint-disable-next-line */
export interface SharedAuthProps {}

export const AuthenticatedRoute = ({ component, ...rest }) => {
  const auth = useAuthState();
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={() =>
        auth.token ? (
          component
        ) : (
          <Redirect
            to={{
              pathname: '/account/login',
              state: { from: location.pathname },
            }}
          />
        )
      }
    ></Route>
  );
};

export const GuestRoute = ({ component, ...rest }) => {
  const { token } = useAuthState();
  return (
    <Route
      {...rest}
      render={() =>
        !token ? (
          <div>{component}</div>
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    ></Route>
  );
};

export function SharedAuth(props: SharedAuthProps) {
  return <GuestRoute path="/account" component={<AccountPage />} />;
}

export default SharedAuth;
