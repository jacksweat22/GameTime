import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    name: "",
    email: "",
    password: "",
    passwordConf: "",
    games: [],
    user: userService.getUser()
  }

render() {
    return (
      <>
      <div className="header">
        <header>

       </header>
      </div>
    </>
    );
  }
}


export default App;
