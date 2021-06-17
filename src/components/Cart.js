import React from 'react';
import { connect } from 'react-redux';

import CartItem from './CartItem';
import { AddToCart, RemoveFromCart } from '../actions';

const Cart = (props) =>{
    
    const List = props.cartProds.map((product)=>{
        if(product.quantity!==0)
        return (
           <CartItem
             id = {product.id}
             title = {product.title}
             image = {product.image}
             price = {product.price}
             quantity = {product.quantity}
             onRemoveClick = {props.RemoveFromCart}
             onAddClick = {props.AddToCart}
           ></CartItem>
        );
        
    });
    return(
        <div class="ui middle aligned divided animated right floated list">
            {List}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
    cart : state.cart
    }
}
export default connect(mapStateToProps, {
    AddToCart,
    RemoveFromCart
})(Cart);