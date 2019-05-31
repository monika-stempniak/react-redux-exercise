import { asyncReducerFactory } from "../../utils/asyncReducerFactory";

export const comments = asyncReducerFactory("COMMENTS");

export const commentsReducer = {
  comments,
};
