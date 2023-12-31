import React, { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClick={showCartHandler} />}
      <Header onShowCart={showCartHandler} />;
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
