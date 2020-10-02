import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import "./components/styles.css"

class App extends React.Component {

  state = {
    user: {},
    followers: []
  }

  componentDidMount() {
   axios.get('https://api.github.com/users/lightdarkphoton')
    .then(response => {
      console.log(response)
      this.setState({user: response.data})
    })
    .catch(error => {
      console.log(error)
    })

    axios.get('https://api.github.com/users/lightdarkphoton/followers')
      .then(response => {
        console.log('Second Axios Call', response.data)
        this.setState({followers: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {

    return (
      
      <div>
        <h1 id="title">Github User Card</h1>
        <section id="mainSection">
          <img width="120" src={this.state.user.avatar_url}></img>
        <p>Name: {this.state.user.name}</p>
        <p>Username: {this.state.user.login}</p>
        <p>Followers: {this.state.user.followers}</p>
  
        <h2 id="followersHeader">Followers</h2>
        {this.state.followers.map(elem => {
            return (
              <div key={elem.id}>
              <img width="60" src={elem.avatar_url}></img>
              <p>{elem.login} </p>
              </div>
            )
          })}
        </section>



          
      </div>
    )
  }
}

export default App;
