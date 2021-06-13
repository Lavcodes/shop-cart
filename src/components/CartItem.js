import React from 'react';

const CartItem = ({id, title, price, quantity, image, onRemoveClick, onAddClick}) =>{

    const onRemoving = ()=>{
        onRemoveClick(id);
    }

    const onAdding = () =>{
        onAddClick(id);
    }


    return (
    <div class="item">
    <div class="right floated content">
    <div class = "ui small button blue"
    onClick = {onAdding}>
        <i class="plus white small icon"/>
    </div>
    <div class = "content"> {quantity}</div>
   
    <div class = "ui small button red"
    onClick = {onRemoving}>
        <i class = "minus white small icon"/>
    </div>
    </div>
    <img class="ui tiny bordered left floated image" src={image}/>
    <div class="content">
        <h3>{title}</h3>
    </div>
    </div>

    );

};
 
export default CartItem;
