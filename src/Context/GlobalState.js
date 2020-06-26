import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  itemList: [],
  cartList: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function addListItem(list_item) {
    dispatch({
      type: "ADD_LIST_ITEM",
      payload: list_item,
    });
  }
  function deleteListItem(id) {
    dispatch({
      type: "DELETE_LIST_ITEM",
      payload: id,
    });
  }

  function addCartItem(cart_item) {
    dispatch({
      type: "ADD_CART_ITEM",
      payload: cart_item,
    });
  }

  function changeCartItemCount(id) {
    dispatch({
      type: "CHANGE_CART_ITEM_COUNT",
      payload: id,
    });
  }

  function deleteCartItem(id) {
    dispatch({
      type: "DELETE_CART_ITEM",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        itemList: state.itemList,
        cartList: state.cartList,
        addListItem,
        deleteListItem,
        addCartItem,
        changeCartItemCount,
        deleteCartItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
