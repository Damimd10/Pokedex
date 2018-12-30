import axios from 'axios';

const getSpecies = url => axios.get(url).then(response => response.data);

export default getSpecies;
