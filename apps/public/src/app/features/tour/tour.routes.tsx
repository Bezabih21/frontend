import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../../components/header';
import Tour from './pages/tour';
import TourRecommendation from './pages/tour-recommendation';

export const TourRoutes = () => {
  const getHeader = (showHeader: boolean) => {
    return (
      <Header
        heroImage="../../../../assets/images/cover/Tour Hero.svg"
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
        <Tour />
      </Header>
    );
  };
  return (
    <Switch>
      <Route path="/tour" exact>
        {getHeader(true)}

        <TourRecommendation />
      </Route>
      <Route path="/tour">{getHeader(false)}</Route>
    </Switch>
  );
};
