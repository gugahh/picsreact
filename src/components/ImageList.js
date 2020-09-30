import React from 'react';

const ImageList = (props) => {
    console.log(props);
    
    const images = props.images.map((image) => 
        <img src={image.urls.small} />
    );

    return (
        <div>
            {images}
        </div>
    );
};

export default ImageList;