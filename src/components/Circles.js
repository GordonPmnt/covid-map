import React from 'react';
import { Source, Layer } from 'react-map-gl';


const Circles = ({ data, isFetching }) => {

    const low = {
        id: "point",
        type: "circle",
        paint: {
            "circle-radius": 5,
            "circle-color": 'red',
        }
    }
    
    
    !isFetching && console.log(data)

    return (

        <Source
            id="covidData"
            type="geojson"
            data={!isFetching && data}
        >
            <Layer {...low} />
        </Source>
    
    )
}

export default Circles;