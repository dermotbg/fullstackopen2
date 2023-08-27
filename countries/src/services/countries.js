import axios from "axios";

const baseurl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = () => axios.get(`${baseurl}/all`)

const getSng = (name) => axios.get(`${baseurl}/name/${name}`)


export default {getAll, getSng}