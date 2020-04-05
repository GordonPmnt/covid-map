import apiCovid from '../utils/apiCovid';
import apiMapBox from '../utils/apiMapBox';

const dataGenerator = async () => {
    const response = await apiCovid.get().then(
        resCovid => extendsJson(resCovid)
    )
    return response
}

const extendsJson = async resCovid => {
    let data = resCovid.data;
    resCovid.data = {
        type: "FeatureCollection",
        features: [],
    }
    
    for(let country in data) {
        await apiMapBox.getCountryCoordinates(country)            
        .then(
            resMapbox => {
                resCovid.data.features.push({
                    type: "Feature",
                    geometry: {
                        type: "Point",                                 
                        coordinates: resMapbox.data.features[0].center,
                    },
                    properties : {
                        country,
                        statistics: data[country],
                    },
                })
            }
        )
        .catch(err => console.log(`${country} doesn't exists in MapBox.`))    
    }  
    return resCovid
}

export default dataGenerator;