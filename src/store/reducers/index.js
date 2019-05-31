import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import users from "./users";
import { postsReducer } from "./posts";
import { commentsReducer } from "./comments";

const { posts } = postsReducer;
const { comments } = commentsReducer;

const rootReducer = combineReducers({
  users,
  posts,
  comments,
  form: formReducer,
});

export default rootReducer;
