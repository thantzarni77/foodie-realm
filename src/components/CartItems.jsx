import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { useContext } from "react";
import { FoodContext } from "../foodContext/FoodContextProvider";

const CartItems = ({ name, image, price, quantity, id }) => {
  const { addToCart, removeFromCart } = useContext(FoodContext);

  return (
    <div className="foodCardWrapper">
      <div className="mr-4 md:mr-0">
        <div className="w-20 text-[15px] md:text-[18px]">{name}</div>
        <img
          src={image}
          alt={name}
          className=" size-[60px] rounded py-2 md:size-20"
        />
      </div>
      <div className="ml-3 w-10 md:ml-5 md:w-10">$ {price}</div>
      <div className="ml-6 flex w-[130px] flex-col items-center  md:ml-[-10px]">
        <div className="my-2 text-[18px]">{quantity}</div>
        <div>
          <button onClick={() => addToCart(id)} className="mx-2">
            <IconContext.Provider
              value={{
                color: "rgb(71, 123, 206)",
                className: "plusIcon",
              }}
            >
              <FaCirclePlus size={22} className="my-2 size-[24px] md:size-6" />
            </IconContext.Provider>
          </button>
          <button onClick={() => removeFromCart(id)}>
            <IconContext.Provider
              value={{
                color: "rgb(71, 123, 206)",
                className: "minusIcon",
              }}
            >
              <FaCircleMinus size={22} className="my-2 size-[24px] md:size-6" />
            </IconContext.Provider>
          </button>
        </div>
      </div>
      <div className="w-[100px] pl-10 text-[18px] md:ml-0 md:pl-0">
        $ {price * quantity}
      </div>
    </div>
  );
};

export default CartItems;
