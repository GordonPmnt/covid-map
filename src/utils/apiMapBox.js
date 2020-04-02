import axios from 'axios';
import settings from '../settings'

const apiMapBox = {
    url: "https://api.mapbox.com/geocoding/v5/",
    searchType: "mapbox.places/",
    dataType: ".json",

    getCountryCoordinates(place) {
        return (
            axios({
                "method": "GET",
                "url": `${this.url}${this.searchType}${place}${this.dataType}`,
                "params": {
                    "access_token": settings.mapBoxToken,
                    "autocomplete": "false",
                    "types": "country",
                    "limit": 1,
                },
            })
            .then((response) => {
                return response;
            })
            .catch((error) => {
                console.log(error.response)
            })
        )
    }
}

export default apiMapBox;
