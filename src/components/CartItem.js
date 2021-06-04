import React from 'react';

const CartItem = ({id, title, price, image, onRemoveClick}) =>{

    const onRemoving = ()=>{
        onRemoveClick(id);
    }


    return (
    <div class="item">
    <div class="right floated content">
    <div class="ui button red"
      onClick = {onRemoving}
    >Remove</div>
    </div>
    <img class="ui tiny bordered left floated image" src={image}/>
    <div class="content">
        <h3>{title}</h3>
    </div>
    </div>

    );

};
 
export default CartItem;
