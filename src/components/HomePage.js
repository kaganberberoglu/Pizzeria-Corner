import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  const {
    theme,
    setTheme,
    setOrderPizza,
    setCount
  } = props;

  return (
    <div className={theme ? "grid content-center bg-stone-800 h-screen" : "grid content-center bg-red-700 h-screen"} data-cy="bg">
      <div className="grid justify-items-center">
        <div className="flex flex-col items-center">
          <img
            className="xl:h-28 lg:h-28 h-20 saturate-50 hover:saturate-100 cursor-pointer"
            src={require("../assets/4.png")}
            alt="pizza-top"
            data-cy="bright-mode"
            onClick={(e) => {
              e.preventDefault();
              setTheme(false);
            }}
          />
          <Link
            to="/pizza"
            onClick={() => {
              setOrderPizza({
                pizzaSelection: "",
                pizzaIngredientOne: "",
                pizzaIngredientTwo: "",
                pizzaIngredientThree: "",
                pizzaIngredientFour: "",
                pizzaIngredientFive: "",
                pizzaPrice: 0,
              })
              setCount(1)
            }
            }>
            <h1
              className="text-amber-100 font-medium xl:text-5xl lg:text-5xl text-4xl hover:text-amber-200"
              data-cy="pizza-page"
            >
              <center>
                PIZZERIA
                <br />
                CORNER
              </center>
            </h1>
          </Link>
          <img
            className="xl:h-28 lg:h-28 h-20 saturate-50 hover:saturate-0 cursor-pointer"
            src={require("../assets/6.png")}
            alt="pizza-bottom"
            data-cy="dark-mode"
            onClick={(e) => {
              e.preventDefault();
              setTheme(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
