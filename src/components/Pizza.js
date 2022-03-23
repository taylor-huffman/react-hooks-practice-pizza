import React from "react";

function Pizza({ pizza, editPizza }) {

  const { topping, size, vegetarian } = pizza

  function handleOnClick() {
    editPizza(pizza)
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian === true ? 'Yes' : 'No'}</td>
      <td>
        <button onClick={handleOnClick} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
