import React from 'react';

import ItemCard from './ItemCard';

const ProductList = (props) =>{
    console.log(props.products);
    const List = props.products.map((product)=>{
        return (
            <ItemCard id = {product.id} 
            title = {product.title} 
            description = {product.description} 
            image = {product.image}
            price = {product.price}
            >
            </ItemCard>
        );
        
    });
    return (
        <div class="ui three stackable cards">{List}</div>
    );
}

export default ProductList;