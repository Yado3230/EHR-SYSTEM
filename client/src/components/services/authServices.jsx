import axios from 'axios';

export const login = async (email, password) => {
  const loginresult = await axios
    .post('http://localhost:5000/api/auth/login', {
      email,
      password,
    })
    .then(response => {
      return response.data;
    })
    .then(err => console.log(err));

  console.log('from islogin', loginresult);
};
