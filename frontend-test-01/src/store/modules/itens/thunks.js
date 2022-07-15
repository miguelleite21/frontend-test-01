import { add, remove, update } from "./actions";

export const addNewItem = (item) => {
  return (dispatch, getState) => {
    const { list } = getState();

    const addItens = [...list, item];

    dispatch(add(addItens));
  };
};

export const removeNewItem = (item) => {
  return (dispatch, getState) => {
    const { list } = getState();

    const removeItens = list.filter((i) => i !== item);

    dispatch(remove(removeItens));
  };
};

export const UpdateNewItem = (item, data) => {
  return (dispatch, getState) => {
    const { list } = getState();

    const index = list.findIndex((i) => i === item);
    list.splice(index, 1, data);
    const updateItens = [...list];

    dispatch(update(updateItens));
  };
};
