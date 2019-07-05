import {TODO} from "./types";

export function todo() {
  return async dispatch => {
    dispatch({type: TODO});
  };
}
