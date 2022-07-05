import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts, setProducts } from "../actions/productAction";

import ProductComponent from "./productComponent";

function ProductListing() {
  const dispatch = useDispatch();
  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="ui grid container" style={{ marginTop: "20px" }}>
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
