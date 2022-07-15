import { ADD, REMOVE, UPDATE } from "./actionTypes";

const initialState = [];

const itensReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return action.addItens;
    case REMOVE:
      return action.removeItens;
    case UPDATE:
      return action.updateItens;
    default:
      return state;
  }
};

export default itensReducer;
