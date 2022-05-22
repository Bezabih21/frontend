import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../../components/header';
import CarRent from './pages/car-rent';
import CarRentRecommendation from './pages/car-rent-recommendation';

export const CarRoutes = () => {
  const getHeader = (showHeader: boolean) => {
    return (
      <Header
        heroImage="../../../../assets/images/cover/Rent Hero.svg"
        heroText={
          showHeader ? (
            <div className="pt-10">
              <p className="font-normal text-4xl" style={{ color: 'white' }}>
                Local <strong>best,</strong> <br></br>and personalized service
              </p>
            </div>
          ) : null
        }
      >
        <CarRent />
      </Header>
    );
  };
  return (
    <Switch>
      <Route path="/car" exact>
        {getHeader(true)}
        <CarRentRecommendation />
      </Route>
      <Route path="/car">{getHeader(false)}</Route>
    </Switch>
  );
};
