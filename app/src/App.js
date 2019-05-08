import React from 'react';
import anime from './../node_modules/animejs/lib/anime.es.js';
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
        <Animable animation={{
          easing: 'easeOutExpo',
          duration: 750,
          translateX: 250
        }}></Animable>
      </div>
    );
  }
}

export default App;
