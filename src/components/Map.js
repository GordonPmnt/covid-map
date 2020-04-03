import React, { useState } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import settings from '../settings'


const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 51,
    longitude: 5,
    zoom: 3
  });

  const data = require('../data/datatest.json')

  return (
    <>
      <ReactMapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken={settings.mapBoxToken}
      >
        <Source
          id="covidData"
          type="geojson"
          data={data}
        >
          <Layer
            id="point"
            type="circle"
            paint={{
              'circle-radius': 5,
              'circle-color': 'red'
              }} 
          />
        </Source>
      </ReactMapGL>
    </>
  );
}

export default Map;