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
    
    componentDidMount = async () =>{
        await this.onSearchSubmit('');
        console.log(this.state.products);
        this.initCart();
    }
    
    initCart = ()=>{
       
        const new_cart = this.state.products.map((product)=>{
            console.log("hey");
            product['quantity'] = 0;
            return product;
        });
        this.setState({cart : new_cart});
    }
    //App will pass this as prop to SearchBar
    // Fetching and filtering products 
    // send to item list as props

     onSearchSubmit = async (prodString) => {
        
        const {data} = await axios.get('https://fakestoreapi.com/products', {});
        if(prodString==='') this.setState({products : data});
        else{
            const searchData = data.filter(product =>{
               
                const check = product.title.toLowerCase();
              
                prodString = prodString.toLowerCase();
                return check.includes(prodString);
            });
            this.setState({products : searchData});
        }
    }

    onAddClick = (id) =>{
        console.log('im adding');
        const new_cart = this.state.cart.map(product =>{
            if(product.id === id){
                product.quantity += 1;
            }
            return product;
        });
        
        this.setState({ cart : new_cart });
    }

    onRemoveClick = (id) => {
        console.log('im removing')
        const new_cart = this.state.cart.map(product =>{
            if(product.id === id){
                product.quantity -= 1;
            }
            return product;
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
                     <Cart cartProds = {this.state.cart} onRemoveClick = {this.onRemoveClick} onAddClick={this.onAddClick}></Cart>
             
                      </div>
                      </div>
                      <div class="ui vertical divider"/>
                      </div>
               
                
               
               
            </div>

        );

    };
}

export default App;