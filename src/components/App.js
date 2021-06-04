import React from 'react';
import axios from 'axios';


import SearchBar from './SearchBar';
import ProductList from './ProductList';
import Cart from './Cart';


class App extends React.Component {

    
    state = {
        products : [],
        cart : []
    };
    

    //App will pass this as prop to SearchBar
    // Fetching and filtering products 
    // send to item list as props

     onSearchSubmit = async (prodCategory) => {
        
        const {data} = await axios.get('https://fakestoreapi.com/products', {});
        if(prodCategory==='') this.setState({products : data});
        else{
            const searchData = data.filter(product =>{
                return product.category===prodCategory
            });
            this.setState({products : searchData});
        }
    }

    onAddClick = (id) =>{
        const prod = this.state.products.filter(product =>{
            return product.id === id
        });
        const new_cart = [...this.state.cart, prod];
        this.setState({ cart : new_cart });
    }

    onRemoveClick = (id) => {
        const new_cart = this.state.cart.filter((prod)=>{
            return prod[0].id!==id
        });
        this.setState({ cart : new_cart});
    }

    // render the main page
    render(){
        return (
            <div className = "ui container"
                 style = {{marginTop : '10px'}}>
                     <div class="ui segment">
                     <div class="ui two column very relaxed grid">
                     <div class="column">
                     <SearchBar onSubmit = {this.onSearchSubmit}></SearchBar>
                     <ProductList products = {this.state.products} onAddClick = {this.onAddClick}></ProductList>
                     </div>
                     <div class="column">
                     <Cart cartProds = {this.state.cart} onRemoveClick = {this.onRemoveClick}></Cart>
             
                      </div>
                      </div>
                      <div class="ui vertical divider"/>
                      </div>
               
                
               
               
            </div>

        );

    };
}

export default App;