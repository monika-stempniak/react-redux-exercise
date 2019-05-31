import Axios from "axios";
import { nextId } from "../../utils/nextId";

import { asyncActionCreatorFactory } from "../../utils/asyncActionCreatorFactory";
import { config } from "../../config";

const API_URL_COMMENTS = `${config.api}/posts/1/comments`;

const fetchAllComments = asyncActionCreatorFactory(
  "COMMENTS",
  (dispatch, getState) => {
    return Axios(API_URL_COMMENTS);
  }
);

const addCommentRequest = () => ({
  type: "ADD_COMMENTS_REQUEST",
});

const addCommentSuccess = (data) => ({
  type: "ADD_COMMENTS_SUCCESS",
  payload: data,
});

const addCommentFailure = (error) => ({
  type: "ADD_COMMENTS_FAILURE",
  payload: error,
});

const addNewComment = (comment) => (dispatch, getState) => {
  const state = getState();
  dispatch(addCommentRequest());
  Axios.post(API_URL_COMMENTS, comment)
    .then((response) => response.data)
    .then((comment) => {
      const comments = state.comments.data;
      const newComment = nextId(comment, comments);
      const updatedComments = [newComment, ...comments];
      dispatch(addCommentSuccess(updatedComments));
    })
    .catch((error) => dispatch(addCommentFailure(error)));
};

export const actions = {
  fetchAllComments,
  addNewComment,
};
