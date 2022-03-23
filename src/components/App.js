import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

const API = 'http://localhost:3001/pizzas/'

function App() {

  const [pizzas, setPizzas] = useState([])
  const [formData, setFormData] = useState({
    topping: '',
    size: 'Small',
    vegetarian: 'Vegetarian',
  })

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setPizzas(data))
    .catch(error => alert(error))
  }, [])

  function editPizza(pizza) {
    const pizzaConvert = {
      id: pizza.id,
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian ? 'Vegetarian' : 'Not Vegetarian',
    }
    setFormData(pizzaConvert)
  }

  function updatePizza(pizza) {
    console.log('updatepizza', pizza)
    if (pizza.id !== undefined) {
      debugger
      fetch(`${API}${pizza.id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(pizza)
      })
      .then(r => r.json())
      .then(pizza => {
        setPizzas([...pizzas.filter(item => item.id !== pizza.id), pizza].sort((a, b) => a.id - b.id))
        setFormData({
          topping: '',
          size: 'Small',
          vegetarian: 'Vegetarian',
        })
      })
    } else {
      fetch(API, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(pizza)
      })
      .then(r => r.json())
      .then(pizza => {
        setPizzas([...pizzas, pizza])
        setFormData({
          topping: '',
          size: 'Small',
          vegetarian: 'Vegetarian',
        })
      })
    }
  }


  

  return (
    <>
      <Header />
      <PizzaForm formData={formData} setFormData={setFormData} updatePizza={updatePizza} />
      <PizzaList pizzas={pizzas} editPizza={editPizza} />
    </>
  );
}

export default App;
