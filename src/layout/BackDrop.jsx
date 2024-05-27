import { useContext } from "react";
import Cart from "../components/Cart";
import { FoodContext } from "../foodContext/FoodContextProvider";

const BackDrop = () => {
  const { showCart, setShowCart } = useContext(FoodContext);
  return (
    <>
      {showCart && (
        <div className="md:p10 fixed top-0 z-20 flex h-screen w-full items-center justify-center bg-[rgba(0,0,0,0.3)] p-2">
          <Cart />
        </div>
      )}
    </>
  );
};

export default BackDrop;
