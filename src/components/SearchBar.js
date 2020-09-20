import React from 'react';

class SearchBar extends React.Component {

    state = { term: 'Digite Aqui'};

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
    }

    onFocus = () => {
        if (this.state.term === 'Digite Aqui') {
            this.setState({term: ''});
        }
    }

    render() {
        return (
            <div className="ui segment" style={{backgroundColor: 'burlywood'}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="mysearch">Image Search</label>
                        <input type="text" 
                            id="mysearch"
                            onFocus={this.onFocus}
                            onChange={(e) => this.setState({term: e.target.value})}
                            value={this.state.term} />
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;