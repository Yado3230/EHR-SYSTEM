import React from 'react';

const EditUser = () => {
  return (
    <div>
      <div className="flex flex-col w-4/6 bg-white m-4 rounded border shadow fixed top-1/4 left-1/4">
        <h3 className="flex justify-center pt-4 font-bold text-2xl text-gray-700 h-12 items-center">
          More Details
        </h3>
        <div className="ui divider"></div>
        <div className="flex justify-around p-4">
          <div>
            <div className="w-40 h-40 rounder border">
              <img className=" flex" src="" alt="user_Image" />
            </div>
            <span>Patient</span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2 ">Name:</span>
              <span>Yared Mesele</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">Age:</span>
              <span>24</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">BloodGroup:</span>
              <span>Yared Mesele</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">Birth Date:</span>
              <span>Yared Mesele</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">Phone:</span>
              <span>0932308204</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">Email:</span>
              <span>yaredooo</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">Gender:</span>
              <span>Male</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">
                Marital Status:
              </span>
              <span>Single</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">Address:</span>
              <span>Yared Mesele</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-600 py-2">something:</span>
              <span>0932308204</span>
            </div>
          </div>
        </div>
        <div className="ui divider"></div>
      </div>
    </div>
  );
};

export default EditUser;
