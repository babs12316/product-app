import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import "./Product.css";
const Product = (props) => {
  const { addCartItem } = useContext(GlobalContext);
  const { cartList } = useContext(GlobalContext);
  const { changeCartItemCount } = useContext(GlobalContext);

  const handleClick = (selectedItem) => {
    const cartItem = { ...selectedItem, count: 1 };
    const alreadyAdded = cartList.find(
      (element) => element.id === selectedItem.id
    );
    if (alreadyAdded === undefined) {
      addCartItem(cartItem);
    } else {
      //if item is already added in cart then only increase its count
      const itemIndex = cartList.findIndex(
        (element) => element.id === selectedItem.id
      );
      changeCartItemCount(itemIndex);
    }
  };
  return (
    <div className="product" id={props.item.id}>
      <div className="left">
        <img src={props.item.url} alt="product"></img>
      </div>

      <div>
        <span>{props.item.title}</span>
        <span>{props.item.price}$</span>
      </div>
      <div>{props.item.description}</div>
      <button onClick={() => handleClick(props.item)}>Add To Order</button>
    </div>
  );
};

export default Product;
