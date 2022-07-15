import { ADD, REMOVE, UPDATE } from "./actionTypes";

export const add = (addItens) => ({
  type: ADD,
  addItens,
});
export const remove = (removeItens) => ({
  type: REMOVE,
  removeItens,
});
export const update = (updateItens) => ({
  type: UPDATE,
  updateItens,
});
