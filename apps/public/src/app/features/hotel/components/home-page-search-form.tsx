import { DownOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import {
  AutoComplete,
  Button,
  DatePicker,
  Divider,
  Input,
  Popover,
} from 'antd';
import { format } from 'date-fns';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NumberParam, StringParam, useQueryParams } from 'use-query-params';
import {
  SearchIcon,
  UserFriendsIcon,
  VectorIcon,
} from '../../../components/icons';

function HomePageSearchForm() {
  const [city, setCity] = useState('');
  const [options, setOptions] = useState([]);
  const [roomQuantity, setRoomQuantity] = useState(1);
  const [childrenQuantity, setChildrenQuantity] = useState(0);
  const [adultQuantity, setAdultQuantity] = useState(1);
  const [params, setParams] = useState({});
  const [dateRange, setDateRange] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });
  const onSearch = (val) => {
    console.log('onSearch', val);
    setOptions(!val ? [] : [mockVal(val), mockVal(val, 2), mockVal(val, 3)]);
  };
  const onSelect = (data) => {
    setCity(data);
    console.log('selected city', city, data);
  };

  const updateAdult = (value) => {
    setAdultQuantity(value.target.value);
  };
  const updateQuantity = (value) => {
    setRoomQuantity(value.target.value);
  };

  const updateChildren = (value) => {
    setChildrenQuantity(value.target.value);
  };

  function increaseAdultQuantity() {
    setAdultQuantity(Number(adultQuantity) + 1);
  }
  function decreaseAdultQuantity() {
    setAdultQuantity(Number(adultQuantity) - 1);
  }
  function increaseChildQuantity() {
    setChildrenQuantity(Number(childrenQuantity) + 1);
  }
  function decreaseChildQuantity() {
    setChildrenQuantity(Number(childrenQuantity) - 1);
  }
  function increaseRoomQuantity() {
    setRoomQuantity(Number(roomQuantity) + 1);
  }
  function decreaseRoomQuantity() {
    setRoomQuantity(Number(roomQuantity) - 1);
  }

  function changeQuantity(value) {
    if (value.change === 'adult' && value.state === 'increase') {
      increaseAdultQuantity();
    } else if (value.change === 'adult' && value.state === 'decrease') {
      decreaseAdultQuantity();
    } else if (value.change === 'children' && value.state === 'increase') {
      increaseChildQuantity();
    } else if (value.change === 'children' && value.state === 'decrease') {
      decreaseChildQuantity();
    } else if (value.change === 'room' && value.state === 'increase') {
      increaseRoomQuantity();
    } else if (value.change === 'room' && value.state === 'decrease') {
      decreaseRoomQuantity();
    }
  }

  const content = (
    <div className="flex justify-between" style={{ width: 255 }}>
      <div className="flex flex-col">
        <span className="py-2">Adults</span>
        <span className="py-2">
          Children <br></br>
          <small>Ages 0 - 17</small>
        </span>
        <span className="py-2">Rooms</span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Button
            icon={<MinusOutlined />}
            size="large"
            id="adult_reduce"
            onClick={() =>
              changeQuantity({ change: 'adult', state: 'decrease' })
            }
          />
          <Input
            style={{ width: 50 }}
            size="large"
            id="adult"
            value={adultQuantity}
            onChange={updateAdult}
          />
          <Button
            icon={<PlusOutlined />}
            size="large"
            id="adult_add"
            onClick={() =>
              changeQuantity({ change: 'adult', state: 'increase' })
            }
          />
        </div>
        <div className="flex gap-2">
          <Button
            icon={<MinusOutlined />}
            size="large"
            id="children_reduce"
            onClick={() =>
              changeQuantity({ change: 'children', state: 'decrease' })
            }
          />
          <Input
            style={{ width: 50 }}
            value={childrenQuantity}
            size="large"
            id="children"
            onChange={updateChildren}
          />
          <Button
            icon={<PlusOutlined />}
            size="large"
            id="children_add"
            onClick={() =>
              changeQuantity({ change: 'children', state: 'increase' })
            }
          />
        </div>
        <div className="flex gap-2">
          <Button
            icon={<MinusOutlined />}
            size="large"
            id="room_reduce"
            onClick={() =>
              changeQuantity({ change: 'room', state: 'decrease' })
            }
          />
          <Input
            style={{ width: 50 }}
            size="large"
            id="room"
            value={roomQuantity}
            onChange={updateQuantity}
          />
          <Button
            icon={<PlusOutlined />}
            size="large"
            id="room_add"
            onClick={() =>
              changeQuantity({ change: 'room', state: 'increase' })
            }
          />
        </div>
      </div>
    </div>
  );

  const inputValue = (
    <div className="flex flex-col">
      <span>
        {adultQuantity} Adult | {childrenQuantity} Children
      </span>
      <div className="text-center">
        <span>{roomQuantity} Room</span>
      </div>
    </div>
  );

  const { RangePicker } = DatePicker;
  const [paramQuery, setParamQuery] = useQueryParams({
    city: StringParam,
    roomQuantity: NumberParam,
    adultQuantity: NumberParam,
    childrenQuantity: NumberParam,
    startDate: StringParam,
    endDate: StringParam,
    tab: StringParam,
  });

  const history = useHistory();

  useEffect(() => {
    if (paramQuery.city) setCity(paramQuery.city);
    if (paramQuery.roomQuantity !== undefined)
      setRoomQuantity(paramQuery.roomQuantity);
    if (paramQuery.adultQuantity !== undefined)
      setAdultQuantity(paramQuery.adultQuantity);
    const value = [];
    if (paramQuery.startDate) {
      value[0] = moment(paramQuery.startDate, 'YYYY-MM-DD');
    }
    if (paramQuery.endDate) {
      value[1] = moment(paramQuery.endDate, 'YYYY-MM-DD');
    }

    setDateRange(value);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(dateRange);
    const startDateFormat = format(dateRange[0], 'YYYY-MM-DD');
    const endDateFormat = format(dateRange[1], 'YYYY-MM-DD');

    setStartDate(startDateFormat);
    setEndDate(endDateFormat);
    let paramText = `?city=${city}`;
    if (startDate) {
      paramText = `${paramText}&startDate=${startDate}`;
    }
    if (endDate) {
      paramText = `${paramText}&endDate=${endDate}`;
    }
    if (roomQuantity) {
      paramText = `${paramText}&roomQuantity=${roomQuantity}`;
    }
    if (adultQuantity) {
      paramText = `${paramText}&adultQuantity=${adultQuantity}`;
    }
    if (childrenQuantity) {
      paramText = `${paramText}&childrenQuantity=${childrenQuantity}`;
    }

    history.push({
      pathname: '/hotel/search',
      search: paramText,
    });
    setParams(city);
  };

  const handleData = (time) => {
    if (!time) {
      return false;
    } else {
      return time < moment().subtract(1, 'days');
    }
  };

  const handleDateTypeChange = (value) => {
    setDateRange(value);
    const startDateFormat = format(value[0], 'YYYY-MM-DD');
    const endDateFormat = format(value[1], 'YYYY-MM-DD');
    console.log(value, startDateFormat, endDateFormat);

    setStartDate(startDateFormat);
    setEndDate(endDateFormat);
  };

  return (
    <div className="px-5 py-20">
      <form className="add-form" onSubmit={onSubmit}>
        <div className="md:flex md:gap-2.5">
          <div className="pb-2.5">
            <div className="border border-primary-500 flex justify-between rounded text-black md:gap-1.5">
              <span className="px-2 py-4">
                <SearchIcon className="w-6 h-5 mt-0.5" />
              </span>
              <AutoComplete
                className="py-3 w-96"
                options={options}
                style={{ fontSize: 'large' }}
                bordered={false}
                id="city"
                onSelect={onSelect}
                onSearch={onSearch}
                placeholder="search city"
              />
            </div>
          </div>
          <div className="pb-2.5">
            <div className="border border-primary-500 flex justify-between rounded text-black md:gap-1.5">
              <span className="px-2 py-4">
                <VectorIcon className="w-6 h-5 mt-0.5" />
              </span>
              <RangePicker
                bordered={false}
                size="large"
                value={dateRange}
                id="date_range"
                disabledDate={handleData}
                suffixIcon={<span />}
                separator={
                  <Divider
                    type="vertical"
                    style={{ height: '40px', backgroundColor: '#16586F' }}
                  />
                }
                onChange={handleDateTypeChange}
              />
            </div>
          </div>
          <div className="pb-2.5">
            <Popover placement="bottom" content={content} trigger="click">
              <div className="border border-primary-500 flex justify-between rounded text-black p-2 gap-2.5">
                <UserFriendsIcon className="w-6 h-5 mt-0.5" />
                {inputValue}
                <i>
                  <DownOutlined />
                </i>
              </div>
            </Popover>
          </div>

          <div className="pb-2.5">
            <Button
              className="rounded-md bg-primary-500 w-full"
              type="primary"
              id="submit"
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
}

export default HomePageSearchForm;
