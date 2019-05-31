import { asyncReducerFactory } from "../../utils/asyncReducerFactory";

export const posts = asyncReducerFactory("POSTS");

export const postsReducer = {
  posts,
};
