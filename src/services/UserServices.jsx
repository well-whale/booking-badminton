import axios from "./axios";

const newUser = (user) => {
  return axios.post('demo/admin/create-users', user);
};

const fetchAllUsers = () => {
  return axios.get('demo/admin/list-users');
};

const fetchAllCourts = () => {
  return axios.get('court/getAllCourt');
};

export { newUser, fetchAllUsers,fetchAllCourts };
