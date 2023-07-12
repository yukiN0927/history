import { createActions } from "redux-actions";
const Actions = createActions({
  setPage: (page) => ({ page }),
});

export default Actions;
