import React from "react";
import HornedBeasts from "./HornedBeasts.js";
import './Main.css'


class Main extends React.Component{
    render(){
        const beasts = this.props.beasts;
            //returns the whole chunk of code including javascript
            return(
                <main>
                    {
                        //data.map return displays indiviual images
                        beasts.map(function(beast, idx){
                            return(
                                <HornedBeasts 
                                    className="test"
                                    key={idx}
                                    title={beast.title}
                                    imageUrl={beast.image_url}
                                    description={beast.description}
                                />
                            )
                        })
                    }
                </main>
            );
    }
}

export default Main;