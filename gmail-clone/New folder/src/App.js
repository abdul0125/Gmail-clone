import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{display:'flex'}}>

      <Sidebar/>
      <Body/>
      </div>
      
    </div>
  );
}

export default App;
