import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from '../../Components/NavBar/NavBar'



class App extends Component {
  state={
    name: "",
    email: "",
    password: "",
    passwordConf: "",
    games: [],
    // user: userService.getUser()
  }



  render() {
    return (
      <header>
      <NavBar />
      </header>
    );
  }
}


export default App;
