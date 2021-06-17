import { combineReducers } from "redux";
import axios from 'axios';

const DisplayProducts = (products = [], action) => {
    if(action.type === 'PRODUCTS_DISPLAY'){
        return action.payload;
    }
    return products;
}

const DisplayCart = (cart =[] , action) => {
    if(action.type === 'DISPLAY_CART'){
        return action.payload;
    }
    if(action.type === 'INIT_CART'){
        return action.payload;
   }
   if(action.type === 'ADD_TO_CART'){   
    return action.payload;
   }
   if(action.type === 'REMOVE_FROM_CART'){
       return action.payload;
   }
    return cart;
}



export default combineReducers({
     products : DisplayProducts,
     cart: DisplayCart
});