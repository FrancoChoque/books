import Axios from 'axios';

export const signUpService = () => (new Promise((resolve, reject) => {
  Axios.get(`${process.env.REACT_APP_API_URL}/auth/signup`)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
}));

export const signInService = () => (new Promise((resolve, reject) => {
  Axios.get(`${process.env.REACT_APP_API_URL}/auth/signin`)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
}));
