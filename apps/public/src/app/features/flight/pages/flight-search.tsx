import { AutoComplete, Button, DatePicker, Select } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ReturnIcon, SearchIcon } from '../../../components/icons';
const { Option } = Select;
const { RangePicker } = DatePicker;

export const FlightSearch = () => {
  const [options, setOptions] = useState([]);
  const [tripType, setTripType] = useState('roundTrip');
  const [adultQuantity, setAdultQuantity] = useState('oneAdult');
  const [flightType, setFlightType] = useState('economy');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [startDate, setStartDateState] = useState('');
  const [returnDate, setReturnDateState] = useState('');
  const history = useHistory();
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

  const onSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/flight/search',
      search: `tripType=${tripType}&adultQuantity=${adultQuantity}&flightType=${flightType}&from=${from}&to=${to}&startDate=${startDate}&returnDate=${returnDate}`,
    });
    console.log(tripType, startDate, returnDate);
  };

  const handleStartDate = (time) => {
    if (!time) {
      return false;
    } else {
      return time < moment().subtract(1, 'days');
    }
  };
  function onStartDateChange(date, dateString) {
    setStartDateState(dateString);
    handleEndDate(startDate);
  }
  const handleEndDate = (time) => {
    let diffrence = 3;
    console.log(diffrence);
    if (!time) {
      return false;
    } else {
      return time + diffrence < moment().subtract(1, 'days');
    }
  };

  function onEndDateChange(date, dateString) {
    setReturnDateState(dateString);
  }
  function startingPlaceChange(value) {
    setFrom(value);
  }
  function finalPlaceChange(value) {
    setTo(to);
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
            <div className="flex flex-col border border-primary-500 rounded">
              <span className="text-black px-3">From</span>
              <AutoComplete
                bordered={false}
                className="rounded-md"
                id="start_point"
                style={{
                  width: 300,
                }}
                size="large"
                options={options}
                placeholder="search starting point"
                onChange={startingPlaceChange}
                onSelect={onSelect}
                onSearch={onSearch}
              />
            </div>
          </div>
          <div className="hidden md:block">
            <ReturnIcon className="w-10 mt-0.5"></ReturnIcon>
          </div>
          <div className="pb-2.5">
            <div className="flex flex-col border border-primary-500 rounded">
              <span className="text-black px-3">To</span>
              <AutoComplete
                id="destination"
                bordered={false}
                className="rounded-md"
                style={{
                  width: 300,
                }}
                size="large"
                options={options}
                placeholder="search destination"
                onSelect={onSelect}
                onSearch={onSearch}
                onChange={finalPlaceChange}
              />
            </div>
          </div>
          <div className="pb-2.5">
            <div className="flex flex-col border border-primary-500 rounded">
              <span className="text-black px-3">DEPARTURE</span>
              <DatePicker
                id="start_date"
                disabledDate={handleStartDate}
                bordered={false}
                className="rounded-md"
                size="large"
                onChange={onStartDateChange}
              />
            </div>
          </div>
          <div className="pb-2.5">
            <div className="flex flex-col border border-primary-500 rounded">
              <span className="text-black px-3">RETURN</span>
              <DatePicker
                id="end_date"
                disabledDate={handleEndDate}
                bordered={false}
                className="rounded-md"
                size="large"
                onChange={onEndDateChange}
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

export default FlightSearch;
