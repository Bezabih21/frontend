import React from 'react';
import {
  Redirect,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import login_image_2 from '../../../assets/images/login-1.jpg';
import login_image from '../../../assets/images/login.jpg';
import ConfirmationPage from '../components/Confirmation';
import ForgotPassword from '../components/ForgotPassword';
import { LoginPage } from '../components/Login';
import ResetPassword from '../components/ResetPassword';
import './account.scss';

function AccountPage() {
  const { path, url } = useRouteMatch();
  const location = useLocation();

  return (
    <div className="flex w-full h-screen" style={{ minHeight: '600px' }}>
      <div className="hidden md:block" style={{ maxWidth: '450px' }}>
        <div className="overlay-container h-full">
          <div className="overlay login-1-bg">
            <img
              alt=""
              src={
                location.pathname === '/account/login'
                  ? login_image
                  : login_image_2
              }
              style={{ height: '100vh' }}
            />
          </div>

          <div className="overlay left-grad">
            <div
              className="flex flex-col justify-end h-full text-white p-6 pb-20"
              style={{ fontFamily: 'Inter' }}
            >
              <div className="caption-lg mb-6">
                Making Travel <br />
                Easier
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-3/5 bg-white flex flex-grow justify-center items-center">
        <div className="flex flex-col h-full justify-center w-2/3 md:w-2/3 lg:w-1/3 relative">
          <div>
            <div className="flex justify-center">
              <span className="text-primary-500 text-6xl font-semibold">
                Eltnt
              </span>
            </div>

            <Switch>
              <Route exact path={`${path}/`}>
                <Redirect to={`${path}/login`} />
              </Route>
              <Route exact path={`${path}/login`}>
                <LoginPage />
              </Route>
              <Route exact path={`${path}/activate/:id/:token`}>
                <ConfirmationPage />
              </Route>
              <Route exact path={`${path}/forgot`}>
                <ForgotPassword />
              </Route>
              <Route exact path={`${path}/forgotPassword/:id/:token`}>
                <ResetPassword />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
