import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { login } from '../../components/services/authServices';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };
  const login = async e => {
    e.preventDefault();
    const result = await axios
      .post('http://localhost:5000/api/auth/login', user)
      .then(res => {
        console.log(res);
        return res;
      });
    if (result.status === 200) {
      navigate(`/${result.data.data.user.role}`);
      console.log(result.data.data.user.role);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white flex shadow-xl rounded-2xl">
        <div className="flex justify-center relative items-center w-100 h-110 rounded-2xl">
          <h1 className="ml-5 absolute top-4 left-0 text-4xl font-black text-black z-[100]">
            EHR SYSTEM
          </h1>
          <img
            className="w-full h-full rounded-2xl  bg-cover opacity-70 bg-slate-400"
            src="https://buddy-dev.bluemirror.ai/images/user/login.png"
            alt="logo"
          />
        </div>
        <form action="" onSubmit={login}>
          <div className="bg-white relative w-100 h-110 flex flex-col p-5 justify-center items-center rounded-2xl">
            <h1 className="text-3xl absolute font-bold top-10 text-blue-500">
              <span>WELCOME TO EHR SYSTEM</span>
            </h1>
            <h3 className="text-medium font-medium my-8 text-slate-500 italic">
              Signin with email and password
            </h3>
            <div className="flex flex-col w-full">
              <label className="w-full">Email</label>
              <div className="w-full flex justify-center items-center">
                <input
                  className="italic h-12 w-full border border-gray-400 rounded my-3 px-2 focus:outline-none focus:border-blue-500"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
                <MailOutlineIcon fontSize="medium" className="-ml-7" />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="">Password</label>
              <div className="w-full flex justify-center items-center">
                <input
                  className="italic h-12 w-full  border border-gray-400 rounded my-3 px-2 focus:outline-none focus:border-blue-500"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
                <LockOutlinedIcon fontSize="medium" className="-ml-7" />
              </div>
            </div>
            <div className="flex items-center justify-start w-full">
              <input
                type="checkbox"
                className="rounded text-pink-500 mx-2 my-4"
              />
              <span>Remember Me</span>
            </div>
            <input
              className="px-6 py-2 border bg-blue-500 cursor-pointer text-xl text-white font-medium rounded hover:bg-blue-700"
              type="submit"
              value="Sign In"
            />
            <Link
              to="/forgotpassword"
              className="flex mt-3 justify-center text-blue-400 hover:text-blue-600"
            >
              Forgot Password?
            </Link>
            <div className="ui divider w-full"></div>
          </div>
        </form>
      </div>
    </div>
  );
};
// }

export default Login;
