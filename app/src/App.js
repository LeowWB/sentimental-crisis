import React from 'react';
import Animable from './Animable';

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div className="App">
        <div>
          <Animable animation={{
            easing: 'easeOutExpo',
            duration: 750,
            translateX: 250
          }}></Animable>
        </div>
        <br/>
        <div>
          <input type="textfield" ref={x=>this.entries_tf=x}></input>
          <button onClick={this.entriesOnClick}>lai</button>
        </div>
      </div>
    );
  }

  entriesOnClick(event) {
    alert()
  }
}

export default App;
