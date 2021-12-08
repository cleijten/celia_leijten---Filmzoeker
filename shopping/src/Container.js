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
        { id: 1, title: "Chicken", amount: 2 },
        { id: 2, title: "Beef", amount: 1 },
      ],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.handleClickEmptyCart = this.handleClickEmptyCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickGroceryItem(event) {
    this.setState((prevState) => {
      const prevShoppingList = prevState.shoppingListItems;
      const foundTitle = prevShoppingList.find(
        ({ title }) => title === event.target.innerHTML
      );
      const index = prevShoppingList.indexOf(foundTitle);

      if (foundTitle) {
        prevShoppingList[index] = {
          ...foundTitle,
          amount: foundTitle.amount + 1,
        };

        return { ...prevState, shoppingListItems: [...prevShoppingList] };

      } else {
        const newShoppingListItems = [...prevState.shoppingListItems];
        const newShoppingListItem = {
          id: prevState.shoppingListItems.length + 1,
          title: event.target.innerHTML,
          amount: 1,
        };
        newShoppingListItems.push(newShoppingListItem);
        const newState = {
          ...prevState,
          shoppingListItems: newShoppingListItems,
        };

        return newState;

      }
    });
  }

  handleClickEmptyCart(event) {
    this.setState({ shoppingListItems: [] });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState((prevState) => {
      const newGroceryItems = [...prevState.groceryItems];
      const newGroceryItem = {
        id: prevState.groceryItems.length + 1,
        title: this.state.title,
      };
      newGroceryItems.push(newGroceryItem);
      const newStateGrocery = {
        ...prevState,
        groceryItems: newGroceryItems,
      };

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

    return (
      <div className="lists">
        <div className="grocery-list">
          <h2>Grocery List</h2>
          <FormComponent
            handleChange={this.handleChange}
            data={this.state}
            handleSubmit={this.handleSubmit}
          />
          <ul className="grocery-ul yellow">{groceryComponents}</ul>
        </div>
        <div className="shopping-list">
          <h2>Shopping Cart</h2>
          <button onClick={this.handleClickEmptyCart}>Empty Cart</button>
          <ul>{shoppingCartComponents}</ul>
        </div>
      </div>
    );
  }
}

export default Container;
