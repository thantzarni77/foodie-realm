const ExploreMenu = ({ menu_list, category, setCategory }) => {
  return (
    <div className="my-5 flex flex-wrap justify-around border-b-[1px] border-t-[1px] border-blue-600 p-5">
      {menu_list.map((menu) => {
        return (
          <div
            key={menu.menu_name}
            className="flex flex-col-reverse items-center "
            onClick={() =>
              category === menu.menu_name
                ? setCategory("All")
                : setCategory(menu.menu_name)
            }
          >
            <div
              className={`my-2 ${category == menu.menu_name ? "text-xl text-black" : "text-blue-600"}`}
            >
              {menu.menu_name}
            </div>
            <img
              src={menu.menu_image}
              alt={menu.menu_name}
              className={` size-24 rounded-full border-4 hover:cursor-pointer hover:border-blue-500  ${category === menu.menu_name ? "border-blue-500 " : ""}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ExploreMenu;
