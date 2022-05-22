import { EllipsisOutlined } from '@ant-design/icons';
import { AlertService } from '@eltnt/core';
import { Empty, Spin, Tabs } from 'antd';
import { distanceInWords } from 'date-fns';
import debounce from 'lodash-es/debounce';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  DateParam,
  NumberParam,
  StringParam,
  useQueryParams,
} from 'use-query-params';
import { HotelListItem } from '../../../models/hotel';
import { HotelQuery } from '../../../models/hotel.query';
import { getAllHotelsApi } from '../api/hotel.api';
import HotelFilterForm from '../components/hotel-filter-form';
import HotelResultCard from '../components/hotel-result-card';
import './hotel-detail.scss';

const { TabPane } = Tabs;
const operations = <EllipsisOutlined className="m-3.5 text-gray-100" />;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export interface HotelSearchResult {
  searchResult: any;
}

interface HotelSearchParams {
  city: string;
  roomQuantity: number;
  adultQuantity: number;
  childrenQuantity: number;
  startDate: string;
  endDate: string;
}

function HotelResult() {
  const query = useQuery();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [hotels, setHotels] = useState<HotelListItem[]>(null);
  const [hotelQuery, setHotelQuery] = useState<HotelQuery>(null);
  const [dateDiff, setDateDiff] = useState('');

  const [budgetRange, setBudgetRange] = useState([200, 500]);
  const [reviewScore, setReviewScore] = useState(80);
  const [starRating, setStarRating] = useState([0, 5]);
  const [filters, setFilters] = useState([
    { name: 'Breakfast included', checked: false },
    { name: 'Hotels', checked: true },
    { name: 'Free WiFi', checked: false },
    { name: 'Double Bed', checked: false },
    { name: 'Private Bathroom', checked: true },
    { name: 'Hostels', checked: false },
    { name: 'Very good 8+', checked: false },
    { name: 'Less than 1 Km', checked: false },
  ]);

  const [paramQuery, setParamQuery] = useQueryParams({
    city: StringParam,
    roomQuantity: NumberParam,
    adultQuantity: NumberParam,
    childrenQuantity: NumberParam,
    startDate: DateParam,
    endDate: DateParam,
    tab: StringParam,
  });

  useEffect(() => {
    const newHotelQuery: HotelQuery = {
      CityCode: paramQuery.city,
      RoomQuantity: paramQuery.roomQuantity,
      Adults: paramQuery.adultQuantity,
      Children: paramQuery.childrenQuantity,
      CheckInDate: paramQuery.startDate,
      CheckOutDate: paramQuery.endDate,
      Sort: paramQuery?.tab ?? 'recommended',
      DailyPriceFrom: budgetRange[0],
      DailyPriceTo: budgetRange[1],
      StarRatingFrom: starRating[0],
      StarRatingTo: starRating[1],
      dateDiff: distanceInWords(paramQuery.startDate, paramQuery.endDate),
    };
    setHotelQuery(newHotelQuery);
    setDateDiff(
      distanceInWords(newHotelQuery.CheckInDate, newHotelQuery.CheckOutDate)
    );
    return () => {
      setHotelQuery(null);
    };
  }, [paramQuery, budgetRange, starRating, reviewScore, filters]);

  useEffect(() => {
    if (hotelQuery) {
      setIsLoading(true);
      if (hotelQuery.Sort === 'lowest_price') {
        hotelQuery.DailyPriceFrom = 0;
        hotelQuery.DailyPriceFrom = 500;
      } else if (hotelQuery.Sort === 'highest_rating') {
        hotelQuery.StarRatingFrom = 3;
        hotelQuery.StarRatingTo = 5;
      }
      debounce(() => {
        getAllHotelsApi(hotelQuery)
          .then((result: any[]) => {
            setHotels(result);
            setIsLoading(false);
          })
          .catch((e) => {
            new AlertService().error(e.message);
            setIsLoading(false);
          });
      }, 1000)();
    }
  }, [hotelQuery]);

  const history = useHistory();

  const getTabHeader = (text) => {
    return (
      <>
        {text} <div className="w-4 mt-2 h-1 mx-auto"></div>
      </>
    );
  };
  function handleTabChange(key) {
    setParamQuery({ ...paramQuery, tab: key });
    query.set('tab', key);
    history.push({
      search: query.toString(),
    });
  }

  const showResult = () => {
    return (
      <div className="bg-gray-200 pb-21 rounded relative min-h-96 p-4">
        {isLoading ? (
          <div className="text-center">
            <Spin></Spin>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
            {hotels?.length !== 0 ? (
              hotels?.map((result: any /** HotelListItem */, i) => (
                <HotelResultCard
                  key={i}
                  hotel={result}
                  query={hotelQuery}
                ></HotelResultCard>
              ))
            ) : (
              <div className="text-center">
                <Empty />
              </div>
            )}
          </div>
        )}
        <br></br>
        {/* <h5>pagination goes hear</h5> */}
      </div>
    );
  };

  const getResult = () => {
    return (
      <div className="show-result px-20 py-10">
        <div className="container flex space-x-16">
          <HotelFilterForm
            budgetRange={budgetRange}
            setBudgetRange={setBudgetRange}
            reviewScore={reviewScore}
            setReviewScore={setReviewScore}
            starRating={starRating}
            setStarRating={setStarRating}
            filters={filters}
            setFilters={setFilters}
          ></HotelFilterForm>

          <div style={{ width: '-webkit-fill-available' }}>
            <div className="px-4">
              <h5 className="font-medium text-base py-0.5">
                {hotelQuery?.CityCode}
              </h5>
              <small className="font-bold text-gray-400">
                {dateDiff.replace('day', 'night')}, {hotelQuery?.Adults}{' '}
                {hotelQuery?.Adults === 1
                  ? 'adult'
                  : hotelQuery?.Adults > 1
                  ? 'adults'
                  : ''}
              </small>
            </div>
            <div className="result-container">
              <div className="mt-1 bg-gray-100 flex flex-col space-y-1 rounded-sm">
                <div className="hotel-detail-tab">
                  <Tabs
                    tabBarExtraContent={operations}
                    defaultActiveKey={
                      query.get('tab') ? query.get('tab') : 'recommended'
                    }
                    tabBarStyle={{
                      padding: '-1px',
                    }}
                    type="card"
                    onChange={handleTabChange}
                  >
                    <TabPane
                      tab={getTabHeader('Recommended')}
                      key="recommended"
                      style={{ borderRadius: '-1px' }}
                    >
                      {showResult()}
                    </TabPane>
                    <TabPane
                      tab={getTabHeader('Lowest Price')}
                      key="lowest_price"
                    >
                      {showResult()}
                    </TabPane>

                    <TabPane
                      tab={getTabHeader('Highest Star Rating')}
                      key="highest_rating"
                    >
                      {showResult()}
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return getResult();
}

export default HotelResult;
