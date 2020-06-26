import React, { useContext, useState } from "react";
import "./Inventory.css";
import { GlobalContext } from "../../Context/GlobalState";
import InventoryList from "../InventoryList/InventoryList";
const Inventory = () => {
  const { addListItem } = useContext(GlobalContext);
  const { itemList } = useContext(GlobalContext);
  let [id, setId] = useState(0);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addListItem({
      id: id,
      title: title,
      price: price,
      url: url,
      description: description,
    });
    setId(id + 1);
  };
  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          id="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        ></input>
        <input
          type="text"
          id="price"
          required
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        ></input>
        <div>
          <input
            type="text"
            id="image-url"
            required
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Image Url"
          ></input>
        </div>
        <div>
          <textarea
            placeholder="Description"
            required
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button id="add-inventory">Add Product</button>
      </form>
      {itemList.length > 0 && <InventoryList></InventoryList>}
    </div>
  );
};

export default Inventory;
