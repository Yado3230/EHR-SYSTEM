import React from 'react';

const Unauthorized = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center text-3xl font-bold">401</div>
      <div className="ui divider"></div>
      <div className="flex justify-center text-3xl font-bold">
        UNAUTHORIZED ACCESS
      </div>
    </div>
  );
};

export default Unauthorized;
