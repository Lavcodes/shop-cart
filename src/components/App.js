import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


import SearchBar from './SearchBar';
import ProductList from './ProductList';
import Cart from './Cart';
import { DisplayProducts, initCart } from '../actions';


export class App extends React.Component {

    
    
    componentDidMount = async () =>{
        await this.props.DisplayProducts('');
        console.log(this.props.products)
        this.props.initCart(this.props.cart, this.props.products);
    }
    
    //App will pass this as prop to SearchBar
    // Fetching and filtering products 
    // send to item list as props


    // render the main page
    render(){
        return (
            <div className = "ui container"
                 style = {{marginTop : '10px'}}>
                     <div class="ui segment">
                     <div class="ui two column very relaxed grid">
                     <div class="column">
                     <SearchBar ></SearchBar>
                     <ProductList  products = {this.props.products}></ProductList>
                     </div>
                     <div class="column">
                     <Cart cartProds = {this.props.cart}></Cart>
             
                      </div>
                      </div>
                      <div class="ui vertical divider"/>
                      </div>
                     </div>

        );

    };
}

const mapStateToProps = (state) =>{
    return {products :state.products,
        cart : state.cart
    }
}

export default connect(mapStateToProps,
    { DisplayProducts, 
    initCart }
    )(App);
