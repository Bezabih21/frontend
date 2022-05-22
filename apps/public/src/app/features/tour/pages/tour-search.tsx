import { AutoComplete, Button, Input } from 'antd';
import React from 'react';
import { SearchIcon } from '../../../components/icons';

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

const TourSearch = () => {
  return (
    <div className="px-5 py-16">
      <form className="add-form" onSubmit={onSubmit}>
        <div className="md:flex md:gap-2.5">
          <div className="md:w-1/2 pb-2.5">
            <div className="flex border border-primary-500 rounded">
              <AutoComplete
                bordered={false}
                className="rounded-md"
                size="large"
                options={places}
                placeholder="City, Region or Country"
                filterOption={(inputValue, option) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
                onChange={startingPlaceChange}
              />
            </div>
          </div>
          <div className="md:w-1/2 pb-2.5">
            <Input
              placeholder="Search attraction or activity (optional)"
              size="large"
            />
          </div>

          <div>
            <Button
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

export default TourSearch;
