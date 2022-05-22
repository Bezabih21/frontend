import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeHeader } from '../../components/home-header';
import { ResultHeader } from '../../components/result-header';
import ScrollToTop from '../../components/scroll-to-top';
import HotelReserve from './components/hotel-reserve';
import HotelReservePayment from './components/hotel-reserve-payment';
import { Hotel } from './pages/hotel';
import HotelDetail from './pages/hotel-detail';
import HotelRecommendation from './pages/hotel-recommendation';
import HotelResult from './pages/hotel-result';

export const HotelRoutes = () => {
  const getHeader = (showHome: boolean) => {
    return showHome ? (
      <HomeHeader
        heroImage="../../../../assets/images/cover/Hotel-Hero.svg"
        heroText={
          <div className="pt-10">
            <p className="font-normal text-4xl" style={{ color: '#292F32' }}>
              Accommodating, <br></br>your <strong>peace</strong> of mind.
            </p>
          </div>
        }
      >
        <Hotel></Hotel>
      </HomeHeader>
    ) : (
      <ResultHeader>
        <Hotel fromHome={false}></Hotel>
      </ResultHeader>
    );
  };

  return (
    <ScrollToTop>
      <Switch>
        <Route path="/hotel" exact>
          {getHeader(true)}
          <HotelRecommendation />
        </Route>
        <Route path="/hotel/search">
          {getHeader(false)}
          <HotelResult />
        </Route>
        <Route path="/hotel/:id/book/">
          {getHeader(false)}
          <HotelReserve />
        </Route>
        <Route path="/hotel/:id/pay/">
          {getHeader(false)}
          <HotelReservePayment />
        </Route>
        <Route path="/hotel/:id">
          {getHeader(false)}
          <HotelDetail></HotelDetail>
        </Route>
      </Switch>
    </ScrollToTop>
  );
};
