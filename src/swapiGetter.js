import axios from 'axios'

const swapiGetter = () => axios
    .get("https://swapi.dev/api/people/1/")
    .then(res => res.data)

export default swapiGetter