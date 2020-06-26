import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import "./InventoryList.css";
const InventoryList = () => {
  const { itemList } = useContext(GlobalContext);
  const { deleteListItem } = useContext(GlobalContext);
  return (
    <div className="inventory-list">
      <div> List of Products</div>
      {itemList.map((item, index) => (
        <div key={item.id} id={item.id}>
          <span>{item.title}</span>
          <span onClick={() => deleteListItem(item.id)}>&nbsp;&nbsp;x</span>
        </div>
      ))}
    </div>
  );
};

export default InventoryList;
