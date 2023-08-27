import axios from 'axios'

const baseurl = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WK}`

const getWeather = (capital) => axios.get(`${baseurl}&q=${capital}&aqi=no`)

export default {getWeather}