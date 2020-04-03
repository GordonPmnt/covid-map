import React from 'react';
import Map from './components/Map'
import dataGenerator from './data/dataGenerator'


function App() {

  return (
    <>
      <Map data={dataGenerator()} />
    </>
  );
}

export default App;
