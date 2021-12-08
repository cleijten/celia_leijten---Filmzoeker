import React from "react";

function ListItem(props) {
  // console.log(props.product.title, props.product.id)
  return props.className === "list-item-shop" ? (
    <li className={props.className} onClick={props.onClick}>
     <span className="amount">qty: {props.product.amount}</span> | <span className="title">{props.product.title}</span> 
    </li>
  ) : (
    <li className={props.className} onClick={props.onClick}>
      {props.product.title}
    </li>
  );
}

export default ListItem;
