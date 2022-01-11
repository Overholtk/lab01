import React from "react";

class HornedBeasts extends React.Component{
    render(){
        return(
            <article>
                <h2>{this.props.name}</h2>
                <img 
                    src={this.props.imageUrl} 
                    alt={this.props.name} 
                    title={this.props.name}/>
                <p>{this.props.description}</p>
            </article>
        )
    }
}

export default HornedBeasts;