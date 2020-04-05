export const filtersDataByDate = ( data, date ) => {

    const lastIndex = data.features[0].properties.statistics.length - 1;

    if(!date && lastIndex) {
        
        for(let i=0; i<data.features.length; i++) {
            data.features[i].properties.statistics = data.features[i].properties.statistics[lastIndex]; 
        }
        return data;
    }

    return data;
} 