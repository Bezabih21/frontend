import { AutoComplete, Button, DatePicker } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { MarkerIcon, SearchIcon } from '../../../components/icons';

export const CarRentSearch = () => {
  const [options, setOptions] = useState([]);

  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });
  const onSearch = (val) => {
    console.log('onSearch', val);
    setOptions(!val ? [] : [mockVal(val), mockVal(val, 2), mockVal(val, 3)]);
  };
  const onSelect = (data) => {
    console.log('onSelect', data);
  };
  const handleStartDate = (time) => {
    if (!time) {
      return false;
    } else {
      return time < moment().subtract(1, 'days');
    }
  };
  const handleEndDate = (time) => {
    let diffrence = 3;
    console.log(diffrence);
    if (!time) {
      return false;
    } else {
      return time + diffrence < moment().subtract(1, 'days');
    }
  };
  const onSubmit = (e) => {};
  function startingPlaceChange(value) {
    // setFrom(value);
  }
  const places = [
    {
      value: 'Burns Bay Road',
    },
    {
      value: 'Downing Street',
    },
    {
      value: 'Wall Street',
    },
  ];
  return (
    <div className="px-5 py-16">
      <form className="add-form" onSubmit={onSubmit}>
        <div className="md:flex md:gap-2.5">
          <div className="pb-2.5">
            <div className="flex border border-primary-500 rounded">
              <MarkerIcon className="w-6 h-5 mt-0.5"></MarkerIcon>

              <AutoComplete
                bordered={false}
                className="rounded-md"
                style={{
                  width: 300,
                }}
                size="large"
                options={options}
                id="pick_up"
                placeholder="Select Pick-up Location"
                onSelect={onSelect}
                onSearch={onSearch}
                onChange={startingPlaceChange}
              />
            </div>
          </div>

          <div className="pb-2.5">
            <div className="flex flex-col border border-primary-500 rounded">
              <DatePicker
                id="startDate"
                disabledDate={handleStartDate}
                bordered={false}
                className="rounded-md"
                size="large"
              />
            </div>
          </div>
          <div className="pb-2.5">
            <div className="flex flex-col border border-primary-500 rounded">
              <DatePicker
                id="endDate"
                disabledDate={handleEndDate}
                bordered={false}
                className="rounded-md"
                size="large"
              />
            </div>
          </div>

          <div className="pb-2.5">
            <Button
              id="search_btn"
              className="rounded-md bg-primary-500 w-full"
              type="primary"
              icon={<SearchIcon className="w-6 h-5 mt-0.5" />}
              size="large"
              onClick={onSubmit}
            >
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarRentSearch;
