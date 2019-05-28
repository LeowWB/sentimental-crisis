import React from 'react';
import Animable from './Animable';
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
