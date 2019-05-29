import React from 'react';
import Animable from './Animable';
import anime from 'animejs/lib/anime.es';

class App extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    anime.timeline({
        // note: field is called targets, not target
        targets: this.auto1,
        easing: 'easeOutExpo',
        duration: 750,
        translateX: 300
    }, 0).add({
      targets: this.auto2,
      translateX: 300,
      easing: 'easeOutExpo',
      duration: 750
    }, 1000).add({
      targets: this.auto3,
      translateX: 300,
      duration: 750,
      easing: 'easeOutExpo'
    }, '+=1000');
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

        <div ref={x=>this.auto1=x}>
          auto1
        </div>

        <div ref={x=>this.auto2=x}>
          auto2
        </div>

        <div ref={x=>this.auto3=x}>
          auto3
        </div>

      </div>
    );
  }
}

export default App;
