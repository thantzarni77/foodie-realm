import { useContext, useEffect, useState } from "react";
import CartItems from "./CartItems";
import { FoodContext } from "../foodContext/FoodContextProvider";
import { food_list } from "../assets/assets";

const Cart = () => {
  const { cartItems, setCartItems, setShowCart } = useContext(FoodContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotal = () => {
    let price = 0;
    let toCalculate = food_list.filter((food) => cartItems[food._id]);

    toCalculate.forEach((food) => {
      price += food.price * cartItems[food._id];
    });

    setTotalPrice(price);
  };

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const orderHandle = () => {
    alert("Your Items are ordered");
    setShowCart(false);
    setCartItems({});
  };

  return (
    <div className="z-20 max-h-full w-full overflow-scroll rounded bg-white p-4 text-2xl font-bold">
      {totalPrice != 0 && <div>Your added food items here</div>}
      {totalPrice != 0 && (
        <div
          className="mb-[-1
        0px] mt-2 flex justify-between px-3 text-[17px] font-normal md:text-[18px]"
        >
          <div className="ml-4">Item </div>
          <div className="ml-[60px] mr-10 md:ml-[20px] md:mr-0 ">Price </div>
          <div className="mr-[20px] md:mr-0">Quantity </div>
          <div className="mr-8 md:mr-[60px]">Subtotal </div>
        </div>
      )}
      {food_list.map((food) => {
        if (cartItems[food._id]) {
          return (
            <CartItems
              key={food._id}
              id={food._id}
              name={food.name}
              image={food.image}
              price={food.price}
              quantity={cartItems[food._id]}
            />
          );
        }
      })}
      <div className="flex items-center justify-between">
        {totalPrice === 0 ? (
          <div>Currently has no items, add some items to buy</div>
        ) : (
          <div>Total : $ {totalPrice}</div>
        )}
        <div>
          <button
            className="cancelBtn"
            onClick={() => {
              setShowCart(false);
            }}
          >
            Cancel
          </button>
          {totalPrice != 0 && (
            <button className="proceedBtn" onClick={orderHandle}>
              Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
