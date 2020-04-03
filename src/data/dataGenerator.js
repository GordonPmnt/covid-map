import apiCovid from '../utils/apiCovid';
import apiMapBox from '../utils/apiMapBox';

const dataGenerator = () => {
    apiCovid.get()
    .then(
        resCovid => {
            return extendsJson(resCovid);
        }
    )
    .catch(err => console.log(err))
}

const extendsJson = resCovid => {
    let data = resCovid.data;
    resCovid.data = {
        type: 'FeatureCollection',
        features: [],
    }
    
    for(let country in data) {
        apiMapBox.getCountryCoordinates(country)            
        .then(
            resMapbox => {
                resCovid.data.features.push({
                    country: country,
                    statistics: data[country],
                    type: 'Feature',
                    geometry: {
                        type: 'Point',                                 
                        coordinates: resMapbox.data.features[0].center,
                    },
                })
            }
        )
        .catch(err => console.log(`${country} doesn't exists in MapBox.`))    
    }  
    return resCovid
}

export default dataGenerator;