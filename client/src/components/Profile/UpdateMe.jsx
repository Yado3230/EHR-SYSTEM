import React from 'react';

function UpdateMe() {
  return (
    <form
      action=""
      className="ui form my-4 p-8 bg-gray-50 border shadow rounded"
    >
      <div className="text-2xl font-bold">Change Your Email Address</div>
      <div className="ui divider"></div>
      <div className="field">
        <label htmlFor="">New Email</label>
        <input type="email" />
      </div>
      <div className="field">
        <label htmlFor="">Password</label>
        <input type="password" />
      </div>
      <div className="ui divider"></div>
      <input
        className="px-6 py-2 justify-self-center border bg-blue-500 cursor-pointer text-xl text-white font-medium rounded hover:bg-blue-700"
        type="submit"
        value="Confirm"
      />
    </form>
  );
}

export default UpdateMe;
