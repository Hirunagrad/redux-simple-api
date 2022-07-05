import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const Renderlist = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt="" />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price"></div>
              <div className="meta"></div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });

  //const { id , title } = products[0];
  return <>{Renderlist}</>;
}

export default ProductComponent;
