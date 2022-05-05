import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };
  const submit = async e => {
    e.preventDefault();
    const result = await axios
      .post('http://localhost:5000/api/auth/forgotPassword', user)
      .then(res => {
        console.log(res);
        return res;
      });
    if (result.status === 200) {
      navigate(`/resetPassword`);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <form
          action=""
          className="ui flex flex-col form w-120 m-4 p-10 bg-white border shadow rounded"
          onSubmit={submit}
        >
          <div className="text-2xl font-bold">Forgot Your Password</div>
          <div className="ui divider"></div>
          <label htmlFor="" className="font-normal">
            Please enter your email address to forgot for your password
          </label>
          <div className="field">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="ui divider"></div>
          <div className="self-end">
            <input
              className="px-6 py-2 border bg-gray-400 cursor-pointer text-xl text-white font-medium rounded hover:bg-gray-500"
              type="submit"
              value="Cancel"
            />
            <input
              className="px-6 py-2 border bg-blue-500 cursor-pointer text-xl text-white font-medium rounded hover:bg-blue-700"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
