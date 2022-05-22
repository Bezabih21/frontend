import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import {
  ExtendedStringifyOptions,
  QueryParamProvider,
  transformSearchStringJsonSafe,
} from 'use-query-params';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { useAuthState } from './contexts/auth/context';
import { CarRoutes } from './features/car/car.routes';
import { FlightRoutes } from './features/flight/flight.routes';
import { HotelRoutes } from './features/hotel/hotel.routes';
import { PartnerRoutes } from './features/partner/partner.routes';
import { TourRoutes } from './features/tour/tour.routes';
import AppLayout from './layout/app-layout';

const AuthenticatedRoute = ({ component, ...rest }) => {
  const auth = useAuthState();

  return (
    <Route
      {...rest}
      render={() =>
        auth.user ? (
          <AppLayout>{component}</AppLayout>
        ) : (
          <Redirect to="/account/login" />
        )
      }
    ></Route>
  );
};

const AdminRoute = ({ component, ...rest }) => {
  const auth = useAuthState();

  return (
    <Route
      {...rest}
      render={() =>
        auth.user && auth.user.isAdmin ? (
          <AppLayout>{component}</AppLayout>
        ) : (
          <Redirect to="/account/login" />
        )
      }
    ></Route>
  );
};

const getFooter = () => {
  return <Footer />;
};

function AppRoutes() {
  const queryStringifyOptions: ExtendedStringifyOptions = {
    transformSearchString: transformSearchStringJsonSafe,
  };
  return (
    <Router>
      <div style={{ height: '100%' }}>
        <AppLayout>
          <QueryParamProvider
            ReactRouterRoute={Route}
            stringifyOptions={queryStringifyOptions}
          >
            <Switch>
              <Route path="/partner">
                <PartnerRoutes></PartnerRoutes>
              </Route>
              <Route path="/deals">
                <Header>Deals</Header>
                {getFooter()}
              </Route>
              <Route path="/tour">
                <TourRoutes></TourRoutes>
                {getFooter()}
              </Route>
              <Route path="/car">
                <CarRoutes></CarRoutes>
                {getFooter()}
              </Route>
              <Route path="/flight">
                <FlightRoutes></FlightRoutes>
                {getFooter()}
              </Route>
              <Route path="/hotel">
                <HotelRoutes></HotelRoutes>
                {getFooter()}
              </Route>
              <Route path="*">{() => <Redirect to="/hotel" />}</Route>
            </Switch>
          </QueryParamProvider>
        </AppLayout>
      </div>
    </Router>
  );
}

export default AppRoutes;
