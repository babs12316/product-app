import React from "react";
import "./App.css";
import Inventory from "../Components/Inventory/Inventory";
import Cart from "../Components/Cart/Cart";
import ListOfProducts from "../Components/ListOfProducts/ListOfProducts";
import { GlobalProvider } from "../Context/GlobalState";

function App() {
  return (
    <div className="app">
      <GlobalProvider>
        <div>
          <ListOfProducts></ListOfProducts>
        </div>
        <div>
          <Cart></Cart>
        </div>
        <div>
          <Inventory></Inventory>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
