import React from 'react';
import Animable from './Animable';
import anime from 'animejs/lib/anime.es';
import { createStore } from 'redux';

class App extends React.Component {

  constructor(props) {
    super(props);

    let defaultState = {entries: []}
    this.store = createStore(this.mainReducer, defaultState);
    this.unsub = this.store.subscribe(() => {alert('new thingything upd8ed');});

    this.entriesOnClick = this.entriesOnClick.bind(this);
    this.showEntries = this.showEntries.bind(this);
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

        <br/>
        
        <div>
          <input type="textfield" ref={x=>this.entries_tf=x}></input>
          <button onClick={this.entriesOnClick}>lai</button>
          <br/>
          <button onClick={this.showEntries}>show existing entries</button>
          <button onClick={this.unsub}>stop showing sodding popups every time i click lai</button>
        </div>
      </div>
    );
  }

  showEntries(event) {
    alert(this.store.getState().entries.join("\n"));
  }

  entriesOnClick(event) {
    this.store.dispatch(this.createNewEntryAction(this.entries_tf.value));
    this.entries_tf.value = "";
  }

  createNewEntryAction(newEntry) {
    return {
      type: "ADD",
      newEntry: newEntry
    };
  }

  mainReducer(state = {}, action) {

    switch(action.type) {
      case "ADD":
        return Object.assign({}, state, {
          entries: [...state.entries, action.newEntry]
        });
      default:
        return state;
    }
  }
}

export default App;
