import React, { Component } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import baseBeastsArray from './assets/data.json'
import SelectedBeast from './components/SelectedBeast.js';
import HornSelection from './components/HornSelection.js';

export default class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      show: false,
      featBeast: {},
      displayedBeastsArray: baseBeastsArray
    }
  }

  userSelection = (numberOfHorns) => {
    const filteredArray = baseBeastsArray.filter(
      (singleBeast) => {return singleBeast.horns === numberOfHorns || numberOfHorns === -1} 
    )
    this.setState({displayedBeastsArray:filteredArray}) 
  }

  newModalBeast = (beast) => {
    this.setState ({
      featBeast: beast
    })
    this.openModal();
  }

  closeModal = () => {
    this.setState ({
     show: false 
    })
  }

  openModal = () => {
    this.setState ({
      show: true
    })
  }

  render() {
    return (
      <div>
        <Header />
        <HornSelection userSelection={this.userSelection}/>
        <Main newModalBeast={this.newModalBeast} beastAll={this.state.displayedBeastsArray}/>
        <Footer />
        <SelectedBeast featBeast={this.state.featBeast} closeModal={this.closeModal} show={this.state.show}/>
      </div>
    )
  }
}