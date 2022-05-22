import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './../../components/header';
import Flight from './pages/flight';
import FlightRecommendation from './pages/flight-recommendation';
import FlightResult from './pages/flight-result';

export const FlightRoutes = () => {
  const getHeader = (showHeader: boolean) => {
    return (
      <Header
        heroImage="../../../../assets/images/cover/Flight-Hero.svg"
        heroText={
          showHeader ? (
            <div className="pt-10">
              <p className="font-normal text-4xl" style={{ color: 'white' }}>
                Explore, <strong>Travel,</strong> <br></br>Discover, Adventure
              </p>
            </div>
          ) : null
        }
      >
        <Flight></Flight>
      </Header>
    );
  };
  return (
    <Switch>
      <Route path="/flight" exact>
        {getHeader(true)}
        <FlightRecommendation />
      </Route>
      <Route path="/flight/search">
        {getHeader(false)} <FlightResult />
      </Route>
    </Switch>
  );
};
