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
        <h1>The Dog Website</h1>
        <p>Moose made this... tell him a breed and he will add (if he can)</p>
        <select value={this.state.breed} onChange={this.handleChange}>
          <option value="husky">Husky</option>
          <option value="beagle">Beagle</option>
          <option value="corgi">Corgi</option>
          <option value='boxer'>Boxer</option>
          <option value='dane/great'>Great Dane</option>
          <option value='bulldog/english'>British Bulldog (Apollo add)</option>
          <option value='bulldog/french'>French Bulldog (Mando Add)</option>
          <option value='collie/border'>Border Collie (Yoki Add)</option>
          <option value='hound/ibizan'>Ibizan Hound (Tuna Add)</option>
          <option value='retriever/golden'>Golden Retriever (Chaele Add)</option>
          <option value='germanshepherd'>German Sheperd (Zanagi Add)</option>
          <option value='pitbull'>Pitbull</option>
          <option value='shiba'>Shiba</option>
          <option value='labrador'>Labrador (Raksha)</option>
          <option value='eskimo'>Eskimo (Princess)</option>
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
