import React, { useState } from 'react';
import Calendar from 'react-calendar';

function Calender() {
  const [date, setDate] = useState(new Date());
  const handleChange = date => {
    setDate(date);
  };
  return (
    <div className="m-4 border rounded shadow bg-white flex flex-col">
      <h3 className="rounded border bg-gray-200 p-2 my-2">Calendar</h3>
      <div className="w-full p-4">
        <Calendar onChange={handleChange} value={date} />
      </div>
    </div>
  );
}

export default Calender;
