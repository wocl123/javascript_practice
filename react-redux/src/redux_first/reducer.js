import { combineReducers } from "redux";

import addnumReducer from "./addnumReducer";
import countingReducer from "./countingReducer";

const reducer = combineReducers({
  value: addnumReducer,
  count: countingReducer,
});

export default reducer;
