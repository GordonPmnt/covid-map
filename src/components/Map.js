import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import settings from '../settings'
import Circles from './Circles'
import { filtersDataByDate } from '../utils/dates'


const Map = ({ data, isFetching }) => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 51,
    longitude: 5,
    zoom: 3
  });

  return (
    <>
      <ReactMapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken={settings.mapBoxToken}
        mapStyle="mapbox://styles/mapbox/dark-v9"
      >
        <Circles 
          data={!isFetching && filtersDataByDate(data)} 
          isFetching={isFetching} 
        />
      </ReactMapGL>
    </>
  );
}

export default Map;