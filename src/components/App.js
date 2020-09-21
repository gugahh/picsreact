import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(term) {
        //console.log('>>> App: ' + text);
        axios.get('https://api.unsplash.com/search/photos',
        {
            params: {
                query: term,
                page: 1,
                per_page: 5
            },
            headers: {
                Authorization: 'Client-ID TWFAgnlfLmL7vDOuIa4bmgVE7WbCWFEvcxT8tCj9OVA'
            }
        });

    }

    render () {
        return (
            <div className="ui container" style={{marginTop: '15px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;