import React, { useContext } from "react";
import "./ListOfProducts.css";
import { GlobalContext } from "../../Context/GlobalState";
import Product from "../Product/Product";
const ListOfProducts = () => {
  const { itemList } = useContext(GlobalContext);
  return (
    <div className="list-products">
      <h2>List of Products</h2>
      {itemList.map((item) => (
        <Product key={item.id} item={item}></Product>
      ))}
    </div>
  );
};

export default ListOfProducts;
