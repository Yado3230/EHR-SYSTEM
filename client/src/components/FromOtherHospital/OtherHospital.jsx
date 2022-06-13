import React from 'react';

const OtherHospital = ({ patient, data, hospital }) => {
  return (
    <div>
      <div>
        {data
          .filter(
            item =>
              item.patient.phone === patient && item.hospital.name === hospital
          )
          .map(item => {
            return (
              <div
                key={item._id}
                className={`flex flex-col w-full bg-gray-100 m-4 rounded border shadow sticky top-1/4`}
              >
                <h3 className="bg-blue-400 flex justify-center p-4 font-bold text-2xl text-gray-700 h-12 items-center">
                  Patient Information
                </h3>
                <div className="rounded border m-2 shadow bg-white flex flex-col">
                  <h3 className="bg-gray-100 h-20 flex justify-center p-4 font-bold text-2xl text-gray-700 h-12 items-center">
                    Personal Information
                  </h3>

                  <div className="flex justify-around p-4">
                    <div>
                      <div className="w-40 h-40 rounder border">
                        <img className=" flex" src="" alt="user_Image" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2 ">
                          Name:
                        </span>
                        <span>{item.patient.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2">
                          Age:
                        </span>
                        <span>{item.patient.age}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2">
                          BloodGroup:
                        </span>
                        <span>{item.patient.bloodgroup}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2">
                          Birth Date:
                        </span>
                        <span>{item.patient.birthdate}</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2">
                          Phone:
                        </span>
                        <span>{item.patient.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2">
                          Email:
                        </span>
                        <span>{item.patient.email}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2">
                          Gender:
                        </span>
                        <span>{item.patient.gender}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2">
                          Address:
                        </span>
                        <span>{item.patient.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded border m-2 bg-white shadow flex flex-col">
                  <h3 className="bg-gray-100 h-20 flex justify-center p-4 font-bold text-2xl text-gray-700 h-12 items-center">
                    Medical Information
                  </h3>
                  <div className="flex justify-around p-4">
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2 ">
                          Symptoms:
                        </span>
                        <span>{item.symptoms}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2">
                          BloodPressure:
                        </span>
                        <span>{item.bloodPressure}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2">
                          Temprature:
                        </span>
                        <span>{item.temprature}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2">
                          Surgeries:
                        </span>
                        <span>{item.surgeries}</span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2">
                          Doctor:
                        </span>
                        <span>{item.doctor.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2">
                          Hospital:
                        </span>
                        <span>{item.hospital.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2">
                          Description:
                        </span>
                        <span>{item.description}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-gray-600 p-2">
                          Date:
                        </span>
                        <span>{item.createdAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* prescription */}
                {item.prescription.map(prescription => {
                  return (
                    <div
                      key={prescription._id}
                      className="rounded border m-2 bg-white shadow flex flex-col"
                    >
                      <h3 className="bg-gray-100 h-20 flex justify-center p-4 font-bold text-2xl text-gray-700 h-12 items-center">
                        Prescription
                      </h3>
                      <div className="flex justify-start mx-40 p-4">
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            <span className="font-bold text-gray-600 p-2 ">
                              MedicineName:
                            </span>
                            <span>{prescription.medicineName}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-bold text-gray-600 p-2">
                              Dose:
                            </span>
                            <span>{prescription.dose}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-bold text-gray-600 p-2">
                              Duration:
                            </span>
                            <span>{prescription.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-bold text-gray-600 p-2">
                              Date:
                            </span>
                            <span>{prescription.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OtherHospital;
