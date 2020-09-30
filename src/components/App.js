import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

class App extends React.Component {

    state = { images: [] };

    QT_IMAGENS = 10;

    onSearchSubmit = async (term) => {
        //console.log('>>> App: ' + text);
        const response = await unsplash.get('/search/photos',
        {
            params: {
                query: term,
                page: 1,
                per_page: this.QT_IMAGENS
            }
        });
        console.log(this);
        this.setState( {images: response.data.results} );
    }

    render () {
        return (
            <div className="ui container" style={{marginTop: '15px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;