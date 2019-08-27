import React from 'react';
import './App.css';
import store from './store'
import { search } from './store/actions';
class App extends React.Component {
  componentDidMount() {
    store.dispatch(search(''));
  }
  render () {
    return (
          <div className="App">
            {this.props.children}
          </div>
        );
  }
}

export default App;
