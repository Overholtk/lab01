import React from 'react';
import Header from './Header.js';
import Main from './Main'
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js'
import beasts from './data.json';
import { Modal } from 'bootstrap';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: false,
      beastTitle: '',
      imageUrl: '',
      imageText: ''
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

  render(){
    return(
      <>
        <Header />
        <Main 
          beasts={beasts} 
          displayModal={this.displayModal}
        />
        <SelectedBeast
          closeModal={this.handleCloseModal}
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