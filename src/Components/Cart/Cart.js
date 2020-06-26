import React, { useContext } from "react";
import "./Cart.css";
import { GlobalContext } from "../../Context/GlobalState";
const Cart = () => {
  const { cartList } = useContext(GlobalContext);
  const { deleteCartItem } = useContext(GlobalContext);
  const reducer = (accumulator, item) => {
    return accumulator + item.price * item.count;
  };
  const totalPrice = cartList.reduce(reducer, 0);
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartList.map((item) => (
        <div className="cart-item" id={item.id} key={item.id}>
          <div>
            <span className="cart-title">{item.title}</span>
            <span className="cart-right cart-price">{item.price}$</span>
            <span
              className="cart-delete"
              onClick={() => deleteCartItem(item.id)}
            >
              x
            </span>
          </div>
          <div>
            <span className="quantity">Quantity:</span>
            <span className="cart-right quantity">{item.count}</span>
          </div>
        </div>
      ))}
      {cartList.length > 0 && (
        <div className="total">
          <span>Total Price</span>
          <span className="cart-right">{totalPrice}</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
