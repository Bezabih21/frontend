import { RightOutlined } from '@ant-design/icons';
import { Divider, Slider, Tag } from 'antd';
import React from 'react';

const HotelFilterForm = ({
  budgetRange,
  setBudgetRange,
  reviewScore,
  setReviewScore,
  starRating,
  setStarRating,
  filters,
  setFilters,
}) => {
  const { CheckableTag } = Tag;
  const marks = {
    0: '+ 0',
    1: '+ 1',
    2: '+ 2',
    3: '+ 3',
    4: '+ 4',
    5: '+ 5',
  };

  const changeFilter = (value, index) => {
    let currentValue = filters[index];
    currentValue.checked = value;
    filters[index] = currentValue;
    setFilters([...filters]);
  };

  return (
    <div>
      <p className="font-medium text-base">Filter by:</p>
      <div
        className="py-7"
        style={{
          width: '326px',
        }}
      >
        <div
          className="filter-container bg-gray-200 rounded"
          style={{
            width: '326px',
          }}
        >
          <div className="p-6">
            <div className="budget">
              <h5 className="font-bold text-gray-600">Budget per night:</h5>
              <Slider
                onAfterChange={setBudgetRange}
                min={0}
                max={1000}
                range
                defaultValue={budgetRange}
              />
            </div>
            <Divider dashed />
            <div className="popular-filter">
              <h5 className="font-bold text-gray-600">Popular filters:</h5>
              <div className="filters py-2">
                {filters.map((filter, i) => (
                  <CheckableTag
                    key={i}
                    checked={filter.checked}
                    className={`py-0.5 mb-2 ${
                      filter.checked ? 'text-white' : 'border-gray-400'
                    }`}
                    onChange={(e) => changeFilter(e, i)}
                  >
                    {filter.name}
                  </CheckableTag>
                ))}
              </div>
            </div>
            <Divider dashed />
            <div className="review">
              <div className="flex justify-between">
                <h5 className="font-bold text-gray-600">Review score:</h5>
                <h5 className="font-bold text-gray-600">+ 10</h5>
              </div>
              <Slider
                onAfterChange={setReviewScore}
                defaultValue={reviewScore}
              />
              <div className="flex justify-between">
                <h5 className="font-bold text-gray-600">0</h5>
                <h5 className="font-bold text-gray-600">10</h5>
              </div>
            </div>
            <Divider dashed />
            <div className="star-rating">
              <h5 className="font-bold text-gray-600">Star rating:</h5>
              <Slider
                min={0}
                max={5}
                marks={marks}
                range
                onAfterChange={setStarRating}
                defaultValue={starRating}
              />
            </div>
            <Divider dashed />
            <div className="">
              <a className="more bg-primary-500 p-1 py-2.5 rounded text-gray-300 ml-16 hover:text-white">
                See more options <RightOutlined />
              </a>
            </div>
          </div>
        </div>
        <div className="map py-2.5">
          <img src="../../../../assets/images/ShowOnMap.png" />
        </div>
      </div>
    </div>
  );
};

export default HotelFilterForm;
