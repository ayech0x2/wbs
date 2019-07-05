import {TODO} from "../actions/todo/types";

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case TODO:
      return {...state, message: action.payload};

    default:
      return state;
  }
};

export default todoReducer;
