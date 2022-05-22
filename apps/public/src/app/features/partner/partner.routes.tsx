import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from '../../components/scroll-to-top';
import TopNavigation from './components/top-navigation';
import AddHotel from './pages/add-hotel';
import Conformation from './pages/conformation';
import CreatePassword from './pages/create-password';
import GettingStart from './pages/getting-start';
import PartnerRegistration from './pages/partner-registration';
import SignIn from './pages/sign-in';

export const PartnerRoutes = () => {
  const getNavigation = (linkText, btnText, btnUrl) => {
    return (
      <TopNavigation
        linkText={linkText}
        btnText={btnText}
        btnUrl={btnUrl}
      ></TopNavigation>
    );
  };
  return (
    <ScrollToTop>
      <Switch>
        <Route path="/partner/sign-up" exact>
          {getNavigation('Already a partner?', 'Sign in', '/partner/sign-in')}
          <PartnerRegistration />
        </Route>
        <Route path="/partner/sign-in" exact>
          {getNavigation(
            'Don’t have account yet?',
            'Sign up',
            '/partner/sign-up'
          )}
          <SignIn />
        </Route>
        <Route path="/partner/create-password" exact>
          {getNavigation(
            'Already have an account?',
            'Sign in',
            '/partner/sign-in'
          )}
          <CreatePassword />
        </Route>
        <Route path="/partner/conformation" exact>
          {getNavigation(
            'Already have an account?',
            'Sign in',
            '/partner/sign-in'
          )}
          <Conformation />
        </Route>
        <Route path="/partner/getting-start" exact>
          {getNavigation(
            'Don’t have account yet?',
            'Sign up',
            '/partner/sign-up'
          )}
          <GettingStart />
        </Route>
        <Route path="/partner/add-hotel" exact>
          {getNavigation('Already a partner?', 'Sign in', '/partner/sign-in')}
          <AddHotel />
        </Route>
      </Switch>
    </ScrollToTop>
  );
};
