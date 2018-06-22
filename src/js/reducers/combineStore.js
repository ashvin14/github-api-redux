import { combineReducers } from "redux";
import userFetcher from "./userFetcher";

const combineStore = combineReducers({
  userFetcher
});

export default combineStore;
