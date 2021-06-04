import React from 'react';


class SearchBar extends React.Component{
    state = {
        value : ''
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    }
   
    render(){
        return (
            <div className = "ui segment">
                <form onSubmit={this.onFormSubmit} className = "ui form">
                    <div className = "field">
                        <label>Search Product</label>
                        <input type = "text"
                               value = {this.state.value}
                               onChange = {(e)=>{
                                   this.setState({value: e.target.value })
                               }}
                        ></input>
                    </div>
                    
                </form>
            </div>

        );
    }
}

export default SearchBar;