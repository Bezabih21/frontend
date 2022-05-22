import React from 'react';

function FormHeader() {
  return (
    <div>
      {/* content based on the page route */}
      <div className="pb-4">
        <h5 className="text-2xl font-bold">Room and Pricing</h5>
        <small className="font-bold" style={{ fontSize: '16px' }}>
          Tell us about your first room. After entering all the necessary info,
          you can fill in the details of your other rooms later.
        </small>
      </div>
    </div>
  );
}

export default FormHeader;
