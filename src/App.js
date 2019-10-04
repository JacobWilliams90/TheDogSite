import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components'

const Img = styled.img`
  max-height: 250px;
  max-width: 250px;
  padding: 10px;
`

export class App extends Component {
  constructor() {
    super();
    this.state = {
      breed: "husky",
      images: []
    };
  }

  componentDidMount() {
    this.fetchDogImgs()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.breed !== this.state.breed){
    this.setState({
      images: []
    })

    this.fetchDogImgs()}
  }

  handleChange = (event) => {
    this.setState({
      breed: event.target.value
    });
  };

  fetchDogImgs = () => {
    axios
    .get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
    .then(res => {
      this.setState({
        images: res.data.message
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <>
        <h1>The Dog Website (HI APOLLO)</h1>
        <select value={this.state.breed} onChange={this.handleChange}>
          <option value="husky">Husky</option>
          <option value="beagle">Beagle</option>
          <option value="corgi">Corgi</option>
          <option value='boxer'>Boxer</option>
          <option value='dane/great'>Great Dane</option>
        </select>
        <div>
          {this.state.images.map((image, index) => (
            <Img key={index} src={image} alt="dog" />
          ))}
        </div>
      </>
    );
  }
}

export default App;
