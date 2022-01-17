import React from "react";
import HornedBeasts from "./HornedBeasts.js";
import './Main.css'


class Main extends React.Component{
    render(){

        console.log(this.props);

        let beastsArray = this.props.beasts.map((beast, idx) => (
            <HornedBeasts 
                key={idx}
                displayModal={this.props.displayModal}
                title={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
            />
        ));
            return(
                <main>
                    {beastsArray}
                </main>
            );
    }
}

export default Main;