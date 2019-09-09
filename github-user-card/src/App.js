import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './Components/UserCard';
import Followers from './Components/Followers';
import SearchBar from './Components/SearchBar';

class App extends Component {
  state = {
    user: "DoubleBridges",
    userData: {},
    followers: []
  }

  clickHandler = (e) => {
    this.setState({ user: e })
  }

  submitHandler = e => {
    e.preventDefault()
    this.setState({ user: e })
    console.log(this.state.user)
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then(res => {
        this.setState({ userData: res.data })
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userData !== this.state.userData) {
      axios
        .get(this.state.userData.followers_url)
        .then(res => {
          this.setState({ followers: res.data })
        })
        .catch(err => console.log(err))
    }

    if (prevState.user !== this.state.user) {       
        axios
        .get(`https://api.github.com/users/${this.state.user}`)
        .then(res => {
          this.setState({ userData: res.data })
        })
        .catch(err => console.log(err))
    }
  }



  render() {
    return (
      <div className="App">
        <UserCard
          userData={this.state.userData}
        />
        <SearchBar
          submitHandler={this.submitHandler}
        />
        <Followers
          followerData={this.state.followers}
          clickHandler={this.clickHandler}
        />
    </div>
    );
  }
}

export default App;
