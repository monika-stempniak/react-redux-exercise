import Axios from "axios";

import { asyncActionCreatorFactory } from "../../utils/asyncActionCreatorFactory";
import { config } from "../../config";

const API_URL_USERS = `${config.api}/users`;

const fetchAllUsers = asyncActionCreatorFactory(
  "USERS",
  (dispatch, getState) => {
    return Axios(API_URL_USERS);
  }
);

export const actions = {
  fetchAllUsers,
};
