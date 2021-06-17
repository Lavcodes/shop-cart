import React from 'react';

const ItemCard = ({id, title, description, image, price, onAddClick, cart}) => {

    const onAdding = ()=>{
        onAddClick(id);
    }

    return (
  <div class="ui card">
  <div class="ui slide masked reveal image ">
    <img src={image} class="visible content"/>
    <div class="hidden content ui card">
    <div class="content">
      <div class="center aligned header">{title}</div>
      
      <div class="center aligned description">
      {description}
      </div>
    </div>
    </div>
  </div>
  <div class="content">
    <a class="header">{title}</a>
    <div class="meta">
      $ {price}
    </div>
  </div>
  <div class="ui violet animated button right floated circular"
       onClick={onAdding}
  >
  <div class="hidden content">Shop</div>
  <div class="visible content">
    <i class="plus white icon"></i>
  </div>
</div>
</div>
  );
};
 
export default ItemCard;