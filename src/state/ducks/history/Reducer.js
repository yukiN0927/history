import actions from "./Actions";
import { handleActions } from "redux-actions";

export const initialState = {
  page: "Top",
};

export const Reducer = handleActions(
  {
    [actions.setPage]: (state, action) => ({
      ...state,
      page: action.payload.page,
    }),
  },
  initialState
);
export default Reducer;
