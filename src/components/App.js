import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        //console.log('>>> App: ' + text);
        const response = await unsplash.get('/search/photos',
        {
            params: {
                query: term,
                page: 1,
                per_page: 5
            }
        });
        console.log(this);
        this.setState( {images: response.data.results} );
    }

    render () {
        return (
            <div className="ui container" style={{marginTop: '15px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div>Found: {this.state.images.length} Images</div>
            </div>
        );
    }
}

export default App;