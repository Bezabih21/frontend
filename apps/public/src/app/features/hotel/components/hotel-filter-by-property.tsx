import React from 'react';

export interface FilterByPropertyResultProps {
  propertyResult: any;
}

export const HotelFilterByProperty = (props: FilterByPropertyResultProps) => {
  return (
    <div className="flex flex-col">
      <img
        className="rounded-full shadow-md"
        src={props.propertyResult.picture}
        style={{ height: '124px', width: '124px' }}
      />
      <div className="flex flex-col text-center py-5">
        <strong>{props.propertyResult.propertyType}</strong>
        <small className="font-bold text-gray-400">
          {props.propertyResult.totalResult} {props.propertyResult.propertyType}
        </small>
      </div>
    </div>
  );
};

export default HotelFilterByProperty;
