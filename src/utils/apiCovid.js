import axios from 'axios';

class ApiCovid {

    static get() {
        axios({
            "method": "GET",
            "url": "https://pomber.github.io/covid19/timeseries.json",
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export default ApiCovid;
