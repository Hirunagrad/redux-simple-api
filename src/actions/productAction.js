import axios from "axios";
import fakeStoreApi from "../apis/fakeStoreApi";

import { ActionTypes } from "../contants/action-type";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });

  // const response =  axios.get("https://fakestoreapi.com/products")
  // console.log(response);
  // return {
  //   type: ActionTypes.FETCH_PRODUCTS,
  //   payload: response,
  // };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};

export const RemoveselectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};
