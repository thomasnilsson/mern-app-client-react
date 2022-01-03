import axios from "axios";

const url =
  process.env.REACT_APP_BACKEND_URL ||
  "https://thomas-mern.herokuapp.com/posts";

export const fetchPosts = () => axios.get(`${url}/fetchPosts`);
export const createPost = (post) => axios.post(`${url}/createPost`, post);
export const updatePost = (id, post) =>
  axios.patch(`${url}/updatePost/${id}`, post);
export const deletePost = (id) => axios.delete(`${url}/deletePost/${id}`);
export const likePost = (id) => axios.patch(`${url}/likePost/${id}`);
