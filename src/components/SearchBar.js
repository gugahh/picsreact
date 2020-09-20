import React from 'react';

class SearchBar extends React.Component {
    
    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment" style={{backgroundColor: 'burlywood'}}>
                <form className="ui form">
                    <div className="field">
                        <label htmlFor="mysearch">Image Search</label>
                        <input type="text" 
                            id="mysearch"
                            onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;