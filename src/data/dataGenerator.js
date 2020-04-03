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
    resCovid.data = {}
    
    for(let country in data) {
        apiMapBox.getCountryCoordinates(country)            
        .then(
            resMapbox => {
                return (
                    {
                        type: 'FeatureCollection',
                        features: [{
                            country: resCovid.data[country],
                            statistics: data[country],
                            type: 'Feature',
                            geometry: {
                                type: 'Point', 
                                coordinates: resMapbox.data.features[0].center,
                            },
                        }],
                    }
                )
            }
        )
        .catch(err => console.log(`${country} doesn't exists in MapBox.`))    
    }  
    return resCovid
}

export default dataGenerator;