import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
const ScrollStyle = {
  color: '#16586f',
  fontSize: '15px',
  lineHeight: '1.5715',
  cursor: 'pointer',
  marginTop: '10%',
};

export interface ScrollProps {
  ItemsList: any[];
  children: any;
}
function ScrollLayOut({ ItemsList, children }: ScrollProps) {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    setItemList(ItemsList);
  }, [ItemsList]);
  function scroll(value) {
    if (value === 'right') {
      setItemList([...itemListMoveRight(itemList)]);
    } else if (value === 'left') {
      setItemList([...itemListMoveLeft(itemList)]);
    }
  }
  function itemListMoveRight(list: any[]) {
    const firstItem = list.shift();
    list.push(firstItem);
    return list;
  }
  function itemListMoveLeft(list: any[]) {
    const lastItem = list.pop();
    list.unshift(lastItem);
    return list;
  }
  return (
    <div className="container">
      <div className="flex">
        <div
          style={{
            ...ScrollStyle,
          }}
          onClick={() => scroll('left')}
        >
          <LeftOutlined />
        </div>
        <div className="flex">
          {itemList.map(
            (item, r) =>
              r < 4 && (
                <div key={r}>
                  - {item.name} {children}-
                </div>
              )
          )}
        </div>
        <div
          style={{
            ...ScrollStyle,
          }}
          onClick={() => scroll('right')}
        >
          <RightOutlined />
        </div>
      </div>
    </div>
  );
}

export default ScrollLayOut;
