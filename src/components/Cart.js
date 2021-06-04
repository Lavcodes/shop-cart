import React from 'react';

import CartItem from './CartItem';

const Cart = (props) =>{
    console.log(props.cartProds);
    const List = props.cartProds.map((product)=>{
        return (
           <CartItem
             id = {product[0].id}
             title = {product[0].title}
             image = {product[0].image}
             price = {product[0].price}
             onRemoveClick = {props.onRemoveClick}
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