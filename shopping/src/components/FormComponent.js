import React from "react"
function FormComponent(props) {
 //   console.log("props", props,"value title", props.data.groceryItems.title, "submit", props.data.handleSubmit, "change", props.handleChange, )

    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type="text"
                onChange={props.handleChange}
                name="title"
                placeholder="new grocery item"
                value={props.data.groceryItems.title} />
            <button>Add</button>
        </form>
    )
}
export default FormComponent
