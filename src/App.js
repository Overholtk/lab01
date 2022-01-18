import React from 'react';
import Header from './Header.js';
import Main from './Main'
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js'
import beasts from './data.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: false,
      beastTitle: '',
      imageUrl: '',
      imageText: '',
      horns: null
    }
  }

  displayModal = (title, url, text) => {
    this.setState({
      display: true,
      beastTitle: title,
      imageUrl: url,
      imageText: text
    });
    console.log(this.state);
  }

  handleCloseModal = () => {
    this.setState({
      display: false
    })
  }

  handleFormSubmit = (e) => {
    this.setState({
      horns: e.target.value
    });
  }

  render(){
    return(
      <>
        <Header 
          handleFormSubmit={this.handleFormSubmit}
        />
        <Main
          horns={this.state.horns} 
          beasts={beasts} 
          displayModal={this.displayModal}
        />
        <SelectedBeast
          closeModal={this.handleCloseModal}
          horns={this.state.horns}
          display={this.state.display}
          beastTitle={this.state.beastTitle}
          imageUrl={this.state.imageUrl}
          imageText={this.state.imageText}
        />
        <Footer />
      </>
    )
  }
}

export default App;