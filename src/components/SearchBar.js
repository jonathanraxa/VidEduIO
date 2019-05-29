import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class SearchBar extends React.Component{
    
    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = event => {
        // keeps the page from refreshing on return
        event.preventDefault();

        // call callback from parent component
        this.props.onFormSubmit(this.state.term);

    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="form-group ui form">
                    <div className="field form-group">
                    <label>Video Search</label>
                    <input
                    className="form-control" 
                    type="text" 
                    onChange={this.onInputChange}
                    />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
