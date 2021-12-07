import React from "react"


function ListItem(props) {
 // console.log(props.product.title, props.product.id)
    return (
            
            <li className={props.className} onClick={props.onClick}>{props.product.title}</li>
        );
  
}

export default ListItem