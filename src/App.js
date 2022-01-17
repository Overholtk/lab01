import React from 'react';
import Header from './Header.js';
import Main from './Main'
import Footer from './Footer.js';
import beasts from './data.json';

class App extends React.Component {
  render(){
    return(
      <>
        <Header />
        <Main beasts={beasts}/>
        <Footer />
      </>
    )
  }
}

export default App;