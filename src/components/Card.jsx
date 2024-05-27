import { useContext } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { FoodContext } from "../foodContext/FoodContextProvider";
import { food_list } from "../assets/assets";

const Card = ({ category }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(FoodContext);

  return (
    <div className="my-5 flex flex-row flex-wrap justify-center">
      {food_list.map((food) => {
        // if category is all, show all cards
        // if not,check category in the state is same as each food's category
        // and display it
        if (category === "All" || category === food.category) {
          return (
            <div className="foodCard" key={food._id}>
              <div className="mb-2 flex items-center justify-between px-1">
                <div className="font-medium text-blue-600">{food.name}</div>
                <div className="text-[20px]">${food.price}</div>
              </div>
              <img src={food.image} alt={food.name} className="rounded" />
              <div className=" flex w-full items-center justify-evenly self-end ">
                {cartItems[food._id] > 0 && (
                  <button
                    className="mr-1"
                    onClick={() => removeFromCart(food._id)}
                  >
                    <IconContext.Provider
                      value={{
                        color: "rgb(71, 123, 206)",
                        className: "minusIcon",
                      }}
                    >
                      <FaCircleMinus size={25} className="my-2" />
                    </IconContext.Provider>
                  </button>
                )}

                {cartItems[food._id] > 0 ? (
                  <div className="w-3">{cartItems[food._id]}</div>
                ) : (
                  <div className="justify-self-end text-blue-600">
                    Add To Cart
                  </div>
                )}
                <button className="ml-1" onClick={() => addToCart(food._id)}>
                  <IconContext.Provider
                    value={{
                      color: "rgb(71, 123, 206)",
                      className: "plusIcon",
                    }}
                  >
                    <FaCirclePlus size={25} className="my-2" />
                  </IconContext.Provider>
                </button>
              </div>
              <div className="text-center text-[15px]">{food.description}</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
