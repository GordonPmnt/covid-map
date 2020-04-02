import axios from 'axios';

const apiCovid = {
    url: "https://pomber.github.io/covid19/timeseries",
    dataType: ".json",

    get() {
        return (
            axios({
                "method": "GET",
                "url": `${this.url}${this.dataType}`,
            })
            .then(response => {
                response.id = 1;
                return response
            })
            .catch((error) => {
                console.log(error.response)
            })
        )
    }
}

export default apiCovid;