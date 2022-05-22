import React from 'react';

function FooterLayOut(props: { backBtn?: any; nextBtn?: any }) {
  return (
    <div className="flex gap-4 justify-end font-bold py-4">
      {props.backBtn} {props.nextBtn}
    </div>
  );
}

export default FooterLayOut;
