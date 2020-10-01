import './ImageList.css';
import React from 'react';

const ImageList = props => {
    
    console.log(props.images);

    const images = props.images.map( ({description, id, urls}) => 
        <img src={urls.regular} 
            key={id}
            alt={description} />
    );

    return (
        <div className="image-list">
            {images}
        </div>
    );
};

export default ImageList;