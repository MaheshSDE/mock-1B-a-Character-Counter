import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CountItems from './components/CountItems'

import './App.css'

// Replace your code here
class App extends Component {
  state = {list: [], userInput: ''}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()

    const {userInput} = this.state

    const userInputLength = userInput.length

    const newUser = `${userInput}: ${userInputLength}`

    const newCharacterLength = {
      id: uuidv4(),
      characterLength: newUser,
    }

    this.setState(prevState => ({
      list: [...prevState.list, newCharacterLength],
      userInput: '',
    }))
  }

  render() {
    const {userInput, list} = this.state
    return (
      <div className="app-container">
        <div className="left-section">
          <div className="top-section">
            <h1 className="heading1">Count the characters like a boss...</h1>
          </div>
          <>
            {list.length > 0 ? (
              <ul className="un-order-list">
                {list.map(eachItem => (
                  <CountItems countDetails={eachItem} key={eachItem.id} />
                ))}
              </ul>
            ) : (
              <div className="img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="image"
                />
              </div>
            )}
          </>
        </div>
        <div className="right-section">
          <h1 className="heading2">Character Counter</h1>
          <form className="form-container" onSubmit={this.onAdd}>
            <input
              type="text"
              className="inputElement"
              value={userInput}
              placeholder="Enter the Characters here"
              onChange={this.onChangeUserInput}
            />
            <button type="submit" className="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default App
