import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {spans : 0};

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        //console.log(this.imageRef.current);
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spanValue = Math.ceil( height / 10 + 1);
 
        this.setState( {spans: spanValue})
    }


    render() {

        const {description, urls} = this.props.image;

        return ( 
                <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                    <img 
                        ref={this.imageRef}
                        key={this.props.id}
                        src={urls.regular} 
                        alt={description} />
                </div>
            );
    };
}

export default ImageCard;