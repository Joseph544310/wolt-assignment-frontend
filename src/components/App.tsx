import React from 'react';
import '../css/App.css';
import data from '../discovery_page.json'
import {Carousel} from './Carousel'

function App() {
  return (
    <div className="App">
      <p>hello</p>
      {data.sections.map(section => <Carousel section={section}/>)}
    </div>
  );
}

export default App;
