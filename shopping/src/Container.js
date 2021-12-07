import React, { Component } from "react";
import FormComponent from "./components/FormComponent";

import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "Appels" },
        { id: 2, title: "Cucumber" },
        { id: 3, title: "Tomatoes" },
        { id: 4, title: "Lettuce" },
      ],
      shoppingListItems: [
        { id: 1, title: "Chicken" },
        { id: 2, title: "Beef" },
      ],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.handleClickEmptyCart = this.handleClickEmptyCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickGroceryItem(event) {
    console.log("item clicked", event.target, this.state.groceryItems.title);
    this.setState((prevState) => {
      const newShoppingListItems = [...prevState.shoppingListItems];
      // console.log("new shopping list items", newShoppingListItems);
      const newShoppingListItem = {
        id: prevState.shoppingListItems.length + 1,
        title: event.target.innerHTML,
      };
      newShoppingListItems.push(newShoppingListItem);
      const newState = {
        ...prevState,
        shoppingListItems: newShoppingListItems,
      };
      // console.log("new state", newState);
      return newState;
    });
  }

  handleClickEmptyCart(event) {
    console.log("button clicked");
    this.setState({ shoppingListItems: [] });
  }

  handleChange(event) {
    const { name, value } = event.target;
    console.log("value", value);
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    alert("submit");
    event.preventDefault();

    this.setState((prevState) => {
      console.log("this state", this.state, "prev state", prevState);
      const newGroceryItems = [...prevState.groceryItems];
      console.log("newGroceryItems", newGroceryItems);
      const newGroceryItem = {
        id: prevState.groceryItems.length + 1,
        title: this.state.title,
      };
      console.log("newGroceryItem", newGroceryItem);
      newGroceryItems.push(newGroceryItem);
      const newStateGrocery = {
        ...prevState,
        groceryItems: newGroceryItems,
      };
      console.log("newstate grocery", newStateGrocery);
      return newStateGrocery;
    });
  }

  render() {
    const groceryComponents = this.state.groceryItems.map((item) => {
      return (
        <GroceryList
          key={item.id}
          product={item}
          className="list-item-grocery"
          value={item.title}
          onClick={this.handleClickGroceryItem}
        />
      );
    });

    const shoppingCartComponents = this.state.shoppingListItems.map((item) => {
      return (
        <ShoppingCart
          key={item.id}
          product={item}
          className="list-item-shop"
          value={item.title}
        />
      );
    });
    //   console.log("grocery", groceryComponents, "shopping", shoppingCartComponents)
    return (
      <div className="lists">
        <div>
          <h2>Grocery List</h2>
           <FormComponent
            handleChange={this.handleChange}
            data={this.state}
            onSubmit={this.handleSubmit}
          />
          <ul>{groceryComponents}</ul>
         
        </div>
        <div>
          <h2>Shopping Cart</h2>
           <button onClick={this.handleClickEmptyCart}>Empty Cart</button>
          <ul>{shoppingCartComponents}</ul>
         
        </div>
      </div>
    );
  }
}

export default Container;
