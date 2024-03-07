import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons';

import HomePage from "./components/HomePage";
import PizzaPage from "./components/PizzaPage";
import ApprovalPage from "./components/ApprovalPage";
import useLocalStorage from "./useLocalStorage";

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [theme, setTheme] = useLocalStorage("Night Mode", false);

  const [pizzaForm, setPizzaForm] = useState({});

  const [orderPizza, setOrderPizza] = useState({
    pizzaSelection: "",
    pizzaIngredientOne: "",
    pizzaIngredientTwo: "",
    pizzaIngredientThree: "",
    pizzaIngredientFour: "",
    pizzaIngredientFive: "",
    pizzaPrice: 0,
  });

  const [count, setCount] = useState(1);
  if (count < 1) {
    setCount(1)
  };
  console.log("Pizza Count >", count);

  const pizzaIng = [
    "Pepperoni",
    "Bacon",
    "Sausage",
    "Beef ham",
    "Chicken ham",
    "Grilled chicken",
    "Onion",
    "Garlic",
    "Tomato",
    "Sweetcorn",
    "Pepper",
    "Courgette",
    "Artichoke",
    "Aubergine",
    "Black olive",
    "Green olive"
  ];

  const pizza = [
    {
      id: 1,
      name: "Margherita",
      ingredientOne: "Mozzarella",
      ingredientTwo: "Basil",
      ingredientThree: "Tomato",
      ingredientFour: "Black Olive",
      ingredientFive: "Oregano",
      price: 10
    },
    {
      id: 2,
      name: "Funghi",
      ingredientOne: "Mozzarella",
      ingredientTwo: "Mushroom",
      ingredientThree: "Tomato",
      ingredientFour: "Parmesan",
      ingredientFive: "Oregano",
      price: 15
    },
    {
      id: 3,
      name: "Formaggi",
      ingredientOne: "Mozzarella",
      ingredientTwo: "Feta Cheese",
      ingredientThree: "Cheddar",
      ingredientFour: "Parmesan",
      ingredientFive: "Oregano",
      price: 20
    }
  ];

  const selectedPizza = (e) => {
    e.preventDefault();
    setOrderPizza({
      ...orderPizza,
      pizzaSelection: pizza[e.target.id - 1].name,
      pizzaIngredientOne: pizza[e.target.id - 1].ingredientOne,
      pizzaIngredientTwo: pizza[e.target.id - 1].ingredientTwo,
      pizzaIngredientThree: pizza[e.target.id - 1].ingredientThree,
      pizzaIngredientFour: pizza[e.target.id - 1].ingredientFour,
      pizzaIngredientFive: pizza[e.target.id - 1].ingredientFive,
      pizzaPrice: pizza[e.target.id - 1].price,
    })
    if (pizza[e.target.id - 1].name === "Margherita") {
      toast.success(<div><b>{`${pizza[e.target.id - 1].name}!`}</b> {`Great choice`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" });
    } else if (pizza[e.target.id - 1].name === "Funghi") {
      toast.success(<div><b>{`${pizza[e.target.id - 1].name}!`}</b> {`Great choice`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" });
    } else if (pizza[e.target.id - 1].name === "Formaggi") {
      toast.success(<div><b>{`${pizza[e.target.id - 1].name}!`}</b> {`Great choice`} <FontAwesomeIcon icon={faHandsClapping} bounce /></div>, { theme: "light" });
    }
  };
  console.log("Ordered Pizza >", orderPizza);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <HomePage
            theme={theme}
            setTheme={setTheme}
            setOrderPizza={setOrderPizza}
            setCount={setCount}
          />
        }
        />
        <Route path="/pizza"
          element={
            <PizzaPage
              setPizzaForm={setPizzaForm}
              orderPizza={orderPizza}
              setOrderPizza={setOrderPizza}
              pizzaIng={pizzaIng}
              selectedPizza={selectedPizza}
              count={count}
              setCount={setCount}
              theme={theme}
              setTheme={setTheme}
              pizza={pizza}
            />
          }
        />
        <Route path="/approval"
          element={
            <ApprovalPage
              pizzaForm={pizzaForm}
              orderPizza={orderPizza}
              setOrderPizza={setOrderPizza}
              count={count}
              setCount={setCount}
              theme={theme}
              setTheme={setTheme}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
