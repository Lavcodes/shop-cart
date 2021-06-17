import React from 'react';
import { connect } from 'react-redux';

import { DisplayProducts } from '../actions';


export class SearchBar extends React.Component{
   
    state = {
        value : ''
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.DisplayProducts(this.state.value);
    }
   
    render(){
        console.log(this.props);
        return (
            <div className = "ui segment">
                <form onSubmit={this.onFormSubmit} className = "ui form">
                    <div className = "field">
                        <label>Search Product</label>
                        <input type = "text"
                               value = {this.state.value}
                               onChange = {(e)=>{
                                   this.setState({value: e.target.value });
                                   this.props.DisplayProducts(this.state.value);
                               }}
                        ></input>
                    </div>
                    
                </form>
            </div>

        );
    }
}



export default connect(null,
    { DisplayProducts },
    )(SearchBar);