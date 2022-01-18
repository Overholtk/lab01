import React from "react";
import './HornedBeasts.css'
import Card from 'react-bootstrap/Card'

class HornedBeasts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "favorites": 0
        }
    }
       
    render(){
        return(
            <Card className="beast">
                <Card.Img 
                    src={this.props.imageUrl} 
                    alt={this.props.title}
                    onClick={() => {
                        this.setState({
                            favorites: this.state.favorites + 1
                        })
                        this.props.displayModal(this.props.title, this.props.imageUrl, this.props.description);
                    }}
                    />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Text>💖: {this.state.favorites}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default HornedBeasts;