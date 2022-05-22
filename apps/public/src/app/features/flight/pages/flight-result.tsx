import { EllipsisOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Collapse, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { DoubleFlight } from '../components/double-flight';
import { SingleFlight } from '../components/single-flight';
import FlightFilter from './flight-filter-form';
import './flight-result.scss';

const { TabPane } = Tabs;
const { Panel } = Collapse;
const operations = (
  <EllipsisOutlined className="m-3.5 text-4xl text-gray-100" />
);

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

interface FlightSearchParams {
  tripType: string;
  adultQuantity: string;
  flightType: string;
  from: string;
  to: string;
  startDate: string;
  returnDate: string;
}

const disclaimer = [{}];

const filters = {
  stops: [
    { stop: 'Direct', price: '$ 1,301', checked: true },
    { stop: '1 Stop', price: '$ 1,172', checked: false },
    { stop: '2+ Stops', price: '$ 1,199', checked: true },
  ],
  collapse: [
    {
      name: 'Airports',
      contentType: 'checkBox',
      Collapse: [
        {
          group: '',
          inGroup: [{ name: 'Depart/Return same', checked: false, price: '' }],
        },
        {
          group: 'New York',
          inGroup: [
            {
              name: 'JFK - John F. Kennedy Int',
              checked: true,
              price: '$1,194',
            },
            { name: 'EWR - Newark', checked: false, price: '$1,312' },
            { name: 'Depart/Return same', checked: false, price: '$1,276' },
          ],
        },
        {
          group: 'Addis Abeba',
          inGroup: [
            {
              name: 'ADD-Bole',
              checked: true,
              price: '$1,194',
            },
          ],
        },
      ],
    },
    {
      name: 'Times',
      contentType: 'slider',
      Collapse: [
        {
          status: 'Take off',
          city: 'New York',
          airport: 'JKK',
          start: 'Sat 06:00 AM',
          end: 'Sat 11:00 AM',
        },
        {
          status: 'Take off',
          city: 'Addis Abeba',
          airport: 'ADD',
          start: 'Sat 12:00 AM',
          end: 'Sat 11:59 PM',
        },
        {
          status: 'Landing',
          city: 'Addis Abeba',
          airport: 'ADD',
          start: 'Sun 09:00 PM',
          end: 'Thu 06:39 PM',
        },
        {
          status: 'Landing',
          city: 'New York',
          airport: 'JFK',
          start: 'Sun 09:00 PM',
          end: 'Thu 06:39 PM',
        },
      ],
    },
    { name: 'Airlines', contentType: 'slider', Collapse: [{}] },
    { name: 'Duration', contentType: 'slider', Collapse: [] },
    { name: 'Price Calculator', contentType: 'slider', Collapse: [] },
    { name: 'Cabin', contentType: 'slider', Collapse: [] },
    { name: 'Stopover Airports', contentType: 'slider', Collapse: [] },
    { name: 'Aircrafts', contentType: 'slider', Collapse: [] },
    { name: 'Booking Sites', contentType: 'slider', Collapse: [] },
  ],
};

const searchResult = [
  {
    type: 'flight-offer',
    oneWay: false,
    cost: {
      price: { dollar: '1556', birr: '46880' },
      taxIncluded: true,
    },
    baggageInfo: {
      totalCount: '2',
      description: 'baggage pieces included',
      weight: '30',
      weightUnit: 'KG',
    },
    trip: [
      {
        departure: {
          iataCode: 'SYD',
          terminal: '1',
          at: '21:00',
        },
        arrival: {
          iataCode: 'HKG',
          terminal: '1',
          at: '22:10',
        },
        numberOfStops: 1,
        stops: [{ airport: 'NHK', totalTime: '1 hour' }],
        totalTimeSpent: { hour: '16', min: '10', sec: '12' },
      },
      {
        departure: {
          iataCode: 'SYD',
          terminal: '1',
          at: '21:10',
        },
        arrival: {
          iataCode: 'HKG',
          terminal: '1',
          at: '21:45',
        },
        numberOfStops: 0,
        stops: [],
        totalTimeSpent: { hour: '16', min: '10', sec: '12' },
      },
    ],
  },
  {
    type: 'flight-offer',
    oneWay: true,
    cost: {
      price: { dollar: '656', birr: '23880' },
      taxIncluded: true,
    },
    baggageInfo: {
      totalCount: '3',
      description: 'baggage pieces included',
      weight: '30',
      weightUnit: 'KG',
    },
    trip: [
      {
        departure: {
          iataCode: 'ADD',
          terminal: '1',
          at: '19:50',
        },
        arrival: {
          iataCode: 'THK',
          terminal: '1',
          at: '21:40',
        },
        numberOfStops: 1,
        stops: [{ airport: 'HLD', totalTime: '1 hour' }],
        totalTimeSpent: { hour: '14', min: '10', sec: '12' },
      },
    ],
  },
];

function FlightResult() {
  const query = useQuery();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [formParams, setFormParams] = useState<FlightSearchParams | {}>({});
  useEffect(() => {
    const flightParams: FlightSearchParams = {
      tripType: query.get('tripType'),
      adultQuantity: query.get('adultQuantity'),
      flightType: query.get('flightType'),
      from: query.get('from'),
      to: query.get('to'),
      startDate: query.get('startDate'),
      returnDate: query.get('returnDate'),
    };
    setFormParams(flightParams);
    return () => {
      setFormParams({});
    };
  }, []);

  useEffect(() => {
    console.log('send Query here', formParams);
  }, [formParams]);
  const getTabHeader = (header) => {
    return (
      <>
        <div className="flex flex-col">
          <span className="flex gap-3 font-bold px-5">
            {header.text}
            {header.icon}
          </span>

          <div className="flex gap-0.5">
            <span>$ {header.footer.dollar}</span>|
            <small className="mt-1">{header.footer.birr} Birr</small>
          </div>
        </div>

        <div className="w-4 mt-2 h-1 mx-auto"></div>
      </>
    );
  };

  function handleTabChange(key) {
    history.push({
      search: `?tab=${key}`,
    });
  }

  return (
    <div className="px-28 py-16">
      <div className="flex gap-5">
        <FlightFilter flightFilter={filters}></FlightFilter>
        <div
          className="flex flex-col gap-4 rounded"
          style={{ width: '-webkit-fill-available' }}
        >
          <div className="bg-gray-100 rounded">
            <div className="flex p-5 gap-2">
              <img src="../../../../assets/icons/Icon.svg" className="pr-2" />
              <span className="font-bold">COVID-19 </span>
              <span className="">
                Check the latest entry requirements for your destination before
                travelling. Learn more
              </span>
            </div>
          </div>

          <div className="bg-white rounded">
            <div className="mt-1 bg-gray-100 flex flex-col space-y-1 rounded-sm rounded-tr-md">
              <div className="flight-detail-tab">
                <Tabs
                  tabBarExtraContent={operations}
                  defaultActiveKey={
                    query.get('tab') ? query.get('tab') : 'cheapest'
                  }
                  tabBarStyle={{
                    padding: '-1px',
                  }}
                  type="card"
                  onChange={handleTabChange}
                >
                  <TabPane
                    tab={getTabHeader({
                      text: 'Cheapest',
                      icon: null,
                      footer: { dollar: '1172', birr: '46880' },
                    })}
                    key="cheapest"
                    style={{ borderRadius: '-1px' }}
                  >
                    <div className="p-5">
                      <div className="flex flex-col gap-4">
                        {searchResult.map((result, r) => (
                          <span key={r}>
                            {result.oneWay === true ? (
                              <SingleFlight
                                searchResult={result}
                              ></SingleFlight>
                            ) : (
                              <DoubleFlight
                                searchResult={result}
                              ></DoubleFlight>
                            )}
                          </span>
                        ))}
                      </div>
                      <div className="py-5">
                        <a href="#">
                          <p className="bg-primary-500 rounded text-gray-100 hover:text-white text-center	p-3.5">
                            Show More Results
                          </p>
                        </a>
                      </div>
                      <div className="container ">
                        <p className="pb-2.5 text-gray-700">
                          Prices are per person and are for e–tickets and
                          include all taxes & fees in USD. We attempt to get
                          accurate prices and fees; however, prices and fees are
                          not guaranteed, and may be subject to last minute
                          changes over which we have no control. Finally, some
                          train and bus prices may not include a service fee
                          added by the provider at checkout.
                        </p>
                        <p className="pb-2.5 text-gray-700">
                          ¹Hacker Fares tickets are sold to/from a destination
                          via different airlines and are subject to each
                          airline's booking requirements and terms, including
                          changes to itineraries. Any changes made to one of
                          your tickets will not necessarily afford rights to
                          change the other ticket. Fares change frequently and
                          are subject to availability. International travel may
                          require proof of return flight.
                        </p>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane
                    tab={getTabHeader({
                      text: 'Best',
                      icon: <InfoCircleOutlined className="mt-1" />,
                      footer: { dollar: '1301', birr: '46880' },
                    })}
                    key="best"
                  >
                    <div className="p-5">
                      <p>content 2 goes hear</p>
                    </div>
                  </TabPane>
                  <TabPane
                    tab={getTabHeader({
                      text: 'Quickest',
                      icon: null,
                      footer: { dollar: '1456', birr: '46880' },
                    })}
                    key="quickest"
                  >
                    <div className="p-5">
                      <p>content 3 goes hear</p>
                    </div>
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightResult;
