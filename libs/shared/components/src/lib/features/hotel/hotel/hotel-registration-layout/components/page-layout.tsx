import React from 'react';

function PageLayout(props: {
  title: string;
  subTitle?: string;
  font?: string;
  content: any;
}) {
  return (
    <div className="bg-white p-4 rounded">
      <div className="flex gap-4">
        <div className="w-1/5">
          <div className="flex flex-col gap-4">
            <span className="text-gray-400" style={{ fontSize: '16px' }}>
              {props.title}
            </span>
            <small className={props.font}>{props.subTitle}</small>
          </div>
        </div>
        <div className="w-4/5">{props.content}</div>
      </div>
    </div>
  );
}

export default PageLayout;
