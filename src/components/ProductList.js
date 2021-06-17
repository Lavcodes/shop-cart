import React from 'react';
import { connect } from 'react-redux';

import ItemCard from './ItemCard';
import { AddToCart } from '../actions';

export const ProductList = (props) =>{
   
    const List = props.products.map((product)=>{
        return (
            <ItemCard id = {product.id} 
            title = {product.title} 
            description = {product.description} 
            image = {product.image}
            price = {product.price}
            onAddClick = {props.AddToCart}
            cart = {props.cart}
            >
            </ItemCard>
        );
        
    });
    return (
        <div class="ui three stackable cards">{List}</div>
    );
}

const mapStateToProps = (state) =>{
    return {
        products : state.products,
        cart : state.cart
    }
}

export default connect(mapStateToProps, {
    AddToCart
})(ProductList);
  