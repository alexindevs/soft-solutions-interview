import React from "react";
import BBQ from "../../assets/menu/BBQ.png";
import Chicken from "../../assets/menu/Chicken.png";
import Chocolate from "../../assets/menu/Chocolate.png";
import Dinner from "../../assets/menu/Dinner.png";
import Turf from "../../assets/menu/Turf.png";
import Burger from "../../assets/menu/Burger.png";

const MenuItem = ({ title, description, price, imageUrl }) => {
  return (
    <div className="relative grid place-items-center bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover rounded-md"
        loading="lazy"
      />
      <div className="absolute bottom-4 bg-[#FFFFFFA6]/65 border-1 border-[#FFFFFF] backdrop-blur-2xl w-[90%] p-2 rounded shadow-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-[500] text-[#1E293B] text-[14px] truncate">
            {title}
          </h3>
          <span className="">${price.toFixed(2)}</span>
        </div>
        <p className="text-[#64748B] text-[12px] font-[400] text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

const MenuSection = () => {
  const menuItems = [
    {
      title: "BBQ Rib Dinner",
      description: "456 Served",
      price: 69.21,
      imageUrl: BBQ,
    },
    {
      title: "Chicken & Ribs Combos",
      description: "456 Served",
      price: 98.49,
      imageUrl: Chicken,
    },
    {
      title: "Fried Chicken Dinner",
      description: "456 Served",
      price: 83.56,
      imageUrl: Dinner,
    },
    {
      title: "Dark & Stormy",
      description: "456 Served",
      price: 90.58,
      imageUrl: Chocolate,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-4">
      <div className="flex w-full flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center md:space-x-4">
        <MenuItem
          title={"Surf & Turf Gift Basket"}
          description={"456 Served"}
          price={89.24}
          imageUrl={Turf}
        />
        <div className="w-full md:w-auto">
          <MenuItem
            title={"Shaking Beef Tri-Tip"}
            description={"456 Served"}
            price={69.46}
            imageUrl={Burger}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
