import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    characters:[],
  }

  removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }
  
  render() {
    const {characters} = this.state
    return (
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <h3>Add New</h3>
            <Form handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
