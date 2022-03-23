import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

const API = 'http://localhost:3001/pizzas/'

function App() {

  const [pizzas, setPizzas] = useState([])
  const [modifyPizza, setModifyPizza] = useState({})
  const [formData, setFormData] = useState({
    topping: '',
    size: 'Small',
    vegetarian: '',
  })

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setPizzas(data))
    .catch(error => alert(error))
  }, [])

  function editPizza(pizza) {
    setModifyPizza(pizza)
    setFormData({
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian,
    })
  }

  return (
    <>
      <Header />
      <PizzaForm formData={formData} setFormData={setFormData} />
      <PizzaList pizzas={pizzas} editPizza={editPizza} />
    </>
  );
}

export default App;
