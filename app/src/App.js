import React from 'react';
import anime from './../node_modules/animejs/lib/anime.es.js';

class App extends React.Component {

  ref;

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
  }

  componentDidUpdate() {
    let tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });

    tl.add({
      targets: this.ref,
      translateX: 250
    });
  }

  render() {
    return (
      <div className="App" ref={(x)=>this.ref=x}>
        <div className="hello-world">
          Hello World!
        </div>
        <button onClick={(e)=>{this.setState({hi: "hi"});}}>
          eh
        </button>
      </div>
    );
  }
}

export default App;
