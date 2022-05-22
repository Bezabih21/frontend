import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PaperPlaneSVG from '../../../components/icons/paper-plane';
import HotelFilterByProperty from '../components/hotel-filter-by-property';
import HotelRecommendationCard from '../components/hotel-recommendation-card';
import PopularDestinations from '../components/popular-destinations';
import './hotel-detail.scss';

const ScrollStyle = {
  color: '#16586f',
  fontSize: '15px',
  lineHeight: '1.5715',
  cursor: 'pointer',
};

function subscribe() {
  console.log('subscribe hear');
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const HotelRecommendation = () => {
  const query = useQuery();
  const history = useHistory();

  function handleTabChange(key) {
    setActiveTab(key);

    history.push({
      search: `?tab=${key}`,
    });
  }
  const [activeTab, setActiveTab] = useState('recommended');

  const [hotelRecommendations, setHotelRecommendations] = useState([
    {
      name: 'Ethiopian Skylight Hotel',
      picture: '../../../../assets/images/hotels/Ethiopian-Skylight-Hotel.jpg',
      address: 'Bole, Addis Abeba',
      price: { dollar: '124', birr: '4,960' },
      rate: '4.5',
      status: 'AVG',
      reviews: { rate: 'Excellent', totalReview: '245', grade: '8.7' },
    },
    {
      name: 'Capital Hotel and Spa',
      picture: '../../../../assets/images/hotels/capital.jpg',
      address: 'Bole, Addis Abeba',
      price: { dollar: '124', birr: '4,960' },
      rate: '4.5',
      status: 'AVG',
      reviews: { rate: 'Excellent', totalReview: '245', grade: '8.7' },
    },
    {
      name: 'Miracle Hotel',
      picture: '../../../../assets/images/hotels/miracle.jpg',
      address: 'Bole, Addis Abeba',
      price: { dollar: '124', birr: '4,960' },
      rate: '4.5',
      status: 'AVG',
      reviews: { rate: 'Excellent', totalReview: '245', grade: '8.7' },
    },
    {
      name: 'Shaper Addis Hotel',
      picture: '../../../../assets/images/hotels/shaper.jpg',
      address: 'Bole, Addis Abeba',
      price: { dollar: '124', birr: '4,960' },
      rate: '4.5',
      status: 'AVG',
      reviews: { rate: 'Excellent', totalReview: '245', grade: '8.7' },
    },
    {
      name: 'eEthiopian Skylight Hotel',
      picture: '',
      address: 'Bole, Addis Abeba',
      price: { dollar: '124', birr: '4,960' },
      rate: '4.5',
      status: 'AVG',
      reviews: { rate: 'Excellent', totalReview: '245', grade: '8.7' },
    },
  ]);

  const [propertyTypes, setPropertyTypes] = useState([
    {
      propertyType: 'Hotels',
      picture: '/assets/images/hotels/p-1.jpg',
      totalResult: '2453',
    },
    {
      propertyType: 'Apartments',
      picture: '/assets/images/hotels/p-2.jpg',
      totalResult: '627',
    },
    {
      propertyType: 'Gust Houses',
      picture: '/assets/images/hotels/p-3.jpg',
      totalResult: '1232',
    },
    {
      propertyType: 'Resorts',
      picture: '/assets/images/hotels/p-4.jpg',
      totalResult: '89',
    },
    {
      propertyType: 'Cottages',
      picture: '/assets/images/hotels/p-5.jpg',
      totalResult: '276',
    },
    {
      propertyType: 'Motels',
      picture: '/assets/images/hotels/1.png',
      totalResult: '594',
    },
  ]);

  const [popularDestinations, setPopularDestinations] = useState([
    {
      destination: 'Addis Abeba',
      picture: '/assets/images/hotels/addis-abeba.png',
      totalResult: '227',
    },
    {
      destination: 'Debre Zeyet',
      picture: '/assets/images/hotels/debere-zeyet.png',
      totalResult: '21',
    },
    {
      destination: 'Ārba Minchʼ',
      picture: '/assets/images/hotels/arba-mench.png',
      totalResult: '227',
    },
    {
      destination: 'Hawassa',
      picture: '/assets/images/hotels/hawassa.png',
      totalResult: '227',
    },
  ]);

  function hotelRecommendMoveRight(list: any[]) {
    const firstItem = list.shift();
    list.push(firstItem);
    return list;
  }
  function hotelRecommendMoveLeft(list: any[]) {
    const lastItem = list.pop();
    list.unshift(lastItem);
    return list;
  }
  function ByPropertyMoveRight(list: any[]) {
    const firstItem = list.shift();
    list.push(firstItem);
    return list;
  }
  function ByPropertyMoveLeft(list: any[]) {
    const lastItem = list.pop();
    list.unshift(lastItem);
    return list;
  }
  function PopularDestinationsMoveRight(list: any[]) {
    const firstItem = list.shift();
    list.push(firstItem);
    return list;
  }
  function PopularDestinationsMoveLeft(list: any[]) {
    const lastItem = list.pop();
    list.unshift(lastItem);
    return list;
  }
  function scroll(value) {
    if (value.list === 'hotel' && value.to === 'right') {
      setHotelRecommendations([
        ...hotelRecommendMoveRight(hotelRecommendations),
      ]);
    } else if (value.list === 'hotel' && value.to === 'left') {
      setHotelRecommendations([
        ...hotelRecommendMoveLeft(hotelRecommendations),
      ]);
    } else if (value.list === 'byProperty' && value.to === 'right') {
      setPropertyTypes([...ByPropertyMoveRight(propertyTypes)]);
    } else if (value.list === 'byProperty' && value.to === 'left') {
      setPropertyTypes([...ByPropertyMoveLeft(propertyTypes)]);
    } else if (value.list === 'byDestination' && value.to === 'right') {
      setPopularDestinations([
        ...PopularDestinationsMoveRight(popularDestinations),
      ]);
    } else if (value.list === 'byDestination' && value.to === 'left') {
      setPopularDestinations([
        ...PopularDestinationsMoveLeft(popularDestinations),
      ]);
    }
  }

  const HotelRecommendationList = (
    <>
      {hotelRecommendations.map(
        (recommendation, r) =>
          r < 4 && (
            <HotelRecommendationCard
              key={r}
              recommendationResult={recommendation}
            />
          )
      )}
    </>
  );

  return (
    <div className="container  mx-auto">
      <h5 className="text-3xl text-center text-primary-500">
        Not Sure? Let’s find you the best choice.
      </h5>
      <div className="py-14">
        <div className="px-6">
          <span className="font-bold md:px-10 text-2xl">
            Places to stay for your next trip!
          </span>
        </div>

        <div className="py-10">
          <div className="hotel-recommend-tab px-6 flex justify-between md:px-28">
            <div className="flex justify-between">
              <ul className="flex cursor-pointer">
                <li
                  className={`py-6 md:px-6 px-3 rounded-tl-3xl ${
                    activeTab == 'recommended'
                      ? 'text-black bg-gray-100'
                      : 'text-white bg-primary-500'
                  }`}
                  onClick={() => handleTabChange('recommended')}
                >
                  Recommended
                </li>
                <li
                  className={`py-6 md:px-6 px-3 ${
                    activeTab == 'rated'
                      ? 'text-black bg-gray-100'
                      : 'text-white bg-primary-500'
                  }`}
                  onClick={() => handleTabChange('rated')}
                >
                  Top Rated
                </li>
                <li
                  className={`py-6 md:px-6 px-3 rounded-tr-3xl ${
                    activeTab == 'priced'
                      ? 'text-black bg-gray-100'
                      : 'text-white bg-primary-500'
                  }`}
                  onClick={() => handleTabChange('priced')}
                >
                  Best Priced
                </li>
              </ul>
              <span className="hidden">See All</span>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="py-10">
              <div className="container md:px-12 md:px-32 mx-auto my-12 px-6">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                  {hotelRecommendations.map(
                    (recommendation, r) =>
                      r < 4 && (
                        <HotelRecommendationCard
                          key={r}
                          recommendationResult={recommendation}
                        />
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6">
          <span className="font-bold md:px-10 text-2xl">
            Browse by property type.
          </span>
        </div>
        <div className="bg-white">
          {/* <div className="flex justify-evenly">
                <div
                  style={{
                    ...ScrollStyle,
                    marginTop: '4%',
                    display: propertyTypes.length >= 4 ? 'block' : 'none',
                  }}
                  onClick={() => scroll({ list: 'byProperty', to: 'left' })}
                >
                  <LeftOutlined />
                </div>
                {propertyTypes.map(
                  (property, p) =>
                    p < 6 && (
                      <HotelFilterByProperty
                        key={p}
                        propertyResult={property}
                      />
                    )
                )}
                <div
                  style={{
                    ...ScrollStyle,
                    marginTop: '4%',
                    display: propertyTypes.length >= 4 ? 'block' : 'none',
                  }}
                  onClick={() => scroll({ list: 'byProperty', to: 'right' })}
                >
                  <RightOutlined />
                </div>
              </div> */}
          <div className="container md:px-12 md:px-32 mx-auto my-12 px-6">
            <div className="flex flex-wrap gap-10 -mx-1 lg:-mx-4 lg:justify-between md:justify-between">
              {propertyTypes.map(
                (property, p) =>
                  p < 6 && (
                    <HotelFilterByProperty key={p} propertyResult={property} />
                  )
              )}
            </div>
          </div>
        </div>
        <div className="px-6">
          <span className="font-bold md:px-10 text-2xl">
            Popular Destinations in Ethiopia
          </span>
        </div>

        <div className="bg-white">
          {/* <div className="flex justify-evenly">
                <div
                  className="icon"
                  style={{
                    ...ScrollStyle,
                    marginTop: '6%',
                    display: popularDestinations.length >= 4 ? 'block' : 'none',
                  }}
                  onClick={() => scroll({ list: 'byDestination', to: 'left' })}
                >
                  <LeftOutlined />
                </div>
                {popularDestinations.map(
                  (destination, d) =>
                    d < 4 && (
                      <PopularDestinations
                        key={d}
                        destinationResult={destination}
                      />
                    )
                )}
                <div
                  style={{
                    ...ScrollStyle,
                    marginTop: '6%',
                    display: popularDestinations.length >= 4 ? 'block' : 'none',
                  }}
                  onClick={() => scroll({ list: 'byDestination', to: 'right' })}
                >
                  <RightOutlined />
                </div>
              </div> */}
          <div className="container md:px-12 md:px-32 mx-auto my-12 px-6">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {popularDestinations.map(
                (destination, d) =>
                  d < 4 && (
                    <PopularDestinations
                      key={d}
                      destinationResult={destination}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-500">
        <div>
          <div className="p-16 text-center">
            <span className="text-4xl text-white">
              Subscribe to get discounts &#38; secret deals.
            </span>
            <div className="flex justify-center py-10 ">
              <input
                placeholder="Enter your email address"
                className="bg-primary-500 border-b-2 md:text-2xl"
              />
              <a onClick={subscribe}>
                <PaperPlaneSVG />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HotelRecommendation;
