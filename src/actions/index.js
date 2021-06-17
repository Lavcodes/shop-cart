import axios from 'axios';
// Action creators
export const DisplayProducts = (prodString) =>{
    return async (dispatch, getState) => {
            const {data} = await axios.get('https://fakestoreapi.com/products', {});
            
                const searchData = data.filter(product =>{
                    const check = product.title.toLowerCase();
                  
                     prodString = prodString.toLowerCase();
                    return check.includes(prodString);
                });

            dispatch({
                type : 'PRODUCTS_DISPLAY',
                payload : searchData

            })         
        
        
    }
    
};

export const AddToCart = (id) =>{
    return async (dispatch, getState) => {
        
            console.log('im adding');
            const new_cart = getState().cart.map(product =>{
                if(product.id === id){
                    product.quantity += 1;
                }
                return product;
            });
          
        dispatch({
            type : 'ADD_TO_CART',
            payload : new_cart

        })         
    
    
}}

export const RemoveFromCart = (id) =>{
    return async (dispatch, getState) => {
        
        console.log('im removing');
        const new_cart = getState().cart.map(product =>{
            if(product.id === id){
                product.quantity -= 1;
            }
            return product;
        });
      
    dispatch({
        type : 'ADD_TO_CART',
        payload : new_cart

    });
}}

export const DisplayCart = (cart) =>{
    return {
        type : 'DISPLAY_CART',
        payload : cart
    }
}

export const initCart = () =>{
    return async (dispatch, getState) => {
        
        const new_cart = getState().products.map((product)=>{
           
            product['quantity'] = 0;
            return product;
        });
       dispatch({
           type :'INIT_CART',
           payload : new_cart
       })
}
}