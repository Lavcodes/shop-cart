import React from 'react';

import CartItem from './CartItem';

const Cart = (props) =>{
    //console.log(props.cartProds);
    const List = props.cartProds.map((product)=>{
        if(product.quantity!==0)
        return (
           <CartItem
             id = {product.id}
             title = {product.title}
             image = {product.image}
             price = {product.price}
             quantity = {product.quantity}
             onRemoveClick = {props.onRemoveClick}
             onAddClick = {props.onAddClick}
           ></CartItem>
        );
        
    });
    return(
        <div class="ui middle aligned divided animated right floated list">
            {List}
        </div>
    )
}

export default Cart;