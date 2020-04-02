import apiCovid from '../utils/apiCovid';
import apiMapBox from '../utils/apiMapBox';

const dataGenerator = () => {
    apiCovid.get()
    .then(
        resCovid => {
            extendsJson(resCovid);
            console.log(resCovid)
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
                resCovid.data[country] = { 
                    statistics: data[country], // moves country values into "statiscs" prop
                    coordinates: resMapbox.data.features[0].center, // gets geoloc of country's center
                }
            }
        )
        .catch(err => console.log(`${country} doesn't exists in MapBox.`))    
    }  
    return resCovid
}

export default dataGenerator;