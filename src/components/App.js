import React from 'react';
import axios from 'axios';


import SearchBar from './SearchBar';
import ProductList from './ProductList';


class App extends React.Component {

    state = {
        products : []
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

    // render the main page
    render(){
        return (
            <div className = "ui container"
                 style = {{marginTop : '10px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit}></SearchBar>
                <ProductList products = {this.state.products}></ProductList>
            </div>

        );

    };
}

export default App;