import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import settings from '../settings'

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 50.8549541,
    longitude: 4.3053504,
    zoom: 3
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={settings.mapBoxToken}
    />
  );
}

export default Map;