import React from 'react';
import '../css/App.css';
import data from '../discovery_page.json'
import {Carousel} from './Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {data.sections.map(section => 
      <div className='restaurant-section' data-testid='carousel' key={section.title} >
        <Carousel section={section}/>
      </div>) }
    </div>
  );
}

export default App;
