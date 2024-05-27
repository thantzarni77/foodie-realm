import Card from "../components/Card";
import ExploreMenu from "../components/ExploreMenu";
import { food_list } from "../assets/assets";
import { menu_list } from "../assets/assets";
import { useState } from "react";

const Body = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <ExploreMenu
        menu_list={menu_list}
        category={category}
        setCategory={setCategory}
      />
      <Card food_list={food_list} category={category} />
    </div>
  );
};

export default Body;
