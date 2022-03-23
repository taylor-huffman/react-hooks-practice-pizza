import React from "react";

function PizzaForm({ formData, setFormData }) {

  function handleOnChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    setFormData({
      topping: '',
      size: 'Small',
      vegetarian: '',
    })
  }

  function handleAlert(e) {
    e.preventDefault()
    alert('Oops! You forgot a field!')
  }

  return (
    <form onSubmit={formData.topping && formData.size && formData.vegetarian ? handleSubmit : handleAlert /*handle that submit*/}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange={handleOnChange}
            value={formData.topping}
          />
        </div>
        <div className="col">
          <select value={formData.size} onChange={handleOnChange} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={handleOnChange}
              checked={formData.vegetarian === true ? true : false}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={handleOnChange}
              checked={formData.vegetarian === false ? true : false}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
