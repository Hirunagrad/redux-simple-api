import { ActionTypes } from "../contants/action-type";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case ActionTypes.SET_PRODUCTS:
    //   return {...state, products: payload};
    case ActionTypes.FETCH_PRODUCTS:
      return {...state, products: payload};


    default:
      return state;
  }
};

export const selectedproductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SELECTED_PRODUCTS:
        return {...state, ...payload};
      case ActionTypes.REMOVE_SELECTED_PRODUCTS:
         return {};
      default:
        return state;
    }
  };
