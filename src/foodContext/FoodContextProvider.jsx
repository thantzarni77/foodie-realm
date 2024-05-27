import { createContext, useState } from "react";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemID) => {
    //firstly check the dish is in the cart or not
    //if not get the id of the dish and give quantity 1
    //if already in the cart, increase the quantity
    if (!cartItems[itemID]) {
      setCartItems((prev) => {
        return { ...prev, [itemID]: 1 };
      });
    } else {
      setCartItems((prev) => {
        return { ...prev, [itemID]: prev[itemID] + 1 };
      });
    }
  };

  //if quantity becomes 0, exit from function
  //so that will prevent getting negative values
  const removeFromCart = (itemID) => {
    if (cartItems[itemID] === 0) {
      return;
    }
    setCartItems((prev) => {
      return { ...prev, [itemID]: prev[itemID] - 1 };
    });
  };

  let contextValues = {
    showCart,
    setShowCart,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <FoodContext.Provider value={contextValues}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
