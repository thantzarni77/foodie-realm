import { IoMdBasket } from "react-icons/io";
import { IconContext } from "react-icons";
import { useContext, useEffect, useState } from "react";
import { FoodContext } from "../foodContext/FoodContextProvider";

const NavBar = () => {
  const [count, setcount] = useState(0);

  const { cartItems, setShowCart } = useContext(FoodContext);

  const calculateItems = () => {
    //this gathers all quantities of each dish
    let arr = Object.values(cartItems);
    let items = 0;

    //looping quantities and re-adding to get total
    for (let i in arr) {
      items += arr[i];
    }
    setcount(items);
  };

  //use useEffect to recalculate everytime cartItems changes
  useEffect(() => {
    calculateItems();
  }, [cartItems]);

  return (
    <div className="flex items-center justify-between px-10 py-2" id="navbar">
      <h1 className=" text-3xl font-bold text-blue-500">Foodie Realm</h1>
      <button
        className=" flex rounded  px-2 py-1"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <IconContext.Provider
          value={{
            color: "rgb(59, 130, 246)",
            className: "shopIcon",
          }}
        >
          <IoMdBasket size={36} />
        </IconContext.Provider>
        <div className=" h-4 w-4 rounded-full bg-blue-500 text-[10px] font-bold text-white">
          {count}
        </div>
      </button>
    </div>
  );
};

export default NavBar;
