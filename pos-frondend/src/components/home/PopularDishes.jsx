import React from "react";
import { popularDishes } from "../../constants";


const PopularDishes = () => {
  return (
    <div className="mt-6 px-4 sm:px-6 w-full">
      <div className="bg-[#262b42] w-full rounded-lg">
        <div className="flex justify-between items-center px-4 sm:px-6 py-4">
          <h1 className="text-[#f5f5f5] text-base sm:text-lg font-semibold tracking-wide">
            Popular Dishes
          </h1>
          <a href="#" className="text-[#025cca] text-xs sm:text-sm font-semibold">
            View all
          </a>
        </div>
        <div className="overflow-y-scroll h-[500px] sm:h-[680px] scrollbar-hide">
          {popularDishes.map((dish) => (
            <div
              key={dish.id}
              className="flex items-center gap-3 sm:gap-4 bg-[#48656d] rounded-[15px] px-4 sm:px-6 py-3 sm:py-4 mt-4 mx-4 sm:mx-6"
            >
              <h1 className="text-[#f5f5f5] font-bold text-xl mr-4">{dish.id < 10 ? `0${dish.id}` : dish.id}</h1>
              <img
                src={dish.image}
                alt={dish.name}
                className="w-[50px] h-[50px] rounded-full"
              />
              <div>
                <h1 className="text-[#f5f5f5] font-semibold tracking-wide">{dish.name}</h1>
                <p className="text-[#f5f5f5] text-sm font-semibold mt-1">
                  <span className="text-[#ababab]">Orders: </span>
                  {dish.numberOfOrders}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
