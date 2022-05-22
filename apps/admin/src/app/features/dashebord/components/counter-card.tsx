import React from 'react';

export interface CounterCardHeaderProps {
  header: any;
}

function CounterCard(props: CounterCardHeaderProps) {
  return (
    <div className="w-3/12">
      <div className="bg-white p-5 rounded-2xl shadow-lg">
        <div className="flex gap-3">
          <div className={props.header.bg + ' p-5 rounded '}>
            {props.header.icon}
          </div>

          <div className="flex flex-col justify-between">
            <span
              className="font-bold text-2xl text-blue-500"
              style={{ color: props.header.color }}
            >
              {props.header.count}
            </span>
            <small className="text-gray-500" style={{ fontSize: '14px' }}>
              {props.header.text}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterCard;
