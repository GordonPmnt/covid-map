import axios from 'axios';

const apiCovid = {
    url: "https://pomber.github.io/covid19/timeseries",
    dataType: ".json",

    get() {
        axios({
            "method": "GET",
            "url": `${this.url}${this.dataType}`,
        })
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export default apiCovid;
