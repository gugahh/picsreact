import React from 'react';

class ImageCard extends React.Component {


    render() {

        const {description, urls} = this.props.image;

        return ( 
                <div>
                    <img 
                        key={this.props.id}
                        src={urls.regular} 
                        alt={description} />
                </div>
            );
    };
}

export default ImageCard;