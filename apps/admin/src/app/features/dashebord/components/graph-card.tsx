import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

function GraphCard() {
  return (
    <div className="">
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <div className="flex justify-between">
          <span className="font-bold">Total Bookings</span>

          <span>
            Show:{' '}
            <Select
              defaultValue="month"
              style={{ width: 120, color: '#109CF1' }}
            >
              <Option value="month">This Month</Option>
            </Select>
          </span>
        </div>
        <div className="py-8">
          <img src="../../../../assets/images/graph.png" />
        </div>
      </div>
    </div>
  );
}

export default GraphCard;
