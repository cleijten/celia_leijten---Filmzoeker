import React from "react";
function FormComponent(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        onChange={props.handleChange}
        name="title"
        placeholder="new grocery item"
        value={props.data.groceryItems.title}
      />
      <button>Add</button>
    </form>
  );
}
export default FormComponent;
