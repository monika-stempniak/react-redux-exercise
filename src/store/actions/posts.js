import Axios from "axios";
import { nextId } from "../../utils/nextId";

import { asyncActionCreatorFactory } from "../../utils/asyncActionCreatorFactory";
import { config } from "../../config";

const API_URL_POSTS = `${config.api}/posts`;

const fetchAllPosts = asyncActionCreatorFactory(
  "POSTS",
  (dispatch, getState) => {
    return Axios(API_URL_POSTS);
  }
);

const addPostRequest = () => ({
  type: "ADD_POSTS_REQUEST",
});

const addPostSuccess = (data) => ({
  type: "ADD_POSTS_SUCCESS",
  payload: data,
});

const addPostFailure = (error) => ({
  type: "ADD_POSTS_FAILURE",
  payload: error,
});

const addNewPost = (post) => (dispatch, getState) => {
  const state = getState();
  dispatch(addPostRequest());
  Axios.post(API_URL_POSTS, post)
    .then((response) => response.data)
    .then((post) => {
      const posts = state.posts.data;
      const newPost = nextId(post, posts);
      const updatedPosts = [newPost, ...posts];
      dispatch(addPostSuccess(updatedPosts));
    })
    .catch((error) => dispatch(addPostFailure(error)));
};

const deletePostRequest = () => ({
  type: "DELETE_POSTS_REQUEST",
});

const deletePostSuccess = (data) => ({
  type: "DELETE_POSTS_SUCCESS",
  payload: data,
});

const deletePostFailure = (error) => ({
  type: "DELETE_POSTS_FAILURE",
  payload: error,
});

const deletePost = (postId) => (dispatch, getState) => {
  const state = getState();
  dispatch(deletePostRequest());
  Axios.delete(`${API_URL_POSTS}/${postId}`)
    .then((response) => response.data)
    .then((data) => {
      const posts = state.posts.data.filter((post) => post.id !== postId);
      dispatch(deletePostSuccess(posts));
    })
    .catch((error) => dispatch(deletePostFailure(error)));
};

export const actions = {
  fetchAllPosts,
  addNewPost,
  deletePost,
};
