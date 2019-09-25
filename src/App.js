import React, { Component } from 'react';

import Timer from './Timer'

class App extends Component {

 
  state = {
    timerIDs: []
  }


  componentDidMount() {
    this.handleAddTimer()
  }

<<<<<<< HEAD
 render() {
=======




  // No need to modify anything in render or the class methods below
  // Unless, of course, you're curious about how it all works
  render() {
>>>>>>> aeb9415175aba547e59c38784dc0e407613f9dd2

    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>

        <div className="TimerGrid">
          {this.renderTimers()}
        </div>

      </div>
    );
  }

<<<<<<< HEAD
  // returns array of components written in JSX, mapped from this.state.timerIDs
=======
>>>>>>> aeb9415175aba547e59c38784dc0e407613f9dd2
  renderTimers = () => this.state.timerIDs.map(id => {
    return <Timer key={id} id={id} removeTimer={this.removeTimer} />
  })

<<<<<<< HEAD
  // adds a random number for timer ID
=======
 
>>>>>>> aeb9415175aba547e59c38784dc0e407613f9dd2
  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.floor(Math.random()*1000)]
    }))
  }

<<<<<<< HEAD
  // removeTimer updates state, removing any timer that matches the provided author
=======
>>>>>>> aeb9415175aba547e59c38784dc0e407613f9dd2
  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }))
  }


}

export default App;