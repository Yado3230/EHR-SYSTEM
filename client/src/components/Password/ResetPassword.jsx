import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ResetPassword() {
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    password: '',
    confirmPassword: '',
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
      .patch(
        `http://localhost:5000/api/auth/resetPassword/${params.token}`,
        user
      )
      .then(res => {
        console.log(res);
        return res;
      });
    if (result.status === 200) {
      navigate(`/`);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action=""
        className="ui form w-120 m-4 p-10 bg-white border shadow rounded"
        onSubmit={submit}
      >
        <div className="text-2xl font-bold">Please Enter New Password</div>
        <div className="ui divider"></div>
        <div className="field">
          <label htmlFor="">New Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="ui divider"></div>
        <input
          className="px-6 py-2 justify-self-center border bg-blue-500 cursor-pointer text-xl text-white font-medium rounded hover:bg-blue-700"
          type="submit"
          value="Confirm"
        />
      </form>
    </div>
  );
}

export default ResetPassword;
