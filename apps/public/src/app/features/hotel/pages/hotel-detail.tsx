import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel, Empty, Spin, Tabs } from 'antd';
import { differenceInDays } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import Ratings from 'react-star-ratings';
import {
  DateParam,
  NumberParam,
  StringParam,
  useQueryParams,
} from 'use-query-params';
import { LocationIcon } from '../../../components/icons';
import {
  HotelDetailResult,
  HotelMediaInfo,
} from '../../../models/hotel-detail';
import { getHotelDetailApi } from '../api/hotel.api';
import HotelDetailOverview from '../components/hotel-detail-overview';
import HotelDetailRooms from '../components/hotel-detail-rooms';
import './hotel-detail.scss';
const { TabPane } = Tabs;
const catagories = [
  { category: 'All', total: '153' },
  { category: 'Exterior', total: '16' },
  { category: 'Rooms', total: '29' },
  { category: 'Dining', total: '19' },
  { category: 'Leisure & Recreations', total: '21' },
  { category: 'Business Facilities', total: '19' },
  { category: 'Public Areas', total: '25' },
  { category: 'Near Hotel', total: '13' },
  { category: 'Others', total: '19' },
];
const images = [
  { src: '/assets/images/hotels/main-1.png' },
  { src: '/assets/images/hotels/main-2.png' },
];
const thumbnails = [
  { src: '/assets/images/hotels/thumbnail-5.png' },
  { src: '/assets/images/hotels/thumbnail-4.png' },
  { src: '/assets/images/hotels/thumbnail-3.png' },
  { src: '/assets/images/hotels/thumbnail-2.png' },
  { src: '/assets/images/hotels/thumbnail-1.png' },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: '#16586f',
        fontSize: '15px',
        lineHeight: '1.5715',
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: '#16586f',
        fontSize: '15px',
        lineHeight: '1.5715',
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

interface CategoryImage {
  name: string;
  images: string[];
}

function HotelDetail() {
  const query = useQuery();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [categorizedImages, setCategorizedImages] = useState<CategoryImage[]>();
  const [hotelDetail, setHotelDetail] = useState<HotelDetailResult>(null);
  const [dateDiff, setDateDiff] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { id } = useParams<{ id: string }>();
  const [paramQuery, setParamQuery] = useQueryParams({
    roomId: StringParam,
    tab: StringParam,
    city: StringParam,
    roomQuantity: NumberParam,
    adultQuantity: NumberParam,
    childrenQuantity: NumberParam,
    startDate: DateParam,
    endDate: DateParam,
  });

  const categorizeImages = (mediaInfo: HotelMediaInfo) => {
    const arrayItem: CategoryImage[] = [{ name: 'All', images: [] }];
    return mediaInfo.mediaItems.mediaItem.reduce((reduced, item) => {
      const itemName =
        item.category.description.text[0]?.value ?? 'Uncategorized';
      const index = reduced.findIndex((element) => element.name === itemName);
      if (index !== -1) {
        reduced[index].images = [
          ...reduced[index].images,
          item.imageItems.image[0].url,
        ];
      } else {
        reduced.push({
          name: itemName,
          images: [item.imageItems.image[0].url],
        });
      }
      reduced[0].images = [...reduced[0].images, item.imageItems.image[0].url];
      return reduced;
    }, arrayItem);
  };

  useEffect(() => {
    setIsLoading(true);
    const diffDays = differenceInDays(paramQuery.endDate, paramQuery.startDate);
    const newHotelQuery = {
      roomId: paramQuery.roomId,
      days: diffDays,
    };
    setDateDiff(diffDays);
    getHotelDetailApi(id, newHotelQuery)
      .then((result: any) => {
        setHotelDetail(result);
        // setCategorizedImages(
        //   categorizeImages(
        //     result.hotailDetail.getHotelDetailsRS.hotelDetailsInfo
        //       .hotelMediaInfo
        //   )
        // );
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  }, [id]);

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
      <div>
        <div className="mx-32 mt-14 px-5 py-2 bg-gray-100 flex flex-col space-y-1">
          <div className="flex justify-between">
            <div className="flex flex-col justify-center">
              <div className="flex space-x-2 items-center">
                <span className="bg-primary-500 text-white px-1 rounded-sm">
                  {'Hotel'}
                </span>
                <span className="text-black text-xl font-bold">
                  {hotelDetail?.hotel?.name}
                </span>
                {hotelDetail ? (
                  <Ratings
                    rating={parseFloat(hotelDetail?.hotel?.starRate)}
                    starRatedColor="orange"
                    numberOfStars={5}
                    starDimension="15px"
                    svgIconPath="M6.80497 0.639212L5.06132 4.17459L1.16012 4.74334C0.460522 4.84481 0.180149 5.70729 0.687491 6.20129L3.50992 8.95162L2.84236 12.8368C2.7222 13.5391 3.46185 14.0651 4.08134 13.7367L7.57133 11.9022L11.0613 13.7367C11.6808 14.0624 12.4204 13.5391 12.3003 12.8368L11.6327 8.95162L14.4552 6.20129C14.9625 5.70729 14.6821 4.84481 13.9825 4.74334L10.0813 4.17459L8.33768 0.639212C8.02526 0.00903982 7.12006 0.00102916 6.80497 0.639212Z"
                    svgIconViewBox="0 0 15 14"
                    starSpacing="3px"
                    name="rating"
                  />
                ) : (
                  <></>
                )}
                <span className="text-sm text-green-500 capitalize">
                  {'free cancellation'}
                </span>
              </div>
              <div className="flex space-x-2 items-center">
                <LocationIcon className="w-6 h-5 mt-0.5"></LocationIcon>
                <span className="text-gray-400">
                  {hotelDetail?.hotel?.address?.city}
                </span>
                <a
                  href={`http://maps.google.com/maps?z=12&t=m`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-bold"
                >
                  Show on map
                </a>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs">for {dateDiff}</span>
              {/* <span className="text-2xl font-bold">
                {'Not in api! hotelDetail?.offers[0].price.currency'}{' '}
                {'Not in api! hotelDetail?.offers[0].price.total'}
              </span>
              <span className="text-xs">
                {'Not in Api! getExchange(hotelDetail?.offers[0].price.total)'}{' '}
                birr
              </span> */}
            </div>
          </div>
        </div>
        <div className="mx-32 mt-1 py-5 bg-gray-100 flex flex-col space-y-1">
          <div className="w-3/4">
            <div className="hotel-gallery">
              <Carousel arrows {...settings}>
                {[].length > 0 ? (
                  categorizedImages[selectedIndex].images.map((image, i) => (
                    <div key={image}>
                      <img
                        src={image}
                        className="h-full w-full"
                        style={{ height: '600px', objectFit: 'cover' }}
                      />
                    </div>
                  ))
                ) : (
                  // <div>
                  //   <img
                  //     src="../../../../assets/images/hotels/main-1.png"
                  //     className="h-full w-full"
                  //     style={{ height: '600px', objectFit: 'cover' }}
                  //   />
                  // </div>
                  <Empty
                    image="https://www.freeiconspng.com/uploads/no-image-icon-13.png"
                    imageStyle={{
                      height: 600,
                      objectFit: 'cover',
                    }}
                    description={<span>No Image available</span>}
                  ></Empty>
                )}
              </Carousel>
            </div>
            {[].length > 0 ? (
              <div>
                <hr></hr>
                <div className="flex overflow-x-auto px-2">
                  {categorizedImages.map((categoryImage, i) => (
                    <div
                      key={i}
                      className="pb-3 pr-3 cursor-pointer"
                      onClick={() => setSelectedIndex(i)}
                    >
                      <img
                        className="rounded-md"
                        src={categoryImage.images[0]}
                        style={{
                          objectFit: 'cover',
                          minWidth: '150px',
                          width: '150px',
                          height: '100px',
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <hr></hr>{' '}
                <div className="pb-3 pr-3 cursor-pointer px-6">
                  {/* <img
                    className="rounded-md"
                    src="../../../../assets/images/hotels/thumbnail-4.png"
                    style={{
                      objectFit: 'cover',
                      minWidth: '150px',
                      width: '150px',
                      height: '100px',
                    }}
                  /> */}
                  <Empty
                    image="https://www.freeiconspng.com/uploads/no-image-icon-13.png"
                    imageStyle={{
                      height: 100,
                      objectFit: 'cover',
                      minWidth: '150px',
                      width: '150px',
                    }}
                    description={<span>No Image available</span>}
                  ></Empty>
                </div>
              </div>
            )}
          </div>
          <div className="w-1/4 h-full bg-red-500"></div>
        </div>
        <div className="mx-32 mt-1 bg-gray-100 flex flex-col space-y-1 rounded-sm">
          <div className="hotel-detail-tab">
            <Tabs
              defaultActiveKey={query.get('tab') ? query.get('tab') : 'rooms'}
              tabBarStyle={{
                padding: '-1px',
              }}
              type="card"
              onChange={handleTabChange}
            >
              <TabPane tab={getTabHeader('Rooms')} key="rooms">
                <div className="p-5">
                  {hotelDetail ? (
                    <HotelDetailRooms
                      rooms={hotelDetail?.otherRooms ?? []}
                      hotel={hotelDetail?.hotel}
                      searchedHotel={hotelDetail?.searchedHotel}
                    ></HotelDetailRooms>
                  ) : (
                    <></>
                  )}
                </div>
              </TabPane>
              <TabPane
                tab={getTabHeader('Overview')}
                key="overview"
                style={{ borderRadius: '-1px' }}
              >
                <div className="p-5">
                  {hotelDetail ? (
                    <HotelDetailOverview
                      hotelDetail={hotelDetail.hotelDetailInfo}
                    ></HotelDetailOverview>
                  ) : (
                    <></>
                  )}
                </div>
              </TabPane>
              {/* <TabPane
                tab={getTabHeader('Services & Amenities')}
                key="services"
              >
                <div className="p-5">
                  {hotelDetail ? (
                    <HotelDetailOverview
                      hotelDetail={hotelDetail}
                    ></HotelDetailOverview>
                  ) : (
                    <></>
                  )}
                </div>
              </TabPane> */}
              {/* <TabPane tab={getTabHeader('Policies')} key="policies">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab={getTabHeader('Map')} key="map">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab={getTabHeader('Reviews')} key="reviews">
                Content of Tab Pane 2
              </TabPane> */}
            </Tabs>
          </div>
        </div>
      </div>
    );
  };

  return isLoading || hotelDetail === null ? (
    <div className="w-full h-96 flex justify-center items-center">
      <Spin></Spin>
    </div>
  ) : (
    showResult()
  );
}

export default HotelDetail;
