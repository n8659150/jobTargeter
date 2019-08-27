import React from 'react';
import Button from 'antd/es/button';
import './App.css';
function App(props) {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      {props.children}
    </div>
  );
}

export default App;
