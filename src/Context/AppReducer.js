export default (state, action) => {
  switch (action.type) {
    case "ADD_LIST_ITEM":
      return {
        ...state,
        itemList: [action.payload, ...state.itemList],
      };
    case "DELETE_LIST_ITEM":
      return {
        ...state,
        itemList: state.itemList.filter((item) => item.id !== action.payload),
      };

    case "ADD_CART_ITEM":
      return {
        ...state,
        cartList: [action.payload, ...state.cartList],
      };

    case "CHANGE_CART_ITEM_COUNT":
      let updatedCartList = state.cartList;
      updatedCartList[action.payload]["count"]++;
      return {
        ...state,
        cartList: [...updatedCartList],
      };

    case "DELETE_CART_ITEM":
      return {
        ...state,
        cartList: state.cartList.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
