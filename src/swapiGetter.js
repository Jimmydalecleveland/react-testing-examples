import axios from 'axios'

// Get a star wars person by id and return their name
const swapiGetter = (id) => axios
    .get(`https://swapi.dev/api/people/${id}/`)
    .then(res => res.data.name)

export default swapiGetter