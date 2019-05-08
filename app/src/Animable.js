import React from 'react';
import anime from './../node_modules/animejs/lib/anime.es.js';

class Animable extends React.Component {

  constructor(props) {
    super(props);
    this.animation = props.animation;
  }
  
  componentDidMount() {
  }

  componentDidUpdate() {
  }

  animate() {
    // note: must set targets first before animation else doesn't work
    let tl = anime.timeline({targets: this.ref});
    tl.add(this.animation);
  }

  render() {
    return (
      <div className="animable" ref={(x)=>this.ref=x}>
        <div className="hello-world">
          Hello World!
        </div>
        <button onClick={(e)=>{this.animate();}}>
          Start
        </button>
      </div>
    );
  }
}

export default Animable;
