import React from 'react';
import { useHistory } from 'react-router-dom';

function Choose({ category }) {
  const history = useHistory();
  return (
    <div
      className="p-1 flex flex-col items-center gap-4 text-center"
      style={{ width: 246, height: 265, cursor: 'pointer' }}
      onClick={() => history.push(`../${category.url}`)}
    >
      <div
        className="bg-White items-center p-14 rounded shadow-md w-60"
        style={{
          backgroundSize: 'cover',
          height: '215px',
          position: 'relative',
        }}
      >
        <div className="flex flex-col gap-10">
          <div className="px-10">{category.icon}</div>

          <div className="items-center">
            <span className="text-center text-black">{category.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
