import axios from 'axios';
import settings from '../settings'

const apiMapBox = {
    url: "https://api.mapbox.com/geocoding/v5/",
    searchType: "mapbox.places/",
    dataType: ".json",

    getLocation(place) {
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
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    },
}

export default apiMapBox;
